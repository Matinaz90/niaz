// import { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// export function useValidatePathHome() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const x = 'e'; // special placeholder

//     let validators = {}

//     const segments = location.pathname.split('/').filter(Boolean);

//     if (segments[0] == 'home') {
      
//       if(segments[1] == 'Aparteman'){
//         validators = {
//               meter: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1 && num <= 100_000_000;
//               },

//               rooms: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1 && num <= 10;
//               },

//               year: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1390 && num <= 1403;
//               },

//               face: (val) => {
//                 if (val === x) return 'e';
//                 return ['north', 'south'].includes(val.trim().toLowerCase());
//               },

//               floor: (val) => {
//                 if (val === x) return 'e';
//                 if (typeof val !== 'string') return false;
//                 const parts = val.split(',').map((v) => Number(v.trim()));
//                 if (parts.length !== 3) return false;
//                 const [a, b, c] = parts;
//                 return (
//                   Number.isInteger(a) && a >= 1 && a <= 30 &&
//                   Number.isInteger(b) && b >= 1 && b <= 30 &&
//                   Number.isInteger(c) && c >= 1 && c <= 10
//                 );
//               },

//               condition: (val) => {
//                 if (val === x) return 'e';
//                 return ['ok', 'normal', 'bad', 'new'].includes(val.trim().toLowerCase());
//               },

//               options: (val) => {
//                 if (val === x) return 'e';
//                 if (typeof val !== 'string') return false;
//                 const allowed = ['t', 'f', 'i', 'fi', 'w', 'g', 'wg', 'h', 'c', 'hc'];
//                 const parts = val.split(',').map((v) => v.trim().toLowerCase());
//                 return parts.length === 8 && parts.every((v) => allowed.includes(v));
//               },

//               price: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1 && num <= 100_000_000_000_000;
//               },

//         };
//       } else if(segments[1] == 'villa'){
//         validators = {
//               meter: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1 && num <= 100_000_000;
//               },

//               rooms: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1 && num <= 10;
//               },

//               year: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1390 && num <= 1403;
//               },

//               face: (val) => {
//                 if (val === x) return 'e';
//                 return ['north', 'south'].includes(val.trim().toLowerCase());
//               },

//               floor: (val) => {
//                 if (val === x) return 'e';
//                 if (typeof val !== 'string') return false;
//                 const parts = val.split(',').map((v) => Number(v.trim()));
//                 if (parts.length !== 3) return false;
//                 const [a, b, c] = parts;
//                 return (
//                   Number.isInteger(a) && a >= 1 && a <= 30 &&
//                   Number.isInteger(b) && b >= 1 && b <= 30 &&
//                   Number.isInteger(c) && c >= 1 && c <= 10
//                 );
//               },

//               condition: (val) => {
//                 if (val === x) return 'e';
//                 return ['ok', 'normal', 'bad', 'new'].includes(val.trim().toLowerCase());
//               },

//               options: (val) => {
//                 if (val === x) return 'e';
//                 if (typeof val !== 'string') return false;
//                 const allowed = ['t', 'f', 'i', 'fi', 'w', 'g', 'wg', 'h', 'c', 'hc'];
//                 const parts = val.split(',').map((v) => v.trim().toLowerCase());
//                 return parts.length === 8 && parts.every((v) => allowed.includes(v));
//               }, 
  
//               price: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1 && num <= 100_000_000_000_000;
//               },
//         };
//       } else if(segments[1] == 'rent'){
//         validators = {
//               meter: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1 && num <= 100_000_000;
//               },

//               rooms: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1 && num <= 10;
//               },

//               year: (val) => {
//                 if (val === x) return 'e';
//                 const num = Number(val);
//                 return Number.isInteger(num) && num >= 1390 && num <= 1403;
//               },

//               face: (val) => {
//                 if (val === x) return 'e';
//                 return ['north', 'south'].includes(val.trim().toLowerCase());
//               },

//               floor: (val) => {
//                 if (val === x) return 'e';
//                 if (typeof val !== 'string') return false;
//                 const parts = val.split(',').map((v) => Number(v.trim()));
//                 if (parts.length !== 3) return false;
//                 const [a, b, c] = parts;
//                 return (
//                   Number.isInteger(a) && a >= 1 && a <= 30 &&
//                   Number.isInteger(b) && b >= 1 && b <= 30 &&
//                   Number.isInteger(c) && c >= 1 && c <= 10
//                 );
//               },

//               condition: (val) => {
//                 if (val === x) return 'e';
//                 return ['ok', 'normal', 'bad', 'new'].includes(val.trim().toLowerCase());
//               },

//               options: (val) => {
//                 if (val === x) return 'e';
//                 if (typeof val !== 'string') return false;
//                 const allowed = ['t', 'f', 'i', 'fi', 'w', 'g', 'wg', 'h', 'c', 'hc'];
//                 const parts = val.split(',').map((v) => v.trim().toLowerCase());
//                 return parts.length === 8 && parts.every((v) => allowed.includes(v));
//               },

//               pricerent: (val) => {
//                 if (val === x) return 'e';
//                 if (typeof val !== 'string') return false;

//                 const parts = val.split(',').map((v) => Number(v.trim()));
//                 if (parts.length !== 2) return false;

//                 const [min, max] = parts;
//                 return (
//                   Number.isInteger(min) && Number.isInteger(max) &&
//                   min >= 1 && max >= 1 && min <= max && max <= 1_000_000_000
//                 );
//               },
//         };
//       };
//     };

    

//     for (let i = 2; i < segments.length; i++) {
//       const [key, value] = segments[i].split(':');
//       const validate = validators[key];

//       if (!validate) {
//         console.warn(`No validator found for "${key}" — redirecting`);
//         navigate('/home');
//         return;
//       }

//       if (!validate(value)) {
//         console.warn(`Validation failed for "${key}" with value "${value}" — redirecting`);
//         navigate('/home');
//         return;
//       }
//     }
//   }, [location.pathname, navigate]);
// }
