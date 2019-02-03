import streams from "../apis/streams";
import { EDIT_STREAM } from "./types";

export const editStream = (streamId, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${streamId}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};
