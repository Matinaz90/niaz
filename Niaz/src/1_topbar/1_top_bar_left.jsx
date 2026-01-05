import { useState, useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './top_bar.css'

function Top_bar_left(){
    const navigate = useNavigate();

    const [isloggedin, setisloggedin] = useState(true)
    const [settingOpenOrClose, setsettingOpenOrClose] = useState(false)

    const refSetting = useRef()

    const allRefs = [
        refSetting
    ];

    useEffect(() => {
        const isInsideAnyRef = (target) =>
        allRefs.some(ref => ref.current?.contains(target));

        const handleClickOutside = (event) => {
        if (!isInsideAnyRef(event.target)) {
            setsettingOpenOrClose(false);
        }
        };

        const handleEscape = (event) => {
        if (event.key === "Escape" && !isInsideAnyRef(event.target)) {
            setsettingOpenOrClose(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
        };
    }, [allRefs]);

    return (
        <div className='top_leftbar_countaner'>
            <img className='niazImage' src='/2.png'  onClick={() =>navigate("/")}/>
                

            <dev ref={refSetting}>
                <h2
                    id="add_user"
                    className="add_user"
                    onClick={() =>
                        isloggedin ? setsettingOpenOrClose(prev => !prev) : navigate("/adduser")
                    }
                    >
                    {isloggedin && (
                        <span className={settingOpenOrClose ? "arrow open" : "arrow"}>{'\u2304'}</span>
                    )}
                    {isloggedin ? "پنل کاربری" : "ورود / ثبت نام"}
                </h2>

                <dev className='setting' style={{ display: settingOpenOrClose ? 'inline-block' : 'none' }} >    
                        <h2 className='setting_options'> افزودن اگهی</h2>
                        <h2 className='setting_options'> ویرایش پروفایل</h2>
                        <h2 className='setting_options'> خروج</h2>
                </dev>
            </dev>
        </div>
    )
}

export default Top_bar_left