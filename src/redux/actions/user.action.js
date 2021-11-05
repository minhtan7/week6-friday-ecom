import * as types from "../constants/user.constant";
import api from "../../apiService";

const userAction = {};

userAction.getCurrentUser = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_SINGLE_USER_REQUEST });
    const res = await api.get("/users/me");
    dispatch({ type: types.GET_SINGLE_USER_SUCCESS });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.GET_SINGLE_USER_FAIL });
  }
};

export default userAction;
