import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import TripList from './components/ViewTrip'

export default class App extends React.Component {

  state = { 
    count: 0 
  };

  render() {

    const data = [
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"},
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"},
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"},
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"},
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"},
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"},
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"},
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"},
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"},
      {title: "hello", location: "alameda", memo: "this palce is aight", date: "01/20/1996"}
    ]

    return (
      <ScrollView style={styles.container}>
        <Text>I love loli hentai!</Text>
        <Text>I love loli hentai! x {this.state.count} times</Text>
        <Button title="Loli Press" onPress={() => this.setState({count: this.state.count+999})} />
        {data.map((trip) => {return(<TripList trip={trip} />)})}
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});