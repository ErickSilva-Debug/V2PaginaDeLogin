import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} className="user-item">
          <span>{user.name} - {user.email}</span>
          <div className="user-actions">
            <button onClick={() => onEdit(user)}>Editar</button>
            <button onClick={() => onDelete(user.id)}>Remover</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
