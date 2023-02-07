import { StyleSheet, View, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect, useRef } from 'react';
import { usePosts } from '../contexts/posts'
import { useNavigation } from '@react-navigation/native';

import Send from '../assets/icons/send.svg'
import Rotate from '../assets/icons/rotate.svg'

export default function CameraScreen() {
  const [status, requestPermission] = Camera.useCameraPermissions();
  const [type, setType] = useState(CameraType.back);
  const [pictures, setPictures] = useState({ [CameraType.front]: null, [CameraType.back]: null })
  const cameraRef = useRef();
  const { width } = useWindowDimensions();
  const { posts, setPosts } = usePosts();
  const height = Math.round((width * 16) / 9);
  const otherPicture = pictures[otherSide()]
  const navigation = useNavigation();

  useEffect(() => { requestPermission() }, []);
  useEffect(() => { console.log(otherPicture) }, [type])

  if (!status || !status.granted) {
    return <View />;
  }

  function otherSide() {
    if (type == CameraType.back) {
      return CameraType.front
    }

    return CameraType.back
  }

  function swapCamera() {
    setType(otherSide())
  }

  function submitPicture() {
    const post = {
      "id": posts.length,
      "user": {
        "handle": "@kosinw",
        "profile": "https://source.unsplash.com/random/500x500"
      },
      "likes": 0,
      "dislikes": 0,
      "location": {
        "city": "Cambridge",
        "state": "MA"
      },
      "image": {
        "front": pictures[CameraType.front].uri,
        "back": pictures[CameraType.back].uri
      }
    }

    setPosts([post, ...posts])
    navigation.navigate('Main')
  }

  function hasBothPictures() {
    return pictures[CameraType.front] !== null && pictures[CameraType.back] !== null
  }

  async function takePicture() {
    const picture = await cameraRef.current.takePictureAsync()
    setPictures({ ...pictures, [type]: picture })
    swapCamera()
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera ref={cameraRef} ratio="16:9" style={{ width: "100%", height }} type={type}>
          {otherPicture !== null && (
            <Image
              source={{ uri: otherPicture.uri }}
              style={[styles.image, { width: 0.36 * width, height: 0.36 * height }]}
            />
          )}
        </Camera>
      </View>
      <View style={styles.toolsContainer}>
        <TouchableOpacity onPress={swapCamera} style={[styles.secondary, { marginRight: 20 }]}>
          <Rotate color="white" width={35} height={35} />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePicture} style={styles.take} />
        <TouchableOpacity disabled={!hasBothPictures()} onPress={submitPicture} style={[styles.secondary, { marginLeft: 20 }]}>
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