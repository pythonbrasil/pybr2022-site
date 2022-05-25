import React, { createContext, useState } from "react"

const DEFAULT_VALUE = {
  state: {
    languageId: 'pt-br'
  },
  setState: () => {}
}

export const GeneralContext = createContext(DEFAULT_VALUE)

const GeneralContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)
  return (
    <GeneralContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </GeneralContext.Provider>
  )
}

export { GeneralContextProvider }

export default GeneralContext;