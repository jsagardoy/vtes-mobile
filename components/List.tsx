import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { Card } from '../types/data.types'
import ListItem from './ListItem'
import ListSearchBar from './ListSearchBar'
import SearchModal from './SearchModal'
import useSearchData from '../hooks/useSearchCryptData'

interface Props {
  list: Card[]
  cardType: string
}
const List = ({ list, cardType }: Props) => {
  const [newList, setNewList] = useState<Card[]>(list)
  const [showModal, setShowModal] = useState<boolean>(false)
  const { searchCryptData } = useSearchData()

  const handleTextSearch = (textValue: string) => {
    setNewList(
      list.filter(
        (elem) =>
          elem &&
          ((elem.aka !== undefined &&
            elem.aka.length > 0 &&
            elem.aka.some((aka: string) =>
              aka.toLocaleLowerCase().includes(textValue.toLocaleLowerCase())
            )) ||
            (elem.name &&
              elem.name
                .toLocaleLowerCase()
                .includes(textValue.toLocaleLowerCase())) ||
            (elem.card_text &&
              elem.card_text
                .toLocaleLowerCase()
                .includes(textValue.toLocaleLowerCase())) ||
            (elem.name_variants &&
              elem.name_variants.length > 0 &&
              elem.name_variants.some((name) =>
                name.toLocaleLowerCase().includes(textValue.toLocaleLowerCase())
              )))
      )
    )
  }

  const handleShowSearchModal = () => {
    setShowModal(!showModal)
  }
  const handleCloseModal = () => {
    setShowModal(false)
  }

  const hasElement = (data: string, element: string[]) => {
    if (element) {
      return element.some((elem) => {
        if (elem.toUpperCase() === elem) {
          return elem === data || elem === data.toUpperCase()
        } else {
          return elem === data
        }
      })
    } else {
      return false
    }
  }

  const handleSearch = () => {
    const data: Card[] = list.filter((card: Card) =>
      searchCryptData.disciplines.length > 0
        ? searchCryptData.disciplines.every((elem) =>
            hasElement(elem, card.disciplines)
          )
        : card
    )
    setNewList(data)
  }
  useEffect(() => {
    handleSearch()
  }, [searchCryptData])

  return (
    <SafeAreaView style={styles.container}>
      <ListSearchBar
        textSearch={handleTextSearch}
        showSearchModal={handleShowSearchModal}
      />
      <SearchModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        cardType={cardType}
      />
      <FlatList
        data={newList}
        renderItem={({ item, index }) => (
          <ListItem key={item.id} card={item} index={index} />
        )}
        keyExtractor={(item) => String(item.id)}
        onEndReachedThreshold={3}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 5 || 15,
    marginHorizontal: 20,
  },
  item: {
    flex: 1,
  },
})

export default List
