// frontend/src/components/LoginFormModal/LoginFormModal.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import './LoginForm.css';

const LoginFormModal = () => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = e => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async res => {
        const data = await res.json();
        // Equivalent to `if (data && data.errors) {`
        if (data?.errors) {
          setErrors(data.errors);
        }
      });
  };

  return (
    <main className="login-form-main">
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
        {errors.credential && <p className="error">{errors.credential}</p>}
        <button type="submit">Log In</button>
      </form>
    </main>
  );
};

export default LoginFormModal;
