import React from 'react';

const FeaturedSection = () => {
    const featuredMovies = [
        { title: 'Epic Saga', imgSrc: 'image7.jpg' },
        { title: 'The Lost Kingdom', imgSrc: 'image8.jpg' },
        { title: 'Star Quest', imgSrc: 'image6.jpg' },
        { title: 'Hidden Legends', imgSrc: 'image5.jpg' },
        { title: 'Mysterious Adventure', imgSrc: 'image4.jpg' },
         { title: 'The Lost Kingdom', imgSrc: 'image8.jpg' },
        { title: 'Star Quest', imgSrc: 'image6.jpg' },
    ];

    return (
        <div style={styles.featuredContainer}>
            <h2 style={styles.sectionTitle}>Featured Movies</h2>
            <div style={styles.featuredGrid}>
                {featuredMovies.map((movie, index) => (
                    <div key={index} style={styles.movieCard}>
                        <img src={movie.imgSrc} alt={movie.title} style={styles.movieImage} />
                        <p style={styles.movieTitle}>{movie.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    featuredContainer: {
        marginTop: '20px',
        padding: '15px',
        borderRadius: '15px',
        backgroundColor: '#3b4d6a',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        marginBottom: '10px',
    },
    sectionTitle: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: '700',
        color: '#ffffff',
        fontFamily: 'Roboto, sans-serif',
        textAlign: 'center',
    },
    featuredGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px', // Improved spacing between cards
        justifyContent: 'center', // Centering cards
    },
    movieCard: {
        width: '22%',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
        },
    },
    movieImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        transition: 'opacity 0.3s ease-in-out',
        '&:hover': {
            opacity: '0.8',
        },
    },
    movieTitle: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#ffffff',
        fontFamily: 'Roboto, sans-serif',
        marginTop: '10px',
    },
    '@media screen and (max-width: 768px)': {
        movieCard: {
            width: '45%',
        },
    },
    '@media screen and (max-width: 480px)': {
        movieCard: {
            width: '100%',
        },
        sectionTitle: {
            fontSize: '20px',
        },
    },
};

export default FeaturedSection;
