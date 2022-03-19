import './App.css';
import { useContext } from 'react';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async() => {
    await auth.signout();
    window.location.href = window.location.href;
    
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link> 
          <Link to="/private">Pagina privada</Link> 
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/private" element={< RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
