/* eslint-disable react/prop-types */
import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({ content, title, name, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-3xl max-w-sm md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img src={quotes} alt="" className="w-11 h-7 object-contain" />
      <p className="text-lg text-white my-10">{content}</p>

      <div className="flex gap-4 items-center">
        <img src={img} alt={name} className="w-12 h-12 rounded-full" />

        <div className="flex flex-col">
          <h4 className="text-xl font-semibold text-white">{name}</h4>
          <p className="text-base text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
