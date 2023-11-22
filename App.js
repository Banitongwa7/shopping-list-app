import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [product, setProduct] = useState('');
  const [myProducts, setMyProducts] = useState([]);

  const handleChangeText = (text) => {
    setProduct(text);
  };

  const handleSubmit = () => {
    setMyProducts( currentMyProducts => [...currentMyProducts, product] );
    setProduct('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Entrez un produit"
        value={product}
        onChangeText={handleChangeText}
      />
      <Button
        title="Valider"
        onPress={handleSubmit}
      />
      </View>

      <View style={styles.items}>
        <FlatList
          data={myProducts}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 40,
   paddingTop: 60,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    paddingLeft: 9,
    flexGrow: 1,
  },
  items: {
    marginTop: 20,
  },
  item:{
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    padding: 20,
    fontSize: 18,
    backgroundColor: '#363062',
    color: 'white',
    textAlign: 'center',
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 5
  }
});
