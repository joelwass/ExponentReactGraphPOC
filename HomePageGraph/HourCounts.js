'use strict';

import React from 'react';
import {
  View,
  Text,
  PropTypes,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class HourCounts extends React.Component {
  constructor(props) {
    super(props);
    this.setMarginLeft = this.setMarginLeft.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }
  
  setMarginLeft () {
      return { marginLeft: 10 * this.props.barInterval};
  };

  setHeight () {
    return { height: this.props.barHeight, marginTop: 100-this.props.barHeight};
  };

  render () {
    return (
      <View>
        <View style={[style.hourCountBar,this.setMarginLeft(), this.setHeight()]} />
      </View>
    );

  }
}

let style = StyleSheet.create({
  hourCountBar: {
    width: 10,
    backgroundColor: 'green',
  },
});

