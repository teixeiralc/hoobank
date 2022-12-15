import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-3xl box-shadow lg:gap-0 gap-5`}
    >
      <div className="flex-1 flex flex-col gap-5">
        <h2 className={styles.heading2}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={styles.flexCenter}>
        <Button text="Get Started" />
      </div>
    </section>
  );
};

export default CTA;
