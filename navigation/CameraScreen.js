import { StyleSheet, View, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import Send from '../assets/icons/send.svg'
import Rotate from '../assets/icons/rotate.svg'

export default function CameraScreen() {
  const [status, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef();
  const { width } = useWindowDimensions();
  const height = Math.round((width * 16) / 9);
  const [cameraReady, setCameraReady] = useState(false);

  useEffect(() => { requestPermission() }, []);

  if (!status || !status.granted) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          onCameraReady={() => setCameraReady(true)}
          ref={cameraRef}
          ratio="16:9"
          style={{ width: "100%", height }}
          type={type}
        >
        </Camera>
      </View>
      <View style={styles.toolsContainer}>
        <TouchableOpacity style={[styles.secondary, { marginRight: 20 }]}>
          <Rotate color="white" width={35} height={35} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.take} />
        <TouchableOpacity
          style={[styles.secondary, {
            marginLeft: 20,
          }]}>
          <Send color="white" width={35} height={35} />
        </TouchableOpacity>
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