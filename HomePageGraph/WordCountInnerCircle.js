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
      <View style={styles.background}/>
    )
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
});