import { View, Text, StyleSheet } from 'react-native'

export default function PlaceholderScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is a placeholder screen to show navigation is working.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    fontFamily: "Manrope_500Medium",
    fontSize: 14
  }
})