import './WithSpinner.scss';

const WithSpinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className='spinner-container'>
      <div className='spinner' />
    </div>
  ) : (
    <WrapperComponent {...otherProps} />
  );
};

export default WithSpinner;
