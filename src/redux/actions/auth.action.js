import * as types from "../constants/auth.constant";
import api from "../../apiService";

const authAction = {};

authAction.register =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: types.POST_REGISTER_REQUEST });
      const res = await api.post("/auth/register", { name, email, password });
    } catch (err) {
      console.log(err);
    }
  };

export default authAction;
