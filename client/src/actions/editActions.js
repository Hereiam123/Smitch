import streams from "../apis/streams";
import { EDIT_STREAM } from "./types";
import history from "../history";

export const editStream = (streamId, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${streamId}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/");
};
