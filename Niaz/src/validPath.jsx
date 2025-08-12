import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useValidatePathHome() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const segments = location.pathname.split('/').filter(Boolean);

    if (segments[0] !== 'home') return;

    const validators = {
      meter: (val) => /^\d+$/.test(val),
      rooms: (val) => /^\d+$/.test(val),
      year: (val) => /^\d{4}$/.test(val),
      face: (val) => ['north', 'south'].includes(val),
      floor: (val) => /^(\d+,)*\d+$/.test(val),
      condition: (val) => ['ok','normal', 'bad', 'new'].includes(val),

      options: val => {
        const allowed = ['t','f','i','Fi','w','g','Wg','h','c','Hc'];
        const parts = val.split(',');
        return parts.length === 8 && parts.every(v => allowed.includes(v));
      }
    };

    for (let i = 2; i < segments.length; i++) {
      const [key, value] = segments[i].split(':');
      const validate = validators[key];

      console.log(`Validating key: "${key}", value: "${value}"`);

      if (!validate) {
        console.warn(`No validator found for "${key}" — redirecting`);
        navigate('/home');
        return;
      }

      if (!validate(value)) {
        console.warn(`Validation failed for "${key}" with value "${value}" — redirecting`);
        navigate('/home');
        return;
      }
    }
  }, [location.pathname, navigate]);
}
