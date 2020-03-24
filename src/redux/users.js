//register a user action goes here
import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    // getInitStateFromStorage,
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

const UPDATE_USER = createActions("updateUser");
export const updateUser = userData => dispatch => {
  dispatch(UPDATE_USER.START());

  return fetch(url, { //url + / + {}
    method: "PATCH",
    headers: {Authorization: "Bearer" + token, ...jsonHeaders},
    body: JSON.stringify(userData)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(UPDATE_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(UPDATE_USER.FAIL(err))));
};

const DELETE_USER = createActions("deleteUser");
export const deleteUser = () => dispatch => {
  dispatch(DELETE_USER.START());

  return fetch(url, {
    method: "DELETE",
    headers: {Authorization: "Bearer" + token, ...jsonHeaders},
  })
    .then(handleJsonResponse)
    .then(result => dispatch(UPDATE_USER.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(UPDATE_USER.FAIL(err))));
};


export const reducers = {
    createUser: createReducer(asyncInitialState, {
      ...asyncCases(CREATE_USER),
      ...asyncCases(UPDATE_USER),
      ...asyncCases(DELETE_USER)
    })
  };

  export default connect(
    state => ({
      result: state.users.createUser.result,
      loading: state.users.createUser.loading,
      error: state.users.createUser.error
    }),
    { createUser }
  )(SignUpForm);