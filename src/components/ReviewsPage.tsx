import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Star, 
  MessageSquare, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

export const ReviewsPage: React.FC = () => {
  const { doctors, appointments, openReviewModalForAppointment } = useApp();
  const [selectedRating, setSelectedRating] = useState<number | 'all'>('all');

  // Collect all doctor reviews
  const allReviews = doctors.flatMap(doc =>
    doc.reviews.map(r => ({
      ...r,
      doctorName: doc.name,
      doctorSpeciality: doc.speciality,
      doctorAvatar: doc.avatar,
      doctorId: doc.id
    }))
  );

  const filtered = allReviews.filter(r => {
    if (selectedRating === 'all') return true;
    return r.rating === selectedRating;
  });

  const totalReviewsCount = allReviews.length;
  const avgRating = totalReviewsCount > 0 
    ? (allReviews.reduce((acc, r) => acc + r.rating, 0) / totalReviewsCount).toFixed(1)
    : '5.0';

  // Check if there is any finished appointment ready for review
  const unreviewedCompletedApp = appointments.find(a => a.status === 'yakunlandi' && !a.hasReviewed);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60 mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          Haqiqiy Bemorlar Sharhlari
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          Ko‘rikdan O‘tgan Bemorlar Fikrlari
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Shifokorlarimiz qabulida bo‘lgan fuqarolar tomonidan qoldirilgan xolis, ishonchli va tasdiqlangan baholar.
        </p>
      </div>

      {/* Overview Card */}
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-lg mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="text-center sm:text-left">
            <span className="text-5xl font-extrabold bg-gradient-to-r from-teal-500 to-sky-600 bg-clip-text text-transparent">
              {avgRating}
            </span>
            <div className="flex items-center justify-center sm:justify-start gap-1 my-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {totalReviewsCount}+ ta tasdiqlangan sharh asosida
            </span>
          </div>

          <div className="h-16 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400 hidden sm:block">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>100% haqiqiy qabul orqali tekshirilgan</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-teal-500" />
              <span>Shifokorlar malakasini oshirishga xizmat qiladi</span>
            </div>
          </div>
        </div>

        {/* Action prompt if user had a visit */}
        {unreviewedCompletedApp ? (
          <div className="bg-teal-50 dark:bg-teal-950/40 p-4 rounded-2xl border border-teal-200 dark:border-teal-800/50 text-center sm:text-left">
            <p className="text-xs font-semibold text-teal-800 dark:text-teal-300 mb-1">
              Siz yaqinda {unreviewedCompletedApp.doctorName} ko‘rigida bo‘ldingiz!
            </p>
            <button
              onClick={() => openReviewModalForAppointment(unreviewedCompletedApp)}
              className="mt-2 px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              Ko‘rik bo‘yicha sharh yozish
            </button>
          </div>
        ) : (
          <div className="text-xs text-slate-400 text-center md:text-right max-w-xs">
            Siz ham shifokor qabulida bo‘lganingizdan so‘ng o‘z shaxsiy kabinetingiz orqali baho qoldirishingiz mumkin.
          </div>
        )}
      </div>

      {/* Filter by star rating */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setSelectedRating('all')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            selectedRating === 'all'
              ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25'
              : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
          }`}
        >
          Barcha sharhlar ({allReviews.length})
        </button>
        {[5, 4, 3].map((star) => (
          <button
            key={star}
            onClick={() => setSelectedRating(star)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 ${
              selectedRating === star
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25'
                : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
            }`}
          >
            <span>{star} yulduz</span>
            <Star className="w-3.5 h-3.5 fill-current" />
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((rev) => (
          <div
            key={rev.id}
            className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 font-bold flex items-center justify-center text-sm shadow-sm">
                    {rev.patientName[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {rev.patientName}
                      </h4>
                      {rev.verified && (
                        <span title="Tasdiqlangan qabul" className="text-teal-500">
                          <CheckCircle className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400">
                      {rev.date} &bull; {rev.visitType}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                "{rev.comment}"
              </p>
            </div>

            {/* Doctor tag footer */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2.5">
              <img
                src={rev.doctorAvatar}
                alt={rev.doctorName}
                className="w-7 h-7 rounded-lg object-cover ring-1 ring-teal-500/30"
              />
              <div className="text-xs truncate">
                <span className="text-slate-400 block text-[10px]">Qabul qilgan shifokor:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200 truncate">
                  {rev.doctorName} ({rev.doctorSpeciality})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
