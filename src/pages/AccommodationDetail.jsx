import { useParams } from 'react-router-dom';
import '../styles/AccommodationDetail.scss';
import logementsData from '../../data/logements.json';
import Carousel from '../components/Carousel';
import Tags from '../components/Tags';
import Accordion from '../components/Accordion';

function AccommodationDetail() {
  const { id } = useParams();

  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <div className='logement-detail'>
      <Carousel images={logement.pictures} />
      <div className='logement-carac'>
        <div>
          <h1>{logement.title}</h1>
          <div className='location'>{logement.location}</div>
          <Tags value={logement.tags} />
        </div>
        <div></div>
      </div>
      <div className='accordion-container'>
          <Accordion
            title="description"
            content={logement.description}
            setLargeur='medium'
          />
          <Accordion
            title="equipments"
            content={logement.equipments}
            setLargeur='medium'
          />
        </div>
    </div>
  );
}

export default AccommodationDetail;
