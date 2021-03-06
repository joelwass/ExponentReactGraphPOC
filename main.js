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

import CircleWordCountGraph from './HomePageGraphs/CircleProgressGraph/CircleWordCountGraph';
import HomePageChart from './HomePageGraphs/HomeViewHistogram/HomePageChart';
import TopBar from './HomePageTopBar/TopBar';
import { Font } from 'exponent';


class FirstExperience extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      childName: "Ryan",
      assetsLoaded: false,
    };
  }

  async componentWillMount() {
    // Load mandatory assets
    await Font.loadAsync({
      awesome: 'https://github.com/FortAwesome/Font-Awesome/raw/master/fonts/fontawesome-webfont.ttf',
    });
    this.setState({assetsLoaded: true});
  }

  render() {

    if (!this.state.assetsLoaded) {
        return (
          <View/>
        );
    }

    return (
      <View style={styles.container}>
        <TopBar childName={this.state.childName} style={styles.topBar}/>
        <CircleWordCountGraph style={styles.topHalf}/>
        <View style={styles.lookingContainer}>
          <Text style={styles.wordsLabel}>Looking</Text>
          <Text style={styles.lastSynced}>Last Syncd Today at 2:40 PM</Text>
        </View>
        <HomePageChart style={styles.bottomHalf}/>
        <View style={styles.padding}/>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bottomHalf: {
    flex: 1,
  },
  topBar: {
    flex: 0.3,
  },
  padding: {
    height: 44,
  },
  topHalf: {
    flex: .75,
  },
  lastSynced: {
    color: '#ffa500',
    fontSize: 12,
    alignSelf: 'center',
  },
  wordsLabel: {
    alignSelf: 'center',
    fontSize: 12,
  },
  lookingContainer: {
    flex: 0.1,
    paddingBottom: 14,
    backgroundColor: 'azure',
  },
});

AppRegistry.registerComponent('main', () => FirstExperience);
