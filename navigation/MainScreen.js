import { View, ScrollView, StyleSheet, Text } from 'react-native';


import Post from '../components/Post'
import { feedData } from '../data/mock'

export default function MainScreen() {
  const post = feedData[0]

  return (
    <View style={styles.container}>
      <ScrollView style={styles.feed}>
        <Post {...post} />
      </ScrollView>
      <View style={styles.noPosts}>
        <Text style={styles.noPostsText}>
          There seems to be no posts so far, you should make the first one!
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  feed: {
    paddingTop: 115,
    width: "100%"
  },
  noPosts: {
    width: 300,
    alignItems: "center"
  },
  noPostsText: {
    textAlign: "center",
    fontFamily: "Manrope_500Medium",
    fontSize: 14
  },
  noPostsButton: {
    marginTop: 30,
    backgroundColor: "#000",
    borderRadius: 8
  },
  noPostsButtonText: {
    color: "#fff",
    fontFamily: "Manrope_700Bold",
    paddingHorizontal: 25,
    paddingVertical: 10
  }
});