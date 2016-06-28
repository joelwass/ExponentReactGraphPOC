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

// we're creating the array of daycount views here, if we want, we could pass in the day values from main.js to here, and then from here to the daycounts.
const GRAPH_SOURCE = [
  { key: 0, value: <DayCounts graphHeight:{this.state.height}/> },
  { key: 1, value: <DayCounts graphHeight:this.state.height/> },
  { key: 2, value: <DayCounts graphHeight:this.state.height/> },
  { key: 3, value: <DayCounts graphHeight:this.state.height/> },
  { key: 4, value: <DayCounts graphHeight:this.state.height/> },
  { key: 5, value: <DayCounts graphHeight:this.state.height/> },
  { key: 6, value: <DayCounts graphHeight:this.state.height/> },
];

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
      {GRAPH_SOURCE.map(source =>
        this._renderGraph(source, { width: 320, height: 240 })
      )}
      </ScrollView>
    )
  }

  _renderGraph(source, size) {
    return (
    <View key={source.key} style={styles.graphContainer}>
      {source.value}
    </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 0,
    height: this.state.height,
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
