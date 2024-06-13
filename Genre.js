import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const genres = ['Action', 'Adventure', 'Fantasy', 'Fiction', 'Horror', 'Isekai', 'Mystery', 'Non-Fiction', 'Romance', 'Science Fiction', 'Thriller'];

const Genre = ({ genreCounts }) => {
  const logNumbers = () => {
    //For loop that logs numbers from 0 to 4//
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
  };

  const logWhile = () => {
    //While loop that logs numbers from 0 to 4//
    let i = 0;
    while (i < 5) {
      console.log(i);
      i++;
    }
  };

  const logFor = () => {
    //For in loop that logs each genre in the genres array//
    for (let key in genres) {
      console.log(key);
    }
  };

  return (
    <View style={[styles.container, styles.centerContent]}>
      {genres.map((genre, index) => (
        <Text style={styles.text} key={index}>
          {genre}: {genreCounts[genre] || 0}
        </Text>
      ))}
      <View>
        {logNumbers()}
      </View>
      <View>
        {logWhile()}
      </View>
      <View>
        {logFor()}
      </View>
    </View>
  );
};

export default Genre;