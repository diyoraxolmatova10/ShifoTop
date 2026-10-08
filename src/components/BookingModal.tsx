import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  FileText, 
  MapPin, 
  CheckCircle, 
  Sparkles,
  ShieldCheck,
  Video,
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const BookingModal: React.FC = () => {
  const { bookingModalDoctor, closeBookingModal, bookAppointment } = useApp();

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState(bookingModalDoctor?.timeSlots[0] || '10:00');
  const [consultationType, setConsultationType] = useState<'clinic' | 'online'>('clinic');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('+998 ');
  const [patientNote, setPatientNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState<import('../types').Appointment | null>(null);

  if (!bookingModalDoctor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || patientPhone.trim().length < 9) {
      alert('Iltimos, ismingiz va to‘liq telefon raqamingizni kiriting!');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const ticket = bookAppointment({
        doctorId: bookingModalDoctor.id,
        doctorName: bookingModalDoctor.name,
        doctorSpeciality: bookingModalDoctor.speciality,
        doctorAvatar: bookingModalDoctor.avatar,
        clinic: bookingModalDoctor.clinic,
        date: selectedDate,
        time: selectedTime,
        patientName,
        patientPhone,
        patientNote,
        consultationType,
        price: bookingModalDoctor.price,
      });

      setIsSubmitting(false);
      setSuccessTicket(ticket);

      // Trigger pleasant celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0d9488', '#0284c7', '#38bdf8', '#10b981']
      });
    }, 600);
  };

  const nextDays = Array.from({ length: 6 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      full: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('uz-UZ', { weekday: 'short' }),
      dayNumber: d.getDate(),
      month: d.toLocaleDateString('uz-UZ', { month: 'short' })
    };
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-teal-500/10 via-sky-500/10 to-transparent border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 dark:bg-teal-500/25 flex items-center justify-center text-teal-600 dark:text-teal-400">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {successTicket ? 'Qabul Tasdiqlandi!' : 'Shifokor Qabuliga Yozilish'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {bookingModalDoctor.name} &bull; {bookingModalDoctor.speciality}
              </p>
            </div>
          </div>
          <button
            onClick={closeBookingModal}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {successTicket ? (
          /* Success Ticket View */
          <div className="p-6 sm:p-8 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 ring-8 ring-emerald-50 dark:ring-emerald-950/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              Qabulingiz muvaffaqiyatli band qilindi!
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
              Sizga SMS va telefon orqali eslatma yuboriladi. Shifokor sizni belgilangan vaqtda kutadi.
            </p>

            {/* Ticket Card */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-dashed border-teal-300 dark:border-teal-700/50 text-left mb-6 relative">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700 gap-3">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-teal-600 dark:text-teal-400 uppercase">
                    Elektron Talon Raqami
                  </span>
                  <p className="text-lg font-mono font-bold text-slate-900 dark:text-white">
                    {successTicket.id}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Faol holatda
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 text-sm">
                <div>
                  <span className="text-slate-400 dark:text-slate-400 text-xs block">Shifokor</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{successTicket.doctorName}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-400 text-xs block">Mutaxassislik</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{successTicket.doctorSpeciality}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-400 text-xs block">Belgilangan Sana va Vaqt</span>
                  <span className="font-semibold text-teal-600 dark:text-teal-400">{successTicket.date} &bull; {successTicket.time}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-400 text-xs block">Bemor Ismi</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{successTicket.patientName}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-400 text-xs block">Qabul Turi</span>
                  <span className="font-semibold text-slate-800 dark:text-white">
                    {successTicket.consultationType === 'clinic' ? 'Klinikada qabul' : 'Onlayn video konsultatsiya'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-400 text-xs block">Qabul Narxi</span>
                  <span className="font-semibold text-slate-800 dark:text-white">{successTicket.price.toLocaleString()} so‘m</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span>{bookingModalDoctor.clinic} — {bookingModalDoctor.address}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={closeBookingModal}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 text-white font-medium shadow-md shadow-teal-500/20 hover:from-teal-600 hover:to-sky-700 transition-colors"
              >
                Tushunarli, Rahmat!
              </button>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {/* Doctor mini header card */}
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <img
                src={bookingModalDoctor.avatar}
                alt={bookingModalDoctor.name}
                className="w-14 h-14 rounded-xl object-cover ring-2 ring-teal-500/30"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white truncate">
                    {bookingModalDoctor.name}
                  </h4>
                  <span className="text-xs px-2 py-0.5 rounded-md bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 font-medium">
                    {bookingModalDoctor.rating} ★
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {bookingModalDoctor.clinic}
                </p>
                <p className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                  Qabul narxi: {bookingModalDoctor.price.toLocaleString()} so‘m
                </p>
              </div>
            </div>

            {/* Consultation Type Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">
                Qabul Turi
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setConsultationType('clinic')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                    consultationType === 'clinic'
                      ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 ring-2 ring-teal-500/20'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  Klinikada qabul
                </button>
                <button
                  type="button"
                  disabled={!bookingModalDoctor.onlineConsultation}
                  onClick={() => setConsultationType('online')}
                  className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-sm font-medium transition-all ${
                    consultationType === 'online'
                      ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 ring-2 ring-teal-500/20'
                      : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  } ${!bookingModalDoctor.onlineConsultation ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  <Video className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  Onlayn Video Konsultatsiya
                </button>
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">
                Sanani Tanlang
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {nextDays.map((d) => {
                  const isSelected = selectedDate === d.full;
                  return (
                    <button
                      key={d.full}
                      type="button"
                      onClick={() => setSelectedDate(d.full)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'border-teal-500 bg-teal-500 text-white shadow-md shadow-teal-500/25 scale-[1.02]'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-teal-300 dark:hover:border-teal-700'
                      }`}
                    >
                      <span className={`block text-[11px] font-medium uppercase ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                        {d.dayName}
                      </span>
                      <span className="block text-base font-bold my-0.5">
                        {d.dayNumber}
                      </span>
                      <span className={`block text-[10px] ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                        {d.month}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2">
                Bo‘sh Qabul Vaqtini Tanlang
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {bookingModalDoctor.timeSlots.map((time) => {
                  const isSelected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                        isSelected
                          ? 'border-teal-500 bg-teal-500 text-white shadow-md shadow-teal-500/25'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:border-teal-400'
                      }`}
                    >
                      <Clock className="w-3 h-3 opacity-70" />
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Patient Info Fields */}
            <div className="space-y-3 pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Ism va Familiyangiz *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="Masalan: Sardor Aliyev"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Telefon Raqamingiz *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Shikoyatingiz yoki Qabul Sababi (Ixtiyoriy)
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <textarea
                    rows={2}
                    placeholder="Qisqacha nima bezovta qilayotganini yozing..."
                    value={patientNote}
                    onChange={(e) => setPatientNote(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Band qilinmoqda...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Qabulni Tasdiqlash &bull; {bookingModalDoctor.price.toLocaleString()} so‘m</span>
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-slate-600 dark:text-slate-300 mt-2">
                To‘lov ko‘rikdan keyin klinikada amalga oshiriladi. Bekor qilish bepul.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
