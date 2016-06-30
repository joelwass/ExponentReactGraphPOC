import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { Font } from 'exponent';

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
        <Text style={[styles.battery, { ...Font.style('awesome'), fontSize: 28 }]}>{'\uf240'}</Text>
        <Text style={[styles.intercomChat, { ...Font.style('awesome'), fontSize: 28 }]}>{'\uf0e5'}</Text>
      </View>
    );
  }

  _renderIcon(name, isSelected) {
    return (
      <FontAwesomeIcon
        name={name}
        size={32}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

let styles = StyleSheet.create({
  battery: {
    marginTop: 6,
    width: 38,
    alignItems: 'flex-end',
    color: 'grey',
    marginRight: 10,
  },
  intercomChat: {
    alignItems: 'flex-end',
    width: 28,
    marginTop: 6,
    marginRight: 10,
    color: 'grey',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 24,
    paddingBottom: 6,
  },
  childName: {
    marginLeft: 5,
    fontSize: 14,
    marginTop: 10,
    flex: 1,
    color: 'grey',
  },
  childImage: {
    marginLeft: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
