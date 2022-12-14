import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-32 h-32 rounded-full bg-blue-gradient p-1 cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={styles.flexCenter}>
          <p className="font-medium text-lg mr-1">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="" className="w-[6] h-[6] object-contain" />
        </div>
        <p className="font-medium text-lg">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
