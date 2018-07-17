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
        <PointLight style={{color: 'white', transform: [{translate: [0, 400, 700]}]}} />
        <Entity
        source={{
          obj: asset('creature.obj'),
          mtl: asset('creature.mtl'),
        }}
        texture={asset('abstract-art-background-207300.jpg')}
        lit={true}
        style={{
          transform: [
            {translate: [0, -20, -90]},
            {scale: 0.1},
            {rotateY: 0},
            {rotateX: -90},
          ],
        }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('React3DView', () => React3DView);
