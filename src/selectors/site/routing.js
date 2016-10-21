import memoizerific from 'memoizerific';
import store from '../../state/store';

export default function () {
	const { url, selectedSection } = store.getState();
	return selectRouting(url, selectedSection);
}

export const selectRouting = memoizerific(1)((url, selectedSection) => {
	return {
		url,
		title: selectTitle(selectedSection)
	};
});

export const selectTitle = memoizerific(1)((selectedSection) => {
	return selectedSection + ' - State-Driven Routing';
});
