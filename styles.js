import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },
  centerContent: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  text: {
    fontSize: 20,
    color: 'white',
    marginBottom: 5,
  },
  heading: {
    marginBottom: 60,
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 20,
  },
  bookInfo: {
    marginBottom: 50,
  },
  addButton: {
    backgroundColor: '#800000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    marginLeft: 130,
  },
  addButtonText: {
    fontSize: 18,
    color: 'white',
  },
  ImageAddbook: {
    marginTop: 10,
    marginLeft: 115,
    width: 150, 
    height: 150,
    alignSelf: 'center'
},
ImageHistory: {
  marginTop: 10,
  marginLeft: 110,
  width: 150, 
  height: 150,
  alignSelf: 'center'
},
});

export default styles;