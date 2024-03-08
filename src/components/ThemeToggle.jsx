import { useTheme } from '../contexts/ThemeContext'

function ThemeToggle() {

	const { state, dispatch } = useTheme(); 
	const toggleTheme = () => {
		dispatch({ type: 'TOGGLE_THEME' });
	}

	return (
		<div className='header__LightDarkBtn'>
			<button onClick={toggleTheme}>
				{state.darkMode ?
					<i className='fa fa-moon-o' aria-hidden='true'></i>
					:
					<i className='fa fa-sun-o' aria-hidden='true'></i>}
			</button>
		</div>
	);

}

export default ThemeToggle;