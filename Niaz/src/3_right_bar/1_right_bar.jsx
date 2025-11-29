import { ref, useState } from 'react';
import { Link } from 'react-router-dom';
import'./2_home_rightBar'
import { useGlobal } from "../GlobalContext";


function Right_bar(){

  const { openRightBar, setOpenRightBar } = useGlobal();


    return(
        <div id='rightBar' className={`right_bar ${openRightBar ? 'open' : ''}`}>
          <nav className="right-bar-nav">
            <Link to="/home" className="right-bar-link">خانه</Link>
            <Link to="/car" className="right-bar-link">ماشین</Link>
            <Link to="/employ" className="right-bar-link">استخدام</Link>
          </nav>
        </div>
    )

}

export default Right_bar