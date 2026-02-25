// import { useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// export function useValidatePathHome() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {

//     const x = 'e';

//     // 🧹 Normalize repeated slashes and trailing slash
//     let normalizedPath = location.pathname.replace(/\/{2,}/g, '/').replace(/\/$/, '');
//     if (normalizedPath !== location.pathname) {
//       navigate(normalizedPath, { replace: true });
//       return;
//     }

//     const segments = normalizedPath.split('/').filter(Boolean);

//     // ✅ Base validators
//     const baseValidators = {
//       meter: (val) => val === x || (Number.isInteger(+val) && +val >= 1 && +val <= 100_000_000),
//       rooms: (val) => val === x || (Number.isInteger(+val) && +val >= 1 && +val <= 10),
//       year: (val) => val === x || (Number.isInteger(+val) && +val >= 1329 && +val <= 1403),
//       face: (val) => {
//         if (val === x) return true;
//         const [dir, bahr] = val.split(',').map((v) => v.trim().toLowerCase());
//         return (
//           ['north', 'south'].includes(dir) &&
//           ['1', '2', '3'].includes(bahr)
//         );
//       },
//       floor: (val) => {
//         if (val === x) return true;
//         const [a, b, c] = val.split(',').map(Number);
//         return (
//           [a, b, c].every(Number.isInteger) &&
//           a >= 1 && a <= 30 &&
//           b >= 1 && b <= 30 &&
//           c >= 1 && c <= 10
//         );
//       },
//       condition: (val) => val === x || ['ok', 'normal', 'bad', 'new'].includes(val.trim().toLowerCase()),
//       options: (val) => {
//         if (val === x) return true;
//         const allowed = ['Ft', 'Ff', 'Pt', 'Pf', 'Et', 'Ef', 'St', 'Sf', 'Bt', 'Bf'];
//         return val.split(',').every((v) => allowed.includes(v.trim()));
//       },
//       price: (val) => val === x || (Number.isInteger(+val) && +val >= 1 && +val <= 100_000_000_000_000),
//       pricerent: (val) => {
//         if (val === x) return true;
//         const [min, max] = val.split(',').map(Number);
//         return (
//           [min, max].every(Number.isInteger) &&
//           min >= 1 && max >= 1 &&
//           min <= 1_000_000_000_000_000 &&
//           max <= 1_000_000_000_000_000
//         );
//       },
//       joinbuildpersent: (val) => val === x || ['70-30', '60-40', '50-50', '40-60', '30-70'].includes(val.trim()),
//       categorizestore: (val) =>
//         val === x ||
//         ['retail', 'service', 'food', 'workshop', 'office', 'medical', 'educational'].includes(
//           val.trim().toLowerCase()
//         ),
//     };

//     // ✅ Define rules
//     const rules = {
//       joinbuild: ['meter', 'face', 'joinbuildpersent', 'price'],
//       aparteman: ['meter', 'rooms', 'year', 'face', 'floor', 'condition', 'options', 'price'],
//       villa: ['meter', 'rooms', 'year', 'face', 'condition', 'options', 'price'],
//       rent: ['meter', 'rooms', 'year', 'face', 'floor', 'condition', 'options', 'pricerent'],
//       store: ['meter', 'year', 'face', 'condition', 'categorizestore', 'price'],
//     };

//     if (segments[0] !== 'home' || !rules[segments[1]]) {
//       navigate('/home', { replace: true });
//       return;
//     }

//     const expectedKeys = rules[segments[1]];

//     for (let i = 0; i < expectedKeys.length; i++) {
//       const key = expectedKeys[i];
//       const segment = segments.find((seg) => seg.startsWith(`${key}:`));

//       if (!segment) {
//         const laterExists = expectedKeys
//           .slice(i + 1)
//           .some((nextKey) => segments.some((seg) => seg.startsWith(`${nextKey}:`)));
//         if (laterExists) {
//           navigate('/home', { replace: true });
//         }
//         break;
//       }

//       const value = segment.split(':')[1];
//       const validate = baseValidators[key];
//       if (!validate?.(value)) {
//         navigate('/home', { replace: true });
//         return;
//       }
//     }
//   }, [location.pathname, navigate]);
// }

