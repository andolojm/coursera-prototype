/* eslint-disable jsx-a11y/no-static-element-interactions */
// TODO: Re-enable ^ and find a workaround

import React from 'react';
import { connect } from 'react-redux';

import { METRIC_DOWNTIME, METRIC_EFFICIENCY, METRIC_YIELD, drillMetric, cancelSearch } from '../actions';


const resultsStateToProps = () => ({});
const resultsDispatchToProps = dispatch => ({
  onCancelSearch: () => dispatch(cancelSearch()),
  onDrillDowntime: () => dispatch(drillMetric(METRIC_DOWNTIME)),
  onDrillEfficiency: () => dispatch(drillMetric(METRIC_EFFICIENCY)),
  onDrillYield: () => dispatch(drillMetric(METRIC_YIELD)),
});

const ResultsPage = ({ onCancelSearch, onDrillDowntime, onDrillEfficiency, onDrillYield }) => (
  <div id="help-page">
    <div className="help-text">
        Here is the data for line 3.
    </div>
    <img src="graph.png" id="graph-img" alt="Graph of productivity over time (Current: 68%)" />
    <div className="help-text">
      <table>
        <tr><th className="metric-header" colSpan="2">Last 24 Hours</th></tr>
        <tr onClick={() => onDrillDowntime()}>
          <td className="metric-title"><button className="btn btn-custom">Downtime</button></td>
          <td className="metric-number">4%</td>
        </tr>
        <tr onClick={() => onDrillEfficiency()}>
          <td className="metric-title"><button className="btn btn-custom">Efficiency</button></td>
          <td className="metric-number">91%</td>
        </tr>
        <tr onClick={() => onDrillYield()}>
          <td className="metric-title"><button className="btn btn-custom">Hourly Yield</button></td>
          <td className="metric-number">960 Units</td>
        </tr>
      </table>
    </div>
    <div id="cancel">
      <button id="cancel-search-btn" className="btn btn-warning" onClick={() => onCancelSearch()}>
        Make a new search
      </button>
    </div>
  </div>
);

ResultsPage.propTypes = {
  onCancelSearch: React.PropTypes.func.isRequired,
  onDrillDowntime: React.PropTypes.func.isRequired,
  onDrillEfficiency: React.PropTypes.func.isRequired,
  onDrillYield: React.PropTypes.func.isRequired,
};

export default connect(resultsStateToProps, resultsDispatchToProps)(ResultsPage);
