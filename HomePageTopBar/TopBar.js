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
      assetsLoaded: false,
      childName: this.props.childName,
    };
  }

  async componentWillMount() {
    // Load mandatory assets
    await Font.loadAsync({
      awesome: 'https://github.com/FortAwesome/Font-Awesome/raw/master/fonts/fontawesome-webfont.ttf',
    });

    this.setState({assetsLoaded: true});
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
    marginLeft: 186,
    marginRight: 22,
    color: 'grey',
  },
  intercomChat: {
    marginTop: 6,
    color: 'grey',
  },
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
