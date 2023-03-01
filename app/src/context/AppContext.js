import { createContext, useState } from 'react';
const AppContext = createContext();


const AppContextProvider = ({ children }) => {

    const [ state, setState ] = useState({
        userType: "Wen, Tony"
    });
    return (
      <AppContext.Provider value={{ state }}>
        { children }
      </AppContext.Provider>
    );
}
export { AppContext, AppContextProvider };