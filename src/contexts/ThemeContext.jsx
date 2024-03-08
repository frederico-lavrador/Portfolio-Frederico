import { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const selectedTheme = localStorage.getItem('theme');
		setDarkMode(selectedTheme === 'dark');
	}, []);

	useEffect(() => {
		const themeLink = document.getElementById('theme-link');

		if (themeLink) {
			themeLink.href = darkMode ? './src/Themes/dark_theme.css' : './src/Themes/light_theme.css';
		}
	}, [darkMode]);

	const toggleTheme = () => {
		const newMode = !darkMode;

		setDarkMode(newMode);
		localStorage.setItem('theme', newMode ? 'dark' : 'light');
	};

	return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};
