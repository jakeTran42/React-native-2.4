import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ViewTrip extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.trip.title}</Text>
        <Text>{this.props.trip.location}</Text>
        <Text>{this.props.trip.memo}</Text>
        <Text>{this.props.trip.date}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
