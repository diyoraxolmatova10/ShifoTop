import React from 'react';
import { Doctor } from '../types';
import { useApp } from '../context/AppContext';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Video, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  MessageSquare,
  Award
} from 'lucide-react';

export const DoctorCard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const { openBookingModalForDoctor, setCurrentPage, setSelectedDoctorId } = useApp();

  const handleViewProfile = () => {
    setSelectedDoctorId(doctor.id);
    setCurrentPage('doctor-detail');
  };

  return (
    <div className="group relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top section */}
      <div>
        <div className="flex items-start gap-4 mb-4">
          <div className="relative shrink-0">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-20 h-20 rounded-2xl object-cover ring-2 ring-teal-500/20 group-hover:ring-teal-500/50 transition-all"
            />
            {doctor.onlineConsultation && (
              <span 
                title="Onlayn video konsultatsiya mavjud"
                className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md ring-2 ring-white dark:ring-slate-900"
              >
                <Video className="w-3.5 h-3.5" />
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/50">
                {doctor.speciality}
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>{doctor.rating}</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">({doctor.reviewCount})</span>
              </div>
            </div>

            <h3 
              onClick={handleViewProfile}
              className="text-base font-bold text-slate-900 dark:text-white truncate hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer transition-colors"
            >
              {doctor.name}
            </h3>

            <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
              <Award className="w-3.5 h-3.5 text-teal-500 shrink-0" />
              <span>{doctor.experienceYears} yillik tajriba</span>
            </div>

            <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{doctor.clinic}</span>
            </div>
          </div>
        </div>

        {/* Short info */}
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed">
          {doctor.about}
        </p>

        {/* Quick info badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300">
            <Clock className="w-3 h-3 text-teal-500" />
            <span>Mavjud soatlar: {doctor.timeSlots.length} ta slot</span>
          </div>
          {doctor.reviews.length > 0 && (
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-600 dark:text-slate-300">
              <MessageSquare className="w-3 h-3 text-sky-500" />
              <span>{doctor.reviews.length} ta izoh</span>
            </div>
          )}
        </div>
      </div>

      {/* Bottom price and actions */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
        <div>
          <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Qabul narxi</span>
          <span className="text-base font-bold text-teal-600 dark:text-teal-400">
            {doctor.price.toLocaleString()} <span className="text-xs font-normal text-slate-500">so‘m</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleViewProfile}
            className="px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Batafsil
          </button>
          <button
            onClick={() => openBookingModalForDoctor(doctor)}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 text-white shadow-md shadow-teal-500/20 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Qabulga</span>
          </button>
        </div>
      </div>
    </div>
  );
};
