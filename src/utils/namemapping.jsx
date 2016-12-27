import React from 'react';

import { TAB_MAP, TAB_HELP, TAB_SEARCH, PAGE_SEARCH, PAGE_LOADING, PAGE_DETAIL, PAGE_RESULTS } from '../actions';
import MapPage from '../components/mappage';
import HelpPage from '../components/helppage';
import SearchPage from '../components/searchpage';
import LoadingPage from '../components/loadingpage';
import DetailsPage from '../components/detailspage';
import ResultsPage from '../components/resultspage';


// Utilities to retrive components given their redux action names
export default {
  mapTabToName: (name) => {
    switch (name) {
      case TAB_MAP:
        return (<MapPage />);
      case TAB_HELP:
        return (<HelpPage />);
      case TAB_SEARCH:
        return (<SearchPage />);
      default:
        throw new Error(`could not find tab or page with name ${name}`);
    }
  },
  mapPageToName: (name) => {
    switch (name) {
      case PAGE_SEARCH:
        return (<SearchPage />);
      case PAGE_LOADING:
        return (<LoadingPage />);
      case PAGE_DETAIL:
        return (<DetailsPage />);
      case PAGE_RESULTS:
        return (<ResultsPage />);
      default:
        throw new Error(`could not find tab or page with name ${name}`);
    }
  },
};
