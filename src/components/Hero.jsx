import React from 'react';
import styles from '../style';
import { robot, discount } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-xl mb-2 uppercase tracking-wider">
          <img src={discount} alt="" className="w-8 h-8" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount for{' '}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex justify-between items-center w-full">
          <h1 className="flex-1 font-semibold sm:text-6xl text-4xl text-white leading-tight">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="sm:flex hidden md:mr-4 mr4-0 mb-2">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-semibold sm:text-6xl text-4xl text-white leading-tight -mt-2">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs.
          <br /> We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative blur_improve_performance`}
      >
        <img
          src={robot}
          alt="Robot illustration"
          className="w-full h-full relative z-[5]"
        />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`sm:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
