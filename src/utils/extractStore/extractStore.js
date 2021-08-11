const extractStore = stores => storeId => {
    return stores.find((store) => {
        return store.id === storeId
    })
}

export default extractStore