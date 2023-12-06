import '../styles/Home.scss';
import Banner from '../components/Banner';
import Logements from '../components/Logements';


function Home() {

  return (
      <div className='home'>
        <Banner />
        <Logements />
      </div>
  )
}

export default Home