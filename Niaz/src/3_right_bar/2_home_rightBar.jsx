import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './2.1_home_rightBar.css';

export default function Home_RightBar() {

  const [mode, setMode] = useState('timeCreated');
  const location = useLocation();

  // useEffect(() => {
  //   const href = location.pathname;

  //   if (href.includes('Aparteman')) {
  //     if (href.includes('year')) {
  //       setMode('default');
  //     } else if (href.includes('meter')) {
  //       setMode('timeCreated');
  //     } else {
  //       setMode('pricehome');
  //     }
  //   }
  // }, []);

  const [price, setPrice] = useState('');
  const [meterage, setMeterage] = useState('');
  const [yearBuilt, setYearBuilt] = useState('');
  const isRightBarOpen = localStorage.getItem('rightBarOpen') === 'true';

  const divXRef = useRef(null);

  function formatPrice(value) {
    const num = parseInt(value, 10);
    if (isNaN(num) || num <= 0) return '';

    if (num >= 1_000_000_000)
      return (num / 1_000_000_000).toFixed(3).replace(/\.0+$/, '') + ' میلیارد';
    if (num >= 1_000_000)
      return (num / 1_000_000).toFixed(3).replace(/\.0+$/, '') + ' میلیون';
    if (num >= 1_000)
      return (num / 1_000).toFixed(3).replace(/\.0+$/, '') + ' هزار تومان';

    return num + ' تومان';
  }

  const handleChange = (e, setter) => {
    let raw = e.target.value;

    if (!/^\d*$/.test(raw)) return;

    if (raw.length > 1 && raw.startsWith('0')) {
      raw = raw.replace(/^0+/, '');
    }

    setter(raw);
  };

  const handleKeyDown = (e) => {
    if (['e', 'E', '+', '-', '.'].includes(e.key)) {
      e.preventDefault();
    }
  };

  const AddGoogleLink = (addedLink) => {
    window.history.pushState({}, '', `${window.location.pathname}/${addedLink}`);
  };

  return (
    <div id="rightBar" className={`right_bar ${isRightBarOpen ? 'open' : ''}`}>
      <nav className="right-bar-nav">
        {mode === 'default' && (
          <>
            <a onClick={() => {setMode('pricehome');}}>مشارکت ساخت</a>
            <a onClick={() => {setMode('MeterageId'); AddGoogleLink(`Aparteman`)}}>اپارتمان</a>
            <a>ویلایی</a>
            <a>اجاره</a>
            <a>تجاری</a>
          </>
        )}

        {mode === 'pricehome' && (
          <>
            <input
              value={price}
              onChange={(e) => handleChange(e, setPrice)}
              type="number"
              placeholder="قیمت"
              inputMode="numeric"
              onKeyDown={handleKeyDown}
              ref={divXRef}
            />
            <p id="priceDisplay" className="priceDisplay">
              {formatPrice(price)}
            </p>
            <p className="oneBack" onClick={() => setMode('default')}>
              بازگشت
            </p>
          </>
        )}

        {mode === 'MeterageId' && (
          <>
            <input
              type="number"
              placeholder="متراژ"
              value={meterage}
              onChange={(e) => handleChange(e, setMeterage)}
              inputMode="numeric"
              onKeyDown={handleKeyDown}
            />

            <button
              className="next"
              onClick={() => {
                AddGoogleLink(`meter:${meterage}`);
                setMode('timeCreated');
              }}
            >
              تایید
            </button>
            <button className="oneBack" onClick={() => setMode('default')}>
              بازگشت
            </button>
          </>
        )}

        {mode === 'timeCreated' && (
          <>
            <input
              type="number"
              placeholder="سال ساخت"
              value={yearBuilt}
              onChange={(e) => handleChange(e, setYearBuilt)}
              inputMode="numeric"
              onKeyDown={handleKeyDown}
            />

            <button
              className="next"
              onClick={() => AddGoogleLink(`year:${yearBuilt}`)}
            >
              تایید
            </button>
            <button className="oneBack" onClick={() => setMode('default')}>
              بازگشت
            </button>
          </>
        )}
      </nav>
    </div>
  );
}
