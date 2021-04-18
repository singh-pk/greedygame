import CompanyDetails from '../../components/CompanyDetails/CompanyDetails';
import RouteChangeIcon from '../../components/RouteChangeIcon/RouteChangeIcon';

import './AppDetailsPage.scss';

const AppDetailsPage = ({ currentAppStats, appId, color, history }) => {
  return (
    <div className='app-details-page'>
      <section className='app-details-page-header'>
        <RouteChangeIcon back handleClick={() => history.goBack()} />
        <CompanyDetails appId={appId} color={color} />
      </section>

      <section className='app-details-page-body'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Revenue</th>
              <th>Ad Requests</th>
              <th>Ad Responses</th>
              <th>Impressions</th>
              <th>Clicks</th>
              <th>Render Rate</th>
            </tr>
          </thead>

          <tbody>
            {currentAppStats.map(
              (
                { date, revenue, adRequest, adResponse, impressions, clicks },
                i
              ) => {
                let newDate = date.toString().split('-');
                newDate = new Date(
                  newDate[2],
                  newDate[1],
                  newDate[0]
                ).toDateString();
                newDate = newDate.split(' ');

                let lastDigit = parseInt(newDate[2][1]);
                let str;

                if (lastDigit === 1 && parseInt(newDate[2]) !== 11) {
                  str = 'st';
                } else if (lastDigit === 2 && parseInt(newDate[2]) !== 12) {
                  str = 'nd';
                } else if (lastDigit === 3 && parseInt(newDate[2]) !== 13) {
                  str = 'rd';
                } else {
                  str = 'th';
                }

                return (
                  <tr key={i}>
                    <td>
                      {newDate[2]}
                      {str} {newDate[1]}, {newDate[3]}
                    </td>
                    <td>${revenue}</td>
                    <td>{adRequest.toLocaleString('en-IN')}</td>
                    <td>{adResponse.toLocaleString('en-IN')}</td>
                    <td>{impressions.toLocaleString('en-IN')}</td>
                    <td>{clicks.toLocaleString('en-IN')}</td>
                    <td>{Math.round((impressions / adResponse) * 100)}%</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AppDetailsPage;
