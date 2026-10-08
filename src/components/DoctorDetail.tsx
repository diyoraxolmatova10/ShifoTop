import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Calendar, 
  Phone, 
  Award, 
  GraduationCap, 
  Globe, 
  Clock, 
  CheckCircle2, 
  Video, 
  Building2,
  Share2,
  Heart,
  MessageSquare
} from 'lucide-react';

export const DoctorDetail: React.FC = () => {
  const { doctors, selectedDoctorId, setCurrentPage, openBookingModalForDoctor } = useApp();
  const [activeTab, setActiveTab] = useState<'info' | 'reviews'>('info');

  const doctor = doctors.find(d => d.id === selectedDoctorId) || doctors[0];

  if (!doctor) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      {/* Back button */}
      <button
        onClick={() => setCurrentPage('doctors')}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm font-medium border border-slate-200 dark:border-slate-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Shifokorlar ro‘yxatiga qaytish</span>
      </button>

      {/* Main Doctor Profile Card */}
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xl mb-8">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
          <div className="relative shrink-0 w-full sm:w-auto text-center sm:text-left">
            <img
              src={doctor.avatar}
              alt={doctor.name}
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl object-cover ring-4 ring-teal-500/20 shadow-lg mx-auto"
            />
            {doctor.onlineConsultation && (
              <span className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300/40">
                <Video className="w-3.5 h-3.5" />
                Onlayn qabul bor
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60">
                {doctor.speciality}
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/50">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="font-bold text-sm">{doctor.rating}</span>
                <span className="text-xs text-amber-600/70 dark:text-amber-400/70">({doctor.reviewCount} ta sharh)</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {doctor.name}
            </h1>

            <div className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-500" />
                <span>{doctor.experienceYears} yillik professional tibbiy tajriba</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-sky-500" />
                <span className="font-medium text-slate-700 dark:text-slate-300">{doctor.clinic}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{doctor.address}</span>
              </div>
            </div>

            {/* Quick Price & Action */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <div>
                <span className="text-xs text-slate-500 dark:text-slate-400 block">Qabul narxi (1 seans)</span>
                <span className="text-xl font-bold text-teal-600 dark:text-teal-400">
                  {doctor.price.toLocaleString()} so‘m
                </span>
              </div>

              <button
                onClick={() => openBookingModalForDoctor(doctor)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 active:scale-95 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Qabul Vaqtini Band Qilish</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 mb-6">
        <button
          onClick={() => setActiveTab('info')}
          className={`pb-3 px-2 text-sm font-semibold transition-colors relative ${
            activeTab === 'info'
              ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-500'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
          }`}
        >
          Shifokor haqida ma’lumot
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`pb-3 px-2 text-sm font-semibold transition-colors flex items-center gap-1.5 relative ${
            activeTab === 'reviews'
              ? 'text-teal-600 dark:text-teal-400 border-b-2 border-teal-500'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white'
          }`}
        >
          <span>Bemorlar sharhlari</span>
          <span className="px-2 py-0.5 rounded-full text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
            {doctor.reviews.length}
          </span>
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'info' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                Biografiya va Faoliyat Yo‘nalishi
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                {doctor.about}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-teal-500" />
                <span>Ta’lim va Malaka</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {doctor.education}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">
                Ish Kunlari va Jadval
              </h4>
              <div className="space-y-2">
                {doctor.availableDays.map(day => (
                  <div key={day} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 dark:border-slate-800">
                    <span className="text-slate-600 dark:text-slate-400">{day}</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">09:00 - 18:00</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3">
                Muloqot Tillari
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctor.languages.map(lang => (
                  <span key={lang} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs text-slate-700 dark:text-slate-300">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Reviews tab */
        <div className="space-y-4">
          {doctor.reviews.length === 0 ? (
            <div className="text-center py-12 bg-white/60 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800">
              <MessageSquare className="w-10 h-10 text-slate-400 mx-auto mb-2 opacity-50" />
              <p className="text-slate-500">Hozircha sharhlar yo‘q. Siz birinchi bo‘lib baho bera olasiz!</p>
            </div>
          ) : (
            doctor.reviews.map((rev) => (
              <div 
                key={rev.id}
                className="bg-white/90 dark:bg-slate-900/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 font-bold flex items-center justify-center text-sm">
                      {rev.patientName[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {rev.patientName}
                      </h4>
                      <span className="text-[11px] text-slate-400">{rev.date} &bull; {rev.visitType}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pl-11">
                  {rev.comment}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
