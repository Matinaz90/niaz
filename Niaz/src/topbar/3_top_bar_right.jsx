import './top_bar.css'
import CityDropdown from './4_city_dropdown'
import { useGlobal } from "../GlobalContext";
import { useState } from 'react';

function Top_bar_right() {
    const { setOpenRightVal } = useGlobal();

const handleClick = () => {
    setOpenRightVal(true);
};

    return (
        <div className='top_rightbar_countaner'>
            <CityDropdown />

            <img
                id="hamburgurMenu"
                className="hamburgurImage"
                src="/hamburger-menu.svg"
                onClick={handleClick}
            />
        </div>
    );
}

export default Top_bar_right;
