import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userReduxState/userSlice';
import cartSlice  from './cartReduxState/cartSlice';

const store = configureStore({
    reducer: {
        auth: userSlice,
        cart: cartSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;