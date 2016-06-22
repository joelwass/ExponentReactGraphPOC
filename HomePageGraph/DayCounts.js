'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import HourCount from './HourCounts'

export default class DayCounts extends React.Component {

  render() {
    return (
      <View style={style.dayCountContainer}>
        <HourCount />
        <HourCount />
        <HourCount />
      </View>
    )
  }
}

let style = StyleSheet.create({
  dayCountContainer: {
    width:320,
    alignItems: 'center',
    alignSelf: 'center',
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
  },
})