import { PAGE_RESULTS } from './actions'

const DetailsPageContent = ({metric, cancelSearch, backToLoading}) => (
    <div id="help-page">
        <div className="help-text">
            {metric} Details
        </div>
        <img src="graph.png" id="graph-img" />
        <div id="cancel">
            <button id="cancel-search-btn" className="btn btn-custom" onClick={() => backToLoading()}>
                Return to current search
            </button>
        </div>
        <div id="cancel">
            <button id="cancel-search-btn" className="btn btn-warning" onClick={() => cancelSearch()}>
                Make a new search
            </button>
        </div>
    </div>
)

const detailsStateToProps = (state, props) => ({
    metric: state.metric
})
const detailsDispatchToProps = (dispatch, props) => ({
    cancelSearch: () => dispatch(cancelSearch()),
    backToLoading: () => dispatch(switchPage(PAGE_RESULTS)),
})

export default const DetailsPage = ReactRedux.connect(detailsStateToProps, detailsDispatchToProps)(DetailsPageContent)
