import { UPDATE_URL } from '../../site/actions/update-url';

import { SECTIONS_PATHS } from '../../site/constants/paths';

export default function (selectedItem = null, action) {
	switch (action.type) {

	case UPDATE_URL:
		let parsedItemID = action.parsedURL.path.replace(SECTIONS_PATHS.ITEM + '/', '');
		return parsedItemID !== action.parsedURL.path ? parsedItemID || null : null;

	default:
		return selectedItem;
	}
}
