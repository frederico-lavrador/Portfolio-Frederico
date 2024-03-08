import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
	return (
		<>
			<ThemeProvider>
				<Header/>
				<Outlet />
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default App;