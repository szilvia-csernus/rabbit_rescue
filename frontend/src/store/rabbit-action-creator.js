import { rabbitsActions } from "./rabbits-slice";
import { errorMessageActions } from "./error-message-slice";

export const getAllRabbits = (dispatch) => {
    const asyncGetAllRabbits = async () => {
        const response = await fetch('/api/rabbits/');
        if (!response.ok) {
            dispatch(errorMessageActions.open());
            return;
        } else {            const data = await response.json();
            dispatch(rabbitsActions.allRabbits(data));
            return;
        }
    }
    asyncGetAllRabbits();
  };

