import { useState } from 'react'
import '../styles/Home.scss';
import Banner from '../components/Banner';

function Home() {
  const [count, setCount] = useState(0)

  return (
      <div className='home'>
        <Banner />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="app">Hello, this is the home page!</div>
      </div>
  )
}

export default Home