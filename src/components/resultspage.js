import { METRIC_DOWNTIME, METRIC_EFFICIENCY, METRIC_YIELD } from '../actions'

const ResultsPageContent = ({cancelSearch, drillDowntime, drillEfficiency, drillYield}) => (
    <div id="help-page">
        <div className="help-text">
            Here is the data for line 3.
        </div>
        <img src="graph.png" id="graph-img" />
        <div className="help-text">
            <table>
                <tr><th className="metric-header" colSpan="2">Last 24 Hours</th></tr>
                <tr onClick={() => drillDowntime()}>
                    <td className="metric-title"><button className="btn btn-custom">Downtime</button></td>
                    <td className="metric-number">4%</td>
                </tr>
                <tr onClick={() => drillEfficiency()}>
                    <td className="metric-title"><button className="btn btn-custom">Efficiency</button></td>
                    <td className="metric-number">91%</td>
                </tr>
                <tr onClick={() => drillYield()}>
                    <td className="metric-title"><button className="btn btn-custom">Hourly Yield</button></td>
                    <td className="metric-number">960 Units</td>
                </tr>
            </table>
        </div>
        <div id="cancel">
            <button id="cancel-search-btn" className="btn btn-warning" onClick={() => cancelSearch()}>
                Make a new search
            </button>
        </div>
    </div>
)

const resultsStateToProps = (state, props) => ({})
const resultsDispatchToProps = (dispatch, props) => ({
    cancelSearch: () => dispatch(cancelSearch()),
    drillDowntime: () => dispatch(drillMetric(METRIC_DOWNTIME)),
    drillEfficiency: () => dispatch(drillMetric(METRIC_EFFICIENCY)),
    drillYield: () => dispatch(drillMetric(METRIC_YIELD)),
})

export default const ResultsPage = ReactRedux.connect(resultsStateToProps, resultsDispatchToProps)(ResultsPageContent)
