import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [openRightBar, setOpenRightBar] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const bar = document.getElementById("rightBar");
      if (bar && !bar.contains(e.target)) {
        setOpenRightBar(false);

      };
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);


  useEffect(() => {
  const exitBtn = document.getElementById("exitBtn");
  const blur = document.getElementById("blur_rightBarOpen");

  if (!exitBtn || !blur) return;

  exitBtn.classList[openRightBar ? "add" : "remove"]("open");
  blur.classList[openRightBar ? "add" : "remove"]("open");
}, [openRightBar]);

  useEffect(() => {
  document.body.style.overflow = openRightBar ? 'hidden' : 'auto';
  }, [openRightBar]);

  return (
    <GlobalContext.Provider value={{ openRightBar, setOpenRightBar }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
