import React, { useState } from'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked);
  };

  return (
    <LinearGradient
      colors={['#1D181A', '#52302E', '#AF2707']}
      style={styles.container}
    >
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Hollywood_Undead_-_American_Tragedy.jpg/220px-Hollywood_Undead_-_American_Tragedy.jpg' }}
        style={styles.albumArt}
      />
      <Text style={styles.songName}>My Town</Text>
      <Text style={styles.artistName}>Hollywood Undead</Text>
      <TouchableOpacity onPress={handleLikePress} style={styles.likeButton}>
        <Ionicons
          name={liked? 'heart' : 'heart-outline'}
          size={30}
          color={liked? '#FF0000' : '#CCC'}
        />
      </TouchableOpacity>
      <View style={styles.controlsContainer}>
        <Ionicons name="play-back-sharp" size={40} color="black" />
        <Ionicons name="play-circle-outline" size={50} color="black" />
        <Ionicons name="play-forward-sharp" size={40} color="black" />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  albumArt: {
    width: 200,
    height: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  songName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  artistName: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  likeButton: {
    marginTop: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
    padding: 20,
    marginTop: 10,
    width:250,
  },
});