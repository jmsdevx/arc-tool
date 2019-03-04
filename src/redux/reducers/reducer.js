import { combineReducers } from "redux";

const initialState = {
  pending: "",
  selectedJob: "",
  jobs: {
    all: []
  }
};

const REQUEST_PENDING = "REQUEST_PENDING";
const REQUEST_FULFILLED = "REQUEST_FULFILLED";
const REQUEST_REJECTED = "REQUEST_REJECTED";

function requestReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PENDING:
      return {
        ...state,
        pending: action.pending
      };
    case REQUEST_FULFILLED:
      return {
        ...state,
        jobs: {
          all: action.payload
        },
        pending: action.pending
      };
    case REQUEST_REJECTED:
      return { ...state, pending: action.pending, error: action.error };
    default:
      return state;
  }
}

function linkReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({ requestReducer, linkReducer });

export default rootReducer;
