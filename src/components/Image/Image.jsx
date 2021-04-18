import './Image.scss';

const Image = ({ svgName, ...otherProps }) => (
  <img
    className='image'
    type='image/svg+xml'
    src={`https://cdn.jsdelivr.net/gh/singh-pk/cdn@latest/${svgName}.svg`}
    alt=''
    {...otherProps}
  />
);

export default Image;
