// frontend/src/components/SignupFormModal/SignupFormModal.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as sessionActions from '../../store/session';
import './SignupForm.css';

const SignupFormModal = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const isSignupButtonDisabled = username.length < 4 || password.length < 6;

  const handleSubmit = e => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async res => {
          const data = await res.json();
          // Equivalent to `if (data && data.errors) {`
          if (data?.errors) {
            setErrors(data.errors);
          }
        });
    }

    return setErrors({
      confirmPassword:
        'Confirm Password field must be the same as the Password field',
    });
  };

  return (
    <main className="signup-form-main">
      <h1 className="signup-h1">Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <label className="signup-label">
          Email
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        {errors.email && <p className="signup-error">{errors.email}</p>}
        <label className="signup-label">
          Username
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        {errors.username && <p className="signup-error">{errors.username}</p>}
        <label className="signup-label">
          First Name
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        {errors.firstName && <p className="signup-error">{errors.firstName}</p>}
        <label className="signup-label">
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        {errors.lastName && <p className="signup-error">{errors.lastName}</p>}
        <label className="signup-label">
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        {errors.password && <p className="signup-error">{errors.password}</p>}
        <label className="signup-label">
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            className="signup-input"
          />
        </label>
        {errors.confirmPassword && (
          <p className="signup-error">{errors.confirmPassword}</p>
        )}
        <button
          type="submit"
          disabled={isSignupButtonDisabled}
          className="signup-button"
        >
          Sign Up
        </button>
      </form>
    </main>
  );
};

export default SignupFormModal;
