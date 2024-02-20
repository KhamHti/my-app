import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("screen");
const GoogleMapView = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78835,
    longtitude: -122.4321,
    latitudeDelta: 0.0522,
    longitudeDelta: 0.0421,
  });

  return (
    <View
      style={{
        marginTop: 40,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView
        style={{
          height: height * 0.85,
          width: width * 0.85,
          borderRadius: 20,
          marginLeft: 20,
          marginRight: 20,
        }}
        showsUserLocation="true"
        provider={PROVIDER_GOOGLE}
        region={mapRegion}
      />
    </View>
  );
};

export default GoogleMapView;

const styles = StyleSheet.create({});
