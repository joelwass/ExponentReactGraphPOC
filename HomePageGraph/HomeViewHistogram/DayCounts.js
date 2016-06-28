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
      //time third could be 0, 1, or 2. based on which third of time we're looking at
      timeThird: this.props.timeThird,
    };
    this._getRandomBarHeight.bind(this);
    this._getTimeLabels.bind(this);
  }

  // get the top time labels for the current scroll view histogram
  _getTimeLabels() {
    switch (this.state.timeThird) {
      case 0:
        return ["7pm", "9pm", "11pm", "1am", "3am", "5am"];
      case 1:
        return ["7am", "9am", "11am", "1pm", "3pm", "5pm"];
      case 2:
        return ["7pm", "9pm", "11pm", "1am", "3am", "5am"];
      default:
        console.log("should never get here line dayCounts timeThird switch");
    }
  }

// create random number between 0 and 100 or whatever our max value is or should be
  _getRandomBarHeight() {
    return Math.random() * ((this.state.graphHeight*2/3) - 0) + 0;
  }

  render() {
    return (
      <View style={styles.dayCountContainer}>
        <View style={styles.bars}>
          <View style={styles.timeLabels}>
            <Text style={styles.times}>{this._getTimeLabels()[0]}</Text>
            <Text style={styles.times}>{this._getTimeLabels()[1]}</Text>
            <Text style={styles.times}>{this._getTimeLabels()[2]}</Text>
            <Text style={styles.times}>{this._getTimeLabels()[3]}</Text>
            <Text style={styles.times}>{this._getTimeLabels()[4]}</Text>
            <Text style={styles.times}>{this._getTimeLabels()[5]}</Text>
          </View>
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
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
          <HourCount barInterval={1} barHeight={this._getRandomBarHeight()}/>
          <View style={styles.notchesAndWordLabels}>
            <Text style={[styles.oneKWordText, styles.smallFontSize]}>1000 words</Text>
            <View style={styles.oneKWordNotch}/>
            <Text style={[styles.fiveHundredWordText, styles.smallFontSize]}>500 words</Text>
            <View style={styles.fiveHundredWordNotch}/>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  notchesAndWordLabels: {
    position: 'absolute',
    marginLeft: 20,
  },
  timeLabels: {
    position: 'absolute',
    flexDirection: 'row',
    width: 400,
  },
  smallFontSize: {
    fontSize: 10,
  },
  times: {
    fontSize: 12,
    marginTop: 14,
    marginLeft:17,
    marginRight:17,
  },
  oneKWordText: {
    position: 'absolute',
    marginTop: 100,
    marginLeft: 30,
  },
  oneKWordNotch: {
    position: 'absolute',
    backgroundColor: 'black',
    width: 358,
    height: 2,
    marginTop: 90,
    marginLeft: 30,
  },
  fiveHundredWordText: {

  },
  fiveHundredWordNotch: {

  },
  bars: {

  },
  dayCountContainer: {
    width: 400,
  },
  bars: {
    flexDirection: 'row',
    width: 380,
    marginLeft: 20,
  },
});
