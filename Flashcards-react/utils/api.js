import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = "MobileFlashcards:deck"

function setDummyData() {
  let dummyData = {
    "abc": {
      "name": "Sample Deck",
      "cards":
        [{ "q": "Who teaches FEW2.4", "a": "Michell Hudson" },
        { "q": "Is expo better than simulator", "a": "Maybe" }]
    },
  }

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      return (results) === null
        ? setDummyData()
        : JSON.parse(results)
    })
}

export function submitDeck({ deck, id }) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [id]: deck
    })
  )
}

export function deleteDeck(id, cb) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(res => {
    const data = JSON.parse(res)
    // data[id] = undefined
    delete data[id]
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
      .then(() => { cb() })
  })
}

export function submitCard(id, card) {
  AsyncStorage.getItem(DECK_STORAGE_KEY).then(res => {
    const data = JSON.parse(res)
    const newData = Object.assign({}, data, {
      ...data,
      [id]: {
        ...data[id],
        cards: data[id]["cards"] ? data[id]["cards"].concat([card]) : [].concat([card])
      }
    })
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newData))
  }).done()
}