import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './CreateUser.css'

function Add_User(){

  const [mode, setmode] = useState('Number')


  return (
<div className='BodyAddNiaz'>
  {mode === 'Number' && (
    <>
      <div className='PlaceHolderBackground'></div>
      
      <div className='PlaceHolder'>
        <h2>افزودن کاربر</h2>
 
        <button>ثبت</button>
      </div>
    </>
  )}
</div>
  )
}

export default Add_User