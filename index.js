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
        <PointLight style={{color: 'white', transform: [{translate: [0, 400, 700]}]}} />
        <Entity
        source={{
          obj: asset('creature.obj'),
          mtl: asset('creature.mtl'),
        }}
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
        <Entity
        source={{
          obj: asset('cilinder.obj'),
          mtl: asset('cilinder.mtl'),
        }}
        lit={true}
        style={{
          transform: [
            {translate: [120, -120, -100]},
          ],
        }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('React3DView', () => React3DView);
