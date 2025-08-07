import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useValidatePathHome } from "../validPath.jsx";
import './2.1_home_rightBar.css';

export default function Home_RightBar() {
  useValidatePathHome()
const [mode, setMode] = useState('default');
  const navigate = useNavigate();
  const location = useLocation();

  const [price, setPrice] = useState('');
  const [meterage, setMeterage] = useState('');
  const [roomsInHome, setroomsInHome] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const [HomeNumber, sethomeHomeNumber] = useState('');
  const [homeface, sethomeface] = useState('');
  const [allHomes, setallHomes] = useState('');
  const [homeflorRooms, sethomeflorRooms] = useState('');
  const [homeCondition, sethomeCondition] = useState('');
  const [withStuffInhome, setwithStuffInhome] = useState('');
  const [anbary, setanbary] = useState('');
  const [parking, setparking] = useState('');
  const [asansor, setasansor] = useState('');
  const [balkon, setbalkon] = useState('');
  const [homehotTemp, sethomehotTemp] = useState('');
  const [homecoldTemp, sethomecoldTemp] = useState('');
  const [bathroom, setbathroom] = useState('');
  const yearListRef = useRef();
  const [showYearList, setShowYearList] = useState(false);
  const isRightBarOpen = localStorage.getItem('rightBarOpen') === 'true';
  const divXRef = useRef(null);

  useEffect(() => {
    const href = location.pathname;
    if (href.includes('/home')) {
      if(href.includes('options:')){
        setMode('default');
      }else if (href.includes('condition:')){
        setMode('options')
      } else if (href.includes('floor:')) {
        setMode('homeCondition');
      } else if (href.includes('face:')) {
        setMode('homeNumbresInfloor');
      } else if (href.includes('year:')) {
        setMode('waylookhome');
      } else if (href.includes('rooms:')) {
        setMode('timeCreated');
      } else if (href.includes('meter:')) {
        setMode('roomsInHome');
      } else if (href.includes('Aparteman')) {
        setMode('MeterageId');
      } else {
        setMode('default');
      }
    }
  }, [location.pathname]);

  const formatPrice = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num) || num <= 0) return '';
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(3).replace(/\.0+$/, '') + ' میلیارد';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(3).replace(/\.0+$/, '') + ' میلیون';
    if (num >= 1_000) return (num / 1_000).toFixed(3).replace(/\.0+$/, '') + ' هزار تومان';
    return num + ' تومان';
  };

  const handleChange = (e, setter) => {
    let raw = e.target.value;
    if (!/^\d*$/.test(raw)) return;
    if (raw.length > 0 && raw.startsWith('0')) raw = raw.replace(/^0+/, '');
    setter(raw);
  };

  const handleKeyDown = (e) => {
    if (['e', 'E', '+', '-', '.'].includes(e.key)) e.preventDefault();
  };

  const AddGoogleLink = (addedLink) => {
    const key = addedLink.split(':')[0];
    let cleanPath = location.pathname.replace(new RegExp(`${key}:[^/]*`, 'g'), '').replace(/\/+$/, '');
    navigate(`${cleanPath}/${addedLink}`);
  };

  const trimPathToRoot = () => {
    let currentPath = location.pathname;
    if (currentPath.endsWith('/')) currentPath = currentPath.slice(0, -1);
    if (currentPath === '/home' || currentPath === '') return;
    const trimmedPath = currentPath.substring(0, currentPath.lastIndexOf('/')) || '/home';
    navigate(trimmedPath);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (yearListRef.current && !yearListRef.current.contains(e.target)) {
        setShowYearList(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div id="rightBar" className={`right_bar ${isRightBarOpen ? 'open' : ''}`}>
      <nav className="right-bar-nav">
        {mode === 'default' && (
          <>
            <a onClick={() => setMode('pricehome')}>مشارکت ساخت</a>
            <a onClick={() => { setMode('MeterageId'); AddGoogleLink('Aparteman'); }}>اپارتمان</a>
            <a>ویلایی</a>
            <a>اجاره</a>
            <a>تجاری</a>
          </>
        )}

        {mode === 'pricehome' && (
          <>
            <p className="showInput">قیمت:</p>
            <input
              value={price}
              onChange={(e) => handleChange(e, setPrice)}
              type="number"
              inputMode="numeric"
              onKeyDown={handleKeyDown}
              ref={divXRef}
            />
            <p id="priceDisplay" className="priceDisplay">
              {formatPrice(price)}
            </p>
            <p className="oneBack" onClick={trimPathToRoot}>بازگشت</p>
          </>
        )}

        {mode === 'MeterageId' && (
          <>
            <p className="showInput">متراژ:</p>
            <input
              type="number"
              value={meterage}
              onChange={(e) => handleChange(e, setMeterage)}
              inputMode="numeric"
              onKeyDown={handleKeyDown}
            />
            <button
              className="next"
              disabled={!meterage}
              onClick={() => {
                if (meterage) {
                  AddGoogleLink(`meter:${meterage}`);
                  setMode('roomsInHome');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'roomsInHome' && (
          <>
            <p className="showInput">اتاق ها:</p>
            <input
              type="number"
              value={roomsInHome}
              onChange={(e) => handleChange(e, setroomsInHome)}
              inputMode="numeric"
              onKeyDown={handleKeyDown}
            />
            <button
              className="next"
              disabled={!roomsInHome}
              onClick={() => {
                if (roomsInHome) {
                  AddGoogleLink(`rooms:${roomsInHome}`);
                  setMode('timeCreated');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'timeCreated' && (
          <>
            <p className="showInput">سال ساخت:</p>
            <div className="input-wrapper" style={{ position: 'relative' }} ref={yearListRef}>
              <input
                id={showYearList ? 'inputter' : ''}
                type="number"
                value={yearBuilt}
                onChange={(e) => handleChange(e, setYearBuilt)}
                inputMode="numeric"
                onKeyDown={handleKeyDown}
                onFocus={() => setShowYearList(true)}
              />
              <div className={`year-dropdown ${showYearList ? 'visible' : 'hidden'}`}>
                {Array.from({ length: 1404 - 1330 + 1 }, (_, i) => 1404 - i).map((year) => (
                  <div
                    key={year}
                    onClick={() => {
                      setYearBuilt(String(year));
                      setShowYearList(false);
                    }}
                    className="conform_buttonYear"
                  >
                    {year}
                  </div>
                ))}
              </div>
            </div>
            <button
              className="next"
              disabled={!yearBuilt}
              onClick={() => {
                if (yearBuilt) {
                  AddGoogleLink(`year:${yearBuilt}`);
                  setMode('waylookhome');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'waylookhome' && (
          <>
            <p className="showInput">جهت ساختمان:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                شمالی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                جنوبی
              </label>
            </div>
            <button
              className="next"
              disabled={!homeface}
              onClick={() => {
                if (homeface) {
                  AddGoogleLink(`face:${homeface}`);
                  setMode('homeNumbresInfloor');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'homeNumbresInfloor' && (
          <>
            <div className="floor-info">
              <p className="showInput">طبقه:</p>
              <input
                type="number"
                value={HomeNumber}
                onChange={(e) => handleChange(e, sethomeHomeNumber)}
                onKeyDown={handleKeyDown}
                inputMode="numeric"
              />
              <p className="showInput">کل طبقات:</p>
              <input
                type="number"
                value={allHomes}
                onChange={(e) => handleChange(e, setallHomes)}
                onKeyDown={handleKeyDown}
                inputMode="numeric"
              />
              <p className="showInput">تعداد واحد در طبقه :</p>
              <input
                type="number"
                value={homeflorRooms}
                onChange={(e) => handleChange(e, sethomeflorRooms)}
                onKeyDown={handleKeyDown}
                inputMode="numeric"
              />
            </div>

            <button
              className="next"
              disabled={!(HomeNumber && allHomes && homeflorRooms)}
              onClick={() => {
                if (HomeNumber && allHomes && homeflorRooms) {
                  const val = `${HomeNumber},${allHomes},${homeflorRooms}`;
                  AddGoogleLink(`floor:${val}`);
                  setMode('homeCondition');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'homeCondition' && (
          <>
            <p className="showInput">وضعیت واحد:</p>
            <div className="homeCondition">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  checked={homeCondition === 'new'}
                  onChange={() => sethomeCondition('new')}
                />
                نو
              </label>

              <label className="homeface-option">
                <input
                  type="checkbox"
                  checked={homeCondition === 'ok'}
                  onChange={() => sethomeCondition('ok')}
                />
                باسازی شده
              </label>

              <label className="homeface-option">
                <input
                  type="checkbox"
                  checked={homeCondition === 'normal'}
                  onChange={() => sethomeCondition('normal')}
                />
                معمولی
              </label>

              <label className="homeface-option">
                <input
                  type="checkbox"
                  checked={homeCondition === 'bad'}
                  onChange={() => sethomeCondition('bad')}
                />
                نیاز به باسازی
              </label>
            </div>
            <button
              className="next"
              disabled={!homeCondition}
              onClick={() => {
                if (homeCondition) {
                  AddGoogleLink(`condition:${homeCondition}`);
                  setMode('options');
                }
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={trimPathToRoot}>بازگشت</button>
          </>
        )}

        {mode === 'options' && (
          <div className='optionDiv'>
            <p className="showInput">مبله:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                هست
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                نیست
              </label>
            </div>

            <p className="showInput">پارکینگ:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                ندارد
              </label>
            </div>

            <p className="showInput">اسنسور:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                ندارد
              </label>
            </div>


            <p className="showInput">انباری:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                ندارد
              </label>
            </div>

            <p className="showInput">بالاکن:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                دارد
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                ندارد
              </label>
            </div>

            
            <p className="showInput">گرمایش:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                بخاری
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                پکیج
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                بخاری و پکیج
              </label>
            </div>


            <p className="showInput">سرمایش :</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                ابی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                گازی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                ابی و گازی
              </label>
            </div>


            <p className="showInput">سرویس بهداشتی:</p>
            <div className="input-wrapper homeface-wrapper">
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('north')}
                  checked={homeface === 'north'}
                />
                فرنگی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                ایرانی
              </label>
              <label className="homeface-option">
                <input
                  type="checkbox"
                  onChange={() => sethomeface('south')}
                  checked={homeface === 'south'}
                />
                فرنگی و ایرانی
              </label>
            </div>

            

            <button
              className="next"
              disabled={!homeface}
              onClick={() => {
                if (homeface) {
                  AddGoogleLink(`options:${homeface}`);
                  setMode('homeNumbresInfloor');
                }
              }}
            >
              تایید
            </button>


            <div className='oneBack_options_parents'></div>
              <button className="oneBack_options" onClick={trimPathToRoot}>بازگشت</button>
          </div>
        )}

      </nav>
    </div>
  );
}
