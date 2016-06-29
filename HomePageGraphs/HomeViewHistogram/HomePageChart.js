'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import DayCounts from './DayCounts';
import Dimensions from 'Dimensions';

const GRAPH_SPACING = 80;

export default class HomePageChart extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      graphHeight: 240,
    };
  }

  measure() {
    this.refs.container.measure((a, b, width, height) => {
      height
    });
  }

  render() {
    return (
      <View ref="container" style={[styles.container, styles.containerBackground]}>
        <View style={styles.notchesAndWordLabels}>
          <View style={styles.wordCountNotch}/>
          <Text style={[styles.wordCountText, styles.smallFontSize]}>1000 words</Text>
          <View style={styles.wordCountNotch}/>
          <Text style={[styles.wordCountText, styles.smallFontSize]}>500 words</Text>
        </View>
        <ScrollView
        horizontal={true}
        scrollsToTop={false}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets = {false}
        style={[styles.scrollViewBackground, this.props.style]}>
          <DayCounts graphHeight={this.state.graphHeight} timeThird={0}/>
          <DayCounts graphHeight={this.state.graphHeight} timeThird={1}/>
          <DayCounts graphHeight={this.state.graphHeight} timeThird={2}/>
        </ScrollView>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  notchesAndWordLabels: {
    flex: 1,
    flexDirection: 'column',
    position: 'absolute',
    marginLeft: 20,
  },
  wordCountNotch: {
    width: 358,
    height: 1,
    marginTop: Dimensions.get('window').height /8.5,
    backgroundColor: 'white',
  },
  wordCountText: {
    marginTop: 2,
    color: 'white',
  },
  container: {
    flex: 1,
    alignSelf: 'center',
    overflow: 'visible',
  },
  containerBackground: {
    backgroundColor: 'orange',
  },
  scrollViewBackground: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    alignSelf: 'center',
    overflow: 'visible',
  },
  graph: {
    overflow: 'visible',
  },
});
