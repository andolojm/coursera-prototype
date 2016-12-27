import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import InitState from './state';
import { SWITCH_PAGE, SWITCH_TAB, START_RECORD, STOP_RECORD,
        START_TEXT, STOP_TEXT, CANCEL_SEARCH, DRILL_METRIC,
        PAGE_LOADING, PAGE_SEARCH, PAGE_DETAIL } from './actions';

const mainReducer = (state = InitState, action) => {
  switch (action.type) {
    case SWITCH_PAGE:
      return Object.assign({}, state, {
        page: action.page,
      });
    case SWITCH_TAB:
      return Object.assign({}, state, {
        tab: action.tab,
      });
    case START_RECORD:
      return Object.assign({}, state, {
        isRec: true,
      });
    case STOP_RECORD:
      return Object.assign({}, state, {
        isRec: false,
        page: PAGE_LOADING,
      });
    case START_TEXT:
      return Object.assign({}, state, {
        isText: true,
      });
    case STOP_TEXT:
      return Object.assign({}, state, {
        isText: false,
        page: PAGE_LOADING,
      });
    case CANCEL_SEARCH:
      return Object.assign({}, state, {
        page: PAGE_SEARCH,
      });
    case DRILL_METRIC:
      return Object.assign({}, state, {
        metric: action.metric,
        page: PAGE_DETAIL,
      });
    default:
      return InitState;
  }
};

// Create a store from the (single) reducer and apply Thunk
export default createStore(mainReducer, applyMiddleware(thunk));
