import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Leaderboard from './components/Leaderboard';
import './styles/leaderboard.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(true);

  const BASE_URL = 'https://guess-game-1-cyyd.onrender.com';

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/users`);
      setUsers(res.data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleClaim = async () => {
    if (!selectedUser) return;
    await axios.post(`${BASE_URL}/api/users/claim/${selectedUser}`);
    fetchUsers();
  };

  const handleAddUser = async () => {
    if (!newUser.trim()) return;
    await axios.post(`${BASE_URL}/api/users/add`, { name: newUser });
    setNewUser('');
    fetchUsers();
  };

  const handleDeleteUser = async () => {
    if (!selectedUser) return;
    await axios.delete(`${BASE_URL}/api/users/delete/${selectedUser}`);
    setSelectedUser('');
    fetchUsers();
  };

  useEffect(() => {
    // Wake up the Render backend
    fetch(`${BASE_URL}/api/users`).catch(() => {});
    setTimeout(() => {
      fetchUsers();
    }, 1500);
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
        <button onClick={handleDeleteUser} style={{ backgroundColor: '#e53935', marginLeft: '10px' }}>
          Delete User
        </button>
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

      {loading ? <p>🔄 Waking up backend... please wait</p> : <Leaderboard users={users} />}
    </div>
  );
}

export default App;
