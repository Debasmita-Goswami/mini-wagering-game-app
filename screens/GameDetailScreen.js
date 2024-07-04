import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

export default function GameDetailScreen({ route, navigation }) {
  const { game } = route.params;
  const translateY = useSharedValue(300);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: withTiming(translateY.value, { duration: 500 }) }],
  }));

  React.useEffect(() => {
    translateY.value = 0;
  }, []);

  const handleJoin = () => {
    navigation.navigate('GameDashboard', { game });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.detailContainer, animatedStyle]}>
        <Text style={styles.title}>{game.title}</Text>
        <Text>{game.description}</Text>
        <Button title="Join" onPress={handleJoin} />
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
  detailContainer: {
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
