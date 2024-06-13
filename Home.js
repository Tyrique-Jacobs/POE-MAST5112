import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

//Define the Home component//
function Home({ books, lastBook }) {
  //Calculate the total number of pages read//
  const totalNumPages = books.reduce((total, book) => total + parseInt(book.numPages), 0);

  //Calculate the average number of pages read//
  const averageNumPages = books.length > 0 ? totalNumPages / books.length : 0;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.heading]}>Home Screen</Text>
      <Text style={styles.text}>Books Read: {books.length}</Text>
      {lastBook && (
        <View style={styles.bookInfo}>
          <Text style={[styles.text, styles.info]}>Last Book Read:</Text>
          <Text style={styles.text}>Title: {lastBook.title}</Text>
          <Text style={styles.text}>Author: {lastBook.author}</Text>
          <Text style={styles.text}>Genre: {lastBook.genre}</Text>
          <Text style={styles.text}>Number of Pages: {lastBook.numPages}</Text>
        </View>
      )}
      <Text style={styles.text}>Total Number of Pages Read: {totalNumPages}</Text>
      <Text style={styles.text}>Average Number of Pages: {averageNumPages}</Text>
    </View>
  );
}

export default Home;