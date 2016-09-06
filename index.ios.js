/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import JokeController  from './RNJokeController/JokeController.js'
class RNJoke extends Component {
  render() {
    return (
        <JokeController></JokeController>
    );
  }
}


AppRegistry.registerComponent('RNJoke', () => RNJoke);
AppRegistry.registerComponent('JokeController', () => JokeController);
