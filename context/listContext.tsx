import { createContext, useState } from 'react';

import { Card } from '../types/data.types';

export type List = {
  list: Card[];
  setList: (value: Card[]) => void;
};

const Context = createContext<List>({
  list: [],
  setList: (value: Card[]) => {},
});

export const ListContextProvider = ({ children }) => {
  const [list, setList] = useState<Card[]>([]);
  const value = { list, setList };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default Context;
