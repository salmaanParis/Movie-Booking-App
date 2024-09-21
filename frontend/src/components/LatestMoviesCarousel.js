import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

const carouselVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true
};

const LatestMoviesCarousel = () => (
  <section className="latest-movies-carousel">
    <h2>Latest Releases</h2>
    <Slider {...settings}>
      <motion.div variants={carouselVariants} initial="hidden" animate="visible" exit="exit">
        <img src="image3.jpg" alt="Latest Movie 1" />
      </motion.div>
      <motion.div variants={carouselVariants} initial="hidden" animate="visible" exit="exit">
        <img src="image3.jpg" alt="Latest Movie 2" />
      </motion.div>
      <motion.div variants={carouselVariants} initial="hidden" animate="visible" exit="exit">
        <img src="image3.jpg" alt="Latest Movie 3" />
      </motion.div>
      <motion.div variants={carouselVariants} initial="hidden" animate="visible" exit="exit">
        <img src="image3.jpg" alt="Latest Movie 1" />
      </motion.div>
      <motion.div variants={carouselVariants} initial="hidden" animate="visible" exit="exit">
        <img src="image3.jpg" alt="Latest Movie 2" />
      </motion.div>
      <motion.div variants={carouselVariants} initial="hidden" animate="visible" exit="exit">
        <img src="image3.jpg" alt="Latest Movie 3" />
      </motion.div>
    </Slider>
    <style>
      {`
        .latest-movies-carousel {
          padding: 20px;
          background-color: #fff;
        }

        .latest-movies-carousel img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      `}
    </style>
  </section>
);

export default LatestMoviesCarousel;


