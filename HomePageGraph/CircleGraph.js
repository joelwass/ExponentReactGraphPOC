'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const DAYS_OF_WEEK = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export default class CircleGraph extends React.Component {

  // must use the constructor with super(props) if you're looking to use this.props at all or state
  constructor(props) {
    super(props);
    this.state = {
      wordCount: 0,
      dayLabel: "Today",
    };

    // binds the function to this, so we can reference this.props
    this._getDayLabel.bind(this);
  }

  // get the day label based on the day offset and the current day
  _getDayLabel() {
    if (this.props.dayOffset == 0) {
      return "Today";
    } else if (this.props.dayOffset == -1) {
      return "Yesterday";
    } else {
      const dayOfWeek = new Date().getDay();
      let dayInt = dayOfWeek + this.props.dayOffset;
      if (dayInt < 0) {
        dayInt = 7 + dayInt;
      }
      return DAYS_OF_WEEK[dayInt];
    }
  }

  // as seen, this is how you call a local component method that is binded to this object
  render() {
    return (
      <View style={styles.circleGraphCenter}>
        <Text style={styles.wordsLabel}>{this._getDayLabel()}</Text>
        <View style={styles.circleGraph}>
          <View style={styles.innerCircleContent}>
            <Text style={styles.wordCount}>{this.props.wordCount}</Text>
            <Text style={styles.wordsLabel}>Words</Text>
            <Text style={styles.wordGoal}>10000 goal</Text>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  circleGraphCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
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
