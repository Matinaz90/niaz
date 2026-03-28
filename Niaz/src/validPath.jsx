import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function validPath () {
    const navigate = useNavigate();
    const location = useLocation()

    const locationPathName = location.pathname

    const Pages = ['J', 'A', 'V', 'R', 'S', 'Q', 'G'];

    const englishNums = ['0','1','2','3','4','5','6','7','8','9'];
    
    const facesSymbols = ['n', 's', 'w', 'e']

    const groundSymbols = ['m', 't', 'c', 'b']

    const trueOrFalse = ['f', 't']

    const carColorSymbols = ['c', 'k', 's', 'r', 't', 'y', 'u', 'o', 'p', 'h']

    const carChassiSymbols = ['w', 'a', 'd', 'z', 'a', 'd', 'z', 'j', 'b']

    const carEnginSymbols = ['n', 'v', 'g']

    const motorEnginSymbols = ['f', 'l']

    const returnIfFirstChick = (val, anything) => {
        if(val.includes(anything)){navigate('/')}
    }

    const arrayLength = (array, length) => {
        if(array.length != length){navigate('/')}
    }

    const cleanValsNum = (Num, checkVals, minVal, maxVal) => {
        if(Num == 'x'){return}
        if(Num <= minVal || Num >= maxVal){
            navigate('/')
            return
        }
        String(Num).split('').forEach(v => checkVals.includes(v) ? ''  : navigate('/'))
    }

    const cleanValsText = (Num, checkVals) => {
        if(Num == 'x'){return}
        String(Num).split('').forEach(v => checkVals.includes(v) ? '' : navigate('/'))
    }

    useEffect(() => {
        const whichPage = locationPathName.split('/')[2]
        const linkBarVal = (() => Pages.includes(whichPage) ) ? locationPathName.split('/').pop().split(',') : '';

        returnIfFirstChick(locationPathName, '//')
        returnIfFirstChick(locationPathName, ',,')
        returnIfFirstChick(locationPathName, 'xx')
        returnIfFirstChick(encodeURIComponent(locationPathName.replace(/[\/,]/g, '')), '%')

        if(locationPathName.split('/')[1] == 'home'){
            if(whichPage == 'J'){
                arrayLength(linkBarVal, 5)
                cleanValsNum(linkBarVal[0], englishNums, -1, 1000000)
                cleanValsText(linkBarVal[1], facesSymbols)
                cleanValsNum(linkBarVal[2], englishNums, 0, 4)
                cleanValsNum(linkBarVal[3], englishNums, 0, 6)
                cleanValsNum(linkBarVal[4], englishNums, 0, 100000000000000)
                return
            } else if(whichPage == 'A'){
                arrayLength(linkBarVal, 12)
                cleanValsNum(linkBarVal[0], englishNums, -1, 1000000)
                cleanValsNum(linkBarVal[1], englishNums, -1, 7)
                cleanValsNum(linkBarVal[2], englishNums, 1329, 1406)
                cleanValsText(linkBarVal[3], facesSymbols)
                cleanValsNum(linkBarVal[4], englishNums, 0, 4)
                cleanValsNum(linkBarVal[5], englishNums, -1, 101)
                cleanValsNum(linkBarVal[6], englishNums, 0, 21)
                cleanValsNum(linkBarVal[7], trueOrFalse)
                cleanValsNum(linkBarVal[8], trueOrFalse)
                cleanValsNum(linkBarVal[9], trueOrFalse)
                cleanValsNum(linkBarVal[10], trueOrFalse)
                cleanValsNum(linkBarVal[11], englishNums, 0, 100000000000000)
                return
            } else if(whichPage == 'V'){
                arrayLength(linkBarVal, 10)
                cleanValsNum(linkBarVal[0], englishNums, -1, 1000000)
                cleanValsNum(linkBarVal[1], englishNums, -1, 7)
                cleanValsNum(linkBarVal[2], englishNums, 1329, 1406)
                cleanValsText(linkBarVal[3], facesSymbols)
                cleanValsNum(linkBarVal[4], englishNums, 0, 4)
                cleanValsNum(linkBarVal[5], trueOrFalse)
                cleanValsNum(linkBarVal[6], trueOrFalse)
                cleanValsNum(linkBarVal[7], trueOrFalse)
                cleanValsNum(linkBarVal[8], trueOrFalse)
                cleanValsNum(linkBarVal[9], englishNums, 0, 100000000000000)
                return
            } else if(whichPage == 'R'){
                arrayLength(linkBarVal, 13)
                cleanValsNum(linkBarVal[0], englishNums, -1, 1000000)
                cleanValsNum(linkBarVal[1], englishNums, -1, 7)
                cleanValsNum(linkBarVal[2], englishNums, 1329, 1406)
                cleanValsText(linkBarVal[3], facesSymbols)
                cleanValsNum(linkBarVal[4], englishNums, 0, 4)
                cleanValsNum(linkBarVal[5], englishNums, -1, 101)
                cleanValsNum(linkBarVal[6], englishNums, 0, 21)
                cleanValsNum(linkBarVal[7], trueOrFalse)
                cleanValsNum(linkBarVal[8], trueOrFalse)
                cleanValsNum(linkBarVal[9], trueOrFalse)
                cleanValsNum(linkBarVal[10], trueOrFalse)
                cleanValsNum(linkBarVal[11], englishNums, 0, 100000000000000)
                cleanValsNum(linkBarVal[12], englishNums, 0, 100000000000000)
                return
            } else if(whichPage == 'S'){
                arrayLength(linkBarVal, 8)
                cleanValsNum(linkBarVal[0], englishNums, -1, 1000000)
                cleanValsNum(linkBarVal[1], englishNums, 1329, 1406)
                cleanValsText(linkBarVal[2], facesSymbols)
                cleanValsNum(linkBarVal[3], englishNums, 0, 4)
                cleanValsNum(linkBarVal[4], trueOrFalse)
                cleanValsNum(linkBarVal[5], trueOrFalse)
                cleanValsNum(linkBarVal[6], trueOrFalse)
                cleanValsNum(linkBarVal[7], englishNums, 0, 100000000000000)
                return
            } else if(whichPage == 'Q'){
                arrayLength(linkBarVal, 9)
                cleanValsNum(linkBarVal[0], englishNums, -1, 1000000)
                cleanValsNum(linkBarVal[1], englishNums, 1329, 1406)
                cleanValsText(linkBarVal[2], facesSymbols)
                cleanValsNum(linkBarVal[3], englishNums, 0, 4)
                cleanValsNum(linkBarVal[4], trueOrFalse)
                cleanValsNum(linkBarVal[5], trueOrFalse)
                cleanValsNum(linkBarVal[6], trueOrFalse)
                cleanValsNum(linkBarVal[7], englishNums, 0, 100000000000000)
                cleanValsNum(linkBarVal[8], englishNums, 0, 100000000000000)
                return
            } else if(whichPage == 'G'){
                arrayLength(linkBarVal, 5)
                cleanValsNum(linkBarVal[0], englishNums, -1, 1000000)
                cleanValsText(linkBarVal[1], facesSymbols)
                cleanValsNum(linkBarVal[2], englishNums, 0, 4)
                cleanValsText(linkBarVal[3], groundSymbols)
                cleanValsNum(linkBarVal[4], englishNums, 0, 100000000000000)
                return
            }else if(whichPage != undefined){
                navigate('/')
            }
        } else if(locationPathName.split('/')[1] == 'car'){
            if(whichPage == 'C'){
                arrayLength(linkBarVal, 5)
                cleanValsNum(linkBarVal[0], englishNums, 1369, 1406)
                cleanValsText(linkBarVal[1], carColorSymbols)
                cleanValsText(linkBarVal[2], carChassiSymbols)
                cleanValsText(linkBarVal[3], carEnginSymbols)
                cleanValsNum(linkBarVal[4], englishNums, 0, 100000000000000)
                return
            } else if(whichPage == 'M'){
                arrayLength(linkBarVal, 3)
                cleanValsNum(linkBarVal[0], englishNums, 1369, 1406)
                cleanValsText(linkBarVal[1], motorEnginSymbols)
                cleanValsNum(linkBarVal[2], englishNums, 0, 100000000000000)
                return
            } else if(whichPage == 'R'){
                arrayLength(linkBarVal, 1)
                cleanValsNum(linkBarVal[0], englishNums, 0, 100000000000000)
                return
            } else if(whichPage != undefined){
                navigate('/')
                return
            }
        } else if(locationPathName.split('/')[1] == 'addniaz') {
            return
        } else {
            navigate('/')
        }

    }, [locationPathName])
}