import { createContext, useContext, useState } from 'react'

const ProfileContext = createContext();

export function useProfile() {
  return useContext(ProfileContext);
}

export default function PostsProvider({ children }) {
  const [handle, setHandle] = useState('@kosinw')
  const [location, setLocation] = useState({ city: "Cambridge", state: "MA" })
  const [profile, setProfile] = useState("https://picsum.photos//500/500")

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