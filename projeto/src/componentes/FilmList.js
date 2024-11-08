import React from 'react';

function FilmList({ films, onEdit, onDelete }) {
  return (
    <div className="film-list">
      {films.map((film, index) => (
        <div key={index} className="film-item">
          <span>{film}</span>
          <div className="film-actions">
            <button onClick={() => onEdit(index)}>Editar</button>
            <button onClick={() => onDelete(index)}>Remover</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilmList;
