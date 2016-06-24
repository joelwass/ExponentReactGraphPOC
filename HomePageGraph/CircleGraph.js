'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import WordCountInnerCircle from './WordCountInnerCircle';

export default class CircleGraph extends React.Component {

  render() {
    return (
      <View style={styles.circleGraphCenter}>
        <View style={styles.circleGraph}>
          <WordCountInnerCircle />
        </View>
        <Text style={styles.wordCount}>4610</Text>
        <Text style={styles.wordsLabel}>Words</Text>
        <Text style={styles.wordGoal}>10000 goal</Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    width: 0,
    height: 0,
    borderTopWidth: 80,
    borderTopColor: 'red',
    borderLeftColor: 'red',
    borderLeftWidth: 80,
    borderRightColor: 'transparent',
    borderRightWidth: 80,
    borderBottomColor: 'red',
    borderBottomWidth: 80,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
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
