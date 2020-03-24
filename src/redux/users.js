//register a user action goes here
import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  getInitStateFromStorage,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/users";

const CREATE_USER = createActions("createUser");
export const createUser = userData => dispatch => {
  dispatch(CREATE_USER.START());

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(CREATE_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(CREATE_USER.FAIL(err))));
};

const UPLOAD_PICTURE = createActions("uploadImage");
export const uploadImage = formData => (dispatch, getState) => {
  dispatch(UPLOAD_PICTURE.START());

  const { token, username } = getState().auth.login.result;

  return fetch(url + "/" + username + "/picture", {
    method: "PUT",
    headers: { Authorization: "Bearer" + token, Accept: "application/json" },
    body: formData
  })
    .then(handleJsonResponse)
    .then(result => dispatch(UPLOAD_PICTURE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(UPLOAD_PICTURE.FAIL(err))));
};
// ----------
const GET_USER = createActions("getUser");
export const getUser = username => (dispatch, getState) =>{
  dispatch(GET_USER.START());

  const { username } = getState().auth.login.result.username;
  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders,
    // body: formData
  })
    .then(handleJsonResponse)
    .then(result => dispatch(UPLOAD_PICTURE.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(UPLOAD_PICTURE.FAIL(err))));
};


export const reducers = {
  createUser: createReducer(asyncInitialState, {
    ...asyncCases(CREATE_USER)
  }),
  uploadImage: createReducer(asyncInitialState, {
    ...asyncCases(UPLOAD_PICTURE)
  }),
  getUser: createReducer(asyncInitialState, {
    ...asyncCases(GET_USER)
  })

};