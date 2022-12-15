import React from 'react';

const Button = ({ styles, text }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient rounded-xl text-lg text-primary outline-none hover:scale-110 transition duration-100 ease-out shadow-xl ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
