import { View, StyleSheet, FlatList } from 'react-native';

import Post from '../components/Post';
import { usePosts } from '../contexts/posts';

export default function MainScreen() {
  const { posts } = usePosts();

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.feed}
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Post {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
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
  }
});