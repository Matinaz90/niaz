import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useValidatePathHome() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    const x = 'e'

    const segments = location.pathname.split('/').filter(Boolean);

    if (segments[0] !== 'home') return;

    const validators = {
      // 1–100,000,000
      meter: (val) => {
        if (val === x) return 'e'
        const num = Number(val);
        return Number.isInteger(num) && num >= 1 && num <= 100000000;
      },

      // 1–10
      rooms: (val) => {
        if (val === x) return 'e'
        const num = Number(val);
        return Number.isInteger(num) && num >= 1 && num <= 10;
      },

      // 1390–1403
      year: (val) => {
        if (val === x) return 'e'
        const num = Number(val);
        return Number.isInteger(num) && num >= 1390 && num <= 1403;
      },

      // north or south
      face: (val) => { if (val === x) return 'e'; ['north', 'south'].includes(val.trim().toLowerCase())},

      // floor: "x,y,z" => x ≤ 30, y ≤ 30, z ≤ 10
      floor: (val) => {
        if (typeof val !== 'string') return false;
        const parts = val.split(',').map((v) => Number(v.trim()));
        if (parts.length !== 3) return false;
        const [x, y, z] = parts;
        return (
          Number.isInteger(x) && x >= 1 && x <= 30 &&
          Number.isInteger(y) && y >= 1 && y <= 30 &&
          Number.isInteger(z) && z >= 1 && z <= 10
        );
      },

      // condition
      condition: (val) => {if (val === x) return 'e'; ['ok', 'normal', 'bad', 'new'].includes(val.trim().toLowerCase())},

      // options: 8 comma-separated, each must be one of allowed
      options: (val) => {
        if (val === x) return 'e'
        if (typeof val !== 'string') return false;
        const allowed = ['t', 'f', 'i', 'fi', 'w', 'g', 'wg', 'h', 'c', 'hc'];
        const parts = val.split(',').map((v) => v.trim().toLowerCase());
        return parts.length === 8 && parts.every((v) => allowed.includes(v));
      },
    };

    for (let i = 2; i < segments.length; i++) {
      const [key, value] = segments[i].split(':');
      const validate = validators[key];


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
