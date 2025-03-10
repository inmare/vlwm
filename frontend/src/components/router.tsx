import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './Layout.tsx';
import Home from './Home.tsx';
import Category from './Category.tsx';
import CategoryTitle from './CategoryTitle.tsx';
import Song from './Song.tsx';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
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
