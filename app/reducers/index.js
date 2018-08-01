import {
  routerReducer as routing,
} from 'react-router-redux'
import {
  combineReducers,
} from 'redux'

import tabListResult from './tabList'

// house
import {
  houseCheckSearchResult,
  houseCheckSearchQuery,
  houseDetailResult,
} from './house'
import {
  loginResponse,
} from './common'

import { serveResult, agentResult, hostResult } from './serve'
import { intendResult, entityResult } from './intend';

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state,
  tabListResult,

  loginResponse,

  houseCheckSearchResult,
  houseCheckSearchQuery,
  houseDetailResult,
  serveResult,
  agentResult,
  intendResult,
  entityResult,
  hostResult,
});

export default rootReducer;
