import React from 'react';

const CategoryFilter = () => {
    return (
        <div style={styles.categoryContainer}>
            <style>
                {`
                    .categoryButton:hover {
                        background-color: #536b82;
                        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
                        transform: translateY(-5px);
                    }

                    .categoryButton::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(120deg, rgba(255, 255, 255, 0.4), transparent);
                        transition: left 0.4s ease-in-out;
                        pointer-events: none;
                    }

                    .categoryButton:hover::before {
                        left: 100%;
                    }
                `}
            </style>
            {['Trending', 'Action', 'Romance', 'Animation', 'Horror', 'Special', 'Drakor'].map((category, index) => (
                <button key={index} style={styles.categoryButton} className="categoryButton">
                    {category}
                </button>
            ))}
        </div>
    );
};

const styles = {
    categoryContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: '20px',
        padding: '10px 0',
        borderRadius: '20px',
        backgroundColor: '#1e2a34',
    },
    categoryButton: {
        backgroundColor: '#3d4f5c',
        border: 'none',
        borderRadius: '20px',
        padding: '10px 20px',
        fontSize: '14px',
        fontFamily: 'Poppins, sans-serif',
        color: '#ffffff',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        marginBottom: '10px',
        flex: '1 1 100px',
        textAlign: 'center',
        margin: '5px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
    },
};

export default CategoryFilter;


