import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export default function GameDashboardScreen({ route }) {
  const { game } = route.params;
  const scale = useSharedValue(0.5);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(scale.value, { duration: 500 }) }],
  }));

  React.useEffect(() => {
    scale.value = 1;
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.dashboardContainer, animatedStyle]}>
        <Text style={styles.title}>{game.title}</Text>
        <Text>{game.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  dashboardContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
