// frontend/src/components/Navigation/Navigation.jsx
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul>
      <li className="home-button">
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && (
        <li>
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
  );
};

export default Navigation;
