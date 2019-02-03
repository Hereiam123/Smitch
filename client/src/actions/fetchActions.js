import streams from "../apis/streams";
import { FETCH_STREAM, FETCH_STREAMS } from "./types";

export const fetchStream = streamId => async dispatch => {
  const response = await streams.get(`/streams/${streamId}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
