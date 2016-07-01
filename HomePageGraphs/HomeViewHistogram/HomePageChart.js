'use strict';

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Animated,
} from 'react-native';
import DayCounts from './DayCounts';
import Dimensions from 'Dimensions';

// got array of gradients from http://www.perbang.dk/rgbgradient/
// gross gradient hack until exponent ports native dependencies for gradient colors
const GRAPH_SPACING = 80;
const SCREEN_MID_POINT = Dimensions.get('window').width/2;
const SCREEN_TOTAL_WIDTH = Dimensions.get('window').width * 3;
const SUNRISE_START = SCREEN_TOTAL_WIDTH * (3/12);
const SUNRISE_MID = SCREEN_TOTAL_WIDTH * (4.5/12);
const SUNRISE_END = SCREEN_TOTAL_WIDTH * (5/12);
const SUNSET_START = SCREEN_TOTAL_WIDTH * (7/12);
const SUNSET_MID = SCREEN_TOTAL_WIDTH * (8.5/12);
const SUNSET_END = SCREEN_TOTAL_WIDTH * (9/12);

export default class HomePageChart extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      graphHeight: 100,
      measured: false,
      backgroundColor: new Animated.Value(0),
    };
  }

  _setHeight(e) {
    this.setState({measured: true});
    this.setState({graphHeight: e.nativeEvent.layout.height});
  }

  _setNotchTopMargin() {
    return {marginTop: this.state.graphHeight /4};
  }

  _doGradiant(e) {
    let currentMidPoint = SCREEN_MID_POINT + e.nativeEvent.contentOffset.x;
    console.log(currentMidPoint);
    if (currentMidPoint < SUNRISE_START) {
      Animated.spring(this.state.backgroundColor, {toValue: 0}).start();
    } else if (currentMidPoint < SUNRISE_MID) { // do gradient from night to day time
      Animated.spring(this.state.backgroundColor, {toValue: 1}).start();
    } else if (currentMidPoint < SUNRISE_END) {
      Animated.spring(this.state.backgroundColor, {toValue: 2}).start();
    } else if (currentMidPoint < SUNSET_START) {
      Animated.spring(this.state.backgroundColor, {toValue: 2}).start();
    } else if (currentMidPoint < SUNSET_MID) { // do gradient from night to day time
      Animated.spring(this.state.backgroundColor, {toValue: 1}).start();
    } else if (currentMidPoint < SUNSET_END) {
      Animated.spring(this.state.backgroundColor, {toValue: 0}).start();
    } else {
      Animated.spring(this.state.backgroundColor, {toValue: 0}).start();
    }
  }

  render() {
    let backgroundColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ['#002A51','#725150','#FF814F'],
    });

    if (!this.state.measured) {
      return (
        <Animated.View ref="container" style={[styles.container, {backgroundColor}]} onLayout={(e) => {this._setHeight(e)}}>
        </Animated.View>
      );
    }

    return (
      <Animated.View ref="container" style={[styles.container, {backgroundColor}]}>
        <View style={styles.notchesAndWordLabels}>
          <View style={[styles.wordCountNotch, this._setNotchTopMargin()]}/>
          <Text style={[styles.wordCountText, styles.smallFontSize]}>1000 words</Text>
          <View style={[styles.wordCountNotch, this._setNotchTopMargin()]}/>
          <Text style={[styles.wordCountText, styles.smallFontSize]}>500 words</Text>
        </View>
        <ScrollView
        onScroll = {(e) => {this._doGradiant(e)}}
        horizontal={true}
        scrollEventThrottle={10}
        scrollsToTop={false}
        pagingEnabled = {true}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets = {false}
        style={[styles.scrollViewBackground, this.props.style]}>
          <DayCounts graphHeight={this.state.graphHeight} timeThird={0}/>
          <DayCounts graphHeight={this.state.graphHeight} timeThird={1}/>
          <DayCounts graphHeight={this.state.graphHeight} timeThird={2}/>
        </ScrollView>
      </Animated.View>
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
    width: Dimensions.get('window').width - 20,
    height: 1,
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
