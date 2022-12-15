/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={`${layout.sectionImgReverse} blur_improve_performance`}>
        <img src={bill} alt="Billing" className="w-full h-full relative z-10" />
        {/* Background Gradients */}
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient " />
        <div className="absolute z-0 -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient " />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-wrap sm:mt-10 mt-6">
          <a href="#">
            <img
              src={apple}
              alt="Apple Store"
              className="w-32 h-11 object-contain mr-5"
            />
          </a>

          <a href="#">
            <img
              src={google}
              alt="Google Play"
              className="w-32 h-11 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Billing;
