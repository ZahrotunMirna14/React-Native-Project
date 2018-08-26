/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          HAI HAI!
        </Text>
        <Text style={styles.instructions}>
          Nama : Zahrotun Mirna Nisa
        </Text>
        <Text style={styles.instructions}>
          Kelas : XI RPL 4
        </Text>
        <Text style={styles.instructions}>
          No Absen : 37
        </Text>

      </View>
    )
  }







}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#32fcc7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#04048e',
  },
  instructions: {
    textAlign: 'center',
    color: '#04048e',
    marginBottom: 5,
  },
});
