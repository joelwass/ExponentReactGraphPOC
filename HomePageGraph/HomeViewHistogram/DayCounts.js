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
      //time third could be 0, 1, or 2. based on which third of time we're looking at (7pm to 5am.. etc)
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
        <View style={styles.timeLabels}>
          <Text style={styles.times}>{this._getTimeLabels()[0]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[1]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[2]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[3]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[4]}</Text>
          <Text style={styles.times}>{this._getTimeLabels()[5]}</Text>
        </View>
        <View style={styles.notchesAndWordLabels}>
          <View style={styles.wordCountNotch}/>
          <Text style={[styles.wordCountText, styles.smallFontSize]}>1000 words</Text>
          <View style={styles.wordCountNotch}/>
          <Text style={[styles.wordCountText, styles.smallFontSize]}>500 words</Text>
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
  wordCountNotch: {
    backgroundColor: 'black',
    width: 358,
    height: 1,
    marginTop: 100,
  },
  wordCountText: {
    marginTop: 2,
  },
  dayCountContainer: {
    width: 380,
    flexDirection: 'row',
    marginLeft: 20,
  },
  bars: {
    flexDirection: 'row',
    marginLeft: 10,
  },
});
