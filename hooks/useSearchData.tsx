import Context from '../context/searchContext';
import { useContext } from 'react';
const useSearchData = () => {
  const { searchData, setSearchData } = useContext(Context);
  return { searchData, setSearchData };
};
export default useSearchData;
