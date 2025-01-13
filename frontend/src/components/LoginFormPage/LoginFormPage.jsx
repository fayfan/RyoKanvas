// frontend/src/components/LoginFormPage/LoginFormPage.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './LoginForm.css';

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = e => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(
      async res => {
        const data = await res.json();
        if (data?.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <main>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username or Email:&nbsp;
          <input
            type="text"
            value={credential}
            onChange={e => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password:&nbsp;
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.credential && <p>{errors.credential}</p>}
        <button type="submit">Log In</button>
      </form>
    </main>
  );
};

export default LoginFormPage;
