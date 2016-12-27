const LoadingPageComponent = ({cancelSearch}) => (
    <div id="search-page">
        <div id="search-text">
            Loading data for your query...
        </div>
        <div id="loading-icon">
            <span className="glyphicon glyphicon-repeat loading"></span>
        </div>
        <div id="cancel">
            <button id="cancel-search-btn" className="btn btn-warning" onClick={() => cancelSearch()}>
                Cancel Search
            </button>
        </div>
    </div>
)

// TODO export async actions to a util class and eventually un-stub this
const delayDisplayPage = () => {
    return (dispatch) => {
        return new Promise((fulfill) => {
            setTimeout(fulfill, 2000)
        }).then(() => dispatch(switchPage(PAGE_RESULTS)))
    }
}

const loadingStateToProps = (state, props) => ({})
const loadingDispatchToProps = (dispatch, props) => {
    dispatch(delayDisplayPage())  // Fake loading... Good enough FOR NOW
    return {
        cancelSearch: () => dispatch(cancelSearch()),
    }
}

export default const LoadingPage = ReactRedux.connect(loadingStateToProps, loadingDispatchToProps)(LoadingPageComponent)
