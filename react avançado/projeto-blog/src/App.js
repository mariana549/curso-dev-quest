import './App.css';
import { AppRoutes } from './pages/routes';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
   <>
      <GlobalStyle />
      <AppRoutes />
   </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`

export default App;
