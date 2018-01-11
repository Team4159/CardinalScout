import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import DevTools from '../containers/devtools';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
import { fbConfig, reduxFirebase } from '../config';
const enhancer = compose(
  applyMiddleware(),
  reactReduxFirebase(firebase, reduxFirebase),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);
firebase.initializeApp(fbConfig);
function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
