import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  Building2, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Users, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-in fade-in duration-300">
      
      {/* Hero section */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 mb-3">
          <Building2 className="w-3.5 h-3.5" />
          Biz haqimizda
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          ShifoTop &bull; Salomatligingiz Ishonchli Qo‘llarda
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Bizning vazifamiz — zamonaviy texnologiyalar va tajribali shifokorlar orqali har bir insonga xotirjam, navbatsiz va sifatli tibbiy xizmat ko‘rsatishdir.
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 mx-auto flex items-center justify-center mb-4">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Navbatsiz Qabul</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Qabul vaqtini onlayn tanlang va kutishlarsiz, asabingizni ehtiyot qilgan holda ko‘rikdan o‘ting.
          </p>
        </div>

        <div className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center">
          <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 mx-auto flex items-center justify-center mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Eng Yaxshi Shifokorlar</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Faqat litsenziyaga ega, xalqaro tajribali va bemorlar tomonidan yuqori baholangan mutaxassislar.
          </p>
        </div>

        <div className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm text-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Shaffof Sharhlar</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Har bir sharh haqiqiy qabuldan o‘tgan bemorlar tomonidan qoldiriladi va shaffoflik kafolatlanadi.
          </p>
        </div>
      </div>

      {/* Contact & Location */}
      <div className="bg-white/90 dark:bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-lg">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
          Markaziy Klinika Ma’lumotlari va Aloqa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Manzil:</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Toshkent shahri, Amir Temur shoh ko‘chasi, 107-B bino.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Call-Markaz (24/7):</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  +998 71 200-00-03 &bull; Qisqa raqam: 1103
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Elektron pochta:</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  info@shifotop.uz
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2">
                Ish tartibi:
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Dushanba - Shanba: 08:30 dan 20:00 gacha<br />
                Yakshanba: Navbatchi shifokorlar (09:00 - 15:00)
              </p>
            </div>
            
            <button
              onClick={() => setCurrentPage('doctors')}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 to-sky-600 text-white font-semibold text-xs shadow-md shadow-teal-500/20 hover:from-teal-600 hover:to-sky-700 transition-all text-center"
            >
              Hozirroq Shifokor Qabuliga Yozilish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
