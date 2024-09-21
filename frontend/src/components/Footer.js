import React from 'react';
import { motion } from 'framer-motion';
import { animated } from '@react-spring/web';

const Footer = () => {
  const iconVariants = {
    hover: { scale: 1.2 }
  };

  return (
    <animated.footer className="footer">
      <p>&copy; 2024 CineX. All rights reserved.</p>
      <div className="social-media">
        <motion.a href="#" whileHover="hover" variants={iconVariants} className="icon">
          <img src="facebook-icon.png" alt="Facebook" />
        </motion.a>
        <motion.a href="#" whileHover="hover" variants={iconVariants} className="icon">
          <img src="twitter-icon.png" alt="Twitter" />
        </motion.a>
        <motion.a href="#" whileHover="hover" variants={iconVariants} className="icon">
          <img src="instagram-icon.png" alt="Instagram" />
        </motion.a>
      </div>
      <style>
        {`
          .footer {
            padding: 20px;
            backgroundColor: '#1e2a34',
            color: white;
            text-align: center;
            border: 2px solid #ffffff; /* Optional: Add a top border for consistency */
            borderRadius: '20px',
            margin-top: 10px;
          }

          .social-media {
            margin-top: 10px;
          }

          .icon {
            margin: 0 10px;
            display: inline-block;
          }

          .icon img {
            width: 24px;
            height: 24px;
          }
        `}
      </style>
    </animated.footer>
  );
};

export default Footer;
