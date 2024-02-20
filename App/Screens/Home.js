import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import GoogleMapView from "../Components/GoogleMapView";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={{fontSize: 26, alignSelf: "center", marginTop: 20}}>Headers</Text>
      <GoogleMapView />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
});
