import { requestPending, requestFulfilled, requestRejected } from "./sync";
import axios from "axios";

//thunk to handle fetching
export function getData(dispatch, job) {
  axios
    //ternary in request to check for get all / get one job
    .get(`http://api.dataatwork.org/v1/jobs${job ? `/${job}` : ""}`)
    .then(response => {
      //action creator to receive data
      dispatch(requestFulfilled(response));
    })
    .catch(err =>
      //action creator to handle rejected promise
      dispatch(requestRejected())
    );
}

//async thunk to handle request promise
export function makeRequest(job = "") {
  return dispatch => {
    //action creator to handle pending promise
    dispatch(requestPending());
    //inner thunk to fetch
    getData(dispatch, job);
  };
}
