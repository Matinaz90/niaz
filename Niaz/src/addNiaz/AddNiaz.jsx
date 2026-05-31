import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import './AddNiaz.css'
import { useGlobal } from '../GlobalContext';


export default function CreateNiaz(){
  const navigate = useNavigate();
  
  const [mode, setMode] = useState('options');
  const {locations} = useGlobal();
  const [niazText, setniazText] = useState(':نیاز شما')
  const [WhichDivOpenInner, setWhichDivOpenInner] = useState('');
  const [openhelpbar, setopenhelpbar] = useState(false)
  const [openOrCloseImage, setopenOrCloseImage] = useState(false)
  const [imageId, setimageId] = useState('')
  const [productNum, setproductNum] = useState()
  const [showRelease, setshowRelease] = useState()
  const [mainPage, setmainPage] = useState(true)
  const [problemText, setproblemText] = useState('')

  const [whatCategory, setwhatCategory] = useState('x');
  const [whatInnerCategory, setwhatInnerCategory] = useState('x');
  const [product, setproduct] = useState({"price1": 'x', "price2": 'x', "city": 'x', "innerCity": 'x', "val1": 'x', "val2": 'x', "val3": 'x', "val4": 'x', "val5": 'x', "val6": 'x', "val7": 'x', "val8": 'x', "val9": 'x', "val10": 'x', "val11": 'x', "val12": 'x', "val13": 'x', "val14": 'x', "val15": 'x', "val16": 'x'})
  const [productLocation, setproductLocation] = useState({"city": 'x', "innerCity": 'x'})

  const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
  const persianNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  const faces = ['فرقی ندارد' ,'شمالی', 'جنوبی', 'شرقی', 'غربی']
  const facesSymbols = ['o' ,'n', 's', 'w', 'e']
  const facesSymbolsToface = {'o': 'فرقی ندارد','n': 'شمالی', 's': 'جنوبی', 'w': 'شرقی', 'e': 'غربی'}
  const bahr = ['فرقی ندارد' ,'۱', '۲', '۳']
  const bahrSymbols = ['a' ,'m', 'q', 'r']
  const bahrSymbolsTobahr = {'a': 'فرقی ندارد','m': '۱', 'q': '۲', 'r': '۳'}
  const years = useMemo(() => Array.from({ length: 1405 - 1330 + 1 }, (_, i) => String(1405 - i)));
  const num6palas = ['فرقی ندارد' ,'۱', '۲', '۳', '۴', '۵', '۶', '+۶']
  const num6palasSymbols = ['u' ,'z', 'y', 'b', 'c', 'd', 'f', 'g']
  const num6palasSymbolsnum6palas = {'u': 'فرقی ندارد', 'z': '۱', 'y': '۲', 'b': '۳', 'c': '۴', 'd': '۵', 'f': '۶', 'g': '+۶'};
  const trueOrFalse = ['فرقی ندارد' ,'داشته باشه', 'نداشته باشه']
  const trueOrFalseSymbols = ['k' ,'g', 'f']
  const trueOrFalseSymbolsToTrueOrFalse = {'k': 'فرقی ندارد', 'g': 'داشته باشه', 'f': 'نداشته باشه'};
  const joinbuildpersentoptions = ['مالک ۳۰ / ۷۰ سازنده', 'مالک ۴۰ / ۶۰ سازنده', 'مالک ۵۰ / ۵۰ سازنده', 'مالک ۶۰ / ۴۰ سازنده', 'مالک ۷۰ / ۳۰ سازنده'];
  const joinbuildpersentoptionsSymbols =  ['1', '2', '3', '4', '5']
  const joinbuildpersentoptionsSymbolstoVals = {'1': 'مالک ۳۰ / ۷۰ سازنده', '2': 'مالک ۴۰ / ۶۰ سازنده', '3': 'مالک ۵۰ / ۵۰ سازنده', '4': 'مالک ۶۰ / ۴۰ سازنده', '5': 'مالک ۷۰ / ۳۰ سازنده'}
  const ground = ['مسکونی', 'تجاری', 'کشاورزی','باغداری']
  const groundSymbols = ['m', 't', 'c', 'b']
  const groundSymbolsToground = {'m': 'مسکونی', 't': 'تجاری', 'c': 'کشاورزی', 'b': 'باغداری'}
  const homePages = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

  const checkVals = (val1, val2, text1, text2, clac) => {
    if(Number(val1) > Number(val2)){
      triggerError(`در ${text1} عدد دوم از عدد اول کوچک تر است`)
      return false
    } else if(clac){
      triggerError(text2)
      return false
    } else {
      return true
    }
  }

  const triggerError = (text) => {
    setproblemText(text)
    setTimeout(() => {
    setproblemText('')
    }, 2000);
  };

  const conformAndSendTest = () => {
    if(!showRelease){triggerError('.لطفا همه کادر ها را پر کنید')}
    if(mode == 'a'){
      if(
        checkVals(product.val1, product.val2, 'متراژ', 'اختلاف متراژ بیشتر از ۲۰ باشد', eval('Number(product.val1) + 20 < product.val2')) &&
        checkVals(product.price1, product.price2, 'بودجه', 'اختلاف بودجه من بیشتر از یک‌پنجم عدد اول باشد', eval('Number(product.price1) / 5 + Number(product.price1) < product.price2'))
      ){console.log('done')}
    }
    if(mode == 'b'){
      if(
        checkVals(product.val1, product.val2, 'متراژ', 'اختلاف متراژ بیشتر از ۲۰ باشد', eval('Number(product.val1) + 20 < product.val2')) &&
        checkVals(product.val4, product.val5, 'متراژ', 'اختلاف سال ساخت بیشتر از ۱۰ باشد', eval('Number(product.val1) + 10 < product.val2')) &&
        checkVals(product.price1, product.price2, 'بودجه', 'اختلاف بودجه من بیشتر از یک‌پنجم عدد اول باشد', eval('Number(product.price1) / 5 + Number(product.price1) < product.price2'))
      ){console.log('done')}
    }
  }

  useEffect(() => {
    const keys = Object.keys(product);
    const keysToKeep = keys.slice(0, productNum);
    
    const newProduct = keysToKeep.reduce((acc, key) => {
      acc[key] = product[key];
      return acc;
    }, {});

    if(imageId != ''){
      if(Object.values(newProduct).some(val => val == 'x') || Object.values(newProduct).some(val => val == '')){
        setshowRelease(false)
      } else {
        setshowRelease(true)
      }
    } else {
      setshowRelease(false)
    }

  }, [product, imageId])

  useEffect(() => {
    homePages.includes(mode) ? (setmainPage(false), setniazText(':مشخصات نیاز شما')) : (setmainPage(true),  setniazText(':نیاز شما'))
  }, [mode])

  useEffect(() => {
    let timeoutId = null;

    const handleKeyUp = (e) => {
      if (e.key === 'Escape') {
        if(homePages.includes(mode)){
          setMode('Home')
        } else if (mode == 'Home'){
          setMode('options')
        } else {
          window.location.href = '/';
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
        }, 100);
      }
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [mode]);

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

  const priceChange = (id, whatChange) => {
    const num = product[whatChange];
    return(
      <div id={id}>
        <div className='priceFormatDivProduct'>{formatPrice(CleanVals(num, englishNums))}</div>
      </div>
    )   
  }

  const formatPrice = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num <= 0) return '';
    if (num >= 1_000_000_000) return (<div>{englishToPersianNumber((num / 1_000_000_000).toFixed(3).replace(/\.0+$/, ''))} میلیارد</div>);
    if (num >= 1_000_000) return (<div>{englishToPersianNumber((num / 1_000_000).toFixed(3).replace(/\.0+$/, ''))} میلیون</div>);
    if (num >= 1_000) return (<div>{englishToPersianNumber((num / 1_000).toFixed(3).replace(/\.0+$/, ''))} هزار تومان</div>) ;
    return (<div>{englishToPersianNumber(num)} تومان</div>);
  };

  const divs = (val, click, clickVal, checkNum) => {
    return(
      <div className='choseButtonDiv' onLoad={() => setproductNum(checkNum)}>
          <div className='choseButton'>
            {val}
          </div>
          <div className='applyButtonDiv'>
            <button type="button" className={`backButton ${mainPage ? '' : 'newLoac'}`} onClick={() => click(clickVal)}>بازگشت</button>
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
        divs(<>{button('خانه', setMode, 'Home','h', setwhatCategory, true)} {button('وسایل نقلیه', setMode, 'Vehicle', 'v', setwhatCategory, true)} </>, navigate, '/', 0)
    )
  }

  const choseHome = () => {
    return(
        divs(<>
          {button('مشارکت ساخت', setMode, 'a', 'a', setwhatInnerCategory, true)} 
          {button('آپارتمان', setMode, 'b', 'b', setwhatInnerCategory, true)} 
          {button('مغازه', setMode, 'c', 'c', setwhatInnerCategory, true)} 
          {button('ویلا', setMode, 'd', 'd', setwhatInnerCategory, true)} 
          {button('زمین', setMode, 'e', 'e', setwhatInnerCategory, true)} 
          {button('اجاره اپارتمان', setMode, 'f', 'f', setwhatInnerCategory, true)}
          {button('اجاره مغازه', setMode, 'g', 'g', setwhatInnerCategory, true)} 
          {button('اجاره ویلا', setMode, 'h', 'h', setwhatInnerCategory, true)} 
        </>, setMode, 'options', 0)
    )
  }

  const imageSelect = (maxNumImg) => {
    const images = Array.from({ length: maxNumImg }, (_, i) => i + 1);

    return (
      <div className='addNiazImageProductDiv'>
        {images.map((index) => (
          <img key={index} src={`/product/${index}.png`} onClick={() => {setimageId(index), setopenOrCloseImage(false)}} className='addNiazImageProduct'/>
        ))}
      </div>
    );
  }

  //pattern="^[0-9۰-۹٠-٩]*$"
  //inputs

  const normalInput = (whatVal, checkSymbol, width, maxLength, id) => {
    return(
      <>
        <input className='pagesTextInput' id={id} style={{ width: width }} maxLength={maxLength + 1} value={englishToPersianNumber(valOrEmpity(product[whatVal]))} 
        onChange={(e) => {
          let newValue = persianToEnglishNumber(e.target.value);
          newValue = CleanVals(newValue, checkSymbol);
          if (newValue.length > maxLength) {
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

  const drowpdownInput = (whatChange, dropdownVals, WhichDivOpenHere, whatsymbol, whatShow, width, isNumber, checkSymbol, whatset) => {
    return(
      <>
        <div className='pagesTextInnerDiv' style={{ width: width }} onClick={(e) => {e.stopPropagation(), setWhichDivOpenInner(prev => (prev == '' ? WhichDivOpenHere : ''))}}>{whatShow}
          {WhichDivOpenInner == WhichDivOpenHere && (
            <div id='dropDownProductLessRadius' className='dropDownProduct'>
                {dropdownVals.map((value, index) => (
                    <p className='dropDownText' key={value}
                        onClick={() => {
                            whatset(prev => ({
                            ...prev,
                            [whatChange]: 
                              String(whatset) == 'setproduct' ? CleanVals(isNumber ? persianToEnglishNumber(whatsymbol[index]) : whatsymbol[index], checkSymbol) : 
                              whatChange == 'city' ? (whatset({"city": whatsymbol[index], "innerCity": 'x'})) : whatsymbol[index] 
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

  const metrage = (whatValx1, whatValx2) => {
    return(
      <>
        <div className='pagesText' >متراژ: بین {normalInput(whatValx1, englishNums, '80px', 5, 'inputMetrage1')} تا {normalInput(whatValx2, englishNums, '80px', 5, 'normalInput2')}</div>
      </>
    )
  }

  const buildMetrage = (whatValx1, whatValx2) => {
    return(
      <>
        <div className='pagesText' >زیربنا: بین {normalInput(whatValx1, englishNums, '80px', 5, 'buildMetrage1')} تا {normalInput(whatValx2, englishNums, '80px', 5, 'buildMetrage2')}متر</div>
      </>
    )
  }

  const face = (whatValx1, whatValx2) => {
    return(
      <>
        <div className='pagesText' >جهت ساختمان: {drowpdownInput(whatValx1, faces, 'faces' ,facesSymbols, facesSymbolsToface[valOrEmpity(product[whatValx1])], '70px', false, facesSymbols, setproduct)}</div>
        <div className='pagesText' >بحر ساختمان: {drowpdownInput(whatValx2, bahr, 'bahr' ,bahrSymbols, bahrSymbolsTobahr[valOrEmpity(product[whatValx2])], '70px', true, bahrSymbols, setproduct)}</div>
      </>
    )
  }

  const joinbuild = (whatVal) => {
    return(
      <>
        <div className='pagesText' >درصد مشارکت ساخت: {drowpdownInput(whatVal, joinbuildpersentoptions, 'joinbuildpersentoptions', joinbuildpersentoptionsSymbols, joinbuildpersentoptionsSymbolstoVals[valOrEmpity(product[whatVal])], '200px', true, joinbuildpersentoptionsSymbols, setproduct)}</div>
      </>
    )
  }

  const price = () => {
    return(
      <>
        <div className='pagesText' >بودجه من:</div>
        <div className='pagesText marginRight'>بین {normalInput('price1', englishNums, '110px', 13, 'priceInput1')}{priceChange('priceShow', 'price1', englishToPersianNumber(CleanVals(product.price1, englishNums)))}</div>
        <div className='pagesText marginRight'><p className='untilToMid'>تا</p> {normalInput('price2', englishNums, '110px', 13, 'priceInput2')}{priceChange('priceShow', 'price2', englishToPersianNumber(CleanVals(product.price2, englishNums)))}</div>
      </>
    )
  }
  
  const priceRent = (whatValx1, whatValx2) => {
    return(
      <>
        <div className='pagesText'>:پول پیش</div>
        <div className='pagesText marginRight'>بین {normalInput('price1', englishNums, '110px', 13, 'priceAll1')}{priceChange('priceShow', 'price1', englishToPersianNumber(CleanVals(product.price1, englishNums)))}</div>
        <div className='pagesText marginRight'><p className='untilToMid'>تا</p> {normalInput('price2', englishNums, '110px', 13, 'priceAll2')}{priceChange('priceShow', 'price2', englishToPersianNumber(CleanVals(product.price2, englishNums)))}</div>
        <div className='pagesText'>:اجاره ماهانه</div>
        <div className='pagesText marginRight'>بین {normalInput(whatValx1, englishNums, '110px', 13, 'priceRent1')}{priceChange('priceShow', 'price1', englishToPersianNumber(CleanVals(product.price1, englishNums)))}</div>
        <div className='pagesText marginRight'><p className='untilToMid'>تا</p> {normalInput(whatValx2, englishNums, '110px', 13, 'priceRent2')}{priceChange('priceShow', 'price2', englishToPersianNumber(CleanVals(product.price2, englishNums)))}</div>
      </>
    )
  }

  const image = (maxNumImg) => {
    return(
      <>
        <div className='pagesText'>عکس:
          <div className='addNiazImg' onClick={() => setopenOrCloseImage(prev => !prev)}>{
            imageId == '' ? 
            <div  className='addNiazImageProduct'></div> : 
            <img src={`/product/${imageId}.png`} className='addNiazImageProduct'/>}
            <img className={`AddImageDropDown ${openOrCloseImage ? 'dropDownProductImg180Deg' : ''}`} src='/extend_arrow.png'/>
          </div>
        </div>
          {openOrCloseImage ? imageSelect(maxNumImg) : <></>}
      </>
    )
  }

  const moreInfo = (whatVal) => {
    return(
      <>
        <div className='pagesText' >توضیحات بیشتر: </div>
        <div className='pagesText marginRight'>
          <textarea 
            className='moreInfo' 
            id='moreInfo' 
            minLength='0' 
            maxLength='2000'
            value={englishToPersianNumber(valOrEmpity(product[whatVal]))}
            onChange={(e) => {
              setproduct((prev) => ({
                ...prev,
                [whatVal]: e.target.value
              }));
            }}  
            type="text"
            rows="5" 
          />
          <span className='moreInfoNum'>
            ۲۰۰۰ / {englishToPersianNumber(String(valOrEmpity(product[whatVal]) || '').length)}
          </span>
        </div>
      </>
    )
  }

  const helpText = () => {
    const middleText = () => {
      if(mode == 'a') {
        return(
          <>
            <p className='helpText'>در متراژ اختلاف دو عدد نباید بیشتر ۲۰ باشد.</p>
            <p className='helpText'>در بودجه من اختاف دو عدد نباید بیشتر از یک‌پنجم عدد اول باشد.</p>
          </>
        )
      }
    }
    
    return(
      <div className='helpTextDiv'>
        <p className='helpText'>شما در اینجا نیاز خود را مینویسید.</p>
        {middleText()}
        <p className='helpText'>برای پر رنگ شدن دکمه انتشار باید همه ی کادر ها را پر کنید.</p>
      </div>
    )
  }

  const rooms = (whatVal) => {
    return(
      <>
        <div className='pagesText' >اتاق خواب: {drowpdownInput(whatVal, num6palas, 'roomVals', num6palasSymbols, num6palasSymbolsnum6palas[product[whatVal]], '70px', true, num6palasSymbols, setproduct)}</div>
      </>
    )
  }

  const homeConditions = (whatValx1, whatValx2, whatValx3, whatValx4) => {
    return(
      <>
        <div className='pagesText' >بالاکن: {drowpdownInput(whatValx1, trueOrFalse, 'trueOrFalse1' ,trueOrFalseSymbols, trueOrFalseSymbolsToTrueOrFalse[valOrEmpity(product[whatValx1])], '90px', false, trueOrFalseSymbols, setproduct)}</div>
        <div className='pagesText' >پارکینگ: {drowpdownInput(whatValx2, trueOrFalse, 'trueOrFalse2' ,trueOrFalseSymbols, trueOrFalseSymbolsToTrueOrFalse[valOrEmpity(product[whatValx2])], '90px', false, trueOrFalseSymbols, setproduct)}</div>
        <div className='pagesText' >انباری: {drowpdownInput(whatValx3, trueOrFalse, 'trueOrFalse3' ,trueOrFalseSymbols, trueOrFalseSymbolsToTrueOrFalse[valOrEmpity(product[whatValx3])], '90px', false, trueOrFalseSymbols, setproduct)}</div>
        <div className='pagesText' >اسانسور: {drowpdownInput(whatValx4, trueOrFalse, 'trueOrFalse4' ,trueOrFalseSymbols, trueOrFalseSymbolsToTrueOrFalse[valOrEmpity(product[whatValx4])], '90px', false, trueOrFalseSymbols, setproduct)}</div>
      </>
    )
  }

  const storeConditions = (whatValx1, whatValx2, whatValx3) => {
    return(
      <>
        <div className='pagesText' >آب: {drowpdownInput(whatValx1, trueOrFalse, 'trueOrFalse1' ,trueOrFalseSymbols, trueOrFalseSymbolsToTrueOrFalse[valOrEmpity(product[whatValx1])], '90px', false, trueOrFalseSymbols, false)}</div>
        <div className='pagesText' >برق: {drowpdownInput(whatValx2, trueOrFalse, 'trueOrFalse2' ,trueOrFalseSymbols, trueOrFalseSymbolsToTrueOrFalse[valOrEmpity(product[whatValx2])], '90px', false, trueOrFalseSymbols, false)}</div>
        <div className='pagesText' >گاز: {drowpdownInput(whatValx3, trueOrFalse, 'trueOrFalse3' ,trueOrFalseSymbols, trueOrFalseSymbolsToTrueOrFalse[valOrEmpity(product[whatValx3])], '90px', false, trueOrFalseSymbols, false)}</div>
      </>
    )
  }

  const floor = (whatValx1, whatValx2) => {
    return(
      <>
        <div className='pagesText' >طبقه: {drowpdownInput(whatValx1, num6palas, 'floor' ,num6palasSymbols, num6palasSymbolsnum6palas[product[whatValx1]], '70px', false, num6palasSymbols, setproduct)}</div>
        <div className='pagesText' >واحد در طبقه: {drowpdownInput(whatValx2, num6palas, 'floorinfloor' ,num6palasSymbols, num6palasSymbolsnum6palas[product[whatValx2]], '70px', true, num6palasSymbols, setproduct)}</div>
      </>
    )
  }

  const yearBuild = (whatVal, whatValx2) => {
    return(
      <>
        <div className='pagesText' >سال ساخت: بین {drowpdownInput(whatVal, years, 'yearsx1', years, englishToPersianNumber(valOrEmpity(product[whatVal])), '50px', true, englishNums, setproduct)} تا {drowpdownInput(whatValx2, years, 'yearsx2', years, englishToPersianNumber(valOrEmpity(product[whatValx2])), '50px', true, englishNums, setproduct)}</div>
      </>
    )
  }

  const groundfuncDropdown = (whatValx1) => {
    return(
      <div className='pagesText' >کاربری زمین: {drowpdownInput(whatValx1, ground, 'ground' ,groundSymbols, groundSymbolsToground[valOrEmpity(product[whatValx1])], '70px', false, groundSymbols, setproduct)}</div>
    )
  }

  const city = () => {
    return(
      <>
        <div className='pagesText'>منطقه:</div>
        <div className='pagesText marginRight'> {drowpdownInput('city', Object.keys(locations), 'city', Object.keys(locations), valOrEmpity(productLocation.city), '80px', true, englishNums, setproductLocation)} </div>
        <div className='pagesText marginRight'> {productLocation.city !== 'x' ? drowpdownInput('innerCity', locations[productLocation.city], 'innerCity', locations[productLocation.city], valOrEmpity(productLocation.innerCity), '180px', true, englishNums, setproductLocation) : ''}</div>
      </>
    )
  }

  // pages

  const joinbuildText = () => {
    return(
      divs(<> {metrage('val1', 'val2')} {face('val3', 'val4')} {joinbuild('val5')} {city()} {price()} {image(5)} {moreInfo('val6')}</>, setMode, 'Home', 8)
    )
  }

  const aparteman = () => {
    return(
      divs(<> {metrage('val1', 'val2')} {rooms('val3')} {face('val4', 'val5')} {yearBuild('val6', 'val7')} {floor('val8', 'val9')} {homeConditions('val10', 'val11', 'val12', 'val13')} {city()} {price()} {image(5)} {moreInfo('val14')} </>, setMode, 'Home', 16)
    )
  }

  const store = () => {
    return(
      divs(<> {metrage('val1', 'val2')} {yearBuild('val3', 'val4')} {face('val5', 'val6')} {storeConditions('val7', 'val8', 'val9')} {city()} {price()} {image(5)} {moreInfo('val10')} </>, setMode, 'Home', 12)
    )
  }

  const villa = () => {
    return(
      divs(<> {metrage('val1', 'val2')} {buildMetrage('val3', 'val4')} {rooms('val5')} {face('val6', 'val7')} {yearBuild('val8', 'val9')} {homeConditions('val10', 'val11', 'val12', 'val13')} {city()} {price()} {image(5)} {moreInfo('val14')} </>, setMode, 'Home', 16)
    )
  }

  const groundFunc = () => {
    return(
      divs(<> {metrage('val1', 'val2')} {face('val3', 'val4')} {groundfuncDropdown('val5')} {city()} {price()} {image(5)} {moreInfo('val6')} </>, setMode, 'Home', 8)
    )
  }

  const apartemanRent = () => {
    return(
      divs(<> {metrage('val1', 'val2')} {rooms('val3')} {face('val4', 'val5')} {yearBuild('val6', 'val7')} {floor('val8', 'val9')} {homeConditions('val10', 'val11', 'val12', 'val13')} {city()} {priceRent('val14', 'val15')} {image(5)} {moreInfo('val16')} </>, setMode, 'Home', 18)
    )
  }

  const villaRent = () => {
    return(
      divs(<> {metrage('val1', 'val2')} {buildMetrage('val3', 'val4')} {rooms('val5')} {face('val6', 'val7')} {yearBuild('val8', 'val9')} {homeConditions('val10', 'val11', 'val12', 'val13')} {city()} {priceRent('val14', 'val15')} {image(5)} {moreInfo('val16')} </>, setMode, 'Home', 18)
    )
  }

  const storeRent = () => {
    return(
      divs(<> {metrage('val1', 'val2')} {yearBuild('val3', 'val4')} {face('val5', 'val6')} {storeConditions('val7', 'val8', 'val9')} {city()} {priceRent('val10', 'val11')} {image(5)} {moreInfo('val12')} </>, setMode, 'Home', 14)
    )
  }

  return (
    <div className='addNiaz-countanerx2'>
      {
        openhelpbar 
        ? 
          <div className={`addNiaz-countanerx3 ${openhelpbar ? 'displayBlock' : ''}`} >
            {helpText()}
            <button onClick={() => {setopenhelpbar(false)}} className='helpButton'>بازگشت</button>
          </div>
        :
          <div className={`addNiaz-countaner ${showRelease ? 'morePadding' : ''}`} onClick={() => {setWhichDivOpenInner('')}}>
            <p className='niazText'>{niazText}</p>
            {modeShow('options', typeOfHome)}
            {modeShow('Home', choseHome)}
            {modeShow('a', joinbuildText)}
            {modeShow('b', aparteman)}
            {modeShow('c', store)}
            {modeShow('d', villa)}
            {modeShow('e', groundFunc)}
            {modeShow('f', apartemanRent)}
            {modeShow('g', storeRent)}
            {modeShow('h', villaRent)}
            <button onClick={() => {setopenhelpbar(true)}} className={`helpButton`}>کمک</button>
            {problemText != '' ? <p className='errText'>{problemText}</p> : <></>}
            {mainPage ? <></> :<button onClick={() => {conformAndSendTest()}} className={`conformButton ${showRelease ? '' : 'showConformButton'}`}>انتشار</button>}
          </div>
      }
    </div>
  )
}