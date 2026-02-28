import { createContext, useContext, useState, useEffect, useRef } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [OpenRightVal, setOpenRightVal] = useState(false)

  useEffect(() => {
    if(OpenRightVal){
      document.body.classList.add('no-scrool')
    } else {
      document.body.classList.remove('no-scrool')
    }
  }, [OpenRightVal])

  return (
    <GlobalContext.Provider value={{ OpenRightVal, setOpenRightVal }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}