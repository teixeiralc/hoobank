import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-center items-center m-3"
        >
          <h4 className="font-semibold xs:text-4xl text-3xl text-white">
            {stat.value}
          </h4>
          <p className="xs:text-2xl text-base text-gradient uppercase ml-3 tracking-wider">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
