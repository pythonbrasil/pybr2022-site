
import React from "react"
import { GeneralContextProvider } from "@configs/context"

export const wrapRootElement = ({ element }) => (
  <GeneralContextProvider>{element}</GeneralContextProvider>
)