import { Alert, Linking, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Map, { Callout, Marker } from 'react-native-maps';

export default function App() {
  const coordinate = {
    latitude: -23.561247393962343,
    longitude: -46.656661925026796,
  };

  async function handleOpenMap() {
    const scheme = Platform.select({
      ios: "maps://0,0?q=",
      android: "geo:0,0?q=",
    });

    const { latitude, longitude } = coordinate;
    const LatLgn = `${latitude}, ${longitude}`;
    const label = "Loja do Ricardo";

    const url = Platform.select({
      ios: `${scheme} ${label} @${LatLgn}`,
      android: `${scheme} ${LatLgn} (${label})`
    });

    if (!url) {
      return Alert.alert("Não foi possível abrir o mapa.");
    };

    const canOpen = await Linking.canOpenURL(url);

    if (!canOpen) {
      return Alert.alert("Não foi possível abrir o mapa.");
    };

    Linking.openURL(url);
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

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={handleOpenMap}
      >
        <Text style={styles.buttonTitle}>Como chegar</Text>
      </TouchableOpacity>
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
  },
  button: {
    // flex: 1,
    height: 56,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});