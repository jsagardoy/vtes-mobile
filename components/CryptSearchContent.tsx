import { Button, StyleSheet, View } from 'react-native'

import CryptDisciplinesContainer from './CryptDisciplinesContainer'
import CryptGroupContainer from './CryptGroupContainer'
import React from 'react'
import { disciplines_inf } from '../services/getAllDisciplines'
import useSearchCryptData from '../hooks/useSearchCryptData'

const CryptSearchContent = () => {
  const { searchCryptData, setSearchCryptData } = useSearchCryptData()
  const initialDisciplines = disciplines_inf.map((elem) => ({
    name: elem,
    value: 0,
  }))

  const handleClear = () => {
    const newSearch = { ...searchCryptData, disciplines: [] }
    setSearchCryptData(newSearch)
  }

  return (
    <View style={styles.container}>
      <CryptDisciplinesContainer initialDiscList={initialDisciplines} />
      <CryptGroupContainer/>
      <View>
        <Button title='Clear' onPress={() => handleClear()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white' },
})
export default CryptSearchContent
