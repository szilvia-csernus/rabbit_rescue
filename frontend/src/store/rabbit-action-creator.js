import { rabbitsActions } from "./rabbits-slice";
import { errorMessageActions } from "./error-message-slice";

/** Fetch all rabbit data */
// export const getAllRabbits = async (dispatch) => {
//     console.log('getAllRabbits action called');

//     const response = await fetch('/api/rabbits/').then(
//         (res) => {
//             if (!res.ok) {
//                 dispatch(errorMessageActions.open());
//                 console.error(
//                     'Error in getAllRabbits action:',
//                     res.status,
//                     res.statusText
//                 );
//                 return;
//             } else {
//                 console.log('getAllRabbits action data:', res.json());
//                 // const data = res.data.json();
//                 // dispatch(rabbitsActions.allRabbits(data));
//             }
//         },
//         (error) => {
//             dispatch(errorMessageActions.open());
//             console.error('Error in getAllRabbits action:', error.message);
//         });
    
//     return response
	
// };

export const getAllRabbits = (dispatch) => {
    console.log('getAllRabbits action called');
    const asyncGetAllRabbits = async () => {
        console.log('asyncGetAllRabbits called');
        const response = await fetch('/api/rabbits/');
        console.log('response:', response.ok, response.status, response.statusText);
        if (!response.ok) {
            dispatch(errorMessageActions.open());
            return;
        } else {
            console.log('response:', response);
            const data = await response.json();
            console.log('getAllRabbits action data:', data);
            dispatch(rabbitsActions.allRabbits(data));
            return;
        }
    }
    asyncGetAllRabbits();
  };

