import { Link } from 'react-router-dom'
import Socials from './Socials'; /* Replace this with UseContext */
import ThemeToggle from './ThemeToggle'; /* Replace this with UseContext */

function Header() {
	return (
		<>
			<div className='container'>
				<div className='header__wrapper'>
					<div className='header__logo'>
						<h1>
							<Link>{`<FREDERICO LAVRADOR/>`}</Link>
						</h1>
					</div>
					<nav className='header__navbar'>
						<ul>
							<li>
								<Link to='about'>About Me</Link>
							</li>
							<li>
								<Link to='projects'>Projects</Link>
							</li>
							<li>
								<Link to='contact'>Contact Me</Link>
							</li>
						</ul>
					</nav>
					<div className='header__utilities'>
						<Socials />
						<ThemeToggle />
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
