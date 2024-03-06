import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'

function App() {

  return (
		<>
		  <Header />
		  <Outlet/>
		</>
	);
}

export default App
