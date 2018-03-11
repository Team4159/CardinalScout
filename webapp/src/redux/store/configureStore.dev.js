import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "localforage";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { handleNetwork } from "../../util";
import { networkStatusChanged } from "../actions/network";
export default function configureStore(initialState) {
  const persistConfig = {
    key: "root",
    storage,
    blacklist: ["fb"]
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
  handleNetwork(online => {
    store.dispatch(networkStatusChanged(online));
  });
  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(
        require("../reducers") /*.default if you use Babel 6+ */
      )
    );
  }

  return { store, persistor, history };
}
