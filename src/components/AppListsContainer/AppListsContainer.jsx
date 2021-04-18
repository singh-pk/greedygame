import Card from '../Card/Card';

const AppListsContainer = ({ appLists }) => {
  const multiple = i => {
    if (i % 3 === 0) {
      return 'blue';
    } else if ((i + 1) % 3 === 0) {
      return 'green';
    } else {
      return 'orange';
    }
  };

  return (
    <div className='app-list-container'>
      {Object.keys(appLists).map((appId, i) => (
        <Card key={i} appId={appId} color={multiple(i + 1)} />
      ))}
    </div>
  );
};

export default AppListsContainer;
