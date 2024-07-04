import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

const LOCATION_TASK_NAME = 'background-location-task';

const GameDashboardScreen = ({ route }) => {
  const { game } = route.params; // Assuming you pass game details via navigation

  const [steps, setSteps] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  let subscription = null;

  const startTracking = async () => {
    setIsTracking(true);
    subscription = Accelerometer.addListener(accelerometerData => {
      // Calculate steps using accelerometer data (simplified example)
      const newSteps = Math.sqrt(
        accelerometerData.x ** 2 +
        accelerometerData.y ** 2 +
        accelerometerData.z ** 2
      );
      setSteps(steps => steps + newSteps);
    });
  };

  const stopTracking = () => {
    setIsTracking(false);
    if (subscription) {
      subscription.remove();
      subscription = null;
    }
  };

  useEffect(() => {
    return () => {
      if (subscription) {
        subscription.remove();
        subscription = null;
      }
    };
  }, []);

  useEffect(() => {
    const backgroundTask = async () => {
      // Example background task logic
      console.log('Background task is running');
      // Implement your background task logic here
      const interval = setInterval(() => {
        // Simulated background task execution
        console.log('Background task interval');
      }, 900000); // Every 15 minutes (900000 milliseconds)

      return () => clearInterval(interval); // Cleanup interval
    };

    backgroundTask();

    return () => {
      // Clean up background task if needed
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.title}</Text>
      <Text>{game.description}</Text>
      <View style={styles.pedometerContainer}>
        <Text style={styles.stepsText}>Steps: {steps.toFixed(0)}</Text>
        <Button
          title={isTracking ? 'Stop Tracking' : 'Start Tracking'}
          onPress={isTracking ? stopTracking : startTracking}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pedometerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  stepsText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default GameDashboardScreen;
