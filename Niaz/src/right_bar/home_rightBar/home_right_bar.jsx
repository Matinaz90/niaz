import { useEffect, useMemo, useState } from 'react'
import  '../main_rightBar/global_rightBar.css'
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../../GlobalContext';

function HomeRightBar(){
    const navigate = useNavigate();

    const [mode, setmode] = useState('options')
    const [WhichDivOpen, setWhichDivOpen] = useState('options')
    const [WhichDivOpenInner, setWhichDivOpenInner] = useState('')
    const { OpenRightVal ,setOpenRightVal } = useGlobal();

    const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
    const persianNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];

    const years = useMemo(() => Array.from({ length: 1405 - 1330 + 1 }, (_, i) => String(1405 - i)));

    const joinbuildpersentoptions = ['مالک ۳۰ / ۷۰ سازنده', 'مالک ۴۰ / ۶۰ سازنده', 'مالک ۵۰ / ۵۰ سازنده', 'مالک ۶۰ / ۴۰ سازنده', 'مالک ۷۰ / ۳۰ سازنده'];
    const joinbuildpersentoptionsSymbols =  ['1', '2', '3', '4', '5']
    const joinbuildpersentoptionsSymbolstoVals = {'1': 'مالک ۳۰ / ۷۰ سازنده', '2': 'مالک ۴۰ / ۶۰ سازنده', '3': 'مالک ۵۰ / ۵۰ سازنده', '4': 'مالک ۶۰ / ۴۰ سازنده', '5': 'مالک ۷۰ / ۳۰ سازنده'}

    const faces = ['شمالی', 'جنوبی', 'شرقی', 'غربی']
    const facesSymbols = ['n', 's', 'w', 'e']
    const facesSymbolsToface = {'n': 'شمالی', 's': 'جنوبی', 'w': 'شرقی', 'e': 'غربی'}


    const ground = ['مسکونی', 'تجاری', 'کشاورزی','باغداری']
    const groundSymbols = ['m', 't', 'c', 'b']
    const groundSymbolsToground = {'m': 'مسکونی', 't': 'تجاری', 'c': 'کشاورزی', 'b': 'باغداری'}

    const bahr = ['1', '2', '3']
    const rooms = (useMemo(() => Array.from({ length: 6 }, (_, i) => String(i + 1)), []));

    const topBarPath = window.location.href
    
    const Pages = ['J', 'A', 'V', 'R', 'S', 'Q', 'G'];
    const linkBarVal = topBarPath.split('/').some(a => Pages.includes(a)) ? topBarPath.split('/').pop().split(',') : '';

    const [linkBarChange, setLinkBarChange] = useState(null)

    const valOrEmpity = (v) => (v == 'x' ? '' : v)

    useEffect(() => {
        if(topBarPath.includes('J')){
            setmode('JoinBuild')
            const newLinkBar = {
                metrage: valOrEmpity(linkBarVal[0]),
                face: valOrEmpity(linkBarVal[1]),
                bahr:  valOrEmpity(linkBarVal[2]),
                joinbuildpersent: valOrEmpity(linkBarVal[3]),
                price: valOrEmpity(linkBarVal[4]),
            };
            setLinkBarChange(newLinkBar);
        } else if(topBarPath.includes('A')){
            setmode('Aparteman')
            const newLinkBar = {
                metrage: valOrEmpity(linkBarVal[0]),
                rooms: valOrEmpity(linkBarVal[1]),
                year: valOrEmpity(linkBarVal[2]),
                face: valOrEmpity(linkBarVal[3]),
                bahr:  valOrEmpity(linkBarVal[4]),
                floor: valOrEmpity(linkBarVal[5]),
                floorInfloor: valOrEmpity(linkBarVal[6]),
                balaon: valOrEmpity(linkBarVal[7]),
                parking: valOrEmpity(linkBarVal[8]),
                anbary: valOrEmpity(linkBarVal[9]),
                asansor: valOrEmpity(linkBarVal[10]),
                price: valOrEmpity(linkBarVal[11]),
            };
            setLinkBarChange(newLinkBar);
        } else if(topBarPath.includes('V')){
            setmode('Villa')
            const newLinkBar = {
                metrage: valOrEmpity(linkBarVal[0]),
                rooms: valOrEmpity(linkBarVal[1]),
                year: valOrEmpity(linkBarVal[2]),
                face: valOrEmpity(linkBarVal[3]),
                bahr:  valOrEmpity(linkBarVal[4]),
                balaon: valOrEmpity(linkBarVal[5]),
                parking: valOrEmpity(linkBarVal[6]),
                anbary: valOrEmpity(linkBarVal[7]),
                asansor: valOrEmpity(linkBarVal[8]),
                price: valOrEmpity(linkBarVal[9]),
            };
            setLinkBarChange(newLinkBar);
        } else if(topBarPath.includes('R')){
            setmode('ApartemanRent')
            const newLinkBar = {
                metrage: valOrEmpity(linkBarVal[0]),
                rooms: valOrEmpity(linkBarVal[1]),
                year: valOrEmpity(linkBarVal[2]),
                face: valOrEmpity(linkBarVal[3]),
                bahr:  valOrEmpity(linkBarVal[4]),
                floor: valOrEmpity(linkBarVal[5]),
                floorInfloor: valOrEmpity(linkBarVal[6]),
                balaon: valOrEmpity(linkBarVal[7]),
                parking: valOrEmpity(linkBarVal[8]),
                anbary: valOrEmpity(linkBarVal[9]),
                asansor: valOrEmpity(linkBarVal[10]),
                beforePrice: valOrEmpity(linkBarVal[11]),
                monthPrice: valOrEmpity(linkBarVal[12]),
            };
            setLinkBarChange(newLinkBar);
        } else if(topBarPath.includes('S')){
            setmode('Store')
            const newLinkBar = {
                metrage: valOrEmpity(linkBarVal[0]),
                year: valOrEmpity(linkBarVal[1]),
                face: valOrEmpity(linkBarVal[2]),
                bahr:  valOrEmpity(linkBarVal[3]),
                electricity: valOrEmpity(linkBarVal[4]),
                water: valOrEmpity(linkBarVal[5]),
                gas: valOrEmpity(linkBarVal[6]),
                price: valOrEmpity(linkBarVal[7]),
            };
            setLinkBarChange(newLinkBar);
        } else if(topBarPath.includes('Q')){
            setmode('StoreRent')
            const newLinkBar = {
                metrage: valOrEmpity(linkBarVal[0]),
                year: valOrEmpity(linkBarVal[1]),
                face: valOrEmpity(linkBarVal[2]),
                bahr:  valOrEmpity(linkBarVal[3]),
                floorInfloor: valOrEmpity(linkBarVal[4]),
                store: valOrEmpity(linkBarVal[5]),
                electricity: valOrEmpity(linkBarVal[6]),
                water: valOrEmpity(linkBarVal[7]),
                gas: valOrEmpity(linkBarVal[8]),
                beforePrice: valOrEmpity(linkBarVal[9]),
                monthPrice: valOrEmpity(linkBarVal[10]),
            };
            setLinkBarChange(newLinkBar);
        } else if(topBarPath.includes('G')){
            setmode('Ground')
            const newLinkBar = {
                metrage: valOrEmpity(linkBarVal[0]),
                face: valOrEmpity(linkBarVal[1]),
                bahr:  valOrEmpity(linkBarVal[2]),
                ground: valOrEmpity(linkBarVal[3]),
                price: valOrEmpity(linkBarVal[4]),
            };
            setLinkBarChange(newLinkBar);
        } else {
            setmode('options')
        }
    }, [topBarPath, OpenRightVal])


    const modeShow = (CurrentMode, whichFunc) => {
        if (CurrentMode == mode) {
            return whichFunc()
        }
    }

    const formatPrice = (value) => {
        const num = parseInt(value, 10);
        if (isNaN(num) || num <= 0) return '';
        if (num >= 1_000_000_000) return (<div>{englishToPersianNumber((num / 1_000_000_000).toFixed(3).replace(/\.0+$/, ''))} میلیارد</div>);
        if (num >= 1_000_000) return (<div>{englishToPersianNumber((num / 1_000_000).toFixed(3).replace(/\.0+$/, ''))} میلیون</div>);
        if (num >= 1_000) return (<div>{englishToPersianNumber((num / 1_000).toFixed(3).replace(/\.0+$/, ''))} هزار تومان</div>) ;
        return (<div>{englishToPersianNumber(num)} تومان</div>);
    };

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

    const CleanVals = (Num, checkVals) => {
        if(Num <= 0){
            return ''
        }
        return String(Num).split('').map(v => checkVals.includes(v) ? v : '').join('')
    }

    const AddLinkBar = (addedLink) => {
    const key = addedLink.split(':')[0];
    let cleanPath = location.pathname.replace(new RegExp(`${key}:[^/]*`, 'g'), '').replace(/\/+$/, '');
    navigate(`${cleanPath}/${addedLink}`);
    };

    const ConformLinkBar = () => {
        const ChangeUrl = () => {
            setWhichDivOpenInner()
            setWhichDivOpen()
        }
        return (
            <button className='applyButton' onClick={() => ChangeUrl()}>تایید</button>
        )
    };

    const ChangeLinkBar = () => {
        const ChangeUrl = () => {
            const val = Object.values(linkBarChange).map(v => v == '' ? 'x' : v)
            window.history.replaceState({}, '', `${val}`)
            setOpenRightVal(false)
        }
        return (
            <>
                <div className='applyButtonDivRightBar'>
                    <button className='applyButton backing' onClick={() => {navigate('/home'), setmode('options')}}>بازگشت</button>
                    <button className='applyButton minePage' onClick={() => ChangeUrl()}>تایید</button>
                </div>
            </>
        )
    }

    const typeOfHome = () => {
        return(
            <div className='inputsDiv'>
                <div>
                    <div className='buttons' onClick={() => AddLinkBar('J/x,x,x,x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> مشارکت ساخت </div>
                    <div className='buttons' onClick={() => AddLinkBar('A/x,x,x,x,x,x,x,x,x,x,x,x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> آپارتمان </div>
                    <div className='buttons' onClick={() => AddLinkBar('S/x,x,x,x,x,x,x,x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> مغازه </div> 
                    <div className='buttons' onClick={() => AddLinkBar('V/x,x,x,x,x,x,x,x,x,x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> ویلا </div>
                    <div className='buttons' onClick={() => AddLinkBar('G/x,x,x,x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> زمین </div>
                    <div className='buttons' onClick={() => AddLinkBar('R/x,x,x,x,x,x,x,x,x,x,x,x,x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> اجاره اپارتمان</div>
                    <div className='buttons' onClick={() => AddLinkBar('Q/x,x,x,x,x,x,x,x,x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> اجاره مغازه</div>
                </div>
                <div className='applyButtonDivRightBar'>
                    <button type="button" className='applyButton backing' onClick={() => {navigate('/')}}>بازگشت</button>
                </div>
            </div>
        )
    }

    const openButton = (name, WhichDiv) => {
        return(
            <div 
                className={`ClickInputs ${WhichDivOpen === WhichDiv ? 'open' : ''}`} 
                onClick={(e) => {
                    e.stopPropagation(),
                    WhichDivOpen == WhichDiv ? setWhichDivOpen('') : setWhichDivOpen(WhichDiv)}}
                >
                    <img src='/extend_arrow.png' className={`rightArrowRightBar ${WhichDivOpen === WhichDiv ? 'open' : ''}`}></img><p className='ClickInputsText'>:{name}</p>
            </div>
        )
    }

    const dropdowns = (dropdownVals, whatChange , id, WhichDivOpenHere, whatsymbol, value, checkSymbol) => {
        return(
            <>
                <div className='InputDiv'>
                    {WhichDivOpenInner != WhichDivOpenHere && (
                    <input
                        autoComplete='new-password'
                        id={id} className="inputs" type="text"
                        value={value}
                        onClick={(e) => {e.stopPropagation(), setWhichDivOpenInner(WhichDivOpenHere)}}
                        readOnly
                    />
                    )}
                    {WhichDivOpenInner == WhichDivOpenHere && (
                        <div className='dropDownRightBar'>
                            {dropdownVals.map((value, index) => (
                                <p className='dropDownTextRightBar' key={value}
                                    onClick={() => {
                                        setLinkBarChange(prev => ({
                                        ...prev,
                                        [whatChange]: 
                                            CleanVals(whatsymbol[index], checkSymbol)
                                        }))
                                    }}
                                >
                                    {value}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </>
        )
    }

    const input = (id, whatChange, val) => {
        return(
            <div className='InputDiv'>
                <input
                    id={id} className="inputs cursor" type="text"
                    autoComplete='new-password'
                    value={val}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) => {
                        setLinkBarChange(prev => ({
                        ...prev,
                        [whatChange]: 
                            CleanVals(persianToEnglishNumber(e.target.value), englishNums)
                        }));
                    }}
                />
            </div>
        )
    }

    const priceChange = (id, whatChange) => {
        const num = linkBarChange[whatChange];
        const changeVal = (num) => {
            setLinkBarChange(prev => ({
                ...prev,
                [whatChange]: 
                    CleanVals(persianToEnglishNumber(num), englishNums)
            }));
        }
        return(
            <div id={id}>
                <div className='priceChangeDiv'>
                    {num <= 999 && num > 0 ? (
                        <>
                            <div className='priceChangeDivText' onClick={() => changeVal(num * 1000000000)}><p>میلیارد </p>{num}</div>
                            <div className='priceChangeDivText' onClick={() => changeVal(num * 1000000)}><p>میلیون </p>{num}</div>
                        </>
                    ) : <div></div>}
                    </div>
                <div className='priceFormatDiv'>{formatPrice(CleanVals(num, englishNums))}</div>
            </div>
        )   
    }

    const condition = (id, text, whatChange) => {
        return(
            <div className="InputDiv padding" id={id}>
                <p className="inputTag" 
                onClick={() => {
                    setLinkBarChange(prev => ({
                    ...prev,
                    [whatChange]: 
                        CleanVals(linkBarChange[whatChange] == 't' ? 'f' : 't', ['t', 'f'])
                    }))
                }}>:{text} 
                    <input type='checkbox' checked={linkBarChange[whatChange] == 't'} readOnly className='checkBox'></input>
                </p>
            </div>
        )
    }

    const innerPageSelection = (WhichDiv,name , valshow) => {
        return(
            <div className={`foldingDiv ${WhichDivOpen === WhichDiv ? 'open' : ''}`} 
            onClick={(e) => {e.stopPropagation(), setWhichDivOpenInner('')}}>
                {openButton(name, WhichDiv)}
                {WhichDivOpen === WhichDiv && (
                    <>
                        {valshow}
                        {ConformLinkBar()}
                    </>
                )}
            </div>
        )
    }

    const pagesStructure = (val) => {
        return(
            <div className='inputsDiv'>
                {val}            
                <div>
                    {ChangeLinkBar()}
                </div>
            </div>
        )
    }

    // inputs with no other Changees that submit

    const metrage = () => {
        return( 
            innerPageSelection('metrageDiv', 'متراژ', input('metrage', 'metrage', englishToPersianNumber(CleanVals(linkBarChange.metrage, englishNums))))  
        )
    }

    const floor = () => {
        return(
            innerPageSelection('floor', 'طبقه', 
                <>             
                    <p className='inputTag first'>:طبقه</p>
                    {input('floor', 'floor', englishToPersianNumber(CleanVals(linkBarChange.floor, englishNums)))}
                    <p className='inputTag'>:واحد در طبقه</p>
                    {input('floorInfloor', 'floorInfloor', englishToPersianNumber(CleanVals(linkBarChange.floorInfloor, englishNums)))}
                </>
            ) 
        )
    }

    // dropdowns

    const face = () => {
        return(
            innerPageSelection('face', 'جهت و بحر',
                <>
                    <p className='inputTag first'>:جهت خانه</p>
                    {dropdowns(faces, "face", 'faces', 'faceInner', facesSymbols, facesSymbolsToface[CleanVals(linkBarChange.face, facesSymbols)], facesSymbols)}
                    <p className='inputTag'>:بحر</p>
                    {dropdowns(bahr, "bahr", 'bahr', 'bahrInner', bahr, CleanVals(linkBarChange.bahr, bahr), englishNums)}
                </>
            )   
        )
    }

    const joinbuildpersent = () => {
        return(
            innerPageSelection('joinbuildpersent', 'درصد مشارکت ساخت', dropdowns(joinbuildpersentoptions, "joinbuildpersent", 'joinbuildpersent', 'joinbuildpersentInner', joinbuildpersentoptionsSymbols, joinbuildpersentoptionsSymbolstoVals[CleanVals(linkBarChange.joinbuildpersent, joinbuildpersentoptionsSymbols)], englishNums)) 
        )
    }

    const groundfuncDropdown = () => {
        return(
            innerPageSelection('groundInner', 'نوع کاربری زمین', dropdowns(ground, "ground", 'ground', 'groundInner', groundSymbols, groundSymbolsToground[CleanVals(linkBarChange.ground, groundSymbols)], groundSymbols))   
        )
    }

    const room = () => {
        return(
            innerPageSelection('rooms', 'اتاق ها', dropdowns(rooms, "rooms", 'rooms', 'roomInner', rooms, CleanVals(linkBarChange.rooms, rooms), englishNums))  
        )
    }

    const year = () => {
        return(
            innerPageSelection('years', 'سال ساخت', dropdowns(years, "year", 'year', 'yearsInner', years, CleanVals(linkBarChange.year, englishNums), englishNums))   
        )
    }

    // inputs with other Changees that submit

    const price = () => {
        return(
            innerPageSelection('priceDiv', 'قیمت',                     
                <>
                    {input('price', 'price', englishToPersianNumber(CleanVals(linkBarChange.price, englishNums)))}
                    {priceChange('priceShow', 'price', englishToPersianNumber(CleanVals(linkBarChange.price, englishNums)))}
                </>
            ) 
        )
    }

    const priceRent = () => {
        return(
            innerPageSelection('RentpriceDiv', 'قیمت اجاره',                     
                <>
                    <p className='inputTag first'>:پول پیش</p>
                    {input('beforePrice', 'beforePrice', englishToPersianNumber(CleanVals(linkBarChange.beforePrice, englishNums)))}
                    {priceChange('beforePriceShow', 'beforePrice', englishToPersianNumber(CleanVals(linkBarChange.beforePrice, englishNums)))}
                    <p className='inputTag'>:اجاره ماهانه</p>
                    {input('monthPrice', 'monthPrice', englishToPersianNumber(CleanVals(linkBarChange.monthPrice, englishNums)))}
                    {priceChange('monthPriceShow', 'monthPrice', englishToPersianNumber(CleanVals(linkBarChange.monthPrice, englishNums)))}
                </>
            )  
        )
    }

    // option selecting

    const homeConditions = () => {
        return(
            innerPageSelection('conditionDiv', 'وضعیت خانه',                         
                <div className='checkBoxDiv'>
                    {condition('balaon', 'بالاکن', 'balaon')}
                    {condition('parking', 'پارکینگ', 'parking')}
                    {condition('anbary', 'انباری', 'anbary')}
                    {condition('asansor', 'اسانسور', 'asansor')}
                </div>
            ) 
        )
    }

    const storeConditions = () => {
        return(
            innerPageSelection('conditionDiv', 'وضعیت خانه',                         
                <div className='checkBoxDiv'>
                    {condition('electricity', 'برق', 'electricity')}
                    {condition('water', 'آب', 'water')}
                    {condition('gas', 'گاز', 'gas')}
                </div>
            )  
        )
    }

    // pages

    const joinbuild = () => {
        return(
            pagesStructure(<div> {metrage()} {face()} {joinbuildpersent()} {price()}</div>)
        )
    }

    const aparteman = () => {
        return(
            pagesStructure(<div> {metrage()} {room()} {year()} {face()} {floor()} {homeConditions()} {price()}</div>)
        )
    }

    const villa = () => {
        return(
            pagesStructure(<div> {metrage()} {room()} {year()} {face()} {homeConditions()} {price()}</div>)
        )
    }

    const rentAparteman = () => {
        return(
            pagesStructure(<div> {metrage()} {room()} {year()} {face()} {floor()} {homeConditions()} {priceRent()}</div>)
        )
    }

    const storeRent = () => {
        return(
            pagesStructure(<div> {metrage()} {year()} {face()} {storeConditions()} {priceRent()}</div>)
        )
    }

    const store = () => {
        return(
            pagesStructure(<div> {metrage()} {year()} {face()} {storeConditions()} {price()}</div>)
        )
    }

    const groundfunc = () => {
        return(
            pagesStructure(<div> {metrage()} {face()} {groundfuncDropdown()} {price()}</div>)
        )
    }

    return(
        <>
            <div className={`blur ${OpenRightVal ? 'open' : ''}`} onClick={() => {setOpenRightVal(false), setWhichDivOpen(''), setWhichDivOpenInner('')}}>
            <div className='exitButtonDiv'><p className='exitButtontext'>×</p></div>
                <div className={`Right_Bar_strucher ${OpenRightVal ? 'open' : ''}`} onClick={(e) => {e.stopPropagation(),setWhichDivOpen('')}}>
                    {modeShow('options', typeOfHome)}
                    {modeShow('JoinBuild', joinbuild)}
                    {modeShow('Aparteman', aparteman)}
                    {modeShow('Villa', villa)}
                    {modeShow('ApartemanRent', rentAparteman)}
                    {modeShow('Store', store)}
                    {modeShow('StoreRent', storeRent)}
                    {modeShow('Ground', groundfunc)}
                </div>
            </div>
        </>
    )

}

export default HomeRightBar