import React from 'react';
import { useApp } from '../context/AppContext';
import { SPECIALITIES } from '../data/doctors';
import { DoctorCard } from './DoctorCard';
import { 
  HeartPulse, 
  Search, 
  Calendar, 
  ShieldCheck, 
  Star, 
  ArrowRight, 
  Users, 
  Clock, 
  CheckCircle2, 
  Video, 
  Sparkles,
  Award,
  Stethoscope,
  Smile,
  Activity,
  Brain,
  Eye,
  Baby
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { doctors, setCurrentPage, setSelectedSpeciality, setSearchQuery } = useApp();

  const topDoctors = doctors.slice(0, 3);

  const getSpecialityIcon = (name: string) => {
    switch (name) {
      case 'Kardiologiya': return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Pediatriya': return <Baby className="w-5 h-5 text-amber-500" />;
      case 'Nevropatologiya': return <Brain className="w-5 h-5 text-indigo-500" />;
      case 'Stomatologiya': return <Smile className="w-5 h-5 text-teal-500" />;
      case 'Endokrinologiya': return <Activity className="w-5 h-5 text-emerald-500" />;
      case 'Oftalmologiya': return <Eye className="w-5 h-5 text-sky-500" />;
      default: return <Stethoscope className="w-5 h-5 text-teal-500" />;
    }
  };

  const handleCategoryClick = (specId: string) => {
    setSelectedSpeciality(specId);
    setCurrentPage('doctors');
  };

  return (
    <div className="space-y-16 py-6 animate-in fade-in duration-300">
      
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/60 dark:border-teal-800/60 text-teal-700 dark:text-teal-300 text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-teal-500 animate-spin" style={{ animationDuration: '6s' }} />
              <span>O‘zbekistondagi №1 Tinchlantiruvchi Tibbiy Tizim</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Salomatligingiz uchun <br />
              <span className="bg-gradient-to-r from-teal-500 via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                Xotirjam va Navbatsiz
              </span> <br />
              Qabulga Yoziling
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Ortiqcha asabiylashish va kutishlarsiz o‘z sohasining eng yetuk mutaxassislarini tanlang, real bemorlar sharhlarini o‘qing va qulay vaqtni band qiling.
            </p>

            {/* Quick Hero Search Box */}
            <div className="p-2 sm:p-2.5 rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-teal-500/5 max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Shifokor, mutaxassislik yoki simptom..."
                  className="w-full pl-11 pr-4 py-3 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setSearchQuery((e.target as HTMLInputElement).value);
                      setCurrentPage('doctors');
                    }
                  }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <button
                onClick={() => setCurrentPage('doctors')}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 text-white font-semibold text-sm shadow-md shadow-teal-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Izlash</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Stats Pill */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>250+ Malakali Shifokorlar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                <span>15,000+ Mamnun Bemorlar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-500" />
                <span>100% Xolis Sharhlar</span>
              </div>
            </div>
          </div>

          {/* Right Image / Hero Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Decorative gentle glow ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-sky-500/20 rounded-3xl blur-2xl transform -rotate-3" />
              
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-2xl bg-white dark:bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                  alt="Doctor with patient"
                  className="w-full h-96 object-cover object-top"
                />

                {/* Floating mini badge on hero */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                      ★ 4.9
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">Yuqori Tajribali Jamoa</p>
                      <p className="text-[11px] text-slate-500">Xalqaro standartlar asosida</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentPage('doctors')}
                    className="px-3 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-600 text-white text-xs font-semibold transition-colors"
                  >
                    Qabul
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialities Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Yo‘nalishlar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Mutaxassislik Toifalari
            </h2>
          </div>

          <button
            onClick={() => {
              setSelectedSpeciality('all');
              setCurrentPage('doctors');
            }}
            className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
          >
            <span>Barchasini ko‘rish</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SPECIALITIES.filter(s => s.id !== 'all').map((spec) => (
            <div
              key={spec.id}
              onClick={() => handleCategoryClick(spec.id)}
              className="group p-5 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800/80 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getSpecialityIcon(spec.name)}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {spec.name}
                </h3>
                <span className="text-xs text-slate-400 group-hover:text-slate-500 transition-colors mt-0.5 block">
                  Qabulga yozilish &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Doctors Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Tavsiya etiladiganlar
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Top Reytingli Shifokorlar
            </h2>
          </div>

          <button
            onClick={() => setCurrentPage('doctors')}
            className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
          >
            <span>Barcha shifokorlar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-teal-500/10 via-sky-500/10 to-emerald-500/10 rounded-3xl p-8 sm:p-12 border border-teal-200/40 dark:border-teal-800/40">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              Tizim Qanday Ishlaydi?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Uchta oddiy qadam bilan shifokor qabuliga qulay yoziling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 text-center">
              <div className="w-12 h-12 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center mx-auto mb-4 text-base shadow-md shadow-teal-500/30">
                1
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Shifokorni Tanlang</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Mutaxassislik, tajriba va bemorlar fikrlari asosida eng munosib shifokorni toping.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 text-center">
              <div className="w-12 h-12 rounded-full bg-sky-500 text-white font-bold flex items-center justify-center mx-auto mb-4 text-base shadow-md shadow-sky-500/30">
                2
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Vaqtni Band Qiling</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                O‘zingizga mos kun va aniq soatni tanlab, navbatsiz elektron talon oling.
              </p>
            </div>

            <div className="bg-white/80 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto mb-4 text-base shadow-md shadow-emerald-500/30">
                3
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">Ko‘rik va Sharh</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Shifokor ko‘rigidan so‘ng o‘z fikringiz va bahoingizni erkin qoldiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-600 via-teal-700 to-sky-700 text-white p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Sizga Qaysi Mutaxassis Kerak?
            </h2>
            <p className="text-teal-100 text-sm max-w-lg">
              Hoziroq qabul vaqtini tanlang va sog‘lig‘ingizga befarq bo‘lmang.
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('doctors')}
            className="px-8 py-3.5 rounded-2xl bg-white text-teal-700 hover:bg-teal-50 font-bold text-sm shadow-lg active:scale-95 transition-all shrink-0"
          >
            Barcha Shifokorlarni Ko‘rish
          </button>
        </div>
      </section>
    </div>
  );
};
