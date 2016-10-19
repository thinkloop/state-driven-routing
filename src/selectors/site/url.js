import store from '../../state/store';

export default function () {
	const { url } = store.getState();
	return url;
}
