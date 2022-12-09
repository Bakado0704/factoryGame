import { configureStore } from '@reduxjs/toolkit';

import changeIdReducer from './background';
import changeProductReducer from './product';
import changeOutlineReducer from './outline';
import changeOwnerReducer from './owner';
import changeIconReducer from './owner';

export const store = configureStore({
  reducer: {
    activeJob: changeIdReducer,
    activeProduct: changeProductReducer,
    activeOutline: changeOutlineReducer,
    activeOwner: changeOwnerReducer,
    activeIcon: changeIconReducer,
  }
});