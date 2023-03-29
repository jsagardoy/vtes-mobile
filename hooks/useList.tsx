import Context from '../context/listContext';
import { useContext } from 'react';
const useList = () => {
  const { list, setList } = useContext(Context);
  return { list, setList };
};
export default useList;
