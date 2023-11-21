// Library Imports
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { CurrentSessionContext } from '../../contexts/CurrentSessionContext';

function SignUpPlayer() {
  let playGame = useNavigate();

  const { setCurrentSession } = useContext(CurrentSessionContext);

  const [error, setError] = useState('');
  const [player, setPlayer] = useState({
    firstname: '',
    lastname: '',
    codename: '',
    email: '',
    password: '',
    confirmpassword: '',
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
      if (player.confirmpassword !== player.password) {
        setError('Passwords did not match');
      } else {
        const response = await fetch('/api/players/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(player),
        });

        if (response) {
          const data = await response.json();

          console.log(data);

          setPlayer({
            firstname: '',
            lastname: '',
            codename: '',
            email: '',
            password: '',
            confirmpassword: '',
          });

          setCurrentSession([
            {
              playerID: data.player.id,
              playerName: `${data.player.firstname} ${data.player.lastname}`,
              playerCodename: data.player.codename,
              playerEmail: data.player.email,
              playerTotalScore: 0,
              playerHighScore: 0,
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
        }
      }
    } catch (error) {
      console.log(error);
      setError(error.error.message);
    }
  };

  return (
    <div
      id='containerSignUp'
      className='containerSignInSignUp container-fluid bg-light text-start rounded'>
      <h3 className='formHeaders text-center'>Create an Account</h3>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='d-flex justify-content-between mb-2'>
            <div className='w-100 me-2'>
              <label htmlFor='firstname'>
                First Name:{' '}
                <span className='text-danger fs-3 m-0 p-0'>*</span>
              </label>

              <input
                id='firstname'
                name='firstname'
                type='text'
                required
                className='form-control shadow-none'
                value={player.firstname}
                onChange={handleChange}
              />
            </div>

            <div className='w-100 ms-2'>
              <label htmlFor='lastname'>
                Last Name:{' '}
                <span className='text-danger fs-3 m-0 p-0'>*</span>
              </label>

              <input
                id='lastname'
                name='lastname'
                type='text'
                required
                className='form-control shadow-none'
                value={player.lastname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor='codename'>
              Code Name:{' '}
              <span className='text-danger fs-3 m-0 p-0'>*</span>
            </label>

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
            <label htmlFor='email'>
              Email: <span className='text-danger fs-3 m-0 p-0'>*</span>
            </label>

            <input
              id='email'
              name='email'
              type='email'
              required
              className='form-control shadow-none mb-2'
              value={player.email}
              onChange={handleChange}
            />
          </div>

          <div className='d-flex justify-content-between mb-3'>
            <div className='w-100 me-2'>
              <label htmlFor='password'>
                Password:{' '}
                <span className='text-danger fs-3 m-0 p-0'>*</span>
              </label>

              <input
                id='password'
                name='password'
                type='password'
                required
                className='form-control shadow-none'
                value={player.password}
                onChange={handleChange}
              />
            </div>

            <div className='w-100 ms-2'>
              <label htmlFor='confirmpassword'>
                Confirm Password:
                <span className='text-danger fs-3 m-0 p-0'>*</span>
              </label>

              <input
                id='confirmpassword'
                name='confirmpassword'
                type='password'
                required
                className='form-control shadow-none'
                value={player.confirmpassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              id='btnSignUpPlayer'
              type='submit'
              className='btnSignUp btn btn-warning w-100 mb-3'>
              Sign Up
            </button>
          </div>
        </fieldset>
      </form>

      {error && (
        <div>
          <p className='text-danger text-center'>{error}</p>
        </div>
      )}

      <div className='divLinkToSignIn container-fluid py-2 w-75 rounded'>
        <p className='orSignIn text-center my-0 mx-3'>
          or <Link to={'/SignInPlayer'}>Sign in to your Account</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPlayer;
