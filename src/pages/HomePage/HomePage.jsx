import AdSoul from '../../components/AdSoul/AdSoul';
import AppLists from '../../components/AppLists/AppLists';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='homepage'>
      <AdSoul />

      <AppLists />
    </div>
  );
};

export default HomePage;
