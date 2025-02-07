import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '@scss/index.scss';
import App from './App.tsx';

const root = document.querySelector('#root');
if (root) {
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
