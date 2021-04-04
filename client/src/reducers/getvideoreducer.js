import { GET_VIDEOS } from "../actions/types";

const intialState = {
  videos: [],
  getauth: false,
};

export default function videosreducer(state = intialState, action) {
  const { type, Payload } = action;

  switch (type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: Payload,
      };
    default:
      return state;
  }
}
