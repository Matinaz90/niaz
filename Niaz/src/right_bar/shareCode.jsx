



export function shareCode () {
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

    return {
    inputValue,
    isLoading,
    handleChange,
    handleSubmit,
    handleReset,
    };
}