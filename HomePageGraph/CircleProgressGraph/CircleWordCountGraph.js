'use strict';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import CircleGraph from './CircleGraph';
import Padding from './GraphPadding';

const GRAPH_SPACING = 30;
const GRAPH_SOURCE = [
  {key:0, value:<Padding/>},
  {key:1, value:<CircleGraph wordCount={1819} dayOffset={-4}/>},
  {key:2, value:<CircleGraph wordCount={5282} dayOffset={-3}/>},
  {key:3, value:<CircleGraph wordCount={1263} dayOffset={-2}/>},
  {key:4, value:<CircleGraph wordCount={348} dayOffset={-1}/>},
  {key:5, value:<CircleGraph wordCount={4729} dayOffset={0}/>},
  {key:6, value:<Padding/>},
]

// const CHART_SOURCE

export default class CircleWordCountGraph extends React.Component {
  render() {
    var _scrollView: ScrollView;

    // to be able to reference the scroll view outside of the render function, need to declare it as such
    return (
      <ScrollView
        ref={(scrollView) => {_scrollView = scrollView;}}
        horizontal
        scrollsToTop={false}
        snapToInterval={210}
        contentOffset={{x:840, y:0}}
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
    overflow: 'visible',
  },
  graph: {
    overflow: 'visible',
  },
});
