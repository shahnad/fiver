import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Material-ui/theme'
import Dashboard from './container/dashboard';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
