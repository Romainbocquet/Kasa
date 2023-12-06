import '../styles/Logement.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Logement({ id, title }) {
  return (
    <Link to={`/accommodation/${id}`} className="logement-box">
      <h3>{title}</h3>
    </Link>
  );
}

Logement.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Logement;