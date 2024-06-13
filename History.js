import React from 'react';
import { View, FlatList, Image } from 'react-native';
import styles from './styles';
import { Text } from 'react-native';

//Define the HistoryScreen component//
function HistoryScreen({ books, handleAddBook }) {
  //Render a FlatList of books//
  return (
    <View style={styles.container}>
      <FlatList
        data={books} //List of books to display//
        keyExtractor={(item, index) => index.toString()} //Unique key for each item//
        renderItem={({ item }) => (
          //Render each book item//
          <View>
            <Text style={styles.text}>Title: {item.title}</Text>
            <Text style={styles.text}>Author: {item.author}</Text>
            <Text style={styles.text}>Genre: {item.genre}</Text>
            <Text style={styles.text}>Number of Pages: {item.numPages}</Text>
          </View>
        )}
      />
      <View>
          <Image style={styles.ImageHistory} source={require('./Images/Dontwannagooutside.png')} />
      </View>
    </View>

  );
}

export default HistoryScreen;