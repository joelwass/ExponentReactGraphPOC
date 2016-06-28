'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import DayCounts from './DayCounts';

const GRAPH_SPACING = 80;

export default class HomePageChart extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      height: 300,
    };
  }

  render() {
    return (
      <View style={[styles.container, styles.containerBackground]}>
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
        style={[styles.container, styles.scrollViewBackground, this.props.style]}>
          <DayCounts graphHeight={this.state.height} timeThird={0}/>
          <DayCounts graphHeight={this.state.height} timeThird={1}/>
          <DayCounts graphHeight={this.state.height} timeThird={2}/>
        </ScrollView>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  notchesAndWordLabels: {
    position: 'absolute',
    marginLeft: 36,
  },
  wordCountNotch: {
    width: 358,
    height: 1,
    marginTop: 100,
    backgroundColor: 'white',
  },
  wordCountText: {
    marginTop: 2,
    color: 'white',
  },
  container: {
    width: 320 + GRAPH_SPACING,
    alignSelf: 'center',
    overflow: 'visible',
  },
  containerBackground: {
    marginTop: 16,
    backgroundColor: 'orange',
  },
  scrollViewBackground: {
    backgroundColor: 'transparent',
  },
  graphContainer: {
    marginHorizontal: GRAPH_SPACING / 2,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    overflow: 'visible',
  },
  graph: {
    overflow: 'visible',
  },
});
