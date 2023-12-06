import { useParams } from 'react-router-dom';
import logementsData from '../../data/logements.json';

function Accommodation() {
  const { id } = useParams();

  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className='logement-detail'>
      {logement.title}
    </div>
  );
}

export default Accommodation;
