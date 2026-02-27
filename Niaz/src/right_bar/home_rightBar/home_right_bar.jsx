import { useEffect, useMemo, useState } from 'react'
import  '../main_rightBar/global_rightBar.css'
import { useNavigate } from 'react-router-dom';

function HomeRightBar(){
    const navigate = useNavigate();

    const [mode, setmode] = useState('options')
    const [WhichDivOpen, setWhichDivOpen] = useState('options')
    const [WhichDivOpenInner, setWhichDivOpenInner] = useState('')
    const [OpenRightVal, setOpenRightVal] = useState(true)

    const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
    const persianNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];

    const years = useMemo(() => Array.from({ length: 1404 - 1330 + 1 }, (_, i) => 1404 - i));
    
    const joinbuildpersentoptions = ['مالک ۳۰ / ۷۰ سازنده', 'مالک ۴۰ / ۶۰ سازنده', 'مالک ۵۰ / ۵۰ سازنده', 'مالک ۶۰ / ۴۰ سازنده', 'مالک ۷۰ / ۳۰ سازنده'];
    const joinbuildpersentoptionsSymbols =  ['1', '2', '3', '4', '5']
    const joinbuildpersentoptionsSymbolstoVals = {'1': 'مالک ۳۰ / ۷۰ سازنده', '2': 'مالک ۴۰ / ۶۰ سازنده', '3': 'مالک ۵۰ / ۵۰ سازنده', '4': 'مالک ۶۰ / ۴۰ سازنده', '5': 'مالک ۷۰ / ۳۰ سازنده'}

    const faces = ['شمالی', 'جنوبی', 'شرقی', 'غربی']
    const facesSymbols = ['n', 's', 'w', 'e']
    const facesSymbolsToface = {'n': 'شمالی', 's': 'جنوبی', 'w': 'شرقی', 'e': 'غربی'}

    const bahr = ['1', '2', '3']

    const floorOptions = useMemo(() => Array.from({ length: 30 }, (_, i) => i + 1), []);
    const unitOptions = useMemo(() => Array.from({ length: 10 }, (_, i) => i + 1), []);
    
    const topBarPath = window.location.href
    
    const Pages = ['J'];
    const linkBarVal = topBarPath.split('/').some(a => Pages.includes(a)) ? topBarPath.split('/').pop().split(',') : '';

    const [linkBarChange, setLinkBarChange] = useState(null)

    const valOrEmpity = (v) => (v == 'x' ? '' : v)

    useEffect(() => {
        if(topBarPath.includes('J')){
            setmode('JoinBild')
            const newLinkBar = {
                metrage: valOrEmpity(linkBarVal[0]),
                face: valOrEmpity(linkBarVal[1]),
                bahr:  valOrEmpity(linkBarVal[2]),
                joinbuildpersent: valOrEmpity(linkBarVal[3]),
                price: valOrEmpity(linkBarVal[4]),
            };
            setLinkBarChange(newLinkBar);
        } else {
            setmode('options')
        }
    }, [topBarPath])


    const modeShow = (CurrentMode, whichFunc) => {
        if (CurrentMode == mode) {
            return whichFunc()
        }
    }

    const formatPrice = (value) => {
        const num = parseInt(value, 10);
        if (isNaN(num) || num <= 0) return '';
        if (num >= 1_000_000_000) return englishToPersianNumber((num / 1_000_000_000).toFixed(3).replace(/\.0+$/, '')) + ' میلیارد';
        if (num >= 1_000_000) return englishToPersianNumber((num / 1_000_000).toFixed(3).replace(/\.0+$/, '')) + ' میلیون';
        if (num >= 1_000) return englishToPersianNumber((num / 1_000).toFixed(3).replace(/\.0+$/, '')) + ' هزار تومان';
        return englishToPersianNumber(num) + ' تومان';
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
        }
        return (
            <button className='applyButton minePage' onClick={() => ChangeUrl()}>تایید</button>
        )
    }

    const typeOfHome = () => {
        return(
            <>
                <div className='buttons' onClick={() => AddLinkBar('J/x,x,x,x')}><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
                <div className='buttons'><img src='/extend_arrow.png' className='rightArrow'></img> خانه </div>
            </>
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

    const dropdowns = (dropdownVals, whatChange , id, WhichDivOpenHere, whatsymbol, value) => {
        return(
            <>
                <div className='InputDiv'>
                    {WhichDivOpenInner != WhichDivOpenHere && (
                    <input
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
                                        CleanVals(whatsymbol[index], whatsymbol)
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
        return(
            <div id={id}>
                <div>  
                    <div></div><div></div>
                </div>
                <p>{formatPrice(CleanVals(linkBarChange[whatChange], englishNums))}</p>
            </div>
        )   
    }

    // inputs with no other Changees that submit

    const metrage = () => {
        return(
            <div className={`foldingDiv ${WhichDivOpen === 'metrageDiv' ? 'open' : ''}`} 
            onClick={(e) => e.stopPropagation()}>
                {openButton("متراژ", 'metrageDiv')}
                {WhichDivOpen === 'metrageDiv' && (
                    <>
                    {input('metrage', 'metrage', englishToPersianNumber(CleanVals(linkBarChange.metrage, englishNums)))}
                    {ConformLinkBar()}
                    </>
                )}
            </div>
        )
    }

    // dropdowns

    const face = () => {
        return(
            <div className={`foldingDiv ${WhichDivOpen === 'face' ? 'open' : ''}`} 
            onClick={(e) => {e.stopPropagation(), setWhichDivOpenInner()}}>
                {openButton("جهت و بحر", 'face')}
                {WhichDivOpen === 'face' && (
                    <>
                    {dropdowns(faces, "face", 'faces', 'faceInner', facesSymbols, facesSymbolsToface[CleanVals(linkBarChange.face, facesSymbols)])}
                    {dropdowns(bahr, "bahr", 'bahr', 'bahrInner', bahr, CleanVals(linkBarChange.bahr, bahr))}
                    {ConformLinkBar()}
                    </>
                )}
            </div>
        )
    }

    const joinbuildpersent = () => {
        return(
            <div className={`foldingDiv ${WhichDivOpen === 'joinbuildpersent' ? 'open' : ''}`} 
            onClick={(e) => {e.stopPropagation(), setWhichDivOpenInner()}}>
                {openButton("درصد مشارکت ساخت", 'joinbuildpersent')}
                {WhichDivOpen === 'joinbuildpersent' && (
                    <>
                    {dropdowns(joinbuildpersentoptions, "joinbuildpersent", 'joinbuildpersent', 'joinbuildpersentInner', joinbuildpersentoptionsSymbols, joinbuildpersentoptionsSymbolstoVals[CleanVals(linkBarChange.joinbuildpersent, joinbuildpersentoptionsSymbols)])}
                    {ConformLinkBar()}
                    </>
                )}
            </div>
        )
    }

    // inputs with other Changees that submit

    const price = () => {
        return(
            <div className={`foldingDiv ${WhichDivOpen === 'priceDiv' ? 'open' : ''}`} 
            onClick={(e) => e.stopPropagation()}>
                {openButton("قیمت", 'priceDiv')}
                {WhichDivOpen === 'priceDiv' && (
                    <>
                    {input('price', 'price', englishToPersianNumber(CleanVals(linkBarChange.price, englishNums)))}
                    {priceChange('priceShow', 'price', englishToPersianNumber(CleanVals(linkBarChange.price, englishNums)))}
                    {ConformLinkBar()}
                    </>
                )}
            </div>
        )
    }

    // option selecting

    const joinbuild = () => {
        return(
            <>
                {metrage()}
                {face()}
                {joinbuildpersent()}
                {price()}
                {ChangeLinkBar()}
            </>
        )
    }

    return(
        <>
            <div className={`blur ${OpenRightVal ? 'open' : ''}`}>
            <div className='exitButtonDiv'><p className='exitButtontext'>×</p></div>
                <div className={`Right_Bar_strucher ${OpenRightVal ? 'open' : ''}`} onClick={() => setWhichDivOpen('')}>
                    {modeShow('options', typeOfHome)}
                    <div className='inputsDiv'>
                        {modeShow('JoinBild', joinbuild)}
                    </div>
                </div>
            </div>
        </>
    )

}

export default HomeRightBar