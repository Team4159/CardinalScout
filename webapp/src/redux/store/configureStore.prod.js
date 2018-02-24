//@flow
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "localforage";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";

export default function configureStore(initialState: Object) {
  const persistConfig = {
    key: "root",
    storage,
    blacklist: ["fb", "auth"]
  };
  const history = createHistory();
  const routeMiddleWare = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(sagaMiddleware, routeMiddleWare)
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { store, persistor, history };
}
