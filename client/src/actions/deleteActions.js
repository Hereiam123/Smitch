import streams from "../apis/streams";
import { DELETE_STREAM } from "./types";
import history from "../history";

export const deleteStream = streamId => async dispatch => {
  await streams.delete(`/streams/${streamId}`);
  dispatch({ type: DELETE_STREAM, payload: streamId });
  history.push("/");
};
