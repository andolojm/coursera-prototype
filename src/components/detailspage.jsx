import React from 'react';
import { connect } from 'react-redux';

import { PAGE_RESULTS, cancelSearch, switchPage } from '../actions';

const detailsStateToProps = state => ({
  metric: state.metric,
});

const detailsDispatchToProps = dispatch => ({
  onCancelSearch: () => dispatch(cancelSearch()),
  backToLoading: () => dispatch(switchPage(PAGE_RESULTS)),
});

const DetailsPage = ({ metric, onCancelSearch, backToLoading }) => (
  <div id="help-page">
    <div className="help-text">
      {metric} Details
    </div>
    <img src="graph.png" id="graph-img" alt="Graph of selected metric. (Current: 68%)" />
    <div id="cancel">
      <button id="cancel-search-btn" className="btn btn-custom" onClick={() => backToLoading()}>
        Return to current search
      </button>
    </div>
    <div id="cancel">
      <button id="cancel-search-btn" className="btn btn-warning" onClick={() => onCancelSearch()}>
        Make a new search
      </button>
    </div>
  </div>
);

DetailsPage.propTypes = {
  metric: React.PropTypes.string.isRequired,
  onCancelSearch: React.PropTypes.func.isRequired,
  backToLoading: React.PropTypes.func.isRequired,
};

export default connect(detailsStateToProps, detailsDispatchToProps)(DetailsPage);
