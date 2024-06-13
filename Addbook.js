import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import styles from './styles';

const genres = ['Action', 'Adventure', 'Fantasy', 'Fiction', 'Horror', 'Isekai', 'Mystery', 'Non-Fiction', 'Romance', 'Science Fiction', 'Thriller'];
//Initializing the title, author, genre and numpages state//
const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [numPages, setNumPages] = useState('');

  const handleAddBook = () => {
    addBook(title, author, selectedGenre, numPages);
    setTitle('');
    setAuthor('');
    setSelectedGenre(null);
    setNumPages('');
  };

  const handleGenreChange = (option) => {
    console.log("Selected Genre:", option.label);
    setSelectedGenre(option.label);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        onChangeText={text => setTitle(text)}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Author"
        onChangeText={text => setAuthor(text)}
        value={author}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Pages"
        onChangeText={text => setNumPages(text)}
        value={numPages}
        keyboardType="numeric"
      />
      <ModalSelector
        style={styles.input}
        data={genres.map(genre => ({ key: genre, label: genre }))}
        initValue="Select Genre"
        onChange={handleGenreChange}
        //This ModalSelector allows the user to select a genre from a list of options//
      />
      {selectedGenre && (
        <Text style={styles.text}>Selected Genre: {selectedGenre}</Text>
      )}
      <TouchableOpacity style={styles.addButton} onPress={handleAddBook}>
        <Text style={styles.addButtonText}>Add Book</Text>
      </TouchableOpacity>
      <View>
        <View>
          <Image style={styles.ImageAddbook} source={require('./Images/Findmeatthelibrary.png')} />
        </View>
      </View>
    </View>
  );
};

export default AddBook;