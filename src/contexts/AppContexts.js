import {createContext, useReducer} from "react";
import { ACTION_TYPES } from "../constants/strings";

export const AppStateContext = createContext();
export const AppDispatchContext = createContext();

const initialState = {
    pageTitle: "Home"
}

const reducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.CHANGE_PAGE_TITLE:
            return Object.assign({}, state, {
                pageTitle: action.value
            });
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>
            {children}
            </AppStateContext.Provider>
        </AppDispatchContext.Provider>
    );
}