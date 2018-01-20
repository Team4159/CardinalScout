//@flow
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";

/*function getDebugSessionKey() {

  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}*/

export default function configureStore(initialState: Object) {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(
        require("../reducers") /*.default if you use Babel 6+ */
      )
    );
  }

  return store;
}
