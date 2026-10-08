export type SpecialityType = 
  | 'Kardiolog' 
  | 'Stomatolog' 
  | 'Nevropatolog' 
  | 'Pediatr' 
  | 'Dermatolog' 
  | 'Oftalmolog' 
  | 'Ortoped' 
  | 'Terapevt'
  | 'Endokrinolog';

export interface DoctorReview {
  id: string;
  patientName: string;
  rating: number;
  date: string;
  comment: string;
  visitType: string;
  verified: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  speciality: SpecialityType;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  price: number; // UZS
  clinic: string;
  address: string;
  avatar: string;
  about: string;
  availableDays: string[];
  timeSlots: string[];
  education: string;
  languages: string[];
  reviews: DoctorReview[];
  phone: string;
  onlineConsultation: boolean;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpeciality: string;
  doctorAvatar: string;
  clinic: string;
  date: string;
  time: string;
  patientName: string;
  patientPhone: string;
  patientNote?: string;
  consultationType: 'clinic' | 'online';
  status: 'kutilmoqda' | 'tasdiqlandi' | 'yakunlandi' | 'bekor_qilindi';
  price: number;
  createdAt: string;
  hasReviewed?: boolean;
}

export type ThemeMode = 'light' | 'dark';
export type PageType = 'home' | 'doctors' | 'doctor-detail' | 'my-appointments' | 'reviews' | 'about';
