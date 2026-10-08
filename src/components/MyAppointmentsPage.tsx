import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Star, 
  Download, 
  Video, 
  Building2,
  Share2,
  CalendarCheck
} from 'lucide-react';

export const MyAppointmentsPage: React.FC = () => {
  const { appointments, cancelAppointment, openReviewModalForAppointment, setCurrentPage } = useApp();
  const [filterStatus, setFilterStatus] = useState<'barchasi' | 'tasdiqlandi' | 'yakunlandi' | 'bekor_qilindi'>('barchasi');

  const filtered = appointments.filter(app => {
    if (filterStatus === 'barchasi') return true;
    return app.status === filterStatus;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 mb-2">
            <CalendarCheck className="w-3.5 h-3.5" />
            Bemor Shaxsiy Kabineti
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Mening Qabullarim
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Barcha rejalashtirilgan va o‘tgan ko‘riklaringiz tarixi hamda elektron talonlar.
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('doctors')}
          className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-teal-500 to-sky-600 text-white font-semibold text-xs shadow-md shadow-teal-500/20 hover:from-teal-600 hover:to-sky-700 transition-all flex items-center gap-1.5"
        >
          <Calendar className="w-4 h-4" />
          <span>Yangi Qabulga Yozilish</span>
        </button>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        {[
          { id: 'barchasi', label: 'Barchasi', count: appointments.length },
          { id: 'tasdiqlandi', label: 'Kutilayotganlar', count: appointments.filter(a => a.status === 'tasdiqlandi').length },
          { id: 'yakunlandi', label: 'Yakunlanganlar', count: appointments.filter(a => a.status === 'yakunlandi').length },
          { id: 'bekor_qilindi', label: 'Bekor qilinganlar', count: appointments.filter(a => a.status === 'bekor_qilindi').length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilterStatus(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
              filterStatus === tab.id
                ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25'
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            <span>{tab.label}</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
              filterStatus === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Appointments List */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white/70 dark:bg-slate-900/70 rounded-3xl border border-slate-200 dark:border-slate-800">
          <Calendar className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-300 mb-1">
            Ushbu toifada qabullar mavjud emas
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
            Shifokor qabuliga navbatsiz onlayn yozilishingiz mumkin.
          </p>
          <button
            onClick={() => setCurrentPage('doctors')}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-teal-500 text-white hover:bg-teal-600 transition-colors"
          >
            Shifokorlarni ko‘rish
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((app) => {
            const isConfirmed = app.status === 'tasdiqlandi';
            const isCompleted = app.status === 'yakunlandi';
            const isCancelled = app.status === 'bekor_qilindi';

            return (
              <div
                key={app.id}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={app.doctorAvatar}
                      alt={app.doctorName}
                      className="w-12 h-12 rounded-2xl object-cover ring-2 ring-teal-500/20"
                    />
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {app.doctorName}
                      </h3>
                      <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                        {app.doctorSpeciality} &bull; {app.clinic}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div>
                    {isConfirmed && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300/40">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Tasdiqlangan qabul
                      </span>
                    )}
                    {isCompleted && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-300/40">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Ko‘rik yakunlandi
                      </span>
                    )}
                    {isCancelled && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border border-rose-300/40">
                        <XCircle className="w-3.5 h-3.5" />
                        Bekor qilingan
                      </span>
                    )}
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">Talon raqami</span>
                    <span className="font-mono font-bold text-slate-800 dark:text-white">{app.id}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Sana va Vaqt</span>
                    <span className="font-semibold text-teal-600 dark:text-teal-400">{app.date} &bull; {app.time}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Qabul turi</span>
                    <span className="font-semibold text-slate-800 dark:text-white">
                      {app.consultationType === 'clinic' ? 'Klinikada' : 'Onlayn video'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Narxi</span>
                    <span className="font-bold text-slate-800 dark:text-white">{app.price.toLocaleString()} so‘m</span>
                  </div>
                </div>

                {app.patientNote && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl mb-4 italic">
                    Shikoyat: "{app.patientNote}"
                  </p>
                )}

                {/* Action buttons */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400">
                    Band qilingan vaqt: {app.createdAt}
                  </span>

                  <div className="flex items-center gap-2">
                    {/* If completed and not yet reviewed */}
                    {isCompleted && !app.hasReviewed && (
                      <button
                        onClick={() => openReviewModalForAppointment(app)}
                        className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-all"
                      >
                        <Star className="w-3.5 h-3.5 fill-white" />
                        <span>Ko‘rikdan so‘ng fikr bildirish</span>
                      </button>
                    )}

                    {isCompleted && app.hasReviewed && (
                      <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Sharh qoldirilgan
                      </span>
                    )}

                    {/* If active, allow cancellation */}
                    {isConfirmed && (
                      <button
                        onClick={() => {
                          if (confirm('Rostdan ham ushbu qabulni bekor qilmoqchimisiz?')) {
                            cancelAppointment(app.id);
                          }
                        }}
                        className="px-3 py-1.5 rounded-xl border border-rose-200 dark:border-rose-900/60 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 font-medium text-xs transition-colors"
                      >
                        Qabulni bekor qilish
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
