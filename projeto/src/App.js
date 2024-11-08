import React, { useState, useEffect } from 'react';
import './App.css';
import AddUser from './componentes/AddUser';
import EditUser from './componentes/EditUser';
import UserList from './componentes/UserList';
import EditFilm from './componentes/EditFilm';
import FilmList from './componentes/FilmList';
import AddFilm from './componentes/AddFilm';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [films, setFilms] = useState([]);
  const [newFilm, setNewFilm] = useState('');
  const [filmEdited, setFilmEdited] = useState('');
  const [editingFilm, setEditingFilm] = useState(null);
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const addFilm = () => {
    if (newFilm.trim()) {
      setFilms([...films, newFilm]);
      setNewFilm('');
      setMessage('Filme adicionado com sucesso!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const startEditingFilm = (index) => {
    setEditingFilm(index);
    setFilmEdited(films[index]);
  };

  const saveEditedFilm = () => {
    const updatedFilms = [...films];
    updatedFilms[editingFilm] = filmEdited;
    setFilms(updatedFilms);
    setEditingFilm(null);
    setFilmEdited('');
    setMessage('Filme editado com sucesso!');
    setTimeout(() => setMessage(''), 3000);
  };

  const deleteFilm = (index) => {
    const updatedFilms = films.filter((_, i) => i !== index);
    setFilms(updatedFilms);
    setMessage('Filme removido com sucesso!');
    setTimeout(() => setMessage(''), 3000);
  };

  useEffect(() => {
    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  const handleLogin = () => setLoggedIn(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    switch (password) {
      case 'louvor':
        window.location.href = 'https://www.youtube.com/watch?v=td6ylTIEQVw'; 
      case 'Jesus':
        window.location.href = 'https://www.youtube.com/watch?v=pgzReOzQgNI'; 
        break;
      case 'loira':
        window.location.href = 'https://www.youtube.com/watch?v=AzHSVEDWpp4&list=LL&index=4';
      case 'dance':
        window.location.href = 'https://www.youtube.com/watch?v=uFmqAQarRdM'; 
        break;
      case 'dragon':
        window.location.href = 'https://www.youtube.com/watch?v=SuX1SXRzQy4';
        break;
     case 'senha': 
      handleLogin();  
      break;
      default:
        alert('Senha incorreta!');
        return; 
    }

    handleLogin();
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <h1>Bem-vindo à sua Aplicação</h1>
          <div className="cards-container">
            <section className="card">
              <h2>Gerenciamento de Usuários</h2>
              {editingUser ? (
                <EditUser currentUser={editingUser} onUpdate={updateUser} />
              ) : (
                <AddUser onAdd={addUser} />
              )}
              <UserList users={users} onEdit={setEditingUser} onDelete={deleteUser} />
            </section>

            <section className="card">
              <h2>Minha Lista de Filmes</h2>
              <AddFilm newFilm={newFilm} setNewFilm={setNewFilm} addFilm={addFilm} />
              {message && <div className="mensagem">{message}</div>}
              <FilmList films={films} onEdit={startEditingFilm} onDelete={deleteFilm} />
              {editingFilm !== null && (
                <EditFilm
                  currentFilm={filmEdited}
                  onUpdate={saveEditedFilm}
                  onCancel={() => setEditingFilm(null)}
                  setFilmEdited={setFilmEdited}
                />
              )}
            </section>
          </div>
        </>
      ) : (
        <div className="login-container">
          <h2>Entrar na Aplicação</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              required
            />
            <button type="submit">Entrar</button>
          </form>
          <button onClick={handleLogin} className="guest-login">
            Entrar como Convidado
          </button>
        </div>
      )}
      <button onClick={toggleTheme} className="theme-toggle">
        {isDarkTheme ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </button>
    </div>
  );
}

export default App;
