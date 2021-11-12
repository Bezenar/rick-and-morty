import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query/react';
import { rickAndMorty } from '../services/api';
import modalReducer from '../services/modalWindowSlicer';
import paginationSlicer from '../services/paginationSlicer';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    pagination: paginationSlicer,
    [rickAndMorty.reducerPath]: rickAndMorty.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMorty.middleware)
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;