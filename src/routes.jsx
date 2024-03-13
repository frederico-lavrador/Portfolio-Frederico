import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Projects } from './pages/Projects/Projects';
import { Contact } from './pages/Contact/Contact';
import { Error } from './pages/Error/Error';

export const router = createBrowserRouter([
	{
		path: '/portfolio-frederico/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'projects',
				element: <Projects />,
			},
			{
				path: 'contact',
				element: <Contact />,
			},
			{
				path: '*',
				element: <Error />,
			},
		],
	},
]);
