import { TAB_SEARCH, PAGE_SEARCH, METRIC_DOWNTIME } from './actions'

// Initial application state
export default const InitState = {
    'tab': TAB_SEARCH,
    'page': PAGE_SEARCH,
    'isRec': false,
    'isText': false,
    'metric': METRIC_DOWNTIME,
}
