import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function Avatar({ name, size = 30 }) {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Text style={styles.text}>{name[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 99,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d0ebff",
    textAlign: "center",
    textAlignVertical: "center",
    borderWidth: 1,
    borderColor: "#fff"
  },
  text: {
    color: "#1864ab",
    fontFamily: "Manrope_700Bold",
  },
  image: {
    borderRadius: 99,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#fff"
  }
});