import '../../App/App.css';
import Cards from '../Cards/Cards';
import HeroPage from '../HeroPage/HeroPage';

const Home = () => {
  return (
    <div className='home-container'>
      <HeroPage />
      <Cards />
    </div>
  );
}

export default Home 