import { useParams, Navigate } from 'react-router-dom';
import '../styles/AccommodationDetail.scss';
import logementsData from '../../data/logements.json';
import Carousel from '../components/Carousel';
import Tags from '../components/Tags';
import Accordion from '../components/Accordion';
import Rating from '../components/Rating';
import Host from '../components/Host';

function AccommodationDetail() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement || !id) {
    return <Navigate to="/404" />;
  }

  return (
    <div className='logement-detail'>
      <Carousel images={logement.pictures} />
      <div className='logement-carac'>
        <div className='logement-carac__title'>
          <h1>{logement.title}</h1>
          <div className='location'>{logement.location}</div>
          <Tags value={logement.tags} />
        </div>
        <div className='logement-carac__rating'>
          <Host hostDetail={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className='accordion-container'>
          <Accordion
            title="Description"
            content={logement.description}
            setLargeur='medium'
          />
          <Accordion
            title="Équipements"
            content={logement.equipments}
            setLargeur='medium'
          />
        </div>
    </div>
  );
}

export default AccommodationDetail;
