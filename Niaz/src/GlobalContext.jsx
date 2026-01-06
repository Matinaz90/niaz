import { createContext, useContext, useState, useEffect, useRef } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const lastEscTimeRef = useRef(0);
  const [openRightBar, setOpenRightBar] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const bar = document.getElementById("rightBar");
      if (bar && !bar.contains(e.target)) {
        setOpenRightBar(false);

      };
    };

    const handleEscape = (e) => {
      if (e.key !== "Escape") return;

      const now = Date.now();

      if (now - lastEscTimeRef.current <= 300) {
        // ✅ DOUBLE ESC
        setOpenRightBar(false);
        lastEscTimeRef.current = 0; // reset
      } else {
        // ✅ FIRST ESC
        lastEscTimeRef.current = now;
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    
    }
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