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

    const years = useMemo(() => Array.from({ length: 1404 - 1370 + 1 }, (_, i) => String(1404 - i)));
    
    const carColor = ['سالم و بی‌خط و خش', 'خط و خش جزیی', 'صافکاری بی‌رنگ', 'رنگ‌شدگی در ۱ ناحیه', 'رنگ‌شدگی در ۲ ناحیه', 'رنگ‌شدگی در چند ناحیه', 'دوررنگ', 'تمام‌رنگ', 'تصادفی', 'اوراقی']
    const carColorSymbols = ['c', 'k', 's', 'r', 't', 'y', 'u', 'o', 'p', 'h']
    const carColorSymbolsTocarColor = {'c': 'سالم و بی‌خط و خش', 'k': 'خط و خش جزیی', 's': 'صافکاری بی‌رنگ', 'r': 'رنگ‌شدگی در ۱ ناحیه', 't': 'رنگ‌شدگی در ۲ ناحیه', 'y': 'رنگ‌شدگی در چند ناحیه', 'u': 'دوررنگ', 'o': 'تمام‌رنگ', 'p': 'تصادفی', 'h': 'اوراقی'};

    const carChassi = ['هر دو سالم و پلمب', 'عقب ضربه‌خورده', 'عقب رنگ‌شده', 'جلو ضربه‌خورده', 'جلو رنگ‌شده', 'عقب ضربه‌خورده جلو رنگ‌شده', 'عقب رنگ‌شده جلو ضربه‌خورده', 'هردو ضربه‌خورده', 'هردو رنگ‌شده']
    const carChassiSymbols = ['w', 'a', 'd', 'z', 'a', 'd', 'z', 'j', 'b']
    const carChassiSymbolsToCarChassi = {'w': 'هر دو سالم و پلمب', 'a': 'عقب ضربه‌خورده', 'd': 'عقب رنگ‌شده', 'z': 'جلو ضربه‌خورده', 'x': 'جلو رنگ‌شده', 'j': 'عقب ضربه‌خورده جلو رنگ‌شده', 'k': 'عقب رنگ‌شده جلو ضربه‌خورده', 'l': 'هردو ضربه‌خورده', 'b': 'هردو رنگ‌شده'};

    const carEngin = ['سالم', 'نیاز به تعمیر', 'تعویض شده']
    const carEnginSymbols = ['n', 'v', 'g']
    const carEnginSymbolsTocarEngin = {'n': 'سالم', 'v': 'نیاز به تعمیر', 'g': 'تعویض شده'}

    const motorEngin = ['سالم', 'نیاز به تعمیر']
    const motorEnginSymbols = ['f', 'l']
    const motorEnginSymbolsTomotorEngin = {'f': 'سالم', 'l': 'نیاز به تعمیر'}

    const topBarPath = window.location.href
    
    const Pages = ['C', 'M', 'I'];
    const linkBarVal = topBarPath.split('/').some(a => Pages.includes(a)) ? topBarPath.split('/').pop().split(',') : '';

    const [linkBarChange, setLinkBarChange] = useState(null)

    const valOrEmpity = (v) => (v == 'x' ? '' : v)

    useEffect(() => {
        if(topBarPath.includes('C')){
            setmode('Car')
            const newLinkBar = {
                year: valOrEmpity(linkBarVal[0]),
                carColor: valOrEmpity(linkBarVal[1]),
                carChassi: valOrEmpity(linkBarVal[2]),
                carEngin: valOrEmpity(linkBarVal[3]),
                price: valOrEmpity(linkBarVal[4]),
            };
            setLinkBarChange(newLinkBar);
        } else if(topBarPath.includes('M')){
            setmode('Motorcycle')
            const newLinkBar = {
                motorEngin: valOrEmpity(linkBarVal[0]),
                price: valOrEmpity(linkBarVal[1]),
            };
            setLinkBarChange(newLinkBar);
        } else if(topBarPath.includes('R')){
            setmode('RepiarItems')
            const newLinkBar = {
                price: valOrEmpity(linkBarVal[0]),
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
                <div className='applyButtonDiv'>
                    <button className='applyButton backing' onClick={() => {navigate('/car'), setmode('options')}}>بازگشت</button>
                    <button className='applyButton minePage' onClick={() => ChangeUrl()}>تایید</button>
                </div>
            </>
        )
    }

    const typeOfHome = () => {
        return(
            <div className='inputsDiv'>
                <div>
                    <div className='buttons' onClick={() => AddLinkBar('C/x,x,x,x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> ماشین </div>
                    <div className='buttons' onClick={() => AddLinkBar('M/x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> موتور </div>
                    <div className='buttons' onClick={() => AddLinkBar('R/x')}><img src='/extend_arrow.png' className='rightArrow'></img> قطعات یدکی </div> 
                </div>
                <div className='applyButtonDiv'>
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

    // dropdowns

    const carCondition = () => {
        return(
            innerPageSelection('car', 'وضعیت ماشین',
                <>
                    <p className='inputTag first'>:رنگ شدگی</p>
                    {dropdowns(carColor, "carColor", 'carColors', 'carColorInner', carColorSymbols, carColorSymbolsTocarColor[CleanVals(linkBarChange.carColor, carColorSymbols)], carColorSymbols)}
                    <p className='inputTag'>:شاستی</p>
                    {dropdowns(carChassi, "carChassi", 'carChassi', 'carChassiInner', carChassiSymbols, carChassiSymbolsToCarChassi[CleanVals(linkBarChange.carChassi, carChassiSymbols)], carChassiSymbols)}
                    <p className='inputTag'>:موتور</p>
                    {dropdowns(carEngin, "carEngin", 'carEngin', 'carEnginInner', carEnginSymbols, carEnginSymbolsTocarEngin[CleanVals(linkBarChange.carEngin, carEnginSymbols)], carEnginSymbols)}
                </>
            )   
        )
    }

    const bikeCondition = () => {
        return(
            innerPageSelection('car', 'وضعیت موتور',
                <>
                    <p className='inputTag first'>:وضعیت موتور</p>
                    {dropdowns(motorEngin, "motorEngin", 'motorEngins', 'motorEnginInner', motorEnginSymbols, motorEnginSymbolsTomotorEngin[CleanVals(linkBarChange.motorEngin, motorEnginSymbols)], motorEnginSymbols)}
                </>
            )   
        )
    }

    const yearbuild = () => {
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

    // pages

    const car = () => {
        return(
            pagesStructure(<div> {yearbuild()} {carCondition()}  {price()}</div>)
        )
    }

    const motorcycle = () => {
        return(
            pagesStructure(<div> {yearbuild()} {bikeCondition()} {price()}</div>)
        )
    }

    const repiarItems = () => {
        return(
            pagesStructure(<div>{price()}</div>)
        )
    }

    return(
        <>
            <div className={`blur ${OpenRightVal ? 'open' : ''}`} onClick={() => {setOpenRightVal(false), setWhichDivOpen(''), setWhichDivOpenInner('')}}>
            <div className='exitButtonDiv'><p className='exitButtontext'>×</p></div>
                <div className={`Right_Bar_strucher ${OpenRightVal ? 'open' : ''}`} onClick={(e) => {e.stopPropagation(),setWhichDivOpen('')}}>
                    {modeShow('options', typeOfHome)}
                    {modeShow('Car', car)}
                    {modeShow('Motorcycle', motorcycle)}
                    {modeShow('RepiarItems', repiarItems)}
                </div>
            </div>
        </>
    )

}

export default HomeRightBar