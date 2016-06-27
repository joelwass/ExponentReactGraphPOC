'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import HourCount from './HourCounts';

const HOUR_SPACING = [
  { key: 1, value: 10 },
];

export default class DayCounts extends React.Component {

  render() {
    return (
      <View style={styles.dayCountContainer}>
        <HourCount barInterval={1} barHeight={20}/>
        <HourCount barInterval={1} barHeight={80}/>
        <HourCount barInterval={1} barHeight={50}/>
        <HourCount barInterval={1} barHeight={40}/>
        <HourCount barInterval={1} barHeight={70}/>
        <HourCount barInterval={1} barHeight={55}/>
        <HourCount barInterval={1} barHeight={90}/>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  dayCountContainer: {
    flexDirection: 'row',
    width: 320,
    alignSelf: 'center',
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
  },
});
