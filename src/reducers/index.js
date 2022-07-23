import { combineReducers } from 'redux';

import posts from './posts';

// this is how you make all the posts accessible from the store
export const reducers = combineReducers({ posts });
