import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectAppNameById,
  selectPublisherNameById,
} from '../../redux/appList/appListSelectors';

import './CompanyDetails.scss';

const CompanyDetails = ({ color, appName, publisherName }) => {
  return (
    <div className='company-details'>
      <div className='company-logo' color={color} />

      <div className='company-offical-names'>
        <div className='company-name'>{appName}</div>
        <div className='company-publisher'>{publisherName}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (_, ownProps) =>
  createStructuredSelector({
    appName: selectAppNameById(ownProps.appId),
    publisherName: selectPublisherNameById(ownProps.appId),
  });

export default connect(mapStateToProps)(CompanyDetails);
