import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { useProfile } from '../contexts/profile'

export default function InitialScreen() {
  const { setHandle, handle } = useProfile()
  const [value, setValue] = useState(handle.substring(1))
  const navigation = useNavigation()

  function handleSubmit() {
    setHandle('@' + value)
    navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.text}>What is your preferred handle?</Text>
        <View style={styles.inputWrapper}>
          <TextInput value={value} onChangeText={(text) => setValue(text)} autoFocus style={styles.input} />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inner: {
    marginTop: 130
  },
  text: {
    color: "#000",
    fontSize: 17,
    fontFamily: "Manrope_500Medium",
  },
  input: {
    fontSize: 48,
    textAlign: "center",
    fontFamily: "Manrope_800ExtraBold",
    flex: 0.8
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: "center",
    marginTop: 80
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 12,
    marginTop: 300
  },
  buttonText: {
    fontFamily: "Manrope_700Bold",
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 8
  }
})