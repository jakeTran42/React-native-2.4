import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ weather, temperature }) => {
  return (
    <View style={ [styles.weatherContainer, { backgroundColor: weatherConditions[weather].color }] }>
      <View style={ styles.headerContainer }>
        <MaterialCommunityIcons size={ 72 } name={ weatherConditions[weather].icon } color={ '#fff' } />
        <Text style={styles.tempText}>{ temperature }˚</Text>
      </View>
      <Text style={ styles.title }>{ weatherConditions[weather].title }</Text>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
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
    fontSize: 72,
    color: '#fff'
  },
  title: {
    flex: 1,
    fontSize: 60,
    color: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});


export default Weather;