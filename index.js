const TAB_SEARCH = 'search'
const TAB_HELP = 'help'
const TAB_MAP = 'map'

const PAGE_SEARCH = 'search'
const PAGE_LOADING = 'loading'
const PAGE_RESULTS = 'results'
const PAGE_DETAIL = 'detail'

const SWITCH_TAB = 'SWITCH_TAB'
const SWITCH_PAGE = 'SWITCH_PAGE'

const switchTab = (tab) => ({
    'type': SWITCH_TAB,
    'tab': tab
})

const switchPage = (page) => ({
    'type': SWITCH_PAGE,
    'page': page
})

const initState = {
    'tab': TAB_SEARCH,
    'page': PAGE_SEARCH
}

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
        default:
            return initState
    }
}

const store = Redux.createStore(mainReducer)

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

const SearchPage = () => (
    <div id="search-page">
        <div id="search-text">
            Hello! I can help you quickly inquire about how your production lines are doing.
            Just speak or type your query and I will fetch that data.
        </div>
        <div id="search-speak">
            <span id="search-speak-icon" className="glyphicon glyphicon-phone-alt"></span>
            <div>Tap here to speak</div>
        </div>
        <button id="search-text-btn" className="btn btn-default">
            Or tap here to type
        </button>

    </div>
)
const LoadingPage = () => (<div>LOADING</div>)
const ResultsPage = () => (<div>RESULTS</div>)
const DetailsPage = () => (<div>DETAILS</div>)
const MapPage = () => (<div>MAP</div>)
const HelpPage = () => (<div>HELP</div>)

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

const mapStateToProps = (state, props) => {
    return {
        tab: mapTabToName(state.tab),
        page: mapPageToName(state.page),
        tabName: state.tab
    }
}

const mapDispatchToProps = (dispatch, props) => {
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
  mapStateToProps,
  mapDispatchToProps
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
