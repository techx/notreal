import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'

import CameraPlusIcon from "../assets/icons/camera-plus.svg";
import Avatar from "../components/Avatar";

export default function Header() {
  const handle = '@kosinw'

  const lightGradient = ['rgba(255, 255, 255, 1)', 'transparent']

  return (
    <LinearGradient
      colors={lightGradient}
      locations={[0, 1.04]}
      style={styles.container}
    >
      <View style={styles.layoutContainer}>
        <CameraPlusIcon style={styles.icon} />
        <Text style={styles.title}>NotReal</Text>
        <Avatar onPress={() => navigation.push('Initial')} name={handle.substring(1)} />
      </View>
    </LinearGradient>
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