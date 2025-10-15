import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './top_bar.css'

function Top_bar_left(){
      const navigate = useNavigate();

    const [isloggedin, setisloggedin] = useState(false)

    const testFunc = () => {

        if (isloggedin){
            setisloggedin(false)
            document.getElementById('add_user').style.display = "inline-block"
            document.getElementById('user').style.display = "none"
        }else{
            setisloggedin(true)
            document.getElementById('add_user').style.display = "none"
            document.getElementById('user').style.display = "inline-block"
        }
    }

    const userDropdown = (e) =>{
        const value = e.target.value;
        if (value === "logout");
        if (value === "settings");
        if (value === "second");
        e.target.value = "";
    }


    return (<div>
        <img className='niazImage' src='/2.png'  onClick={() =>navigate("/")}/>
        <select className='user' id='user' onChange={userDropdown} defaultValue="">
            <option value="" disabled hidden>&#9660; کاربر</option>
            <option> خروج</option>
            <option> تنظیمات</option>
            <option> ویرایش پروفایل</option>
            <option> شماره دوم</option>
        </select>
        <h2 id='add_user' className='add_user'>ورود / ثبت‌نام</h2>
        <h2 id='add_niaz' className='add_niaz'>افزودن نیاز</h2>
        {/* <button onClick={testFunc}>test</button> */}
        </div>
    )
}

export default Top_bar_left