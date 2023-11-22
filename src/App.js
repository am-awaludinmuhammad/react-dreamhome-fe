import { AuthContextProvider } from './context/AuthContext';
import MyRouter from './pages/Router';

function App() { 
  return (
    <AuthContextProvider>
      <MyRouter />
    </AuthContextProvider>
  );
}

export default App;
