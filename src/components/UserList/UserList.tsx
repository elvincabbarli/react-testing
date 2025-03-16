import React, { useState } from "react";
import { useUnit } from "effector-react";
import { $users, addUser, updateUser, removeUser, selectUser, User, resetUsers } from "../../store/store";

const UserList: React.FC = () => {
  const users = useUnit($users);
  const [newName, setNewName] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");

  const handleAddUser = () => {
    if (!newName.trim()) return;
    addUser({ id: Date.now(), name: newName, email: `${newName}@mail.com` });
    setNewName("");
  };

  const handleUpdateUser = () => {
    if (editingId === null || !editName.trim()) return;
    updateUser({ id: editingId, name: editName, email: `${editName}@mail.com` });
    setEditingId(null);
    setEditName("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h1>User List</h1>

      {/* Yeni Kullanıcı Ekleme */}
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleAddUser}>Add User</button>

      {/* Kullanıcı Listesi */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user: User) => (
          <li key={user.id} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
            {editingId === user.id ? (
              <>
                {/* Güncelleme Alanı */}
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <button onClick={handleUpdateUser}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span onClick={() => selectUser(user.id)} style={{ cursor: "pointer", fontWeight: "bold" }}>
                  {user.name} - {user.email}
                </span>
                <button onClick={() => { setEditingId(user.id); setEditName(user.name); }}>Edit</button>
                <button onClick={() => removeUser(user.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <button onClick={() => resetUsers()}>ResetUsers</button>
    </div>
  );
};

export default UserList;
