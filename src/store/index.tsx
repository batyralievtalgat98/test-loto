
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import lotoSlice from './slices/lotoSlice';
const rootReducer = combineReducers({
    loto: lotoSlice,
});

export const store = configureStore({   
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
