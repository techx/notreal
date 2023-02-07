import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import CameraPlusIcon from "../assets/icons/camera-plus.svg";
import Avatar from "../components/Avatar";

import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  
  return (
    <LinearGradient 
      colors={['rgba(255, 255, 255, 1)', 'transparent']}
      locations={[0, 1.04]}
      style={styles.container}
    >
      <View style={styles.layoutContainer}>
        <TouchableOpacity onPress={() => navigation.push('Camera')} style={styles.iconContainer}>
          <CameraPlusIcon style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>
          NotReal
        </Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Avatar name="Kosi Nwabueze" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 27,
    paddingVertical: 60,
    backgroundColor: "transparent",
    position: "absolute",
    width: "100%",
    zIndex: 2
  },
  layoutContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row"
  },
  iconContainer: {

  },
  icon: {
    width: 24,
    height: 24,
    color: "#212529"
  },
  title: {
    color: "#212529",
    fontFamily: "Manrope_800ExtraBold",
    fontSize: 24
  }
});