import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import useSearchCryptData from '../hooks/useSearchCryptData'

const CryptGroupContainer = () => {
  const groups: string[] = ['1', '2', '3', '4', '5', '6', '7']
  const { searchCryptData, setSearchCryptData } = useSearchCryptData()
  const [activeGroups, setActiveGroups] = useState<
    { value: string; active: boolean }[]
  >(groups.map((elem) => ({ value: elem, active: false })))

  const handleSelectGroup = (group: string) => {
    const index = activeGroups.findIndex((elem) => elem.value === group)
    let elem = activeGroups[index]
    elem = { ...elem, active: !elem.active }
    let newArray = [...activeGroups]
    newArray[index] = elem
    setActiveGroups(newArray)
  }

  const isActiveGroup = (group: string) => {
    const elem = activeGroups.find((elem) => elem.value === group)
    if (elem) {
      return elem.active
    }
    return false
  }

  return (
    <View style={style.groups}>
      <Text>Group: </Text>
      {activeGroups.map((group, index) => (
        <TouchableHighlight
          key={index}
          activeOpacity={0.6}
          underlayColor='#DDDDDD'
          onPress={() => handleSelectGroup(group.value)}
        >
          <Text
            style={
              isActiveGroup(group.value) ? style.button : style.buttonActive
            }
          >
            {group.value}
          </Text>
        </TouchableHighlight>
      ))}
    </View>
  )
}
const style = StyleSheet.create({
  groups: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    marginVertical: 10,
  },
  button: {
    borderWidth: 1,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonActive: {
    borderWidth: 1,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'gray',
  },
})
export default CryptGroupContainer
