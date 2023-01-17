import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Adopt from './Pages/Adopt';
import ContactUs from './Pages/ContactUs';
import RootLayout from './Pages/RootLayout';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
    errorElement: <ErrorPage />,
		children: [
			{ path: '/', element: <About /> },
			{ path: '/adopt', element: <Adopt /> },
			{ path: '/contact-us', element: <ContactUs /> },
		],
	},
]);

function App() {
  return (
		<RouterProvider router={router} />
	);
}

export default App;
