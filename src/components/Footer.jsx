import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="Hoobank"
            className="w-[230px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col sm:my-0 my-4 min-w-[150px] md:mb-5 lg:mb-0 mb-0"
            >
              <h4 className="font-medium text-lg text-white sm:mb-5 mb-2">
                {footerLink.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-base text-dimWhite hover:text-secondary cursor-pointer"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between itens-center md:flex-row flex-col md:gap-0 gap-6 pt-6 border-t border-t-gray-700 ">
        <p className="text-base text-white sm:mb-5 mb-2">
          © 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-5 h-5 object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
