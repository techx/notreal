import { createContext, useContext, useState } from 'react'
import { feedData } from '../data/mock'

const PostsContext = createContext();

export function usePosts() {
  const { posts, setPosts } = useContext(PostsContext);
  return { posts, setPosts };
}

export default function PostsProvider({ children }) {
  const [posts, setPosts] = useState(feedData);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  )
}