import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { SPECIALITIES } from '../data/doctors';
import { DoctorCard } from './DoctorCard';
import { 
  Search, 
  Filter, 
  SlidersHorizontal, 
  ArrowUpDown, 
  Sparkles,
  Stethoscope,
  Video
} from 'lucide-react';

export const DoctorsPage: React.FC = () => {
  const { doctors, searchQuery, setSearchQuery, selectedSpeciality, setSelectedSpeciality } = useApp();

  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'price-asc' | 'price-desc'>('rating');
  const [onlyOnline, setOnlyOnline] = useState(false);

  const filteredDoctors = useMemo(() => {
    return doctors
      .filter((doc) => {
        const matchesSpec = selectedSpeciality === 'all' || doc.speciality === selectedSpeciality;
        const matchesSearch = 
          doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.clinic.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doc.about.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesOnline = onlyOnline ? doc.onlineConsultation : true;

        return matchesSpec && matchesSearch && matchesOnline;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'experience') return b.experienceYears - a.experienceYears;
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        return 0;
      });
  }, [doctors, selectedSpeciality, searchQuery, onlyOnline, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      
      {/* Page Header */}
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60 mb-3">
          <Stethoscope className="w-3.5 h-3.5" />
          Malakali Mutaxassislar Katalogi
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          O‘zingizga Mos Shifokorni Tanlang
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Shifokorlarning reytingi, qabul narxi va bemorlar sharhlari asosida qulay vaqtga navbatsiz yoziling.
        </p>
      </div>

      {/* Filter and Search Bar Card */}
      <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-lg mb-8 space-y-4">
        
        {/* Search input and sort controls */}
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="w-5 h-5 absolute left-3.5 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="Shifokor ismi, mutaxassislik yoki klinika bo‘yicha qidiring..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
            {/* Online filter toggle */}
            <button
              onClick={() => setOnlyOnline(!onlyOnline)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-semibold border transition-all ${
                onlyOnline
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 ring-2 ring-emerald-500/20'
                  : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Faqat Onlayn qabul</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 hidden sm:inline">Saralash:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="rating">Reyting bo‘yicha (Yuqori)</option>
                <option value="experience">Tajriba bo‘yicha (Ko‘p yillik)</option>
                <option value="price-asc">Narx bo‘yicha (Arzonroq)</option>
                <option value="price-desc">Narx bo‘yicha (Qimmatroq)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories / Specialities Pills */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SPECIALITIES.map((spec) => {
              const isActive = selectedSpeciality === spec.id;
              return (
                <button
                  key={spec.id}
                  onClick={() => setSelectedSpeciality(spec.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-500 to-sky-600 text-white shadow-md shadow-teal-500/25 scale-[1.02]'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {spec.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Doctor Cards Grid */}
      {filteredDoctors.length === 0 ? (
        <div className="text-center py-16 bg-white/60 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800">
          <p className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-1">
            Hech qanday shifokor topilmadi
          </p>
          <p className="text-xs text-slate-500 mb-4">
            Qidiruv so‘zini o‘zgartiring yoki filterni tozalab ko‘ring.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSpeciality('all');
              setOnlyOnline(false);
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-teal-500 text-white hover:bg-teal-600 transition-colors"
          >
            Filtrni tozalash
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      )}
    </div>
  );
};
