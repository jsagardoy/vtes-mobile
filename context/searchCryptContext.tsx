import { createContext, useEffect, useState } from 'react'

import { Card } from '../types/data.types'

export type SearchCryptData = {
  searchCryptData: Card
  setSearchCryptData: React.Dispatch<React.SetStateAction<Card>>
}

const initial: Card = {
  id: 0,
  name: '',
  printed_name: '',
  _name: '',
  _set: '',
  url: '',
  aka: [],
  adv: false,
  types: [],
  card_text: '',
  sets: [],
  ordered_sets: [],
  scans: [],
  clans: [],
  artists: [],
  capacity: 0,
  capacity_change: '',
  disciplines: [],
  combo: false,
  multidisc: false,
  banned: '',
  pool_cost: '',
  blood_cost: '',
  conviction_cost: '',
  burn_option: '',
  flavor_text: '',
  draft: '',
  group: '',
  title: '',
  name_variants: [],
  has_advanced: false,
  is_evolution: false,
}

const Context = createContext<SearchCryptData>({
  searchCryptData: initial,
  setSearchCryptData: (value: Card) => {},
})

export const SearchDataContextProvider = ({ children }) => {
  const [searchCryptData, setSearchCryptData] = useState<Card>(initial)

  const value = { searchCryptData, setSearchCryptData }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
export default Context
