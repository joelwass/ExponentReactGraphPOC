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

  constructor(props, context) {
    super(props, context);
    this.state = {
      graphHeight: this.props.graphHeight,
    };
    this._getRandomBarHeight.bind(this);
  }

// create random number between 0 and 100 or whatever our max value is or should be
  _getRandomBarHeight() {
    return Math.random() * ((this.state.graphHeight*2/3) - 0) + 0;
  }

  render() {
    return (
      <View style={styles.dayCountContainer}>
        <View style={styles.graphLabels}>

        </View>
        <View style={styles.wordCountsAndTimeLabel}>
          <View style={styles.timeLabels}>

          </View>
          <View style={styles.bars}>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
            <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  dayCountContainer: {
    flexDirection: 'row',
    width: 400,
    alignSelf: 'center',
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
  },
  bars: {
    flexDirection: 'row',
    width: 360,
    marginLeft: 20,
    marginRight:20,
  }
});
