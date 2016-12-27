/* eslint-disable jsx-a11y/no-static-element-interactions */
// TODO: Re-enable ^ and find a workaround

import React from 'react';
import { connect } from 'react-redux';

import { startRecord, stopRecord, startTextInput, stopTextInput } from '../actions';

const searchStateToProps = state => ({
  isRec: state.isRec,
  isText: state.isText,
});

const searchDispatchToProps = dispatch => ({
  onRecClick: () => dispatch(startRecord()),
  onRecEnd: () => dispatch(stopRecord()),
  onTextClick: () => dispatch(startTextInput()),
  onTextEnd: () => dispatch(stopTextInput()),
});

const SearchPage = ({ onRecClick, onRecEnd, onTextClick, onTextEnd, isRec, isText }) => (
  <div id="search-page">
    <div className="help-text">
      Hello! I can help you quickly inquire about how your production lines are doing.
    </div>
    <div className="help-text">
      Just ask about how your production line is doing over talk or text,
      and I will retrieve that info.
    </div>
    <div
      id="search-speak"
      className={(isRec ? 'search-speak-active' : 'search-speak-inactive')}
      onClick={() => (isRec ? onRecEnd : onRecClick)()}
    >
      <span id="search-speak-icon" className="glyphicon glyphicon-phone-alt" />
      <div>{isRec ? 'Tap here to stop' : 'Tap here to speak'}</div>
    </div>
    <div id="search-textbox-container" className={isText ? 'active' : 'hidden'}>
      <input type="text" className="form-control" id="search-textbox" />
    </div>
    <button
      id="search-text-btn"
      className="btn btn-custom"
      onClick={() => (isText ? onTextEnd : onTextClick)()}
    >
      {isText ? 'Search' : 'Or tap here to type'}
    </button>
  </div>
);

SearchPage.propTypes = {
  onRecClick: React.PropTypes.func.isRequired,
  onRecEnd: React.PropTypes.func.isRequired,
  onTextClick: React.PropTypes.func.isRequired,
  onTextEnd: React.PropTypes.func.isRequired,
  isRec: React.PropTypes.bool.isRequired,
  isText: React.PropTypes.bool.isRequired,
};

export default connect(searchStateToProps, searchDispatchToProps)(SearchPage);
