import React from 'react';
import '../styles/leaderboard.css';

function Leaderboard({ users }) {
  if (!users || users.length === 0) return <p>No users found.</p>;

  const top3 = users.slice(0, 3);
  const rest = users.slice(3);

  const maskPoints = (points) => {
    const p = points.toString();
    return p.length <= 2 ? p : p[0] + '*'.repeat(p.length - 2) + p[p.length - 1];
  };

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Wealth Ranking</h2>

      <div className="top3-container">
  {top3.map((user, i) => {
    const ranks = ['1st', '2nd', '3rd'];
    return (
      <div key={user._id} className={`top-card rank-${i + 1}`}>
        <div className="crown">👑</div>
        <div className="top-rank-label">{ranks[i]}</div> {/* ✅ Add this line */}
        <img
          src={`https://i.pravatar.cc/150?img=${i + 1}`}
          alt={user.name}
          className="avatar"
        />
        <p className="name">{user.name}</p>
        <p className="points">{maskPoints(user.totalPoints)}</p>
      </div>
    );
  })}
</div>

      <div className="rest-users">
        {rest.map((user, i) => (
          <div key={user._id} className="user-row">
            <span className="rank">{i + 4}</span>
            <img
              src={`https://i.pravatar.cc/150?img=${i + 4}`}
              alt={user.name}
              className="avatar-small"
            />
            <span className="name">{user.name}</span>
            <span className="points">{maskPoints(user.totalPoints)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
