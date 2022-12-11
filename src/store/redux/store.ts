import { configureStore } from '@reduxjs/toolkit';

import changeIdReducer from './background';
import changeProductReducer from './product';
import changeOutlineReducer from './outline';
import changeIconReducer from './icon';
import changeNameReducer from './jobs';

export const store = configureStore({
  reducer: {
    activeJob: changeIdReducer,
    activeProduct: changeProductReducer,
    activeOutline: changeOutlineReducer,
    activeIcon: changeIconReducer,
    activeName: changeNameReducer,
  }
});