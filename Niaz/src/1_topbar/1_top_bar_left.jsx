import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './top_bar.css'

function Top_bar_left(){
      const navigate = useNavigate();

    const [isloggedin, setisloggedin] = useState(false)


    return (<div>
        <img className='niazImage' src='/2.png'  onClick={() =>navigate("/")}/>
            
            {/* <option> افزودن اگهی</option>
            <option> خروج</option>
            <option> تنظیمات</option>
            <option> ویرایش پروفایل</option>
            <option> شماره دوم</option> */}
        <h2 id='add_user' onClick={() =>navigate("/adduser")} className='add_user'>ورود</h2>
        </div>
    )
}

export default Top_bar_left