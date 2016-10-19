import memoizerific from 'memoizerific';
import store from '../../state/store';

import { SECTIONS_PATHS } from '../../state/site/constants/paths';
import { HOME, ABOUT, ACCOUNT } from '../../state/site/constants/sections';

import updateURL from '../../state/site/actions/update-url';

export default function () {
	const { selectedSection } = store.getState();
	return selectSiteHeader(selectedSection);
}

export const selectSiteHeader = memoizerific(10)((selectedSection) => {
	return {
		links: [
			selectSiteHeaderLink('Home', SECTIONS_PATHS[HOME], selectedSection === HOME),
			selectSiteHeaderLink('About', SECTIONS_PATHS[ABOUT], selectedSection === ABOUT),
			selectSiteHeaderLink('Account', SECTIONS_PATHS[ACCOUNT], selectedSection === ACCOUNT)
		]
	};
});

export const selectSiteHeaderLink = memoizerific(20)((label, href, isSelected) => {
	return {
		label,
		href,
		isSelected,
		onClick: () => store.dispatch(updateURL(href))
	};
});
