'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

export default class GraphPadding extends React.Component {

  render() {
    return (
      <View style={styles.padding} />
    )
  }
}

let styles = StyleSheet.create({
  padding: {
    width: 20,
  },
})