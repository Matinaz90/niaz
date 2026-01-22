import { useNavigate } from 'react-router-dom';
import'./2_home_rightBar'
import { useGlobal } from "../GlobalContext";


function Right_bar(){

  const { openRightBar, setOpenRightBar } = useGlobal();
  const navigate = useNavigate();

    return(
        <div id='rightBar' className={`right_bar ${openRightBar ? 'open' : ''}`}>
          <nav className="right-bar-nav">
            <div className='optionDiv'>
              <div className='optionDivchildfinalPage'>
                <a 
                  className="right-bar-link"
                  onClick={() => navigate("/home")}
                >خانه</a>

                <a 
                  className="right-bar-link"
                  onClick={() => navigate("/car")}
                >ماشین</a>

                <a 
                  className="right-bar-link"
                  onClick={() => navigate("/employ")}
                >استخدام</a>
              </div>
            </div>
          </nav>
        </div>
    )

}

export default Right_bar