/* eslint-disable react/prop-types */
import React from 'react';
import { features } from '../constants';
import styles from '../style';

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex items-center gap-4 p-6 rounded-3xl ${
        index !== features.length - 1 ? 'mb-6' : 'mb-0'
      } feature-card`}
    >
      <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="" className="w-1/2 h-1/2 object-contain" />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-semibold text-white text-lg mb-1 ">{title}</h4>
        <p className="text-dimWhite text-base">{content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
