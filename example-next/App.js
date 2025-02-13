import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const pickRandomLocation = () => {
    const randomLatitude = Math.random() * 180 - 90; // [-90, 90]
    const randomLongitude = Math.random() * 360 - 180; // [-180, 180]
    setRegion({
      latitude: randomLatitude,
      longitude: randomLongitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Local Map Demo</Text>
      <MapView
        style={styles.map}
        provider="google"
        region={region}
        mapType="hybrid"
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="Random Marker"
          description="This marker is at the random location"
        />
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Pick Random Location" onPress={pickRandomLocation} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
});
