import memoizerific from 'memoizerific';
import store from '../../state/store';

import * as PAGES from '../../components/constants/pages';

export default function () {
	const { selectedSection } = store.getState();
	return selectSelectedPage(selectedSection);
}

export const selectSelectedPage = memoizerific(1)((selectedSection) => {
	return PAGES[selectedSection];
});
