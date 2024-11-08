import React from 'react';

function AddFilm({ newFilm, setNewFilm, addFilm }) {
  return (
    <div className="formulario">
      <input
        type="text"
        value={newFilm}
        onChange={(e) => setNewFilm(e.target.value)}
        placeholder="Digite o nome de um filme"
      />
      <button onClick={addFilm}>Adicionar Filme</button>
    </div>
  );
}

export default AddFilm;
