// Actions for tabs and tab switching
export const TAB_SEARCH = 'search';
export const TAB_HELP = 'help';
export const TAB_MAP = 'map';
export const SWITCH_TAB = 'SWITCH_TAB';

export const switchTab = tab => ({
  type: SWITCH_TAB,
  tab,
});

// Actions for pages and page switching
export const PAGE_SEARCH = 'search';
export const PAGE_LOADING = 'loading';
export const PAGE_RESULTS = 'results';
export const PAGE_DETAIL = 'detail';
export const SWITCH_PAGE = 'SWITCH_PAGE';

export const switchPage = page => ({
  type: SWITCH_PAGE,
  page,
});

// Actions for voice recording
export const START_RECORD = 'START_RECORD';
export const STOP_RECORD = 'STOP_RECORD';

export const startRecord = () => ({
  type: START_RECORD,
});

export const stopRecord = () => ({
  type: STOP_RECORD,
});

// Actions for text input
export const START_TEXT = 'START_TEXT';
export const STOP_TEXT = 'STOP_TEXT';

export const startTextInput = () => ({
  type: START_TEXT,
});

export const stopTextInput = () => ({
  type: STOP_TEXT,
});

// Actions for search canceling
export const CANCEL_SEARCH = 'CANCEL_SEARCH';

export const cancelSearch = () => ({
  type: CANCEL_SEARCH,
});

// Actions for metric drill-down
export const DRILL_METRIC = 'DRILL_METRIC';
export const METRIC_DOWNTIME = 'Downtime';
export const METRIC_EFFICIENCY = 'Efficiency';
export const METRIC_YIELD = 'Yield';

export const drillMetric = metric => ({
  type: DRILL_METRIC,
  metric,
});
