import React from 'react'
import Constants from 'expo'

const KEY = Expo.Constants.manifest.extra.mysecret

const fetchWeather = (lat, lon) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London,uk&lat=${lat}&lon=${lon}&APPID=${KEY}&units=imperial`
  )
  .then(res => res.json()
  .then(data => {
    
  }))
}