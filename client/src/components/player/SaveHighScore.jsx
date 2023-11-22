import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CurrentSessionContext } from '../../contexts/CurrentSessionContext';

const getToken = () => {
  return localStorage.getItem('token');
};

const SaveHighScore = () => {
  let goToLevel1 = useNavigate();
  let goToRanking = useNavigate();

  const token = getToken();

  const { currentSession, setCurrentSession } = useContext(
    CurrentSessionContext
  );

  const restartGame = () => {
    let currentPlayer = [
      {
        playerID: currentSession[0].playerID,
        playerName: currentSession[0].playerName,
        playerCodename: currentSession[0].playerCodename,
        playerEmail: currentSession[0].playerEmail,
        playerTotalScore: 0,
        playerHighScore: currentSession[0].playerHighScore,
        playerLevel: 1,
        playerGridDimensions: [
          'grid3x4',
          'grid4x4',
          'grid4x5',
          'grid4x6',
          'grid5x6',
          'grid6x6',
          'grid6x7',
          'grid6x8',
        ],
      },
    ];

    setCurrentSession(currentPlayer);

    goToLevel1('/Play');
  };

  const saveHighScore = async (event) => {
    event.preventDefault();

    const personalBest = {
      highscore: currentSession[0].playerHighScore,
    };

    try {
      const response = await fetch(
        `/api/players/update/${currentSession[0].playerID}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(personalBest),
        }
      );

      if (response.ok) {
        const data = await response.json();

        console.log(data);
      }

      goToRanking('/Ranking');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id='divSaveHighScore'
      className='d-flex flex-column justify-content-start align-items-center text-warning'>
      <h1 className='mb-4'>Thank you for playing the game</h1>

      <div id='cardSaveHighScore' className='card bg-warning py-3'>
        <form onSubmit={saveHighScore}>
          <fieldset className='container-fluid'>
            <div className='row w-100 m-0 p-0'>
              <div className='col-4 text-start'>
                <label htmlFor='codename' className='lblSaveHighScore'>
                  Code Name:
                </label>
              </div>

              <div className='col-8'>
                <input
                  type='text'
                  id='codename'
                  name='codename'
                  className='fldSaveHighScore form-control'
                  readOnly
                  value={currentSession[0].playerCodename}
                />
              </div>
            </div>

            <div className='row w-100 m-0 p-0'>
              <div className='col-4 text-start'>
                <label htmlFor='totalscore' className='lblSaveHighScore'>
                  Total Score:
                </label>
              </div>

              <div className='col-8'>
                <input
                  type='number'
                  id='totalscore'
                  name='totalscore'
                  className='fldSaveHighScore form-control'
                  readOnly
                  value={currentSession[0].playerTotalScore}
                />
              </div>
            </div>

            <div className='row w-100 m-0 p-0'>
              <div className='col-4 text-start'>
                <label htmlFor='highscore' className='lblSaveHighScore'>
                  HighScore:
                </label>
              </div>

              <div className='col-8'>
                <input
                  type='number'
                  id='highscore'
                  name='highscore'
                  className='fldSaveHighScore form-control'
                  readOnly
                  value={currentSession[0].playerHighScore}
                />
              </div>
            </div>

            <div className='d-flex justify-content-evenly'>
              <button
                type='submit'
                id='btnSaveHighScore'
                className='btn px-3 mx-3'>
                Save High Score
              </button>

              <button
                type='button'
                id='btnRestartGame'
                className='btn btn-warning px-3 mx-3'
                onClick={restartGame}>
                Restart Game
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SaveHighScore;
