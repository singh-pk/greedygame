import './RouteChangeIcon.scss';

const RouteChangeIcon = ({ back, handleClick }) => {
  return (
    <div className='route-change-icon-container' onClick={handleClick}>
      <div
        className={`${back && 'route-change-icon-back'} route-change-icon`}
      />
    </div>
  );
};

export default RouteChangeIcon;
