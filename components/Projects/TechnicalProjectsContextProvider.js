import { useState } from "react"
import TechnicalProjectsContext from "./TechnicalProjectsContext"

export default function TechnicalProjectsContextProvider({ children }) {
    const [open, setOpen] = useState(true)

    return <TechnicalProjectsContext.Provider value={{ open, setOpen }}>{children}</TechnicalProjectsContext.Provider>
}
