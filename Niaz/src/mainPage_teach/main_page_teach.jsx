import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './main_page_teach.css'
import Main_page from '../main_page.jsx'

function Main_page_teach() {

  const navigate = useNavigate();

  const [mode, setmode] = useState('teach_right')

  return (
    <>
        <Main_page></Main_page>
        

        {mode == 'teach_right' && (
          <dev className='teach_buttons_div teach_buttons_div_right'>
            <img className="teach_img teach_img_right" src="../curved_Arrow.png"></img>
            <p>.فیلترهای قیمت را از اینجا تنظیم کنید</p>
            <button onClick={() => setmode('teach_middle')}>بعدی</button>
          </dev>
        )}

        {mode == 'teach_middle' && (
          <dev className='teach_buttons_div teach_buttons_div_middle'>
            <img className="teach_img teach_img_middle" src="../right-arrow.svg"></img>
            <p>.اینجا می‌توانید هر محصولی را دقیق جستجو کنید</p>
            <button onClick={() => setmode('teach_left')}>بعدی</button>
          </dev>
        )}

        {mode == 'teach_left' && (
          <dev className='teach_buttons_div teach_buttons_div_left'>
            <img className="teach_img teach_img_left" src="../curved_Arrow.png"></img>
            <p>.تنظیمات حساب کاربری شما در این قسمت قرار دارد</p>
            <button onClick={() => {
              setmode(), setTimeout(() => {  
              navigate("/"); window.location.reload();}, 500);}}
            >بعدی</button>
          </dev>
        )}


    </>
  ) 
}

export default Main_page_teach
