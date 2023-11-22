import React, { useContext, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import SignInPlayer from '../components/player/SignInPlayer';
import { CurrentSessionContext } from '../contexts/CurrentSessionContext';

const getToken = () => {
  return localStorage.getItem('token');
};

const Leaderboard = () => {
  const token = getToken();
  const [ranking, setRanking] = useState(null);
  const [currentRank, setCurrentRank] = useState('');
  const [inTop10, setInTop10] = useState(false);

  const { currentSession } = useContext(CurrentSessionContext);

  const getCurrentRank = () => {
    return (
      ranking
        .map((record) => record._id.toString())
        .indexOf(currentSession[0].playerID) + 1
    );
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
        .then((data) => {
          setRanking(data.players);

          if (ranking) {
            let currentRanking = getCurrentRank();

            if (currentRanking <= 10) {
              if (currentRanking === 1) {
                setCurrentRank('1st');
              } else if (currentRanking === 2) {
                setCurrentRank('2nd');
              } else if (currentRanking === 3) {
                setCurrentRank('3rd');
              } else {
                setCurrentRank(`${currentRanking}th`);
              }

              setInTop10(true);
            } else {
              setCurrentRank(currentRanking);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchLeaderboard();
  });

  return (
    <div>
      {token ? (
        <div className='divLeaderboard w-50 text-center'>
          <h1>&bull;&nbsp;&nbsp;Leaderboard&nbsp;&nbsp;&bull;</h1>

          <section className='secPersonalRanking'>
            <h4 className='m-0'>
              {inTop10
                ? `You are ${currentRank} in the Ranking`
                : `Your Ranking: ${currentRank}`}
            </h4>
          </section>

          <section className='secAllRanking'>
            <Table
              striped
              bordered
              responsive='md'
              className='table-secondary m-0'>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Code Name</th>
                  <th>High Score</th>
                </tr>
              </thead>
              <tbody>
                {ranking &&
                  ranking.map((record, index) => {
                    return (
                      <tr key={record._id}>
                        <td>{index + 1}</td>
                        <td>{record.codename}</td>
                        <td>{record.highscore}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </section>
        </div>
      ) : (
        <SignInPlayer />
      )}
    </div>
  );
};

export default Leaderboard;
