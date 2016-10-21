import combineSelectors from 'combine-selectors';
import store from '../state/store';

import selectedPage from './site/selected-page';
import routing from './site/routing';
import siteHeader from './site/site-header';
import items from './items/items';

const selectors = {
	selectedPage,
	routing,
	siteHeader,
	items
};

export default combineSelectors(selectors, store.getState);
