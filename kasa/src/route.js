import Home, { loader as AppLoader } from './pages/home/Home.js';
import Logement, { loader as LogementLoader } from './pages/logement/Logement';
import About, { loader as AboutLoader } from './pages/about/About';
import Main from './layouts/main/Main';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/page-404/Error';

export default createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '',
				element: <Home />,
				loader: AppLoader,
			},
			{
				path: 'about',
				element: <About />,
				loader: AboutLoader,
			},
			{
				path: 'logement/:id',
				element: <Logement />,
				loader: LogementLoader,
			},
		],
		errorElement: <ErrorPage />,
	},
]);
