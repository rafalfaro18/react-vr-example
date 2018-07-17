import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  VrButton,
  asset,
} from 'react-360';

import Entity from 'Entity';
import AmbientLight from 'AmbientLight';

export default class React3DView extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={1} />
        <Entity
        source={{ obj: asset('cilinder.obj'),
        mtl: asset('cilinder.mtl') }}
        lit={true}
        style={{
          color: "#666",
          transform: [
            {translate: [-4, 0, 0]},
            {scale: 0.25}
          ]
        }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('React3DView', () => React3DView);
