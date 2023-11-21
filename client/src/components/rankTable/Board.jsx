import React, { useState, useEffect } from 'react';
import Profiles from './Profiles';
import { Leaderboard } from './RankData';

const getToken = () => {
  return localStorage.getItem('token');
};

export default function Board() {
  const token = getToken();

  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  };

  useEffect(() => {
    const fetchLeaderboard = async () => {
      await fetch('/api/players/leaderboard', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error);
        });
    };

    fetchLeaderboard();
  });

  return (
    <div className='board'>
      <h1 className='leaderboard'> Top Rankings</h1>

      <div className='duration'>
        <button
          onClick={handleClick}
          data-id='7'>
          7 Days
        </button>
        <button
          onClick={handleClick}
          data-id='30'>
          30 Days
        </button>
        <button
          onClick={handleClick}
          data-id='0'>
          All-Time
        </button>
      </div>

      <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>
    </div>
  );
}

function between(data, between) {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter((val) => {
    let userDate = new Date(val.dt);
    if (between === 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with asending order
  return filter.sort((a, b) => {
    if (a.level === b.level) {
      return b.score - a.level;
    } else {
      return b.score - a.level;
    }
  });
}
