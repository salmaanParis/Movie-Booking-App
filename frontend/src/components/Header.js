import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Correct import
import { Link } from 'react-router-dom';

const Header = () => {
  const parallax = useSpring({
    transform: 'translateY(0%)',
    from: { transform: 'translateY(-20%)' },
    config: { mass: 5, tension: 1500, friction: 200 }
  });

  return (
    <header className="header">
      <div className="logo">CineX</div>
      <div className="login">
  <Link to="/login">
    <button>Login</button>
  </Link>
</div>

      <animated.img src="image1.jpg" alt="Cover" className="cover-image" style={parallax} />
      <div className="text-overlay">
        <h1>Unlimited Cinema, TV Series, and Beyond</h1>
        <p>Enjoy Movies and Shows Wherever You Are. No Commitment Required.</p>
      </div>
      <style>
        {`
          .header {
            position: relative;
            text-align: left;
            color: white;
            overflow: hidden;
          }

          .logo {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 2rem;
            font-weight: bold;
            z-index: 1;
          }

          .login {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1;
          }

          .login button {
            background: transparent;
            color: white;
            border: 2px solid white;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s, color 0.3s;
          }

          .login button:hover {
            background: white;
            color: #333;
          }

          .cover-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
            will-change: transform;
          }

          .text-overlay {
            position: absolute;
            bottom: 20px;
            left: 20px;
            z-index: 1;
          }

          .text-overlay h1 {
            font-size: 3rem;
            margin: 0;
          }

          .text-overlay p {
            font-size: 1.5rem;
          }
        `}
      </style>
    </header>
  );
};

export default Header;

