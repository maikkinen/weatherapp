import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('Hello World! Hello everyone!')
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Button" onPress={ () => setText('Hello Mars!') }/>
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
});
