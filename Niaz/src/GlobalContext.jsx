import { createContext, useContext, useState, useEffect, useRef } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [openRightBar, setOpenRightBar] = useState(false);

  return (
    <GlobalContext.Provider value={{ openRightBar, setOpenRightBar }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}