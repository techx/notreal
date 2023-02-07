import FaceHappy from '../assets/icons/face-happy.svg';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';

export default function LikeButton({ numLikes, onAddLike }) {
  return (
    <TouchableWithoutFeedback onPress={() => onAddLike()}>
      <View>
        <FaceHappy width={42} height={42} color="white" />
        <View style={styles.bubble}>
          <Text style={styles.likeCount}>{numLikes}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: '#F03E3E',
    position: 'absolute',
    right: -2,
    top: -2,
    borderRadius: 99
  },
  likeCount: {
    fontSize: 12,
    paddingHorizontal: 4,
    color: "white"
  }
});