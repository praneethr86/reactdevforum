//function that takes state and action
//actoin will get dispatched from actions file
//action has action Type and Data

import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [
  // {
  //   id: 1,
  //   msg: 'Please Log In',
  //   alertType: 'success'
  // }
];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload.id);
    default:
      return state;
  }
}
