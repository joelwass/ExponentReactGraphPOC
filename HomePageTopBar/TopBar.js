import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

export default class TopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      childName: this.props.childName,
    };
  }

  render() {
    return (
      <View style={styles.topBar}>
        <Image style={styles.childImage} source={require('./childImage.png')} />
        <Text style={styles.childName}>{this.state.childName}</Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  topBar: {
    marginTop: 15,
    width: 320,
    height: 50,
    flexDirection: 'row',
  },
  childName: {
    marginLeft: 5,
    fontSize: 14,
    marginTop: 10,
    color: 'grey',
  },
  childImage: {
    marginLeft: 10,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
