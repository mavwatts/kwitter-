import {
    domain,
    jsonHeaders,
    handleJsonResponse,
    asyncInitialState,
    asyncCases,
    createActions,
    createReducer
  } from "./helpers";
  
  const url = domain + "/likes";
  
  const DELETE_LIKES = createActions("deleteLike");
  export const deleteLike = likeId => (dispatch, getState) => {
    dispatch(DELETE_LIKES.START());
  
    const token = getState().auth.login.result.token;
  
    return fetch(url + "/" + likeId, {
      method: "DELETE",
      headers: { Authorization: "Bearer" + token, ...jsonHeaders }
    })
      .then(handleJsonResponse)
      .then(result => dispatch(DELETE_LIKES.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(DELETE_LIKES.FAIL(err))));
  };
  
  const ADD_LIKES = createActions("addLike");
  export const addLike = likeId => (dispatch, getState) => {
    console.log("added a like");
    dispatch(ADD_LIKES.START());
  
    const token = getState().auth.login.result.token;
  
    return fetch(URL + "/" + likeId, {
      method: "POST",
      headers: { Authorization: "Bearer" + token, ...jsonHeaders },
      body: JSON.stringify(likeId)
    })
      .then(handleJsonResponse)
      .then(result => dispatch(ADD_LIKES.SUCCESS(result)))
      .catch(err => Promise.reject(dispatch(ADD_LIKES.FAIL(err))));
  };
  
  export const reducers = {
    likes: createReducer(asyncInitialState, {
      ...asyncCases(DELETE_LIKES),
      ...asyncCases(ADD_LIKES),
    })
  };
  