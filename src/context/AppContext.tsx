import React, { createContext, useContext, useState, useEffect } from 'react';
import { Doctor, Appointment, DoctorReview, ThemeMode, PageType } from '../types';
import { DOCTORS_DATA, INITIAL_APPOINTMENTS } from '../data/doctors';

interface AppContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  selectedDoctorId: string | null;
  setSelectedDoctorId: (id: string | null) => void;
  doctors: Doctor[];
  appointments: Appointment[];
  bookAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'status' | 'hasReviewed'>) => Appointment;
  cancelAppointment: (id: string) => void;
  addReview: (doctorId: string, review: Omit<DoctorReview, 'id' | 'date' | 'verified'>, appointmentId?: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSpeciality: string;
  setSelectedSpeciality: (spec: string) => void;
  openBookingModalForDoctor: (doctor: Doctor) => void;
  bookingModalDoctor: Doctor | null;
  closeBookingModal: () => void;
  reviewModalAppointment: Appointment | null;
  openReviewModalForAppointment: (app: Appointment) => void;
  closeReviewModal: () => void;
  bookedTicket: Appointment | null;
  setBookedTicket: (ticket: Appointment | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('shifotop_theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Page navigation
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  // Doctors & Appointments with local persistence
  const [doctors, setDoctors] = useState<Doctor[]>(() => {
    const saved = localStorage.getItem('shifotop_doctors');
    return saved ? JSON.parse(saved) : DOCTORS_DATA;
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('shifotop_appointments');
    return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
  });

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeciality, setSelectedSpeciality] = useState('all');

  // Modals state
  const [bookingModalDoctor, setBookingModalDoctor] = useState<Doctor | null>(null);
  const [reviewModalAppointment, setReviewModalAppointment] = useState<Appointment | null>(null);
  const [bookedTicket, setBookedTicket] = useState<Appointment | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('shifotop_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('shifotop_doctors', JSON.stringify(doctors));
  }, [doctors]);

  useEffect(() => {
    localStorage.setItem('shifotop_appointments', JSON.stringify(appointments));
  }, [appointments]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const bookAppointment = (data: Omit<Appointment, 'id' | 'createdAt' | 'status' | 'hasReviewed'>) => {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newAppointment: Appointment = {
      ...data,
      id: `SHIFO-${randomNum}`,
      status: 'tasdiqlandi',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      hasReviewed: false
    };

    setAppointments(prev => [newAppointment, ...prev]);
    setBookedTicket(newAppointment);
    return newAppointment;
  };

  const cancelAppointment = (id: string) => {
    setAppointments(prev =>
      prev.map(app => (app.id === id ? { ...app, status: 'bekor_qilindi' as const } : app))
    );
  };

  const addReview = (doctorId: string, reviewData: Omit<DoctorReview, 'id' | 'date' | 'verified'>, appointmentId?: string) => {
    const newReview: DoctorReview = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      verified: true
    };

    setDoctors(prev =>
      prev.map(doc => {
        if (doc.id === doctorId) {
          const updatedReviews = [newReview, ...doc.reviews];
          const newAvg = Number(
            (updatedReviews.reduce((acc, r) => acc + r.rating, 0) / updatedReviews.length).toFixed(1)
          );
          return {
            ...doc,
            reviews: updatedReviews,
            rating: newAvg,
            reviewCount: updatedReviews.length
          };
        }
        return doc;
      })
    );

    if (appointmentId) {
      setAppointments(prev =>
        prev.map(app => (app.id === appointmentId ? { ...app, hasReviewed: true } : app))
      );
    }
  };

  const openBookingModalForDoctor = (doctor: Doctor) => {
    setBookingModalDoctor(doctor);
  };

  const closeBookingModal = () => {
    setBookingModalDoctor(null);
  };

  const openReviewModalForAppointment = (app: Appointment) => {
    setReviewModalAppointment(app);
  };

  const closeReviewModal = () => {
    setReviewModalAppointment(null);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        currentPage,
        setCurrentPage,
        selectedDoctorId,
        setSelectedDoctorId,
        doctors,
        appointments,
        bookAppointment,
        cancelAppointment,
        addReview,
        searchQuery,
        setSearchQuery,
        selectedSpeciality,
        setSelectedSpeciality,
        openBookingModalForDoctor,
        bookingModalDoctor,
        closeBookingModal,
        reviewModalAppointment,
        openReviewModalForAppointment,
        closeReviewModal,
        bookedTicket,
        setBookedTicket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
