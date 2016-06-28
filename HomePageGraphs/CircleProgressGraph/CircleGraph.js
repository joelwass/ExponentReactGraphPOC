'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const DAYS_OF_WEEK = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MAX_POINTS = 10000;

export default class CircleGraph extends React.Component {

  // must use the constructor with super(props) if you're looking to use this.props at all or state
  constructor(props) {
    super(props);
    this.state = {
      wordCount: this.props.wordCount,
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
      this.state.dayLabel = DAYS_OF_WEEK[dayInt];
      return DAYS_OF_WEEK[dayInt];
    }
  }

  // as seen, this is how you call a local component method that is binded to this object
  render() {
    const fillAmount = this.state.wordCount / MAX_POINTS * 100;

    // children fill function is required through the react-native-circular-progress that we are using, i can implement this circular graph animation on our own but it might not be necessary too.
    return (
      <View style={styles.circleGraphCenter}>
        <Text style={[styles.centerFontSize, styles.dayLabel]}>{this._getDayLabel()}</Text>
        <AnimatedCircularProgress
          size={150}
          width={18}
          fill={fillAmount}
          tintColor="#ffa500"
          backgroundColor="#d3d3d3">
          {
            (fill) => (
              <View style={styles.innerCircleContent}>
                <Text style={styles.wordCount}>{this.props.wordCount}</Text>
                <Text style={styles.centerFontSize}>Words</Text>
                <Text style={styles.wordGoal}>10000 goal</Text>
              </View>
            )
          }
        </AnimatedCircularProgress>
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
  dayLabel: {
    marginBottom: 10,
  },
  centerFontSize: {
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
    top:50,
    left: 44,
    position: 'absolute',
  },
});
