// Home.jsx
import '../styles/Home.scss';
import Banner from '../components/Banner';
import Logement from '../components/Logement';
import bannerHome from '../assets/bannerHome.png';

function Home() {
  return (
    <div className='home'>
      <Banner
        image={bannerHome} // Remplacez par le chemin de votre image
        title="Chez vous, partout et ailleurs"
      />
      <Logement />
    </div>
  );
}

export default Home;
