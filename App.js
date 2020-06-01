import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Constants from 'expo'

const KEY = Expo.Constants.manifest.extra.mysecret

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState('Hello Earth!')

  return (
    <View style={styles.container}>
      {isLoading ? ( 
        <Text>Fetching Weather Data</Text>
      ) : ( 
        <View>
          <Text>Superb Weather App</Text>
        </View>
      )
      }
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

export default App
