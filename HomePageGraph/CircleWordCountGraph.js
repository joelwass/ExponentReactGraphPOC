'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import Pacman from './Pacman';
import Padding from './GraphPadding';

const GRAPH_SPACING = 80;
const GRAPH_SOURCE = [
  {key:0, value:<Padding/>},
  {key:1, value:<Pacman/>},
  {key:2, value:<Pacman/>},
  {key:3, value:<Pacman/>},
  {key:4, value:<Pacman/>},
  {key:5, value:<Pacman/>},
  {key:6, value:<Padding/>},
]

export default class CircleWordCountGraph extends React.Component {
  render() {
    return (
      <ScrollView
        horizontal
        scrollsToTop={false}
        snapToInterval={205}
        showsHorizontalScrollIndicator={false}
        centerContent = {true}
        automaticallyAdjustContentInsets={false}
        style={[styles.container, this.props.style]}> 
        {GRAPH_SOURCE.map(source => 
          this._renderGraph(source, {width: 320, height: 240})
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
    width: 320 + GRAPH_SPACING,
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 12,
    overflow: 'visible',
  },
  graphContainer: {
    flex: 1,
    marginHorizontal: GRAPH_SPACING /2,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    shadowRadius: 3,
    shadowColor: '#000',
    overflow: 'visible',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
  },
  graph: {
    overflow: 'visible',
  },
});
