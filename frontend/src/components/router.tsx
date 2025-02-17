import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App.tsx';
import Category from './Category.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/title/:titleId',
		element: <Category />,
	},
]);

export default function Router() {
	return <RouterProvider router={router} />;
}
