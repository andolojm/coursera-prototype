import React from 'react';
import { connect } from 'react-redux';

import { PAGE_RESULTS, switchPage, cancelSearch } from '../actions';


// TODO export async actions to a util class and eventually un-stub this
const delayDisplayPage = () => (
  dispatch => (
    new Promise((fulfill) => {
      setTimeout(fulfill, 2000);
    }).then(() => dispatch(switchPage(PAGE_RESULTS)))
  )
);

const loadingStateToProps = () => ({});
const loadingDispatchToProps = (dispatch) => {
  dispatch(delayDisplayPage());  // Fake loading... Good enough FOR NOW
  return {
    onCancelSearch: () => dispatch(cancelSearch()),
  };
};

const LoadingPage = ({ onCancelSearch }) => (
  <div id="search-page">
    <div id="search-text">
      Loading data for your query...
    </div>
    <div id="loading-icon">
      <span className="glyphicon glyphicon-repeat loading" />
    </div>
    <div id="cancel">
      <button id="cancel-search-btn" className="btn btn-warning" onClick={() => onCancelSearch()}>
        Cancel Search
      </button>
    </div>
  </div>
);

LoadingPage.propTypes = {
  onCancelSearch: React.PropTypes.func.isRequired,
};

export default connect(loadingStateToProps, loadingDispatchToProps)(LoadingPage);
