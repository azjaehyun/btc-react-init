import React, { useState, useCallback } from 'react';
import { ThemeContext } from './ThemeContext';
import MainContent from './MainContent';
const ContextPractice = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    if (theme == 'light') {
      setTheme('dark');
    } else if (theme == 'dark') {
      setTheme('light');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
};
// https://velog.io/@tinwo/%EC%8B%A4%EC%8A%B5-Context%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%ED%85%8C%EB%A7%88-%EB%B3%80%EA%B2%BD-%EA%B8%B0%EB%8A%A5%EA%B3%BC-useCallback
export default ContextPractice;
