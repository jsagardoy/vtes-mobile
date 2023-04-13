import { Button, StyleSheet, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
  getDisciplineIcon,
  isSuperior,
} from '../transformations/getDisciplineIcon'

import { disciplines_inf } from '../services/getAllDisciplines'
import useSearchData from '../hooks/useSearchCryptData'

const CryptSearchContent = () => {
  const { searchCryptData, setSearchCryptData } = useSearchData()
  const initialDisciplines = disciplines_inf.map((elem) => ({
    name: elem,
    value: 0,
  }))

  const [discList, setDiscList] = useState<{ name: string; value: number }[]>(
    []
  )

  const transformDiscFromValue = (list: { name: string; value: number }[]) => {
    const listDiscInf = list
      .filter((elem) => elem.value === 1)
      .map((elem) => elem.name.toLocaleLowerCase())
    const listDiscSup = list
      .filter((elem) => elem.value === 2)
      .map((elem) => elem.name.toLocaleUpperCase())

    const disList = [...listDiscInf, ...listDiscSup]
    setSearchCryptData((prev) => ({ ...prev, disciplines: disList }))
  }

  const handleDiscClick = (name: string) => {
    const discInd = discList.findIndex((elem) => elem.name === name)
    const disc = discList[discInd]
    const newDisc = { ...disc, value: disc.value === 2 ? 0 : disc.value + 1 }
    const newList = [...discList]

    newList[discInd] = newDisc

    setDiscList(newList)
    transformDiscFromValue(newList)
  }

  const isDiscipline = (disc: string) => {
    const index = searchCryptData.disciplines.findIndex(
      (elem) => elem.toLowerCase() === disc.toLowerCase()
    )
    if (index === -1) {
      return 0
    }
    if (isSuperior(searchCryptData.disciplines[index])) {
      return 2
    } else {
      return 1
    }
  }

  const calculateDiscValues = () => {
    const newDiscList = initialDisciplines.map((elem) => ({
      ...elem,
      value: isDiscipline(elem.name),
    }))
    setDiscList(newDiscList)
  }
  const handleClear = () => {
    setDiscList(initialDisciplines)
    const newSearch = { ...searchCryptData, disciplines: [] }
    setSearchCryptData(newSearch)
  }

  useEffect(() => {
    calculateDiscValues()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.disciplinesContainer}>
        {discList.map((disc) => (
          <TouchableHighlight
            key={disc.name}
            activeOpacity={0.6}
            underlayColor='#DDDDDD'
            onPress={() => handleDiscClick(disc.name)}
          >
            {getDisciplineIcon(
              disc.value < 2 ? disc.name : disc.name.toUpperCase(),
              disc.value === 0
            )}
          </TouchableHighlight>
        ))}
      </View>
      <View>
        <Button title='Clear' onPress={() => handleClear()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { backgroundColor: 'white' },
  disciplinesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 400,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
})
export default CryptSearchContent
