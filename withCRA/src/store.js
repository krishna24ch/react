import { hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './configureStore';

export const store = configureStore(hashHistory, {});
export const history = syncHistoryWithStore(hashHistory, store);
