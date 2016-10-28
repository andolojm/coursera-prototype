// Redux Action Constants
const TAB_SEARCH = 'search'
const TAB_HELP = 'help'
const TAB_MAP = 'map'

const PAGE_SEARCH = 'search'
const PAGE_LOADING = 'loading'
const PAGE_RESULTS = 'results'
const PAGE_DETAIL = 'detail'

const SWITCH_TAB = 'SWITCH_TAB'
const SWITCH_PAGE = 'SWITCH_PAGE'

const START_RECORD = 'START_RECORD'
const STOP_RECORD = 'STOP_RECORD'

const START_TEXT = 'START_TEXT'
const STOP_TEXT = 'STOP_TEXT'

const CANCEL_SEARCH = 'CANCEL_SEARCH'

const DRILL_METRIC = 'DRILL_METRIC'

const METRIC_DOWNTIME = 'Downtime'
const METRIC_EFFICIENCY = 'Efficiency'
const METRIC_YIELD = 'Yield'

// Redux Action Methods
const switchTab = (tab) => ({
    'type': SWITCH_TAB,
    'tab': tab
})

const switchPage = (page) => ({
    'type': SWITCH_PAGE,
    'page': page
})

const startRecord = () => ({
    'type': START_RECORD,
})

const stopRecord = () => ({
    'type': STOP_RECORD,
})

const startTextInput = () => ({
    'type': START_TEXT,
})

const stopTextInput = () => ({
    'type': STOP_TEXT,
})

const cancelSearch = () => ({
    'type': CANCEL_SEARCH,
})

const drillMetric = (metric) => ({
    'type': DRILL_METRIC,
    'metric': metric
})

// Initial app state
const initState = {
    'tab': TAB_SEARCH,
    'page': PAGE_RESULTS,
    'isRec': false,
    'isText': false,
    'metric': METRIC_DOWNTIME,
}

// Redux Reducer
const mainReducer = function(state = initState, action){
    switch (action.type) {
        case SWITCH_PAGE:
            return Object.assign({}, state, {
                page: action.page
            })
        case SWITCH_TAB:
            return Object.assign({}, state, {
                tab: action.tab
            })
        case START_RECORD:
            return Object.assign({}, state, {
                isRec: true
            })
        case STOP_RECORD:
            return Object.assign({}, state, {
                isRec: false,
                page: PAGE_LOADING
            })
        case START_TEXT:
            return Object.assign({}, state, {
                isText: true
            })
        case STOP_TEXT:
            return Object.assign({}, state, {
                isText: false,
                page: PAGE_LOADING
            })
        case CANCEL_SEARCH:
            return Object.assign({}, state, {
                page: PAGE_SEARCH
            })
        case DRILL_METRIC:
            return Object.assign({}, state, {
                metric: action.metric,
                page: PAGE_DETAIL
            })
        default:
            return initState
    }
}
const store = Redux.createStore(mainReducer, Redux.applyMiddleware(ReduxThunk.default))

// Components
const TabNav = ({onSearchClick, onMapClick, onHelpClick, active}) => (
    <div id="tabnav">
        <div id="search" className={"tabnav-item" + (active == TAB_SEARCH ? ' active' : '')}
                onClick={() => onSearchClick()}>
            <span className="glyphicon glyphicon-search tabnav-item-glyph" aria-hidden="true"></span>
            <div className="tabnav-item-text">Search</div>
        </div>
        <div id="map" className="tabnav-item"  className={"tabnav-item" + (active == TAB_MAP ? ' active' : '')}
                onClick={() => onMapClick()}>
            <span className="glyphicon glyphicon-picture tabnav-item-glyph" aria-hidden="true"></span>
            <div className="tabnav-item-text">Map</div>
        </div>
        <div id="help" className="tabnav-item" className={"tabnav-item" + (active == TAB_HELP ? ' active' : '')}
                onClick={() => onHelpClick()}>
            <span className="glyphicon glyphicon-list-alt tabnav-item-glyph" aria-hidden="true"></span>
            <div className="tabnav-item-text">Help</div>
        </div>
    </div>
)

const searchStateToProps = (state, props) => {
    return {
        isRec: state.isRec,
        isText: state.isText
    }
}

const searchDispatchToProps = (dispatch, props) => {
    return {
        onRecClick: () => dispatch(startRecord()),
        onRecEnd: () => dispatch(stopRecord()),
        onTextClick: () => dispatch(startTextInput()),
        onTextEnd: () => dispatch(stopTextInput()),
    }
}

const SearchPageComponent = ({onRecClick, onRecEnd, onTextClick, onTextEnd, isRec, isText}) => (
    <div id="search-page">
        <div id="search-text">
            Hello! I can help you quickly inquire about how your production lines are doing.
            Just speak or type your query and I will fetch that data.
        </div>
        <div id="search-speak" onClick={() => (isRec ? onRecEnd : onRecClick)()}>
            <span id="search-speak-icon" className="glyphicon glyphicon-phone-alt"></span>
            <div>{isRec ? 'Tap here to stop' : 'Tap here to speak'}</div>
        </div>
        <div id="search-textbox-container" className={isText ? 'active' : 'hidden'}>
            <input type="text" className="form-control"  id="search-textbox" />
        </div>
        <button id="search-text-btn" className="btn btn-default" onClick={() => (isText ? onTextEnd : onTextClick)()}>
            {isText ? 'Search' : 'Or tap here to type'}
        </button>
    </div>
)

const SearchPage = ReactRedux.connect(searchStateToProps, searchDispatchToProps)(SearchPageComponent)

const LoadingPageComponent = ({cancelSearch}) => (
    <div id="search-page">
        <div id="search-text">
            Loading data for your query...
        </div>
        <div id="loading-icon">
            <span className="glyphicon glyphicon-repeat loading"></span>
        </div>
        <div id="cancel">
            <button id="cancel-search-btn" className="btn btn-default" onClick={() => cancelSearch()}>
                Cancel Search
            </button>
        </div>
    </div>
)

const delayDisplayPage = () => {
    return (dispatch) => {
        return new Promise((fulfill) => {
            setTimeout(fulfill, 2000)
        }).then(() => dispatch(switchPage(PAGE_RESULTS)))
    }
}

const loadingStateToProps = (state, props) => ({})
const loadingDispatchToProps = (dispatch, props) => {
    dispatch(delayDisplayPage())  // Fake loading... Good enough
    return {
        cancelSearch: () => dispatch(cancelSearch()),
    }
}

const LoadingPage = ReactRedux.connect(loadingStateToProps, loadingDispatchToProps)(LoadingPageComponent)

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
                    <td className="metric-title">Downtime</td>
                    <td className="metric-number">4%</td>
                </tr>
                <tr onClick={() => drillEfficiency()}>
                    <td className="metric-title">Efficiency</td>
                    <td className="metric-number">91%</td>
                </tr>
                <tr onClick={() => drillYield()}>
                    <td className="metric-title">Hourly Yield</td>
                    <td className="metric-number">960 Units</td>
                </tr>
            </table>
        </div>
        <div id="cancel">
            <button id="cancel-search-btn" className="btn btn-default" onClick={() => cancelSearch()}>
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

const ResultsPage = ReactRedux.connect(resultsStateToProps, resultsDispatchToProps)(ResultsPageContent)

const DetailsPageContent = ({metric, cancelSearch, backToLoading}) => (
    <div id="help-page">
        <div className="help-text">
            {metric} Details
        </div>
        <img src="graph.png" id="graph-img" />
        <div id="cancel">
            <button id="cancel-search-btn" className="btn btn-default" onClick={() => backToLoading()}>
                Return
            </button>
        </div>
        <div id="cancel">
            <button id="cancel-search-btn" className="btn btn-default" onClick={() => cancelSearch()}>
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
    backToLoading: () => dispatch(switchPage(PAGE_LOADING)),
})

const DetailsPage = ReactRedux.connect(detailsStateToProps, detailsDispatchToProps)(DetailsPageContent)

const MapPage = () => (
    <div id="help-page">
        <div className="help-text">
            Map accurate as of 10/18/2016.<br />
            The blue dot indicates your current location.
        </div>
        <img src="map.png" id="map-img" />
    </div>
)

const HelpPage = () => (
    <div id="help-page">
        <div className="help-text">
            Hello! I can help you quickly inquire about how your production lines are doing.
            Just speak or type your query and I will fetch that data.
        </div>
        <div className="help-text">
            Try "How's line 3?" to retrieve data for line 3.
            Check out the "Map" tab if you are not sure which line is which.
        </div>
        <div className="help-text">
            Once you have entered a query, the response will only take a few seconds!
            If you recieve an error, you will be notified and able to try again.
        </div>
    </div>
)

const mapTabToName = (name) => {
    switch(name){
        case TAB_MAP:
            return (<MapPage />)
        case TAB_HELP:
            return (<HelpPage />)
        case TAB_SEARCH:
            return (<SearchPage />)
        default:
            throw `could not find tab or page with name ${name}`
    }
}

const mapPageToName = (name) => {
    switch(name){
        case PAGE_SEARCH:
            return (<SearchPage />)
        case PAGE_LOADING:
            return (<LoadingPage />)
        case PAGE_DETAIL:
            return (<DetailsPage />)
        case PAGE_RESULTS:
            return (<ResultsPage />)
        default:
            throw `could not find tab or page with name ${name}`
    }
}

const tabStateToProps = (state, props) => {
    return {
        tab: mapTabToName(state.tab),
        page: mapPageToName(state.page),
        tabName: state.tab
    }
}

const tabDispatchToProps = (dispatch, props) => {
    return {
        onSearchClick: () => dispatch(switchTab(TAB_SEARCH)),
        onMapClick: () => dispatch(switchTab(TAB_MAP)),
        onHelpClick: () => dispatch(switchTab(TAB_HELP)),
    }
}

const Page = ({ tab, page, tabName,
    onSearchClick, onMapClick, onHelpClick}) => {
    // Search tab has multiple pages. Display correct page if on search tab.
    const activePage = (tabName == TAB_SEARCH ? page : tab)

    return (
        <div>
            {activePage}
            <TabNav onSearchClick={onSearchClick}
                    onMapClick={onMapClick}
                    onHelpClick={onHelpClick}
                    active={tabName} />
        </div>
    )
}

const Main = ReactRedux.connect(
  tabStateToProps,
  tabDispatchToProps
)(Page)

const App = React.createClass({
    render: function(){
        return (
            <ReactRedux.Provider store={store}>
                <Main />
            </ReactRedux.Provider>
        )
    }
})

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
