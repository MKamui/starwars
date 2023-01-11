import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
const persistor = persistStore(store)

export default store
export {persistor}