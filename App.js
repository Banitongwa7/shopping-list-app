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
    setMyProducts([...myProducts, product]);
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

      <FlatList
          data={myProducts}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={item => item}
        />
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
});
