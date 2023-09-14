import { useReducer } from "react";
import Context from "./Context";
import reducer, { initState } from "./reducer";
import logger from "./logger"

function Provider({ children }) {
    const [state, dispathch] = useReducer(logger(reducer), initState)

    return (
        <Context.Provider value={[state, dispathch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider