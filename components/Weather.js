import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Weather = ({ weather, temperature, location, humidity, description }) => {
  const tempC = Math.round((temperature - 32) / 1.8)

  return (
    <View style={styles.weatherContainer}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name='weather-sunny' color='#000000'/>
        <Text style={styles.tempText}>{tempC}°C</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weather}</Text>
        <Text style={styles.paragraph}>in {location}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 65,
    color: '#000000'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 100
  },
  title: {
    fontSize: 60,
    color: '#000000'
  },
  paragraph: {
    fontSize: 16,
    color: '#000000'
  },
  subtitle: {
    fontSize: 24,
    color: '#000000',
  },
  time: {
    fontSize: 38,
    color: '#000000'
  }
})

export default Weather