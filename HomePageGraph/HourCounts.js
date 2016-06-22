'use strict';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default class HourCounts extends React.Component {

  render () {
    return (
      <View style={style.hourCountBar} />
    )
  }
}

let style = StyleSheet.create({
  hourCountBar: {
    width:10,
    height:40,
  },
});