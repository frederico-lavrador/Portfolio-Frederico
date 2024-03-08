import { useTheme } from '../contexts/ThemeContext'

function ThemeToggle() {

	const { darkMode, toggleTheme } = useTheme(); 

	return (
		<div className='header__LightDarkBtn'>
			<button onClick={toggleTheme}>
				{darkMode ?
					<i className='fa fa-moon-o' aria-hidden='true'></i>
					:
					<i className='fa fa-sun-o' aria-hidden='true'></i>}
			</button>
		</div>
	);

}

export default ThemeToggle;