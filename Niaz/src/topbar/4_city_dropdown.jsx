import { useEffect, useState } from 'react';
import './top_bar.css';
import { useGlobal } from '../GlobalContext';

export default function CityDropdown() {
    
    const [cityVal, setcityVal] = useState([]);
    const [OpenCity, setOpenCity] = useState(false);
    let OpenCityCheck = false
    const [openCities, setOpenCities] = useState([]);
    const [AllCityes, setAllCityes] = useState([]);
    const [searchCitys, setsearchCitys] = useState([]);

    const { locations } = useGlobal();
    
    const OpenCityFunc = () => {
        setOpenCity(true)
        OpenCityCheck = true

        const Cityes = localStorage.getItem('SelectedCityes');
        if (Cityes) {
            setcityVal(JSON.parse(Cityes));
        }

        const AllCityes = localStorage.getItem('AllSelectedCityes');
        if (AllCityes) {
            setAllCityes(JSON.parse(AllCityes));
        }
    }

    const searchCity = (query) => {
        const result = []
        if (query == '' || query.length <= 2){setsearchCitys([]); return}
        for(const [provice, city] of Object.entries(locations)){
            const found = city.filter(city => city.includes(query))
            if (found.length > 0) result.push({provice, cities: found.map(city => `${city}`)})
        }
        setsearchCitys(result)
    }

    const OpenInnerCity = (city) => {
        setOpenCities(prev => 
            prev.includes(city) ? 
            prev.filter(c => c != city) :
            [...prev , city] 
        )
    }
    
    const localHostUpdate = (val, city) => {
        let MiddleUpdate = cityVal
        let AllCityUpdate = AllCityes
        let AllCityInners = []

        if (val.includes('همه ی شهرهای')){
            AllCityUpdate.includes(city) ? 
            AllCityUpdate = AllCityUpdate.filter(c => c != city) :
            AllCityUpdate = [...AllCityUpdate , city]

            MiddleUpdate.includes(val) ?
            MiddleUpdate = cityVal.filter(c => c != val) : 
            MiddleUpdate = [...cityVal, val]
            
            AllCityInners = verifyCitySelection(val , city)
            
            if(AllCityInners){
                MiddleUpdate = MiddleUpdate.filter(val2 => !AllCityInners.includes(val2))
            }
            setAllCityes(AllCityUpdate)
        } else {
            MiddleUpdate.includes(val) ?
            MiddleUpdate = MiddleUpdate.filter(c => c != val) : 
            MiddleUpdate = [...MiddleUpdate, val]
        }

        setcityVal(MiddleUpdate)
    }

    const verifyCitySelection = (CityWithAllBehind, AllCityUpdate) => {
        let locationsVals = []
        let CityWithAllArray = [CityWithAllBehind]
        let AllCityUpdateArray = [AllCityUpdate]
        const hasAllCities = CityWithAllArray.some(item => item.includes("همه ی شهرهای"));
        if(hasAllCities ){
            AllCityUpdateArray.forEach(val => {
                const localtionsVals = locations[val] ? locations[val].slice(1) : []
                locationsVals = [...locationsVals, ...localtionsVals]
            });

            return locationsVals
        }
    }

    const saveCity = () => {
        let MiddleUpdate = cityVal
        let AllCityInners = verifyCitySelection(`همه ی شهرهای ${AllCityes}`, AllCityes);
        if(AllCityInners){
            MiddleUpdate = MiddleUpdate.filter(val2 => !AllCityInners.includes(val2))
        }

        setcityVal(MiddleUpdate);
        OpenCityCheck = false

        localStorage.setItem('SelectedCityes',JSON.stringify(MiddleUpdate));
        localStorage.setItem('AllSelectedCityes',JSON.stringify(AllCityes));
        setOpenCity(false);
        setOpenCities([])
    }

    const cancleButton = () => {
        const Cityes = localStorage.getItem('SelectedCityes');
        if (Cityes) {
            setcityVal(JSON.parse(Cityes));
        }
        const AllCityes = localStorage.getItem('AllSelectedCityes');
        if (AllCityes) {
            setAllCityes(JSON.parse(AllCityes));
        }
        setOpenCity(false);
        setOpenCities([]);
    }

    useEffect(() => {
        const handleKeyUp = (e) => {
            if (OpenCityCheck && e.key === 'Escape') {
                cancleButton()
            }
        };

        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return(
        <>
            <h2 id="city_button" className="city_button" onClick={() => OpenCityFunc(true)}>منطقه</h2>
            <div className={`cityDropdown ${OpenCity ? 'open' : ''}`} id='cityDropdown'>
                <div className={`cityDropdownTwo ${OpenCity ? 'open' : ''}`} id='cityDropdownTwo'>
                    <input type='text' id='searchInputCity' placeholder="...جستجو" maxLength={25} className='searchInputCity' onChange={(e) => searchCity(e.target.value)}></input>
                    {searchCitys.map((item) => (
                        <div className='cityTextDiv' key={`${item.provice}-cityTextDiv`}>
                            <p className='cityText'>:{item.provice}</p>
                            <div className='upperX2InnerCityText' id='InnerCity'>
                                {item.cities.map(innerCity => (
                                    <div className='upperInnerCityText' id='InnerCity' key={innerCity}>
                                            <div
                                            className={`innerCityText`}
                                            onClick={() => localHostUpdate(innerCity, item.provice)}
                                            >
                                                <div >
                                                    {innerCity}
                                                    <input key={innerCity} id={innerCity} checked={cityVal.includes(innerCity)} readOnly  className='cheackBoxCity' type='checkbox'></input>
                                                </div>
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    {Object.keys(locations).map(city => (
                        <div className='cityOnButtonDiv' key={city}>
                            <button type='button' className='cityInnerButton' onClick={() => OpenInnerCity(city)} key={city}>
                                {city}
                            </button>

                            {openCities.includes(city) && (
                                
                                <div className={`cityOuterCityDiv ${city}2`}>
                                    <div className={`cityUpperCityDiv`}>
                                        <div
                                            className={`cityInnerCityDiv AllCity${city}`}
                                            onClick={() => localHostUpdate(`همه ی شهرهای ${city}`, city)}
                                        >
                                            <div >
                                                {`همه ی شهرهای ${city}`}
                                                <input key={`همه ی شهرهای ${city}`} id={`همه ی شهرهای ${city}`} checked={cityVal.includes(`همه ی شهرهای ${city}`)} readOnly  className='cheackBoxCity' type='checkbox'></input>
                                            </div>
                                        </div>
                                    </div>

                                    {!AllCityes.includes(`${city}`) && (
                                        <div className={`cityUpperCityDiv`} id='InnerCity'>
                                        {locations[city].slice(1).map(innerCity => (
                                            <div
                                            className={`cityInnerCityDiv ${city}`}
                                            key={innerCity}
                                            onClick={() => localHostUpdate(innerCity, city)}
                                            >
                                                <div >
                                                    {innerCity}
                                                    <input key={innerCity} id={innerCity} checked={cityVal.includes(innerCity)} readOnly  className='cheackBoxCity' type='checkbox'></input>
                                                </div>
                                            </div>

                                        ))}
                                        </div>
                                    )}
                                </div>
                            )}    
                        
                        </div>
                    ))}
                </div>

                <button type="button" className='city_cancellation' onClick={() => cancleButton()}>لغو</button>
                <button type="button" className='city_conform' onClick={() => saveCity()}>تایید</button>
            </div>

        <div id="blur_rightBarOpen-city" onClick={() => cancleButton()} className={`blur_rightBarOpen ${OpenCity ? 'open' : ''}`}></div>
        </>
    );
}