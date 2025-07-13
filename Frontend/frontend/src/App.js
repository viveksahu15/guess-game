import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Leaderboard from './components/Leaderboard';
import './styles/leaderboard.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [newUser, setNewUser] = useState('');

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const handleClaim = async () => {
    if (!selectedUser) return;
    await axios.post(`http://localhost:5000/api/users/claim/${selectedUser}`);
    fetchUsers();
  };

  const handleAddUser = async () => {
    if (!newUser) return;
    await axios.post('http://localhost:5000/api/users/add', { name: newUser });
    setNewUser('');
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="app-container">
      <h1 className="main-title">🌟 Leaderboard System</h1>

      <div className="controls">
        <select
          onChange={(e) => setSelectedUser(e.target.value)}
          value={selectedUser}
        >
          <option value="">Select User</option>
          {users.map(u => (
            <option key={u._id} value={u._id}>{u.name}</option>
          ))}
        </select>
        <button onClick={handleClaim}>Claim Points</button>
      </div>

      <div className="add-user">
        <input
          className="user-input"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="👤 Enter new user"
        />
        <button className="add-button" onClick={handleAddUser}>Add User</button>
      </div>

      <Leaderboard users={users} />
    </div>
  );
}

export default App;
