import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  VrButton,
  asset,
  AmbientLight,
  PointLight
} from 'react-360';

import Entity from 'Entity';

export default class React3DView extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={0.5} />
        <PointLight
          style={{
            color: 'white',
            transform: [
              {translate: [0, 0, 0]}
            ]
          }}
        />
        <Entity
        source={{ obj: asset('cilinder.obj'),
        }}

        lit={true}
        style={{
          color: "#FFF",
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
