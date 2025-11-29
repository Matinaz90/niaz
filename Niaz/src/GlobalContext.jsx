import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [openRightBar, setOpenRightBar] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const bar = document.getElementById("rightBar");
      if (bar && !bar.contains(e.target)) {
        setOpenRightBar(false);
        document.getElementById('blur_rightBarOpen').style.display = 'none';
      };
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <GlobalContext.Provider value={{ openRightBar, setOpenRightBar }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
