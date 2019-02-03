import streams from "../apis/streams";

export const createStream = formValues => async dispatch => {
  streams.post("/streams", formValues);
};
