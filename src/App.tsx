import React from 'react';

// Import Styles
import GlobalStyles from './styles/GlobalStyles';

// Import Components
import GlobalContexts from './contexts/index';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <GlobalContexts>
      <Dashboard />
      <GlobalStyles />
    </GlobalContexts>
  );
}

export default App;
