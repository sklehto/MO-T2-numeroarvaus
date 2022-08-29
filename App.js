import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const randomNumber = Math.floor(Math.random() * 100) + 1; // arvottu satunnaisluku

export default function App() {

  const [message, setMessage] = useState('Guess a number between 1-100:');
  const [guess, setGuess] = useState(''); // käyttäjän arvaus
  const [count, setCount] = useState(null); // laskuri arvauskertojen määrälle

  const buttonPressed = () => {

    if (guess < randomNumber) {
      setCount(count + 1);
      setMessage("Your guess " + guess + " is too low.");
    } else if (guess > randomNumber) {
      setCount(count + 1);
      setMessage("You guess " + guess + " is too high.");
    } else {
      Alert.alert("You guessed the number in " + count + " guesses.");
    }
  };

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={guess => setGuess(guess)}
        value={guess}
      />
      <View style={styles.button}>
        <Button title='Make guess' onPress={buttonPressed} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-around',
    marginTop: 20,
  }
});
