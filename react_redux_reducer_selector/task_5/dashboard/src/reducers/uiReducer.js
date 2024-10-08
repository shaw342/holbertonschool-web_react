import { Map } from 'immutable';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGIN } from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: { isLoggedIn: false, email: '' },
});

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case LOGIN_SUCCESS:
      return state
        .set('isUserLoggedIn', true)
        .set('user', { isLoggedIn: true, email: action.payload.email });
    case LOGIN:
      return state.set('user', { email: action.user.email, password: action.user.password });
    case LOGIN_FAILURE:
    case LOGOUT:
      return state
        .set('isUserLoggedIn', false)
        .set('user', { isLoggedIn: false, email: '' });
    default:
      return state;
  }
}

export default uiReducer;