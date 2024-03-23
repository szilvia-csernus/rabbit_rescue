import { rabbitsActions } from "./rabbits-slice";
import { errorMessageActions } from "./error-message-slice";

export const getAllRabbits = (dispatch) => {
	dispatch(rabbitsActions.setLoading(true));
	const asyncGetAllRabbits = async () => {
		try {
			const response = await fetch('/api/rabbits/');
			if (!response.ok) {
				dispatch(errorMessageActions.open());
			} else {
				const data = await response.json();
				dispatch(rabbitsActions.allRabbits(data));
			}
		} catch (error) {
			dispatch(errorMessageActions.open());
		} finally {
			dispatch(rabbitsActions.setLoading(false));
		}
	};
	asyncGetAllRabbits();
};

