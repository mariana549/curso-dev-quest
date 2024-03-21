import './App.css';
import { ThemeProvider } from './contexts/theme-context';
import { ThemeTogglerButton } from './components/theme-toggle-buttom/theme-toggle-buttom';

function App() {
  return (
    <ThemeProvider>
      <ThemeTogglerButton />
    </ThemeProvider>
    );
}

export default App;
