import React from 'react';

const TrendingSection = () => {
    const movies = [
        { title: 'Lofetong Kasaaarung', imgSrc: 'image4.jpg', category: 'A', languages: ['Malayalam'] },
        { title: 'Kang Satay', imgSrc: 'image5.jpg', category: 'PG', languages: ['Hindi', 'English'] },
        { title: 'Mommy Cat', imgSrc: 'image6.jpg', category: 'UA', languages: ['Tamil', 'Telugu'] },
        { title: 'Cantik', imgSrc: 'image7.jpg', category: 'A', languages: ['Malayalam', 'Hindi'] },
        { title: 'Patrax', imgSrc: 'image8.jpg', category: 'PG', languages: ['Telugu', 'English'] },
    ];

    return (
        <div style={styles.trendingContainer}>
            <h2 style={styles.sectionTitle}>Trending in Animation</h2>
            <div style={styles.trendingGrid}>
                {movies.map((movie, index) => (
                    <div key={index} style={styles.movieCard}>
                        <img src={movie.imgSrc} alt={movie.title} style={styles.movieImage} />
                        <p style={styles.movieTitle}>{movie.title}</p>
                        <p style={styles.movieDetails}>Category: {movie.category}</p>
                        <p style={styles.movieDetails}>Languages: {movie.languages.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    trendingContainer: {
        marginTop: '20px',
        padding: '10px',
        borderRadius: '20px',
        backgroundColor: '#2b3642',
    },
    sectionTitle: {
        marginBottom: '10px',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Poppins, sans-serif',
    },
    trendingGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    movieCard: {
        width: '18%',
        textAlign: 'center',
        marginBottom: '20px',
    },
    movieImage: {
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
        marginBottom: '10px',
    },
    movieTitle: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#ffffff',
        fontFamily: 'Poppins, sans-serif',
    },
    movieDetails: {
        fontSize: '12px',
        fontWeight: '400',
        color: '#ffffff',
        fontFamily: 'Poppins, sans-serif',
        margin: '5px 0', // Add some margin for spacing
    },
    '@media screen and (max-width: 768px)': {
        movieCard: {
            width: '45%', // Adjusting the width for smaller screens
        },
    },
    '@media screen and (max-width: 480px)': {
        movieCard: {
            width: '100%', // Full-width on very small screens
        },
        sectionTitle: {
            fontSize: '16px', // Adjusting title size for smaller screens
        },
    },
};

export default TrendingSection;



