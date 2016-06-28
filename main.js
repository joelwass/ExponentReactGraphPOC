/**
 * This is the entry point for your experience that you will run on Exponent.
 *
 * Start by looking at the render() method of the component called
 * FirstExperience. This is where the text and example components are.
 */
'use strict';

import React from 'react';
import {
  AppRegistry,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CircleWordCountGraph from './HomePageGraph/CircleProgressGraph/CircleWordCountGraph';
import HomePageChart from './HomePageGraph/HomeViewHistogram/HomePageChart';


class FirstExperience extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <CircleWordCountGraph />
        <Text style={styles.wordsLabel}>Looking</Text>
        <Text style={styles.lastSynced}>Last Syncd Today at 2:40 PM</Text>
        <HomePageChart />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  lastSynced: {
    color: '#ffa500',
    fontSize: 12,
    alignSelf: 'center',
  },
  wordsLabel: {
    alignSelf: 'center',
    fontSize: 12,
  },
});

AppRegistry.registerComponent('main', () => FirstExperience);
