import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './CreateUser.css'
import { AddUser, CheckCode } from "../../../api/addUserSms";


function Add_User(){

  const [mode, setmode] = useState('Number')
  
  const [userName, setuserName] = useState("")
  const [numVal, setnumVal] = useState('');
  const [secretCode, setsecretCode] = useState('');

  const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
  const persianNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];

  const persianToEnglishNumber = (val) => {
      return String(val).split("").map(ch => {
      const index = persianNums.indexOf(ch);
      return index > -1 ? englishNums[index] : ch;
    }).join("");
  };

  const englishToPersianNumber = (val) => {
      return String(val).split("").map(ch => {
      const index = englishNums.indexOf(ch);
      return index > -1 ? persianNums[index] : ch;
    }).join("");
  };


  const handleChangeforOneNums = (e, setter, extraFunc) => {
    const raw = persianToEnglishNumber(e.target.value)

    const filtered = raw
    .split('')
    .filter(ch => englishNums.includes(ch) || persianNums.includes(ch))
    .join('');


    let englishVal = persianToEnglishNumber(filtered);
    
    englishVal = englishVal.replace(/^0{2,}/, '0');

    setter(englishVal);
    if (extraFunc) extraFunc(englishVal);
  };

  const cheackNameVal = (raw) => { 
    const s = raw.normalize('NFKC');

    const cleaned = s.replace(/[^\p{L}\p{N}_-]/gu, '');

    return cleaned.length > 12 ? cleaned.slice(-12) : cleaned;
  };

  const numCheackfunc = (raw, num) => { 
    const s = raw

    setnumVal(s.length > num ? s.slice(-num) : s);
  }

  const sendCode = async () => {

    if (userName == '' || numVal == ''){
      el.classList.add('show');
      setTimeout(() => el.classList.remove('show'), 3000);
      return;
    }

    
    const { ok } = (await AddUser(numVal, userName)) || {};
    const el = document.querySelector('.sendCodeProblem');

    if (!ok) {
      if (!el) return;
      el.classList.add('show');
      setTimeout(() => el.classList.remove('show'), 3000);
      return;
    }

    setmode('verfySms');
  }


  return (
    <div className='BodyAddNiaz'>
      {mode === 'Number' && (
        <>
          <div className='PlaceHolderBackground'></div>
          
          <div className='PlaceHolder'>
            <h2>ثبت نام</h2>

            <input value={userName} onChange={(e) => setuserName(cheackNameVal(e.target.value))} placeholder='نام کاربری'></input>

            <input inputMode="numeric" value={englishToPersianNumber(numVal)} onChange={(e) => {handleChangeforOneNums(e, setnumVal, numCheackfunc(e.target.value, 11)) }} placeholder='شماره تماس'></input>


            <div className='centerDiv'>

              <p className='sendCodeProblem'>
                ارسال ناموفق بود؛ دوباره روی «ثبت» بزنید
              </p>

            </div>
            <button onClick={() => sendCode()}>ثبت</button>
            <p className='loginInTextfirst'>ورود به حساب</p>
          </div>
        </>
      )}

      {mode === 'verfySms' && (
        <>
          <div className='PlaceHolderBackground'></div>
          
          <div className='PlaceHolder'>

            <input value={englishToPersianNumber(secretCode)} onChange={(e) => handleChangeforOneNums(e, setsecretCode)} placeholder="کد ورود"></input>
    
            <button onClick={() => {const cheacked = CheckCode(secretCode); if(cheacked == true){
              
            }}}>ثبت</button>
            <p className='loginInTextfirst' onClick={() => setmode('Number')}>تغییر مشخصات</p>
            <p className='loginInTextlast'>ارسال مجدد کد</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Add_User