import { useState, useEffect } from "react";
import './top_bar.css'

function Top_bar_middle(){

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const resize = () => {
        setWidth(window.innerWidth);
        };

        window.addEventListener("resize", resize);
        return () => {
        window.removeEventListener("resize", resize);
        };
    }, []);

    return(
        <div className="search-container">
            <div className="serch_image_countaner">
                <img
                src="/search.png"
                alt="search"
                className="search-icon"
            />
            </div>
            <input
                style={{ width: `${width * 0.3}px` }}
                type="text"
                placeholder="... دنبال چی میگردی"
                className="search-input"
            />
        </div>
    )
}

export default Top_bar_middle