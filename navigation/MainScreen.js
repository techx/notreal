import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Post from '../components/Post'
import { usePosts } from '../contexts/posts';

export default function MainScreen() {
  // const posts = []
  const { posts } = usePosts();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {posts.length > 0 ?
        <FlatList
          style={styles.feed}
          data={posts}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Post {...item} />}
          keyExtractor={(item) => item.id}
        />
        : <View style={styles.noPosts}>
          <Text style={styles.noPostsText}>There seems to be no posts so far, you should make the first one!</Text>
          <TouchableOpacity onPress={() => navigation.push('Camera')} style={styles.noPostsButton}>
            <Text style={styles.noPostsButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      }
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