import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
	const theme = localStorage.getItem("theme");
	const db = localStorage.getItem("db-theme");
	if(!theme || !db) {
		// Default theme is taken as dark-theme
		localStorage.setItem("theme", "light-theme");
		localStorage.setItem("db-theme", "light");
		return "light-theme";
	} else {
		return theme;
	}
};

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(getTheme);

	function toggleTheme() {
		if(theme === "dark-theme") {
			setTheme("light-theme");
			localStorage.setItem("db-theme", "light");
		} else {
			setTheme("dark-theme");
			localStorage.setItem("db-theme", "dark");
		}
	};

	useEffect(() => {
		const refreshTheme = () => {
			localStorage.setItem("theme", theme);
		};

		refreshTheme();
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };