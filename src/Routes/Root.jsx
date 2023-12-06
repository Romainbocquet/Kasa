import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccommodationDetail from '../pages/AccommodationDetail';
import Error404 from '../pages/Error404';

const Root = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<AccommodationDetail />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Root;
