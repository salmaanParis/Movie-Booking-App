import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import MovieCards from './components/MovieCards';
import LatestMoviesCarousel from './components/LatestMoviesCarousel';
import SubscriptionPlans from './components/SubscriptionPlans';
import Footer from './components/Footer';
import MovieDetails from './pages/MovieDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ConfirmPassword from './pages/ConfirmPassword';
import ResetPassword from './pages/ResetPassword';
import Navbar from './components/Navbar';
import WatchLater from './pages/WatchLater';
import FavoriteMovies from './pages/FavoriteMovies';
import MovieListing from './pages/MovieListing';
import TrendingSection from './pages/TrendingSection';
import CategoryFilter from './pages/CategoryFilter';
import HeroSection from './pages/HeroSection';
import FeaturedSection from './pages/FeaturedSection';
import BookingPage from './pages/BookingPage';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminLogin from './pages/AdminLogin'; // Import AdminLogin
import AdminDashboard from './pages/AdminDashboard'; // Import AdminDashboard

const App = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isCustomerAuthenticated, setIsCustomerAuthenticated] = useState(false);

  const handleAdminLogin = (credentials) => {
    // Simple authentication check for demo purposes
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAdminAuthenticated(true);
    }
  };

  const handleAdminLogout = () => {
    setIsAdminAuthenticated(false);
  };

  const handleCustomerLogin = () => {
    // Implement actual customer login logic
    setIsCustomerAuthenticated(true);
  };

  const handleCustomerLogout = () => {
    setIsCustomerAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><MovieCards /><LatestMoviesCarousel /><SubscriptionPlans /><Footer /></>} />
        <Route path="/movie" element={<><Navbar /><MovieDetails /><Footer /></>} />
        <Route path="/list" element={<><Navbar /><MovieListing /><Footer /></>} />
        <Route path="/login" element={<Login onLogin={handleCustomerLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-password" element={<ConfirmPassword />} />
        <Route path="/watchlater" element={<><Navbar /><WatchLater /><Footer /></>} />
        <Route path="/favorites" element={<><Navbar /><FavoriteMovies /><Footer /></>} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/dash" element={<><Navbar /><CustomerDashboard /><Footer /></>} />
        <Route path="/adminlog" element={<AdminLogin />} />
        <Route path="/admindash" element={<AdminDashboard />} />
        <Route 
          path="/trending" 
          element={
            <div style={styles.appContainer}>
              <Navbar />
              <HeroSection />
              <CategoryFilter />
              <TrendingSection />
              <FeaturedSection />
              <Footer />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

const styles = {
  appContainer: {
    padding: '20px',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#1b2735',
    color: '#ffffff',
    borderRadius: '20px',
  },
};

export default App;




