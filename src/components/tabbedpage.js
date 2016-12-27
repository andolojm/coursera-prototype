import { TAB_SEARCH, TAB_MAP, TAB_HELP } from '../actions'
import NameMapping from '../utils/namemapping'
import TabNav from './tabnav'


const tabStateToProps = (state, props) => {
    return {
        tab: NameMapping.mapTabToName(state.tab),
        page: NameMapping.mapPageToName(state.page),
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

const TabbedPageContent = ({ tab, page, tabName,
    onSearchClick, onMapClick, onHelpClick}) => {
    // Search tab has multiple pages. Display correct page if on search tab.
    const activePage = (tabName == TAB_SEARCH ? page : tab)

    return (
        <div>
            <div id="page-container">
                {activePage}
            </div>
            <TabNav onSearchClick={onSearchClick}
                    onMapClick={onMapClick}
                    onHelpClick={onHelpClick}
                    active={tabName} />
        </div>
    )
}

export default const TabbedPage = ReactRedux.connect(
  tabStateToProps,
  tabDispatchToProps
)(TabbedPageContent)
