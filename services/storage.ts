import AsyncStorage from '@react-native-async-storage/async-storage'
import Storage from 'react-native-storage'

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 10000,
  storageBackend: AsyncStorage, // for web: window.localStorage
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
})

export default storage
