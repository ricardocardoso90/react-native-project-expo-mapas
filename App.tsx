import { StyleSheet, Text, View } from 'react-native';
import Map, { Callout, Marker } from 'react-native-maps';

export default function App() {
  const coordinate = {
    latitude: -23.561247393962343,
    longitude: -46.656661925026796,
  };

  return (
    <View style={styles.container}>
      <Map
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker coordinate={coordinate}>
          <Callout style={styles.callout}>
            <View>
              <Text style={styles.title}>Loja do Ricardo</Text>
              <Text style={styles.address}>Av. Paulista, SP</Text>
            </View>
          </Callout>
        </Marker>
      </Map>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  callout: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 14,
  }
});