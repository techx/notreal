import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.layoutContainer}>
        <Text style={styles.title}>NotReal</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
    zIndex: 2
  },
  layoutContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    flexDirection: "row"
  },
  icon: {
    width: 24,
    height: 24,
    color: "#212529"
  },
  title: {
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 24
  }
});