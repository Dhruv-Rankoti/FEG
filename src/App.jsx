import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import { lightTheme, darkTheme } from './themes';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease;
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <AppContainer>
          <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;