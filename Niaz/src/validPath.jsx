import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useValidatePathHome() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const segments = location.pathname.split('/').filter(Boolean);

    if (segments[0] !== 'home') return;

    // Validate values
    const validators = {
      meter: (val) => /^\d+$/.test(val), // must be number
      rooms: (val) => /^\d+$/.test(val), // must be number
      year: (val) => /^\d{4}$/.test(val), // e.g., 1403
      face: (val) => ['north', 'south'].includes(val),
      floor: (val) => /^(\d+,)*\d+$/.test(val), // e.g., 2,5,2
      condition: (val) => ['ok','normal', 'bad', 'new'].includes(val), // allowed values
    };

    for (let i = 2; i < segments.length; i++) {
      const [key, value] = segments[i].split(':');
      const validate = validators[key];
      if (!validate || !validate(value)) {
        navigate('/home');
        return;
      }
    }

  }, [location.pathname, navigate]);
}
