/* eslint-disable jsx-a11y/no-static-element-interactions */
// TODO: Re-enable ^ and find a workaround

import React from 'react';

import { TAB_SEARCH, TAB_MAP, TAB_HELP } from '../actions';


// Tabbed navigation, displayed at bottom of viewport
const TabbedNav = ({ onSearchClick, onMapClick, onHelpClick, active }) => (
  <div id="tabnav">
    <div
      className={`tabnav-item${(active === TAB_SEARCH ? ' active' : '')}`}
      onClick={() => onSearchClick()} id="search"
    >
      <span
        className="glyphicon glyphicon-search tabnav-item-glyph"
        aria-hidden="true"
      />
      <div className="tabnav-item-text">Search</div>
    </div>
    <div
      className={`tabnav-item${(active === TAB_MAP ? ' active' : '')}`}
      onClick={() => onMapClick()} id="map"
    >
      <span
        className="glyphicon glyphicon-picture tabnav-item-glyph"
        aria-hidden="true"
      />
      <div className="tabnav-item-text">Map</div>
    </div>
    <div
      className={`tabnav-item${(active === TAB_HELP ? ' active' : '')}`}
      onClick={() => onHelpClick()} id="help"
    >
      <span
        className="glyphicon glyphicon-question-sign tabnav-item-glyph"
        aria-hidden="true"
      />
      <div className="tabnav-item-text">Help</div>
    </div>
  </div>
);

TabbedNav.propTypes = {
  onSearchClick: React.PropTypes.func.isRequired,
  onMapClick: React.PropTypes.func.isRequired,
  onHelpClick: React.PropTypes.func.isRequired,
  active: React.PropTypes.string.isRequired,
};

export default TabbedNav;
