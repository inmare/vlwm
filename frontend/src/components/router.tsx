import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './Layout.tsx';
import App from './App.tsx';
import Category from './Category.tsx';
import CategoryTitle from './CategoryTitle.tsx';
import Song from './Song.tsx';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/title',
				element: <Category />,
			},
			{
				path: '/title/:titleId',
				element: <CategoryTitle />,
			},
			{
				path: '/song/:songTitle',
				element: <Song />,
			},
		],
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
