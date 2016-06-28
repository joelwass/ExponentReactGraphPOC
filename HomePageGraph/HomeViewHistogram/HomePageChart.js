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
      <ScrollView
      horizontal
      scrollsToTop={false}
      pagingEnabled = {true}
      showsHorizontalScrollIndicator={false}
      centerContent={true}
      automaticallyAdjustContentInsets={false}
      style={[styles.container, this.props.style]}>
        <DayCounts graphHeight={this.state.height}/>
        <DayCounts graphHeight={this.state.height}/>
        <DayCounts graphHeight={this.state.height}/>
      </ScrollView>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 300,
    width: 320 + GRAPH_SPACING,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 12,
    overflow: 'visible',
    shadowRadius: 3,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
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
