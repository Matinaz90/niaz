import './top_bar.css'
import CityDropdown from './4_city_dropdown'
import { useGlobal } from "../GlobalContext";
import { useState } from 'react';


function Top_bar_right() {
    const [mode, setmode] = useState('open');
    const { openRightBar, setOpenRightBar } = useGlobal();
    const [clickLocked, setClickLocked] = useState(false);

    return (
        <div className='top_rightbar_countaner'>

            <CityDropdown />

            {mode === 'open' && (
                <img
                id="hamburgurMenu"
                className="hamburgurImage"
                src="/hamburger-menu-light.png"
                onClick={() => {
                    if (clickLocked) return; // ignore extra clicks
                    setClickLocked(true);

                    setOpenRightBar(true);

                    setTimeout(() => {
                    setmode('closed');
                    setClickLocked(false); // unlock after done
                    }, 10);
                }}
                />
            )}

            {mode === 'closed' && (
<img
  id="hamburgurMenu"
  className="hamburgurImage"
  src="/hamburger-menu-light.png"
  onClick={() => {
    if (clickLocked) return; // ignore extra clicks
    setClickLocked(true);

    setTimeout(() => {
      setmode('open');
      setClickLocked(false); // unlock after done
    }, 10);
  }}
/>
            )}

        </div>
    );
}

export default Top_bar_right