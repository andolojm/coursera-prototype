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
        <div className="help-text">
            Hello! I can help you quickly inquire about how your production lines are doing.
        </div>
        <div className="help-text">
            Just ask about how your production line is doing over talk or text, and I will retrieve that info.
        </div>
        <div id="search-speak" className={(isRec ? 'search-speak-active' : 'search-speak-inactive')} onClick={() => (isRec ? onRecEnd : onRecClick)()}>
            <span id="search-speak-icon" className="glyphicon glyphicon-phone-alt"></span>
            <div>{isRec ? 'Tap here to stop' : 'Tap here to speak'}</div>
        </div>
        <div id="search-textbox-container" className={isText ? 'active' : 'hidden'}>
            <input type="text" className="form-control"  id="search-textbox" />
        </div>
        <button id="search-text-btn" className="btn btn-custom" onClick={() => (isText ? onTextEnd : onTextClick)()}>
            {isText ? 'Search' : 'Or tap here to type'}
        </button>
    </div>
)

export default const SearchPage = ReactRedux.connect(searchStateToProps, searchDispatchToProps)(SearchPageComponent)
