import { useState } from 'react';
import PropTypes from 'prop-types';
import './css/UserCard.css';

function UserCard({ image, firstName, lastName, email }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className="card">
      <img src={image} alt="Avatar" className="w-100" />
      <div className="info-container">
        <div className="info-head">
          <h4>
            {firstName} {lastName}
          </h4>
          <span
            className={favorite ? 'is-favorite' : ''}
            onClick={(/*event*/) => {
              const newFavorite = !favorite;
              setFavorite(newFavorite);
            }}
          >
            &#9733;
          </span>
        </div>
        <div className="info-body">
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  image: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserCard;