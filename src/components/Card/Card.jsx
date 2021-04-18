import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CardHead from '../CardHead/CardHead';
import CardBody from '../CardBody/CardBody';

import { fetchAppStatsStart } from '../../redux/appList/appListActions';

import './Card.scss';

const Card = ({ appId, color, fetchAppStats, history }) => {
  let handleClick = () => {
    fetchAppStats(appId, color);
    history.push('/appDetails');
  };

  return (
    <div className='card' onClick={handleClick}>
      <CardHead appId={appId} color={color} />

      <CardBody appId={appId} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchAppStats: (appId, color) =>
    dispatch(fetchAppStatsStart({ appId, color })),
});

export default withRouter(connect(null, mapDispatchToProps)(Card));
