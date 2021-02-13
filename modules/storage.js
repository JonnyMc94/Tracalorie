function storeItem(item) {
  let items
  // Check if any items in ls
  if (localStorage.getItem('items') === null) {
    items = []
    // Push new item
    items.push(item)
    // Set ls
    localStorage.setItem('items', JSON.stringify(items))
  } else {
    // Get what is already in ls
    items = JSON.parse(localStorage.getItem('items'))

    // Push new item
    items.push(item)

    // Re set ls
    localStorage.setItem('items', JSON.stringify(items))
  }
}

function getItemsFromStorage() {
  let items
  if (localStorage.getItem('items') === null) {
    items = []
  } else {
    items = JSON.parse(localStorage.getItem('items'))
  }
  return items
}

function updateItemStorage(updatedItem) {
  let items = JSON.parse(localStorage.getItem('items'))

  items.forEach(function (item, index) {
    if (updatedItem.id === item.id) {
      items.splice(index, 1, updatedItem)
    }
  })
  localStorage.setItem('items', JSON.stringify(items))
}

function deleteItemFromStorage(id) {
  let items = JSON.parse(localStorage.getItem('items'))

  items.forEach(function (item, index) {
    if (id === item.id) {
      items.splice(index, 1)
    }
  })
  localStorage.setItem('items', JSON.stringify(items))
}

function clearItemsFromStorage() {
  localStorage.removeItem('items')
}

export default {
  storeItem,
  getItemsFromStorage,
  updateItemStorage,
  deleteItemFromStorage,
  clearItemsFromStorage
}


