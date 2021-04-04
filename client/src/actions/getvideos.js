import axios from "axios";

import { GET_VIDEOS } from "./types";
import store from "../store";
export const getvideos = (term) => async (dispatch) => {
  console.log(term);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const bod = {
    term: term,
  };
  console.log(bod);
  try {
    const getres = await axios.post(`/api/videos/getvideos`, bod, config);

    console.log(getres.data);
    if (getres.data) {
      store.dispatch({
        type: GET_VIDEOS,
        Payload: getres.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
