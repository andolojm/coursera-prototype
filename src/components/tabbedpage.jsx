import React from 'react';
import { connect } from 'react-redux';

import { TAB_SEARCH, TAB_MAP, TAB_HELP, switchTab } from '../actions';
import NameMapping from '../utils/namemapping';
import TabNav from './tabnav';


const tabStateToProps = state => ({
  tab: NameMapping.mapTabToName(state.tab),
  page: NameMapping.mapPageToName(state.page),
  tabName: state.tab,
});

const tabDispatchToProps = dispatch => ({
  onSearchClick: () => dispatch(switchTab(TAB_SEARCH)),
  onMapClick: () => dispatch(switchTab(TAB_MAP)),
  onHelpClick: () => dispatch(switchTab(TAB_HELP)),
});

const TabbedPageContent = ({ tab, page, tabName,
  onSearchClick, onMapClick, onHelpClick }) => {
  // Search tab has multiple pages. Display correct page if on search tab.
  const activePage = (tabName === TAB_SEARCH ? page : tab);

  return (
    <div>
      <div id="page-container">
        {activePage}
      </div>
      <TabNav
        onSearchClick={onSearchClick}
        onMapClick={onMapClick}
        onHelpClick={onHelpClick}
        active={tabName}
      />
    </div>
  );
};

TabbedPageContent.propTypes = {
  tab: React.PropTypes.element.isRequired,
  page: React.PropTypes.element.isRequired,
  tabName: React.PropTypes.string.isRequired,
  onSearchClick: React.PropTypes.func.isRequired,
  onMapClick: React.PropTypes.func.isRequired,
  onHelpClick: React.PropTypes.func.isRequired,
};

export default connect(
  tabStateToProps,
  tabDispatchToProps
)(TabbedPageContent);
