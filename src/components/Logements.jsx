import '../styles/Logement.scss';
import logementsData from '../../data/logements.json';
import Logement from '../components/Logement';

function Logements() {
  return (
    <div className='logements'>
      {logementsData.map((logement) => (
        <Logement key={logement.id} title={logement.title} id={logement.id} />
      ))}
    </div>
  );
}





export default Logements;