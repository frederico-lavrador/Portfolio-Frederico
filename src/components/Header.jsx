import Socials from './Socials' /* Replace this with UseContext */
import ThemeToggle from './ThemeToggle' /* Replace this with UseContext */

function Header() {
    
    return (
			<div className='container'>
				<div className='header__wrapper'>
					<div className='header__logo'>
						<h1>Frederico Lavrador</h1>
					</div>
					<nav className='header__navbar'>
						<ul>
							<li>About</li>
							<li>Projects</li>
							<li>Contact</li>
						</ul>
					</nav>
					<div className='header__utilities'>
						<Socials/>
						<ThemeToggle/>
					</div>
				</div>
			</div>
		);

}

export default Header;