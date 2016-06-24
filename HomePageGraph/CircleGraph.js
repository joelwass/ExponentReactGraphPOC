'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class CircleGraph extends React.Component {

  render() {
    return (
      <View style={styles.circleGraphCenter}>
        <Text style={styles.wordsLabel}>Today</Text>
        <View style={styles.circleGraph}>
        <View style={styles.innerCircleContent}>
          <Text style={styles.wordCount}>4610</Text>
          <Text style={styles.wordsLabel}>Words</Text>
          <Text style={styles.wordGoal}>10000 goal</Text>
          </View>
        </View>
        <Text style={styles.wordsLabel}>Looking</Text>
        <Text style={styles.lastSynced}>Last Sync'd Today at 2:40 PM</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  circleGraphCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    width: 180,
  },
  circleGraph: {
    marginTop: 15,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15,
    width: 120,
    height: 120,
    borderWidth: 15,
    borderColor: 'lightgrey',
    borderTopColor: 'red',
    borderRadius: 60,
    transform: [
      { rotate: '45deg' },
    ],
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
  wordCount: {
    color: '#ffa500',
    fontSize: 16,
    alignSelf: 'center',
  },
  wordGoal: {
    fontSize: 12,
    alignSelf: 'center',
  },
  innerCircleContent: {
    transform: [
      { rotate: '-45deg' },
    ],
  },
});
