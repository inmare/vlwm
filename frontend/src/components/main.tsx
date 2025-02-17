import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@scss/index.scss';
import Router from './router';

const root = document.querySelector('#root');
if (root) {
	createRoot(root).render(
		<StrictMode>
			<Router />
		</StrictMode>,
	);
}
