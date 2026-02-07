import { useState, useEffect } from "react";
import '../App.css'

// false dark mode // true white mode

function slideModeChanger (){

    const [colorMode, setcolorMode] = useState(() => {
    const stored = localStorage.getItem("colormode");
    return stored ? JSON.parse(stored) : false;
    });

    useEffect(() => {
        localStorage.setItem("colormode", JSON.stringify(colorMode));
    }, [colorMode]);

    return(<div className="slideModeChanger">
        <div className="slideModeChanger_changer"> <span className="icon_sun">☀️</span></div>
        
    </div>)

}

export default slideModeChanger