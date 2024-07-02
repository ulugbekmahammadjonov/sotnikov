import { createContext, useReducer } from "react";

const initialValue = {
  data: [],
  users: [],
  filteredData: [],
};
export const Context = createContext(initialValue)

const reducer = (state = initialValue, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DATA":
      return {
        ...state,
        data: payload,
      };
    case "SET_USERS":
      return {
        ...state,
        users: payload,
      };
    case "SET_FILTERED_DATA":
      return {
        ...state,
        filteredData: payload,
      };
    default:
      return state;
  }
};
const DataProvider = ({children}) => {
   const [state, dispatch] = useReducer(reducer, initialValue)
   return (
      <Context.Provider value={{state, dispatch}}>
         {children}
      </Context.Provider>)
}
export {DataProvider}