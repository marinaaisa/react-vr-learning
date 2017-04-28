import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
  // <View> below creates a view that is 2 meters wide and is positioned
  // 5 meters in front of the user (z = -5). Its child items are laid out
  // in a 'column' and marked to 'stretch' to the width of the view container.
  // This causes call child view to have the same width.
    return (
      <View>
        <Pano source={{uri: '/static_assets/chess-world.jpg'}} />
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 2,
          alignItems: 'stretch',
          backgroundColor: '#ffffff',
          transform: [{translate: [-1, 1, -5]}],
        }}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Red</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Orange</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'yellow'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Yellow</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'green'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Green</Text>
          </View>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: 'blue'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Blue</Text>
          </View>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
