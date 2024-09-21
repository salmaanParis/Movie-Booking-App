import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div style={styles.heroContainer(isMobile)}>
            <div style={styles.heroItem(isMobile)}>
                <iframe 
                    style={styles.heroVideo(isMobile)} 
                    src="https://www.youtube.com/embed/aninoDcPWo4?si=KupMJxiOensBdFtW" 
                    title="The Adventure of Blue Sword" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
                {/* <p style={styles.heroTitle}>The Adventure of Blue Sword</p> */}
            </div>
            {!isMobile && (
                <div style={styles.heroItem(isMobile)}>
                    <iframe 
                        style={styles.heroVideo(isMobile)} 
                        src="https://www.youtube.com/embed/WAs_h1sYiLg?si=FC5dimspqg6KabCj" 
                        title="Recalling the journey of Dol's exciting story" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                    {/* <p style={styles.heroTitle}>Recalling the journey of Dol's exciting story</p> */}
                </div>
            )}
        </div>
    );
};

const styles = {
    heroContainer: (isMobile) => ({
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        marginTop: isMobile ? '20px' : '50px',
        marginBottom: '20px',
        backgroundColor: '#2b3642',
        borderRadius: '20px',
        padding: '20px',
        boxSizing: 'border-box',
        minHeight: '100px',
    }),
    heroItem: (isMobile) => ({
        width: isMobile ? '100%' : '48%',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        marginBottom: isMobile ? '20px' : '0px',
    }),
    heroVideo: (isMobile) => ({
        width: '100%',
        height: isMobile ? '40vh' : '315px', // Increased height for mobile devices
        borderRadius: '20px',
    }),
    heroTitle: {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        color: '#ffffff',
        fontSize: '22px',
        fontWeight: '600',
        fontFamily: 'Poppins, sans-serif',
        zIndex: 2,
    },
};

export default HeroSection;



