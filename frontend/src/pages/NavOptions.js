import React from 'react';
import { Link } from 'react-router-dom';

const NavOptions = () => {
    return (
        <div style={styles.navOptionsContainer}>
            <div style={styles.navLinks}>
                <Link to="/movies" style={styles.navLink}>Movie</Link>
                <Link to="/series" style={styles.navLink}>Series</Link>
                <Link to="/originals" style={styles.navLink}>Originals</Link>
            </div>
            <input type="text" placeholder="Search..." style={styles.searchBar} />
        </div>
    );
};

const styles = {
    navOptionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#1e2a34',
        color: '#ffffff',
        position: 'sticky',
        top: '65px', // Adjust if needed to match Navbar height
        zIndex: 999,
        width: '100%',
        boxSizing: 'border-box',
        '@media screen and (max-width: 768px)': {
            flexDirection: 'column',
            gap: '10px',
            padding: '10px',
            top: '50px', // Adjust if needed
        },
    },
    navLinks: {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center', // Center links within the container
        flexGrow: 1, // Allow the links to grow and take up available space
    },
    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
    },
    searchBar: {
        padding: '5px 10px',
        borderRadius: '10px',
        border: 'none',
        outline: 'none',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
        backgroundColor: '#fff',
        color: '#000',
        width: '200px', // Set a default width
        margin: '0 20px', // Default left and right margin
        '@media screen and (max-width: 768px)': {
            width: 'calc(100% - 40px)', // Adjust width to fit within container
            margin: '0 20px', // Left and right margin for smaller screens
        },
    },
};

export default NavOptions;
