import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native';

// Import your images
const mountainImage = require('../assets/mountain.jpg');
const burncal = require('../assets/burn-cal.jpg');

const games = [
  { id: '1', title: 'Mountain Walk', description: 'Walk up a mountain', image: mountainImage },
  { id: '2', title: 'Calorie Burn', description: 'Burn 100 calories in 1 hour', image: burncal },
];

export default function GameFeedScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Button title="Join" onPress={() => navigation.navigate('GameDetail', { game: item })} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    resizeMode: 'cover', // Optional: Adjust the image resize mode as per your requirement
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
