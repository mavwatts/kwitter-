import {
  domain,
  jsonHeaders,
  handleJsonResponse,
//   getInitStateFromStorage,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer
} from "./helpers";

const url = domain + "/messages";

const DELETE_MESSAGES = createActions("deleteMessage");
export const deleteMessage = messageId => (dispatch, getState) => {
  dispatch(DELETE_MESSAGES.START());

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + messageId, {
    method: "DELETE",
    headers: { Authorization: "Bearer" + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => dispatch(DELETE_MESSAGES.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(DELETE_MESSAGES.FAIL(err))));
};

const CREATE_MESSAGES = createActions("createMessage");
export const createMessage = messageId => (dispatch, getState) => {
  dispatch(CREATE_MESSAGES.START());

  const token = getState().auth.login.result.token;

  return fetch(URL + "/" + messageId, {
    method: "POST",
    headers: { Authorization: "Bearer" + token, ...jsonHeaders },
    body: JSON.stringify(messageId)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(CREATE_MESSAGES.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(CREATE_MESSAGES.FAIL(err))));
};

const GET_MESSAGES = createActions("getMessage");
export const getMessage = messageId => (dispatch, getState) => {
  dispatch(GET_MESSAGES.START());

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + messageId, {
    method: "GET",
    headers: { Authorization: "Bearer" + token, ...jsonHeaders },
    body: JSON.stringify(messageId)
  })
    .then(handleJsonResponse)
    .then(result => dispatch(GET_MESSAGES.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(GET_MESSAGES.FAIL(err))));
};

const RECEIVE_MESSAGES = createActions("RECEIVEMESSAGES");

export const receiveMessages = () => dispatch => {
  dispatch(RECEIVE_MESSAGES.START());
  console.log("receive messages working");
  return fetch(url + `?limit=20&offset=0`)
    .then(handleJsonResponse)
    .then(result => dispatch(RECEIVE_MESSAGES.SUCCESS(result)))
    .catch(err => Promise.reject(dispatch(RECEIVE_MESSAGES.FAIL(err))));
};

export const reducers = {
  messages: createReducer(asyncInitialState, {
    ...asyncCases(DELETE_MESSAGES),
    ...asyncCases(CREATE_MESSAGES),
    ...asyncCases(RECEIVE_MESSAGES)
  })
};
