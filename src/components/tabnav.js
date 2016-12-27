import { TAB_SEARCH, TAB_MAP, TAB_HELP } from '../actions'

// Tabbed navigation, displayed at bottom of viewport
export default const TabNav = ({onSearchClick, onMapClick, onHelpClick, active}) => (
    <div id="tabnav">
        <div className={"tabnav-item" + (active == TAB_SEARCH ? ' active' : '')}
                onClick={() => onSearchClick()} id="search" >
            <span className="glyphicon glyphicon-search tabnav-item-glyph"
                    aria-hidden="true"></span>
            <div className="tabnav-item-text">Search</div>
        </div>
        <div className={"tabnav-item" + (active == TAB_MAP ? ' active' : '')}
                onClick={() => onMapClick()} id="map">
            <span className="glyphicon glyphicon-picture tabnav-item-glyph"
                    aria-hidden="true"></span>
            <div className="tabnav-item-text">Map</div>
        </div>
        <div className={"tabnav-item" + (active == TAB_HELP ? ' active' : '')}
                onClick={() => onHelpClick()} id="help">
            <span className="glyphicon glyphicon-question-sign tabnav-item-glyph"
                    aria-hidden="true"></span>
            <div className="tabnav-item-text">Help</div>
        </div>
    </div>
)
