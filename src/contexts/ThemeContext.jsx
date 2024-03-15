import { createContext, useReducer, useEffect, useContext } from 'react';
import { reducer } from '../reducer'

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, {
		darkMode: false,
	});

	useEffect(() => {

		const selectedTheme = localStorage.getItem('theme');

		if (selectedTheme === 'dark') {
			dispatch({ type: 'TOGGLE_THEME' });
		}

	}, []);

	useEffect(() => {

		localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');

		const themeLink = document.getElementById('theme-link');

		if (themeLink) {
			themeLink.href = state.darkMode ? 'src/Themes/dark_theme.css' : 'src/Themes/light_theme.css';
		}

	}, [state.darkMode]);

	return <ThemeContext.Provider value={{ state, dispatch }}>
		{children}
	</ThemeContext.Provider>;
};
