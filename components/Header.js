import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'

import CameraPlusIcon from "../assets/icons/camera-plus.svg";
import Avatar from "../components/Avatar";

import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../contexts/profile';

export default function Header({ partial = false, darkMode = false }) {
  const navigation = useNavigation();
  const { handle } = useProfile()

  const lightGradient = ['rgba(255, 255, 255, 1)', 'transparent']
  const darkGradient = ['rgba(0, 0, 0, 1)', 'transparent']
  
  return (
    <LinearGradient 
      colors={darkMode ? darkGradient : lightGradient}
      locations={[0, 1.04]}
      style={styles.container}
    >
      <View style={styles.layoutContainer}>
        {!partial &&
        <TouchableOpacity onPress={() => navigation.push('Camera')} style={styles.iconContainer}>
          <CameraPlusIcon style={styles.icon} />
        </TouchableOpacity>
        }
        <Text style={[styles.title, { color: darkMode ? "#fff" : "#000" }]}>
          NotReal
        </Text>
        {!partial && <TouchableOpacity>
          <Avatar onPress={() => navigation.push('Initial')} name={handle.substring(1)} />
        </TouchableOpacity>}
      </View>
      <StatusBar translucent backgroundColor='transparent' style={darkMode ? "light" : "dark"} />
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