// export const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('state');
//         // console.log("serializedState:",serializedState)
//         if (serializedState === null) {
//             return undefined;
//         }
//             // console.log("serializedState Parsed:",serializedState)
//
//         return JSON.parse(serializedState);
//
//     } catch (err) {
//         return undefined;
//     }
// };
//
// export const saveState = (state) => {
//     try {
//         const serializedState = JSON.stringify(state);
//
//         // console.log("serializedState strungify", serializedState)
//         localStorage.setItem('state', serializedState);
//         // console.log("Local Storage: ", localStorage)
//
//     } catch (err) {
//         // Ignore write errors.
//     }
// };
//
//
