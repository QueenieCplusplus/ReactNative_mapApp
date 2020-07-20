import React from 'react';
import {MapView} from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mapContainer}>
      <MapView
           style={{ marginTop: 20, width: "80%", height:400 }}
           initialRegion={{
             latitude: 37.78825,
             longitude: -122.4324,
           }}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // mapStyle: {
  //   width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height,
  // },
});