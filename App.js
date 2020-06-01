import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import * as Expo from 'expo'
import Constants from 'expo'
import Weather from './components/Weather'

const KEY = "your5654656key34534534here"

const App = () => {
  const [state, setState] = useState({
    temperature: 0,
    weatherCondition: '',
    isLoading: false,
    error: '',
    location: null,
    humidity: null,
    description: ''
  })

  const lat = 51.51
  const lon = -0.12

  fetchWeather(lat, lon, setState)

  //<Button title='Check weather' onPress={() => fetchWeather(lat, lon, setState)}/>

  return (
    <View style={styles.container}>
      {state.isLoading ? ( 
        <Text>Fetching Weather Data</Text>
      ) : ( 
        <View>
          <Weather
            weather={state.weatherCondition}
            temperature={state.temperature}
            location={state.location}
            humidity={state.humidity}
            description={state.description}
          />
        </View>
      )
      }
    </View>
  );
}

const fetchWeather = (lat, lon, setState) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London,uk&lat=${lat}&lon=${lon}&APPID=${KEY}&units=imperial`
  )
  .then(res => res.json()
  .then(data => {   
    setState({
      temperature: data.main.temp,
      weatherCondition: data.weather[0].main,
      isLoading: false,
      location: data.name,
      humidity: data.main.humidity,
      description: data.weather[0].description
    }
    )
  }))
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
