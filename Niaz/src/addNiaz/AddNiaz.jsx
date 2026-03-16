import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './AddNiaz.css'


export default function CreateNiaz(){
  const navigate = useNavigate();
  const [mode, setMode] = useState('undifide');
  const [WhichDivOpenInner, setWhichDivOpenInner] = useState('');

  const [whatCategory, setwhatCategory] = useState('x');
  const [whatInnerCategory, setwhatInnerCategory] = useState('x');
  const [product, setproduct] = useState({"price": 'x', "val1": 'x', "val2": 'x', "val3": 'x', "val4": 'x', "val5": 'x', "val6": 'x', "val7": 'x', "val8": 'x', "val9": 'x', "val10": 'x', "val11": 'x', "val12": 'x', "val13": 'x', "val14": 'x'})

  const pages = ['h', 'v']
  const pagesInnerHome = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
  const persianNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  const faces = ['فرقی ندارد' ,'شمالی', 'جنوبی', 'شرقی', 'غربی']
  const facesSymbols = ['o' ,'n', 's', 'w', 'e']
  const facesSymbolsToface = {'o': 'فرقی ندارد','n': 'شمالی', 's': 'جنوبی', 'w': 'شرقی', 'e': 'غربی'}
  const bahr = ['1', '2', '3']

  const modeShow = (CurrentMode, whichFunc) => {
    if (CurrentMode == mode) {
      return whichFunc()
    }
  }

  const valOrEmpity = (v) => (v == 'x' ? '' : v)

  const CleanVals = (Num, checkVals) => {
    if(Num <= 0){
      return ''
    }
    return String(Num).split('').map(v => checkVals.includes(v) ? v : '').join('')
  }

  const persianToEnglishNumber = (val) => {
      return String(val).split("").map(ch => {
      const index = persianNums.indexOf(ch);
      return index > -1 ? englishNums[index] : ch;
    }).join("");
  }

  const englishToPersianNumber = (val) => {
      return String(val).split("").map(ch => {
      const index = englishNums.indexOf(ch);
      return index > -1 ? persianNums[index] : ch;
    }).join("");
  }

  const divs = (val, click, clickVal) => {
    return(
      <div className='choseButtonDiv' >
          <div className='choseButton'>
            {val}
          </div>
          <div className='applyButtonDiv'>
            <button type="button" className='backButton' onClick={() => click(clickVal)}>بازگشت</button>
          </div>
      </div>
    )
  }

  const button = (text, onClickBut, onClickval, changeproduct, whatChange, hoverOrNot) => {
    return(
     <div className={`choseInnerButton ${hoverOrNot ? 'choseButtonhover': ''}`} 
     onClick={() => {onClickBut(onClickval); whatChange(changeproduct)}}><img className='choseButtonImg' src='/extend_arrow.png'/> {text} </div>
    )
  }

  const typeOfHome = () => {
    return(
        divs(<>{button('خانه', setMode, 'Home', 'h', setwhatCategory, true)} {button('وسایل نقلیه', setMode, 'Vehicle', 'v', pages, setwhatCategory, true)} </>, navigate, '/')
    )
  }

  // innerPages

  const choseHome = () => {
    return(
        divs(<>
          {button('مشارکت ساخت', setMode, 'undifide', 'a', setwhatInnerCategory, true)} 
          {button('آپارتمان', setMode, 'undifide', 'b', setwhatInnerCategory, true)} 
          {button('مغازه', setMode, 'undifide', 'c', setwhatInnerCategory, true)} 
          {button('ویلا', setMode, 'undifide', 'd', setwhatInnerCategory, true)} 
          {button('زمین', setMode, 'undifide', 'e', setwhatInnerCategory, true)} 
          {button('اجاره اپارتمان', setMode, 'undifide', 'f', setwhatInnerCategory, true)}
          {button('اجاره مغازه', setMode, 'undifide', 'g', setwhatInnerCategory, true)} 
        </>, setMode, 'options')
    )
  }


  //pattern="^[0-9۰-۹٠-٩]*$"
  //inputs

  const normalInput = (placeholder, whatVal, checkSymbol) => {
    return(
      <>
        <input className='pagesTextInput' placeholder={placeholder} maxLength={6} value={englishToPersianNumber(valOrEmpity(product[whatVal]))} 
        onChange={(e) => {
          let newValue = persianToEnglishNumber(e.target.value);
          newValue = CleanVals(newValue, checkSymbol);
          if (newValue.length > 5) {
            newValue = newValue.slice(1);
          }
          setproduct((prev) => ({
            ...prev,
            [whatVal]: newValue
          }));
        }}  type="text"/>
      </>
    )
  }

  const drowpdownInput = (whatChange, dropdownVals, WhichDivOpenHere, whatsymbol, whatShow, width, isNumber) => {
    return(
      <>
        <div className='pagesTextInnerDiv'  style={{ width: width }}  onClick={(e) => {e.stopPropagation(),setWhichDivOpenInner(prev => (prev == '' ? WhichDivOpenHere : ''))}}>{whatShow}
          {WhichDivOpenInner == WhichDivOpenHere && (
            <div className='dropDownProduct'>
                {dropdownVals.map((value, index) => (
                    <p className='dropDownText' key={value}
                        onClick={() => {
                            setproduct(prev => ({
                            ...prev,
                            [whatChange]: 
                                isNumber? persianToEnglishNumber(whatsymbol[index]) : whatsymbol[index]
                            }))
                        }}
                    >
                        {isNumber ? englishToPersianNumber(value) : value}
                    </p>
                ))}
            </div>)}
            <img className={`dropDownProductImg ${WhichDivOpenInner == WhichDivOpenHere ? 'dropDownProductImg180Deg' : ''}`} src='/extend_arrow.png'/>
        </div>
      </>
    )
  }

  // texts

  const metrage = () => {
    return(
      <>
        <div className='pagesText' >متراژ از {normalInput("۱۰۰", 'val1', englishNums)} تا {normalInput("۱۲۰", 'val2', englishNums)}متر.</div>
      </>
    )
  }

  const face = () => {
    return(
      <>
        <div className='pagesText' >جهت ساختمان: {drowpdownInput("val3", faces, 'faces' ,facesSymbols, facesSymbolsToface[valOrEmpity(product.val3)], '60px')}<p>.</p></div>
        <div className='pagesText' >بحر ساختمان: {drowpdownInput("val4", bahr, 'bahr' ,bahr, englishToPersianNumber(valOrEmpity(product.val4)), '20px', true)}<p>.</p></div>
      </>
    )
  }

  // homeCategoryes

  const joinbuildText = () => {
    return(
      divs(<> {metrage()} {face()} </>, setMode, 'Home')
    )
  }

  useEffect(() => {
    console.log(whatCategory)
    console.log(whatInnerCategory)
    console.log(product)
  }, [product, whatCategory, whatInnerCategory])

  return (
    <div className='addNiaz-countaner' onClick={(e) => {setWhichDivOpenInner('')}}>
      {modeShow('options', typeOfHome)}
      {modeShow('Home', choseHome)}
      {modeShow('undifide', joinbuildText)}
    </div>
  )
}