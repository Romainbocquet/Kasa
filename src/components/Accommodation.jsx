import '../styles/Logement.scss';
import { Link } from 'react-router-dom';
import logementsData from '../../data/logements.json';

function Accommodation() {
  return (
      <div className='logements'>
        {logementsData.map((logement) => (
          <Link key={logement.id} to={`/accommodation/${logement.id}`} className="logement-box">
            <h3>{logement.title}</h3>
            <img src={logement.cover} alt="logement-cover" className='logement-cover' />
          </Link>
        ))}
      </div>
  );
}

export default Accommodation;