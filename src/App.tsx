import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AmbientBackground } from './components/AmbientBackground';
import { HomePage } from './components/HomePage';
import { DoctorsPage } from './components/DoctorsPage';
import { DoctorDetail } from './components/DoctorDetail';
import { MyAppointmentsPage } from './components/MyAppointmentsPage';
import { ReviewsPage } from './components/ReviewsPage';
import { AboutPage } from './components/AboutPage';
import { BookingModal } from './components/BookingModal';
import { ReviewModal } from './components/ReviewModal';

const AppContent: React.FC = () => {
  const { currentPage } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 relative flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Moving interactive particles ambient background */}
      <AmbientBackground />

      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Dynamic View */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'doctors' && <DoctorsPage />}
        {currentPage === 'doctor-detail' && <DoctorDetail />}
        {currentPage === 'my-appointments' && <MyAppointmentsPage />}
        {currentPage === 'reviews' && <ReviewsPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <BookingModal />
      <ReviewModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
