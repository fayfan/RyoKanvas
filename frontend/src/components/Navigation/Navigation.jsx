// frontend/src/components/Navigation/Navigation.jsx
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import ryokanvasLogoLarge from '../../images/ryokanvas-logo-large.png';
import ryokanvasLogoSmall from '../../images/ryokanvas-logo-small.png';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  const { width } = useWindowDimensions();

  return (
    <ul className="nav-container">
      <li className="home-button">
        <NavLink to="/">
          <img
            src={width < 1128 ? ryokanvasLogoSmall : ryokanvasLogoLarge}
            className="airbnb-logo"
          />
        </NavLink>
      </li>
      <div className="nav-right-buttons">
        {sessionUser && (
          <li>
            <NavLink to="/spots/new" className="create-spot-link">
              Create a New Spot
            </NavLink>
          </li>
        )}
        {isLoaded && (
          <li>
            <ProfileButton user={sessionUser} />
          </li>
        )}
      </div>
    </ul>
  );
};

export default Navigation;
