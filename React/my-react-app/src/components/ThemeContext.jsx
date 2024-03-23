import React, { createContext, useState, useContext } from 'react';

// Create a new context called ThemeContext
const ThemeContext = createContext();

// Create a provider component for the ThemeContext
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Initial theme is light by default

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Provide the theme value and toggleTheme function to child components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};