import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import AddBook from './Addbook';
import HistoryScreen from './History';
import GenreScreen from './Genre';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
//Create a bottom tab navigator//
const App = () => {
  const [books, setBooks] = useState([]);
  const [lastBook, setLastBook] = useState(null);
  const [genreCounts, setGenreCounts] = useState({});

  const addBook = (title, author, genre, numPages) => {
    const newBook = { title, author, genre, numPages };
    setBooks((prevBooks) => {
      const newBooks = [...prevBooks];
      if (newBooks.length > 2) {
        newBooks.shift(); //Remove the third book//
      }
      newBooks.push(newBook); //Add the new book//
      return newBooks;
    });
    setLastBook(newBook);
    setGenreCounts((prevCounts) => ({
      ...prevCounts,
      [genre]: (prevCounts[genre] || 0) + 1,
    }));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#800000',
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              marginBottom: 5,
            },
            tabBarIcon: ({ color, size }) => (
              <Icon name="book" color={"#800000"} size={20} />
            ),
          }}
        >
          {() => <Home books={books} lastBook={lastBook} />}
        </Tab.Screen>

        <Tab.Screen
          name="Add Book"
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              marginBottom: 5,
            },
            tabBarIcon: ({ color, size }) => (
              <Icon name="pluscircle" color={"#800000"} size={20} />
            ),
          }}
        >
          {() => <AddBook addBook={addBook} />}
        </Tab.Screen>

        <Tab.Screen
          name="History"
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              marginBottom: 5,
            },
            tabBarIcon: ({ color, size }) => (
              <Icon name="hdd" color={"#800000"} size={20} />
            ),
          }}
        >
          {(props) => <HistoryScreen {...props} books={books} />}
        </Tab.Screen>

        <Tab.Screen
          name="Genre"
          options={{
            tabBarLabelStyle: {
              fontSize: 15,
              marginBottom: 5,
            },
            tabBarIcon: ({ color, size }) => (
              <Icon name="tagso" color={"#800000"} size={20} />
            ),
          }}
        >
          {(props) => <GenreScreen {...props} genreCounts={genreCounts} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;