import { useEffect } from 'react';
import { connect } from 'react-redux';

import AppListsContainer from '../AppListsContainer/AppListsContainer';

import { fetchAppListsStart } from '../../redux/appList/appListActions';

import { selectAllAppLists } from '../../redux/appList/appListSelectors';

import WithSpinner from '../../components/WithSpinner/WithSpinner';

import './AppLists.scss';

const AppListsContainerWithSpinner = WithSpinner(AppListsContainer);

const AppLists = ({ fetchAppLists, appLists }) => {
  useEffect(() => {
    fetchAppLists();
  }, [fetchAppLists]);

  return (
    <section className='app-list'>
      <div className='app-list-header'>
        <div>Apps</div>
      </div>

      <AppListsContainerWithSpinner
        appLists={appLists}
        isLoading={!Object.keys(appLists).length}
      />
    </section>
  );
};

const mapStateToProps = state => ({
  appLists: selectAllAppLists(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAppLists: () => dispatch(fetchAppListsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLists);
