import { configureStore } from '@reduxjs/toolkit';

import changeIdReducer from './background';
import changeProductReducer from './product';

export const store = configureStore({
  reducer: {
    activeJob: changeIdReducer,
    activeProduct: changeProductReducer,
  }
});