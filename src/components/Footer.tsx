import React from 'react';
import { useApp } from '../context/AppContext';
import { HeartPulse, Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, setSelectedSpeciality } = useApp();

  return (
    <footer className="relative z-10 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-sky-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-sky-600 dark:from-teal-400 dark:to-sky-400 bg-clip-text text-transparent">
                ShifoTop
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              O‘zbekistondagi eng qulay, xotirjam va ishonchli tibbiy qabulga yozilish tizimi. Salomatligingiz — oliy qadriyatimiz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Tezkor Sahifalar
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => setCurrentPage('home')} className="hover:text-teal-500 transition-colors">
                  Bosh Sahifa
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('doctors')} className="hover:text-teal-500 transition-colors">
                  Shifokorlar Katalogi
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('reviews')} className="hover:text-teal-500 transition-colors">
                  Bemorlar Sharhlari
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('my-appointments')} className="hover:text-teal-500 transition-colors">
                  Mening Qabullarim
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-teal-500 transition-colors">
                  Klinika Haqida
                </button>
              </li>
            </ul>
          </div>

          {/* Top Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Ommabop Yo‘nalishlar
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => { setSelectedSpeciality('Kardiolog'); setCurrentPage('doctors'); }} className="hover:text-teal-500 transition-colors">
                  Kardiologiya
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedSpeciality('Pediatr'); setCurrentPage('doctors'); }} className="hover:text-teal-500 transition-colors">
                  Pediatriya
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedSpeciality('Nevropatolog'); setCurrentPage('doctors'); }} className="hover:text-teal-500 transition-colors">
                  Nevropatologiya
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedSpeciality('Stomatolog'); setCurrentPage('doctors'); }} className="hover:text-teal-500 transition-colors">
                  Stomatologiya
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedSpeciality('Dermatolog'); setCurrentPage('doctors'); }} className="hover:text-teal-500 transition-colors">
                  Dermatologiya
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Bog‘lanish
            </h4>
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-teal-500" />
                <span>+998 71 200-00-03 (24/7)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-teal-500" />
                <span>info@shifotop.uz</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                <span>Toshkent sh., Amir Temur shox ko‘chasi, 107-B</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 mt-8 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} ShifoTop. Barcha huquqlar himoyalangan.</p>
          <p className="flex items-center gap-1">
            <span>O‘zbekiston xalqi salomatligi uchun mehr bilan yaratilgan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
