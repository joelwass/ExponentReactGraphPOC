'use strict';

import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

export default class Pacman extends React.Component {

  render() {
    return (
      <View style={styles.pacmanCenter}>
        <View style={styles.pacman}/>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  pacmanCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    width: 125,
  },
  pacman: {
    marginTop: 15,
    marginBottom: 15,
    width: 0,
    height: 0,
    borderTopWidth: 60,
    borderTopColor: 'red',
    borderLeftColor: 'red',
    borderLeftWidth: 60,
    borderRightColor: 'transparent',
    borderRightWidth: 60,
    borderBottomColor: 'red',
    borderBottomWidth: 60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
});
