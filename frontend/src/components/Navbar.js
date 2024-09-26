import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate(); // Use navigate for programmatic navigation

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        console.log('Logout clicked');
        // Clear user data or token from localStorage/sessionStorage
        localStorage.removeItem('authToken'); // Assuming you're storing an auth token
        // Redirect to the login page
        navigate('/login');
    };

    const goToDashboard = () => {
        console.log('/profile');
        // Navigate to the profile page
        navigate('/profile');
    };

    return (
        <nav style={styles.navbar}>
            <h1 style={styles.brand}>CineX</h1>
            <div style={styles.navProfile}>
                <img
                    src="your-profile-image-url"
                    alt="Profile"
                    style={styles.profileImage}
                    onClick={toggleDropdown}
                />
                <span style={styles.profileName}>Profile</span>
                {isDropdownOpen && (
                    <div style={styles.dropdown}>
                        <div style={styles.dropdownItem} onClick={goToDashboard}>
                            Customer Dashboard
                        </div>
                        <div style={styles.dropdownItem} onClick={handleLogout}>
                            Logout
                        </div>
                    </div>
                )}
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
        position: 'relative', // Ensure dropdown is positioned correctly
    },
    profileImage: {
        borderRadius: '50%',
        width: '25px',
        height: '25px',
        cursor: 'pointer', // Pointer cursor for interactivity
    },
    profileName: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: '14px',
    },
    dropdown: {
        position: 'absolute',
        top: '40px', // Adjust position below the profile icon
        right: '0',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1001, // Ensure dropdown is above other elements
        width: '150px', // Set width of the dropdown
    },
    dropdownItem: {
        padding: '10px 15px',
        cursor: 'pointer',
        color: '#333', // Text color for dropdown items
        transition: 'background-color 0.3s',
    },
};

// Adding hover effect using an event listener for the dropdown items
const DropdownItem = ({ onClick, children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                ...styles.dropdownItem,
                backgroundColor: isHovered ? '#f0f0f0' : 'transparent', // Change background on hover
            }}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </div>
    );
};

export default Navbar;








