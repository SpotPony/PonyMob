import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from 'redux-persist';
import reducers from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: 'ponymob',
      realtime: true
    })
  );
  const store = createStore(
    reducers,
    initialState,
    enhancer
  );
  persistStore(store, initialState);

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
