import store from './state/store';
import app from './components/app';
import selectors from './selectors/selectors';

import updateURL from './state/site/actions/update-url';

// import selectors from './selectors';

// debug stuff
Object.defineProperty(window, "state", { get: store.getState });
window.selectors = selectors;

console.log('********************************************* \n DEVELOPMENT MODE \n window.state available \n window.selectors available \n ********************************************* \n');

// subscribe to state changes and re-render view on every change
const domElement = document.getElementById('app');
store.subscribe(() => app(selectors, domElement));

// listen for back button, forward button, etc
window.onpopstate = (e) => {
	store.dispatch(updateURL(window.location.pathname + window.location.search));
};

// read the url and navigate to the right page
store.dispatch(updateURL(window.location.pathname + window.location.search));
