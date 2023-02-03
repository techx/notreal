import { View, StyleSheet, FlatList } from 'react-native';

import Post from '../components/Post';
import { feedData } from '../data/mock';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.feed}
        data={feedData}
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