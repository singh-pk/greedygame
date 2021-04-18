import CompanyDetails from '../CompanyDetails/CompanyDetails';
import RouteChangeIcon from '../RouteChangeIcon/RouteChangeIcon';

import './CardHead.scss';

const CardHead = ({ appId, color }) => {
  return (
    <div className='card-header'>
      <CompanyDetails appId={appId} color={color} />

      <RouteChangeIcon />
    </div>
  );
};

export default CardHead;
