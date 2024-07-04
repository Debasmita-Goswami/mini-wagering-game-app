import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Import your images
const mountainImage = require('../assets/mountain.jpg');
const burncalImage = require('../assets/burn-cal.jpg');
const forestImage = require('../assets/forest.jpg');
const cityImage = require('../assets/city.jpg');
const beachImage = require('../assets/beach.jpg');
const marathonImage = require('../assets/marathon.jpg');

// Game data with detailed descriptions and images
const games = [
  { id: '1', title: 'Mountain Walk', description: 'Walk up a mountain to reach the summit. Enjoy breathtaking views along the way.', image: mountainImage },
  { id: '2', title: 'Calorie Burn Challenge', description: 'Burn 100 calories within 1 hour by jogging or cycling. Track your progress and challenge your friends!', image: burncalImage },
  { id: '3', title: 'Forest Adventure', description: 'Explore a dense forest, find hidden treasures, and solve puzzles to uncover ancient artifacts.', image: forestImage },
  { id: '4', title: 'City Explorer', description: 'Discover the hidden gems of your city with guided tours. Visit historic landmarks and experience local culture.', image: cityImage },
  { id: '5', title: 'Beach Cleanup Drive', description: 'Join a community effort to clean up the beach. Collect trash, protect marine life, and earn rewards!', image: beachImage },
  { id: '6', title: 'Virtual Marathon', description: 'Participate in a virtual marathon. Run or walk a specified distance within a timeframe to support a cause.', image: marathonImage },
];

const GameFeedScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 2;

  // Function to get games for the current page
  const getCurrentGames = () => {
    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    return games.slice(startIndex, endIndex);
  };

  // Function to load more games (next page)
  const loadMoreGames = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderCard = (item) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('GameDetail', { game: item })}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Button title="Join" onPress={() => navigation.navigate('GameDetail', { game: item })} />
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      {renderCard(item)}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={getCurrentGames()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
        numColumns={2} // Display 2 columns
      />
      {games.length > currentPage * gamesPerPage && (
        <View style={styles.loadMoreContainer}>
          <Button title="Load More" onPress={loadMoreGames} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    flex: 1,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 10,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  loadMoreContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default GameFeedScreen;
