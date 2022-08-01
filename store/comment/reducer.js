import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { commentRequest } from './action';

const getInitialState = {
  loading: false,
  error: false,
  data: [],
};

const comment = handleActions(
  {
    [commentRequest]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [commentRequest.success]: (state, { payload: { data } }) => ({
      ...state,
      loading: false,
      error: false,
      data,
    }),
    [commentRequest.error]: (state) => ({
      ...state,
      loading: false,
      error: true,
    }),
  },
  getInitialState
);

export default combineReducers({ comment });
