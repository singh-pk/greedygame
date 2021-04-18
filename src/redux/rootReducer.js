import { combineReducers } from 'redux';

import appListReducer from './appList/appListReducer';

export default combineReducers({
  appList: appListReducer,
});
