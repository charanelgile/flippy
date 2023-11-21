// Library Imports
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { CurrentSessionContext } from '../../contexts/CurrentSessionContext';

function SignInPlayer() {
  let playGame = useNavigate();

  const { setCurrentSession } = useContext(CurrentSessionContext);

  const [error, setError] = useState('');
  const [player, setPlayer] = useState({
    codename: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPlayer((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/players/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(player),
      });

      if (response.ok) {
        const data = await response.json();

        console.log(data);

        setPlayer({
          codename: '',
          password: '',
        });

        setCurrentSession([
          {
            playerID: data.player.id,
            playerName: `${data.player.firstname} ${data.player.lastname}`,
            playerCodename: data.player.codename,
            playerEmail: data.player.email,
            playerTotalScore: 0,
            playerHighScore: data.player.highscore,
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
        ]);

        playGame('/Play');
      } else {
        setError('Incorrect login details. Please check.');
      }
    } catch (error) {
      console.log(error);
      setError(error.error.message);
    }
  };

  return (
    <div
      id='containerSignIn'
      className='containerSignInSignUp container-fluid bg-light text-start rounded'>
      <h3 className='formHeaders text-center'>Sign in to your Account</h3>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor='codename'>Code Name:</label>

            <input
              id='codename'
              name='codename'
              type='text'
              required
              className='form-control shadow-none mb-2'
              value={player.codename}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor='password'>Password:</label>

            <input
              id='password'
              name='password'
              type='password'
              required
              className='form-control shadow-none mb-2'
              value={player.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              id='btnSignInPlayer'
              type='submit'
              className='btnSignIn btn btn-warning w-100 mb-3'>
              Sign In
            </button>
          </div>
        </fieldset>
      </form>

      {error && (
        <div>
          <h4 className='text-danger text-center'>{error}</h4>
        </div>
      )}

      <div className='divLinkToSignUp container-fluid py-2 w-75 rounded'>
        <p className='orSignUp text-center my-0 mx-3'>
          or <Link to={'/SignUpPlayer'}>Create an Account</Link>
        </p>
      </div>
    </div>
  );
}

export default SignInPlayer;
