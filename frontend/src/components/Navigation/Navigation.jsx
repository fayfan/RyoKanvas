// frontend/src/components/Navigation/Navigation.jsx
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import airbnbLogoLarge from '../../images/airbnb-logo-large.png';
import airbnbLogoSmall from '../../images/airbnb-logo-small.png';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  const { width } = useWindowDimensions();

  return (
    <ul className="nav-container">
      <li className="home-button">
        <NavLink to="/">
          <img
            src={width < 1128 ? airbnbLogoSmall : airbnbLogoLarge}
            className="airbnb-logo"
          />
        </NavLink>
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
