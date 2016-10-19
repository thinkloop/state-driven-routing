import memoizerific from 'memoizerific';
import store from '../../state/store';

import { SECTIONS_PATHS } from '../../state/site/constants/paths';
import { HOME, ABOUT, ACCOUNT, ITEM } from '../../state/site/constants/sections';

import updateURL from '../../state/site/actions/update-url';

export default function () {
	const { items, selectedItemID } = store.getState();
	return selectItems(items, selectedItemID);
}

export const selectItems = memoizerific(10)((items, selectedItemID) => {
	return Object.keys(items).map(key => selectItem(key, items[key].name, `${SECTIONS_PATHS[ITEM]}/${key}`, selectedItemID === key));
});

export const selectItem = memoizerific(20)((id, label, href, isSelected) => {
	return {
		id,
		label,
		href,
		isSelected,
		onClick: () => store.dispatch(updateURL(href))
	};
});
