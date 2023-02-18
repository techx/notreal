import { StyleSheet, View, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const { width } = useWindowDimensions();
  const height = Math.round((width * 16) / 9);

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ratio="16:9"
          style={{ width: "100%", height }}
          type={type}
        >
        </Camera>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
    // alignItems: "center"
  },
  cameraContainer: {
    borderRadius: 34,
    overflow: 'hidden'
  },
  image: {
    position: 'absolute',
    left: 20,
    top: 40,
    backgroundColor: 'transparent',
    borderRadius: 16,
    borderWidth: 3,
    borderColor: "black"
  },
  toolsContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },
  take: {
    backgroundColor: '#FA5252',
    borderRadius: 99,
    width: 70,
    height: 70
  },
  secondary: {
    backgroundColor: '#343a40',
    borderRadius: 16,
    padding: 8,
  }
});