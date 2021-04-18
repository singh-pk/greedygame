import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/HomePage/HomePage';
import AppDetailsPage from './pages/AppDetailsPage/AppDetailsPage';

import Header from './components/Header/Header';
import WithSpinner from './components/WithSpinner/WithSpinner';

import {
  selectIsFetching,
  selectCurrentAppStats,
  selectAppStats,
} from './redux/appList/appListSelectors';

import './App.scss';

const AppDetailsPageWithSpinner = WithSpinner(AppDetailsPage);

const App = ({ appStates, currentAppStats, isFetching, location }) => {
  return (
    <>
      {location.pathname !== '/' && <Header />}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route
          exact
          path='/appDetails'
          render={props =>
            !!Object.keys(currentAppStats).length && !!currentAppStats.color ? (
              <AppDetailsPageWithSpinner
                isLoading={isFetching}
                color={currentAppStats.color}
                appId={currentAppStats.appId}
                currentAppStats={appStates[currentAppStats.appId]}
                {...props}
              />
            ) : (
              <Redirect to='/' />
            )
          }
        />
      </Switch>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  appStates: selectAppStats,
  currentAppStats: selectCurrentAppStats,
  isFetching: selectIsFetching,
});

export default withRouter(connect(mapStateToProps)(App));
