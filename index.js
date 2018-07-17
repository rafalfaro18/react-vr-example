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
        <AmbientLight intensity={0.6} />
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
        texture={asset('abstract-art-background-207300.jpg')}
        lit={true}
        style={{
          transform: [
            {translate: [-4, 0, 0]},
          ]
        }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('React3DView', () => React3DView);
