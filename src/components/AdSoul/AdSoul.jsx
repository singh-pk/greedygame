import Header from '../Header/Header';
import Image from '../Image/Image';

import './AdSoul.scss';

const AdSoul = () => {
  return (
    <section className='adsoul'>
      <div>
        <Header />
        <div>
          <Image svgName='asset1' />
        </div>
      </div>

      {window.innerWidth > 800 && (
        <div className='adsoul-services'>
          <h2>Revenue Optimization</h2>
          <div className='adsoul-sevices-icon-container'>
            <div>
              <Image svgName='icon1' />
              <div>Fill Rate</div>
            </div>

            <div>
              <Image svgName='icon2' />
              <div>Improve CTR</div>
            </div>

            <div>
              <Image svgName='icon3' />
              <div>Refresh Rate</div>
            </div>

            <div>
              <Image svgName='icon4' />
              <div>Quick Integration</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdSoul;
