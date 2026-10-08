import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Star, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ReviewModal: React.FC = () => {
  const { reviewModalAppointment, closeReviewModal, addReview } = useApp();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [patientName, setPatientName] = useState(reviewModalAppointment?.patientName || '');
  const [comment, setComment] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!reviewModalAppointment) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      alert('Iltimos, ko‘rik haqida o‘z fikr-mulohazangizni yozing!');
      return;
    }

    addReview(
      reviewModalAppointment.doctorId,
      {
        patientName: patientName.trim() || 'Anonim Bemor',
        rating,
        comment,
        visitType: reviewModalAppointment.consultationType === 'clinic' ? 'Klinikada qabul' : 'Onlayn konsultatsiya',
      },
      reviewModalAppointment.id
    );

    setIsSuccess(true);
    confetti({
      particleCount: 50,
      spread: 60,
      colors: ['#0d9488', '#f59e0b', '#38bdf8']
    });

    setTimeout(() => {
      closeReviewModal();
      setIsSuccess(false);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-teal-500/10 via-sky-500/10 to-transparent border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-500 flex items-center justify-center">
              <Star className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Ko‘rikdan So‘ng Sharh Qoldirish</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {reviewModalAppointment.doctorName}
              </p>
            </div>
          </div>
          <button
            onClick={closeReviewModal}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Katta rahmat!
            </h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Sizning samimiy fikringiz boshqa bemorlarga to‘g‘ri shifokor tanlashda juda muhim yordam beradi.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Rating Stars */}
            <div className="text-center py-2">
              <span className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">
                Shifokorga bahoingizni qo‘ying
              </span>
              <div className="flex items-center justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const isFilled = (hoverRating || rating) >= star;
                  return (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-transform hover:scale-125 focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors ${
                          isFilled
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-300 dark:text-slate-600'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
              <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-2">
                {rating === 5 && '🌟 A’lo darajada! Juda mamnunman'}
                {rating === 4 && '👍 Yaxshi, shifokor professional'}
                {rating === 3 && '😐 O‘rtacha, ma’qul keldi'}
                {rating === 2 && '👎 Qoniqarsiz'}
                {rating === 1 && '⚠️ Umuman yoqmadi'}
              </p>
            </div>

            {/* Patient Name */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Ismingiz
              </label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder="Ismingiz (yoki anonim qoldirish mumkin)"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Comment */}
            <div>
              <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                Fikr-mulohazangiz va tavsiyangiz *
              </label>
              <textarea
                rows={3}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Shifokor ko‘rigi qanday o‘tdi? Davolash tavsiyalari foyda berdimi?.."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 text-white font-semibold text-sm shadow-md shadow-teal-500/20 active:scale-95 transition-all"
              >
                Sharhni Joylash
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
