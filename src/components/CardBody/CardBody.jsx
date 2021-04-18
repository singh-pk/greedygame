import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAppStatsById } from '../../redux/appList/appListSelectors';

import formatter from '../../utils/formatter';

import './CardBody.scss';

const CardBody = ({ appStats }) => {
  let revenue = appStats.reduce((acc, rev) => acc + rev.revenue, 0);
  let requests = appStats.reduce((acc, rev) => acc + rev.adRequest, 0);
  let adResponse = appStats.reduce((acc, rev) => acc + rev.adResponse, 0);
  let impressions = appStats.reduce((acc, rev) => acc + rev.impressions, 0);

  return (
    <div className='card-body'>
      <div>
        <div>Revenue</div>
        <div>${formatter(revenue)}</div>
      </div>

      <div>
        <div>Ad Requests</div>
        <div>{formatter(requests)}</div>
      </div>

      <div>
        <div>Ad Response</div>
        <div>{formatter(adResponse)}</div>
      </div>

      <div>
        <div>Impressions</div>
        <div>{formatter(impressions)}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (_, ownProps) =>
  createStructuredSelector({
    appStats: selectAppStatsById(ownProps.appId),
  });

export default connect(mapStateToProps)(CardBody);
