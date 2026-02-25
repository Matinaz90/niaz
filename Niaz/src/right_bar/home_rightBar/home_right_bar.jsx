import { useEffect, useState } from 'react'
import  '../main_rightBar/global_rightBar.css'
import { useNavigate } from 'react-router-dom';

function HomeRightBar(){
    const navigate = useNavigate();

    const [mode, setmode] = useState('options')
    const [WhichDivOpen, setWhichDivOpen] = useState('options')
    const [OpenRightVal, setOpenRightVal] = useState(true)
    const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
    const persianNums = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
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
                joinbuildpersent: valOrEmpity(linkBarVal[2]),
                price: valOrEmpity(linkBarVal[3]),
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

    const cleanEnglishNums = (Num) => {
        return String(Num).split('').map(v => englishNums.includes(v) ? v : '').join('')
    }

    const AddLinkBar = (addedLink) => {
    const key = addedLink.split(':')[0];
    let cleanPath = location.pathname.replace(new RegExp(`${key}:[^/]*`, 'g'), '').replace(/\/+$/, '');
    navigate(`${cleanPath}/${addedLink}`);
    };

    const ChangeLinkBar = () => {
        const val = Object.values(linkBarChange).map(v => v == '' ? 'x' : v)
        const ChangeUrl = () => {
            window.history.replaceState({}, '', `${val}`)
        }
        return (
            <button className='applyButton' onClick={() => ChangeUrl()}>تایید</button>
        )
    };

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

    const metrage = () => {
        return(
            <div className={`foldingDiv ${WhichDivOpen === 'metrageDiv' ? 'open' : ''}`} 
            onClick={(e) => e.stopPropagation()}>
                {openButton("متراژ", 'metrageDiv')}
                {WhichDivOpen === 'metrageDiv' && (
                    <>
                    <input
                        id="metrage" className="inputs" type="text"
                        value={englishToPersianNumber(cleanEnglishNums(linkBarChange.metrage))}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                            setLinkBarChange(prev => ({
                            ...prev,
                            metrage: 
                                cleanEnglishNums(persianToEnglishNumber(e.target.value))
                            }));
                        }}
                    />
                    {ChangeLinkBar()}
                    </>
                )}
            </div>
        )
    }

    const joinbuild = () => {
        return(
            <>
                {metrage()}
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