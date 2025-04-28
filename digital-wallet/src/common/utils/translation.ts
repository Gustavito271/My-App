// import pt from '../../../lang/pt.json'

// function getValueFromJSON<T>(jsonObj: JSONObject, key: string): T | undefined {
//   const keys = key.split('.');  // Split the key string by '.'

//   let result: any = jsonObj;  // Start with the root of the JSON object

//   for (let i = 0; i < keys.length; i++) {
//     if (result && typeof result === 'object' && keys[i] in result) {
//       result = result[keys[i]];  // Drill down to the next level
//     } else {
//       return undefined;  // If the key doesn't exist, return undefined
//     }
//   }

//   return result as T;  // Return the final result with the inferred type
// }

// export const getTranslation = (key: TranslationKey) => {
//   const keys = key.split('.');

//   let translations = pt

//   keys.forEach((key, index) => {
//     if (translations && typeof translations === 'object' && key in translations) {
//       translations = translations[key]
//     }
//   })
//   for (let i = 0; i < keys.length; i++) {
//     if (result && typeof result === 'object' && keys[i] in result) {
//       result = result[keys[i]];  // Drill down to the next level
//     } else {
//       return undefined;  // If the key doesn't exist, return undefined
//     }
//   }
// }

// type JSONPaths<T extends object, P extends string = ""> = {
//   [K in keyof T]: T[K] extends object
//     ? JSONPaths<T[K], `${P}${K & string}.`> // If the value is an object, continue recursion
//     : `${P}${K & string}`; // If it's a primitive value, return the full path
// }[keyof T];

// export type TranslationKey = JSONPaths<typeof pt>
