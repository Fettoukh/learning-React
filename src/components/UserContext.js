import React from 'react'

const UserContext = React.createContext("Amine") // Default Value
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider , UserConsumer}
export default UserContext
