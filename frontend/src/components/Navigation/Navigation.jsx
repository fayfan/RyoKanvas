// frontend/src/components/Navigation/Navigation.jsx
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  const sessionLinks = sessionUser ? (
    <li className="session-links">
      <ProfileButton user={sessionUser} />
    </li>
  ) : (
    <div className="session-links">
      <li>
        <NavLink to="/login">Log In</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </div>
  );

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  );
};

export default Navigation;
