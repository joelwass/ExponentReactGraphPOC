'use strict';

import React from 'react';
import {
  View,
  TextView,
  Text,
  StyleSheet,
} from 'react-native';

export default class WordCountInnerCircle extends React.Component {

  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.wordCount}>4610</Text>
        <Text style={styles.wordsLabel}>Words</Text>
        <Text style={styles.wordGoal}>10000 goal</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  background: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  wordCount: {
    color: '#ffa500',
    fontSize: 16,
    alignSelf: 'center',
  },
  wordsLabel: {
    alignSelf: 'center',
    fontSize: 14,
  },
  wordGoal: {
    fontSize: 12,
    alignSelf: 'center',
  },
});
