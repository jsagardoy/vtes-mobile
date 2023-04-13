import Context from '../context/searchCryptContext'
import { useContext } from 'react'
const useSearchCryptData = () => {
  const { searchCryptData, setSearchCryptData } = useContext(Context)
  return { searchCryptData, setSearchCryptData }
}
export default useSearchCryptData
