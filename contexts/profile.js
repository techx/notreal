import { createContext, useContext, useState } from 'react'

const ProfileContext = createContext();

export function useProfile() {
  return useContext(ProfileContext);
}

export default function PostsProvider({ children }) {
  const [handle, setHandle] = useState(null)
  const [location, setLocation] = useState({ city: "Cambridge", state: "MA" })
  const [profile, setProfile] = useState("https://source.unsplash.com/random/500x500")

  return (
    <ProfileContext.Provider value={{
      handle,
      setHandle,
      location,
      setLocation,
      profile,
      setProfile
    }}>
      {children}
    </ProfileContext.Provider>
  )
}