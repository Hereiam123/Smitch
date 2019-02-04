import streams from "../apis/streams";
import { CREATE_STREAM } from "./types";
import history from "../history";

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  //Send user back to home page if successful stream creation
  history.push("/");
};
