//@flow
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "localforage";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

/*function getDebugSessionKey() {

  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}*/

export default function configureStore(initialState: Object) {
  const persistConfig = {
    key: "root",
    storage
  };
  const history = createHistory();
  const routeMiddleWare = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const composeEnhancers =
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware, routeMiddleWare))
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(
        require("../reducers") /*.default if you use Babel 6+ */
      )
    );
  }

  return { store, persistor, history };
}
