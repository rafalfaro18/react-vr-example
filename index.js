import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

import Entity from 'Entity';
import AmbientLight from 'AmbientLight';

export default class React3DView extends React.Component {
  // Our component will keep track of this state
  state = {
    count: 0,
  };

  // This method increments our count, triggering a re-render
  _incrementCount = () => {
    this.setState({count: this.state.count + 1});
  };

  render() {
    return (
      <View>
        <Text>Hola</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('React3DView', () => React3DView);
