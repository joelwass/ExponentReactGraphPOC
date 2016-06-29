'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Dimensions from 'Dimensions';

export default class GraphPadding extends React.Component {

  constructor(props) {
    super(props);
    console.log(Dimensions.get('window').width);
  }

  render() {
    return (
      <View style={styles.padding} />
    )
  }
}

// calculation for width is as follows: width of entire screen - (180 for circle view width) - (60 for 30 margin on each side of circle views) - (20 for 10 margin on each side of entire scroll view that i guess is inherint in scroll views?) and then divide by 2 for each side. so width-270 / 2
let styles = StyleSheet.create({
  padding: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    width: (Dimensions.get('window').width-(270))/2,
  },
})
