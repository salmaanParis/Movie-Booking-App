import React from 'react';
import { motion } from 'framer-motion';

const SubscriptionPlans = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1 }
  };

  return (
    <section className="subscription-plans">
      <h2>Subscription Plans</h2>
      <div className="plans-container">
        <motion.div
          className="plan-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <h3>Basic Plan</h3>
          <p className="price">$8.99/month</p>
          <ul>
            <li>Video Quality: SD</li>
            <li>Devices: 1</li>
            <li>Ads: Yes</li>
            <li>Content: Limited</li>
            <li>Watch on: Laptop</li>
            <li>Audio Quality: Stereo</li>
          </ul>
        </motion.div>
        <motion.div
          className="plan-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <h3>Standard Plan</h3>
          <p className="price">$12.99/month</p>
          <ul>
            <li>Video Quality: HD</li>
            <li>Devices: 2</li>
            <li>Ads: No</li>
            <li>Content: Standard</li>
            <li>Watch on: Laptop, Mobile</li>
            <li>Audio Quality: Surround</li>
          </ul>
        </motion.div>
        <motion.div
          className="plan-card"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <h3>Premium Plan</h3>
          <p className="price">$16.99/month</p>
          <ul>
            <li>Video Quality: 4K</li>
            <li>Devices: 4</li>
            <li>Ads: No</li>
            <li>Content: Full</li>
            <li>Watch on: Laptop, Mobile, TV</li>
            <li>Audio Quality: Dolby Atmos</li>
          </ul>
        </motion.div>
      </div>
      <style>
        {`
          body {
            background-color: #1c1c1c; /* Dark background for the body */
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .subscription-plans {
            padding: 40px;
            background-color: #333333; /* Dark gray background */
            border-radius: 10px;
            min-height: 600px; /* Increased height for better visual balance */
            color: #ffffff; /* White text color */
          }

          .subscription-plans h2 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 2rem;
            color: #ffffff;
          }

          .plans-container {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            justify-content: center;
          }

          .plan-card {
            background: #222222; /* Slightly lighter gray for cards */
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
            text-align: center;
            flex: 1;
            max-width: 350px;
            transition: transform 0.3s, box-shadow 0.3s;
            color: #ffffff;
          }

          .plan-card h3 {
            margin-top: 0;
            font-size: 1.6rem;
            font-weight: bold;
            color: #e0e0e0; /* Light gray for headings */
          }

          .plan-card .price {
            font-size: 1.6rem;
            margin: 10px 0;
            color: #ffcc00; /* Accent color for price */
          }

          .plan-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
            font-size: 1rem;
            line-height: 1.8;
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .plan-card ul li {
            margin-bottom: 8px;
          }

          .plan-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
          }

          @media (max-width: 768px) {
            .plans-container {
              flex-direction: column;
              align-items: center;
            }

            .plan-card {
              max-width: 90%;
              margin-bottom: 20px;
            }
          }

          @media (max-width: 480px) {
            .plan-card {
              max-width: 100%;
            }

            .plan-card h3 {
              font-size: 1.4rem;
            }

            .plan-card .price {
              font-size: 1.4rem;
            }

            .plan-card ul {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default SubscriptionPlans;






