import combineSelectors from 'combine-selectors';
import store from '../state/store';

import selectedPage from './site/selected-page';
import url from './site/url';
import siteHeader from './site/site-header';
import items from './items/items';

const selectors = {
	selectedPage,
	url,
	siteHeader,
	items
};

export default combineSelectors(selectors, store.getState);
