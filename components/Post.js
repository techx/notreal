import { View, Text, StyleSheet } from 'react-native';

import Avatar from '../components/Avatar';

export default function Post() {
  const handle = "@hassan"
  const city = "Cambridge"
  const state = "MA"

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar size={42} name={handle.substring(1)} />
        <View style={styles.textContainer}>
          <Text style={styles.handle}>{handle}</Text>
          <Text style={styles.secondary}>{`${city}, ${state} • 32 min late`}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    marginVertical: 5
  },
  header: {
    flexDirection: 'row',
    padding: 15
  },
  textContainer: {
    marginLeft: 15
  },
  handle: {
    fontSize: 14,
    lineHeight: 19,
    fontFamily: "Manrope_700Bold"
  },
  secondary: {
    color: "#868E96",
    fontSize: 12,
    marginTop: 3,
    fontFamily: "Manrope_500Medium"
  },
  imageContainer: {
    marginTop: 5
  },
  back: {
    borderRadius: 20
  },
  front: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000",
    position: "absolute",
    top: 17,
    left: 17
  },
  like: {
    bottom: 15,
    right: 15,
    position: "absolute"
  }
});