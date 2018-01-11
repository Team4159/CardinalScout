import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';

import Header from '../../components/header';
import Home from '../../routes/home';
import Profile from '../../routes/profile';
import DevTools from '../devtools';

import configureStore from '../../store';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

const store = configureStore();
export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
	  this.currentUrl = e.url;
	};

	render() {
	  return (
	    <Provider store={store} >
	    <div id="app">
	      <Header />
	      <DevTools />
	      <Router onChange={this.handleRoute}>
	        <Home path="/" />
	        <Profile path="/profile/" user="me" />
	        <Profile path="/profile/:user" />
	      </Router>
	    </div>
	    </Provider>
	  );
	}
}
