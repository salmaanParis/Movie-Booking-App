import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.brand}>CineX</h1>
            <div style={styles.navProfile}>
                <img src="your-profile-image-url" alt="Profile" style={styles.profileImage} />
                <span style={styles.profileName}>Sarah J</span>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#1e2a34',
        color: '#ffffff',
        borderRadius: '20px 20px 0 0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        height: '50px',
    },
    brand: {
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'Poppins, sans-serif',
    },
    navProfile: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    profileImage: {
        borderRadius: '50%',
        width: '25px',
        height: '25px',
    },
    profileName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
    },
};

export default Navbar;







