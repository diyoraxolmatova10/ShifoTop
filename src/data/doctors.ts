import { Doctor } from '../types';

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Alisher Rasulov',
    speciality: 'Kardiolog',
    experienceYears: 14,
    rating: 4.9,
    reviewCount: 128,
    price: 250000,
    clinic: 'Shifo Med Markazi',
    address: 'Toshkent sh., Yunusobod tumani, Amir Temur ko‘chasi, 45',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    about: 'Yurak-qon tomir kasalliklarini erta tashxislash, EKG, ExoKG va gipertoniya xastaliklarini davolash bo‘yicha 14 yillik tajribaga ega oliy toifali kardiolog. Yevropa Kardiologlar Jamiyati a’zosi.',
    availableDays: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'],
    timeSlots: ['09:00', '10:00', '11:30', '14:00', '15:30', '17:00'],
    education: 'Toshkent Tibbiyot Akademiyasi (2010), Germaniya Charité klinikasi amaliyoti (2016)',
    languages: ['O‘zbekcha', 'Ruscha', 'Inglizcha'],
    onlineConsultation: true,
    phone: '+998 71 200-11-22',
    reviews: [
      {
        id: 'rev-1',
        patientName: 'Dilshod Karimov',
        rating: 5,
        date: '2026-10-02',
        comment: 'Juda xushmuomala va o‘z ishining ustasi. Davolash kursi belgilab bergach, 3 kunda qon bosimim me’yoriga tushdi.',
        visitType: 'Klinikada qabul',
        verified: true
      },
      {
        id: 'rev-2',
        patientName: 'Malika Zokirova',
        rating: 5,
        date: '2026-09-28',
        comment: 'Tushuntirishlari juda aniq va xotirjam. Asabni tinchlantiruvchi yondashuvi bor ekan, rahmat!',
        visitType: 'Onlayn konsultatsiya',
        verified: true
      }
    ]
  },
  {
    id: 'doc-2',
    name: 'Dr. Shahnoza Karimova',
    speciality: 'Pediatr',
    experienceYears: 11,
    rating: 5.0,
    reviewCount: 215,
    price: 180000,
    clinic: 'Bolalar Salomatligi Klinikasi',
    address: 'Toshkent sh., Mirzo Ulug‘bek tumani, Mustaqillik shox ko‘chasi, 88',
    avatar: 'https://images.unsplash.com/photo-1594824813572-c5188f583526?auto=format&fit=crop&w=600&q=80',
    about: 'Bolalar rivojlanishi, emlash taqvimi, mavsumiy shamollash va allergik kasalliklarni muloyimlik bilan davolash bo‘yicha ekspert. Bolalar bilan juda tez til topishadi.',
    availableDays: ['Dushanba', 'Chorshanba', 'Juma', 'Shanba'],
    timeSlots: ['09:30', '11:00', '13:30', '15:00', '16:30'],
    education: 'Samarqand Davlat Tibbiyot Universiteti (2013), Pediatriya ixtisosligi',
    languages: ['O‘zbekcha', 'Ruscha'],
    onlineConsultation: true,
    phone: '+998 71 200-33-44',
    reviews: [
      {
        id: 'rev-3',
        patientName: 'Nigora Yoqubova',
        rating: 5,
        date: '2026-10-04',
        comment: 'Farzandim do‘xtirlardan juda qo‘rqardi, ammo Shahnoza opa bilan do‘stlashib ketdi. Tavsiya qilaman!',
        visitType: 'Klinikada qabul',
        verified: true
      }
    ]
  },
  {
    id: 'doc-3',
    name: 'Dr. Jasur Mansurov',
    speciality: 'Nevropatolog',
    experienceYears: 16,
    rating: 4.8,
    reviewCount: 94,
    price: 280000,
    clinic: 'NeuroLife Markazi',
    address: 'Toshkent sh., Chilonzor tumani, Bunyodkor ko‘chasi, 21',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
    about: 'Surunkali bosh og‘riqlari, uyqusizlik, disk churralari va stress oqibatidagi asab buzilishlarini kompleks reabilitatsiya qilish mutaxassisi.',
    availableDays: ['Seshanba', 'Chorshanba', 'Payshanba', 'Shanba'],
    timeSlots: ['10:00', '11:30', '14:00', '16:00', '18:00'],
    education: 'Toshkent Pediatriya Tibbiyot Instituti (2008), Moskva Nevrologiya Markazi malaka oshirishi',
    languages: ['O‘zbekcha', 'Ruscha'],
    onlineConsultation: false,
    phone: '+998 71 200-55-66',
    reviews: [
      {
        id: 'rev-4',
        patientName: 'Ulug‘bek Salimov',
        rating: 5,
        date: '2026-09-19',
        comment: 'Bo‘yin osteoxondrozi tufayli boshim tinmay og‘rirdi. To‘g‘ri terapiya yozib berdilar, natija a’lo darajada.',
        visitType: 'Klinikada qabul',
        verified: true
      }
    ]
  },
  {
    id: 'doc-4',
    name: 'Dr. Nilufar Qosimova',
    speciality: 'Dermatolog',
    experienceYears: 9,
    rating: 4.9,
    reviewCount: 160,
    price: 200000,
    clinic: 'Estetik Derma Klinika',
    address: 'Toshkent sh., Yakkasaroy tumani, Shota Rustaveli ko‘chasi, 52',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    about: 'Teri muammolari, husnbuzarlar, ekzema, psoriaz va yoshartiruvchi dermato-kosmetologik amaliyotlar bo‘yicha tajribali mutaxassis.',
    availableDays: ['Dushanba', 'Seshanba', 'Payshanba', 'Juma'],
    timeSlots: ['09:00', '10:30', '12:00', '14:30', '16:00'],
    education: 'Toshkent Tibbiyot Akademiyasi (2015), Janubiy Koreya Seul Dermatologiya Instituti kursi (2019)',
    languages: ['O‘zbekcha', 'Ruscha', 'Koreyscha'],
    onlineConsultation: true,
    phone: '+998 71 200-77-88',
    reviews: [
      {
        id: 'rev-5',
        patientName: 'Madina Saidova',
        rating: 5,
        date: '2026-10-01',
        comment: 'Teri qizarishi va toshmalar sababini zudlik bilan aniqlab, qimmat bo‘lmagan juda samarali malham yozib berdilar.',
        visitType: 'Klinikada qabul',
        verified: true
      }
    ]
  },
  {
    id: 'doc-5',
    name: 'Dr. Farrux Oripov',
    speciality: 'Stomatolog',
    experienceYears: 13,
    rating: 4.9,
    reviewCount: 180,
    price: 150000,
    clinic: 'Oq Tabassum Dental',
    address: 'Toshkent sh., Shayxontohur tumani, Navoiy shoh ko‘chasi, 14',
    avatar: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
    about: 'Og‘riqsiz tish davolash, tish restavratsiyasi, implantatsiya va professional gigiyenik tozalash bo‘yicha zamonaviy texnologiyalar ustasi.',
    availableDays: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
    timeSlots: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:30', '18:00'],
    education: 'Toshkent Davlat Stomatologiya Instituti (2011)',
    languages: ['O‘zbekcha', 'Ruscha'],
    onlineConsultation: false,
    phone: '+998 71 200-88-99',
    reviews: [
      {
        id: 'rev-6',
        patientName: 'Sanjar Nurmatov',
        rating: 5,
        date: '2026-09-22',
        comment: 'Tish davolatishdan bolalikdan qo‘rqardim, lekin umuman og‘riq sezmadim. Zamonaviy asbob-uskunalar!',
        visitType: 'Klinikada qabul',
        verified: true
      }
    ]
  },
  {
    id: 'doc-6',
    name: 'Dr. Umida Hamroeva',
    speciality: 'Endokrinolog',
    experienceYears: 15,
    rating: 4.8,
    reviewCount: 88,
    price: 240000,
    clinic: 'Gormon & Salomatlik Markazi',
    address: 'Toshkent sh., Mirobod tumani, Nukus ko‘chasi, 31',
    avatar: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=600&q=80',
    about: 'Qalqonsimon bez xastaliklari, qandli diabet, vazn muammolari va gormonal disbalansni nozik tekshirish va muvozanatlash bo‘yicha oliy toifali shifokor.',
    availableDays: ['Dushanba', 'Chorshanba', 'Juma'],
    timeSlots: ['10:00', '11:30', '13:00', '15:30', '17:00'],
    education: 'Toshkent Tibbiyot Akademiyasi (2009)',
    languages: ['O‘zbekcha', 'Ruscha'],
    onlineConsultation: true,
    phone: '+998 71 200-44-55',
    reviews: [
      {
        id: 'rev-7',
        patientName: 'Ziyoda Rustamova',
        rating: 5,
        date: '2026-09-29',
        comment: 'Tahlillarni erinmay birma-bir o‘rganib chiqdilar. Berilgan reja bo‘yicha o‘zimni ancha tetik his qilyapman.',
        visitType: 'Klinikada qabul',
        verified: true
      }
    ]
  },
  {
    id: 'doc-7',
    name: 'Dr. Bobur Ergashev',
    speciality: 'Ortoped',
    experienceYears: 18,
    rating: 5.0,
    reviewCount: 142,
    price: 270000,
    clinic: 'Travma & Ortopediya Markazi',
    address: 'Toshkent sh., Uchtepa tumani, Lutfiy ko‘chasi, 65',
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
    about: 'Bo‘g‘imlar artrozi, sport jarohatlari, umurtqa pog‘onasi qiyshiqliklari va operatsiyasiz davolash usullari bo‘yicha tajribali ortoped-travmatolog.',
    availableDays: ['Seshanba', 'Payshanba', 'Juma', 'Shanba'],
    timeSlots: ['09:00', '11:00', '14:00', '16:00'],
    education: 'Toshkent Tibbiyot Akademiyasi (2006), Turkiya Acibadem klinikasi stajirovkasi',
    languages: ['O‘zbekcha', 'Ruscha', 'Turkcha'],
    onlineConsultation: false,
    phone: '+998 71 200-99-00',
    reviews: [
      {
        id: 'rev-8',
        patientName: 'Jasurbek To‘xtayev',
        rating: 5,
        date: '2026-10-05',
        comment: 'Tizza og‘rig‘idan qiynalayotgandim. Yozib bergan mashqlar va inyeksiyalari 1 haftada o‘z samarasini berdi.',
        visitType: 'Klinikada qabul',
        verified: true
      }
    ]
  },
  {
    id: 'doc-8',
    name: 'Dr. Gulnoza Mirzayeva',
    speciality: 'Oftalmolog',
    experienceYears: 10,
    rating: 4.9,
    reviewCount: 110,
    price: 190000,
    clinic: 'Yorqin Nigoh Ko‘z Klinikasi',
    address: 'Toshkent sh., Olmazor tumani, Qorasaroy ko‘chasi, 19',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    about: 'Ko‘rish o‘tkirligini aniqlash, kompyuter ko‘rish sindromi, quruq ko‘z, katarakta va glaukoma erta profilaktikasi bo‘yicha zamonaviy oftalmolog.',
    availableDays: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'],
    timeSlots: ['09:30', '11:00', '12:30', '14:30', '16:00'],
    education: 'Toshkent Tibbiyot Akademiyasi (2014)',
    languages: ['O‘zbekcha', 'Ruscha'],
    onlineConsultation: true,
    phone: '+998 71 200-66-77',
    reviews: [
      {
        id: 'rev-9',
        patientName: 'Sevara Qobilova',
        rating: 5,
        date: '2026-09-30',
        comment: 'Ko‘z bosimimni tekshirib, ko‘zlarimning charchashiga qarshi juda yaxshi tomchilar tavsiya qildilar.',
        visitType: 'Klinikada qabul',
        verified: true
      }
    ]
  }
];

export const SPECIALITIES = [
  { id: 'all', name: 'Barcha mutaxassislar', icon: 'Stethoscope' },
  { id: 'Kardiolog', name: 'Kardiologiya', icon: 'HeartPulse' },
  { id: 'Pediatr', name: 'Pediatriya', icon: 'Baby' },
  { id: 'Nevropatolog', name: 'Nevropatologiya', icon: 'Brain' },
  { id: 'Dermatolog', name: 'Dermatologiya', icon: 'Sparkles' },
  { id: 'Stomatolog', name: 'Stomatologiya', icon: 'Smile' },
  { id: 'Endokrinolog', name: 'Endokrinologiya', icon: 'Activity' },
  { id: 'Ortoped', name: 'Ortopediya', icon: 'ShieldCheck' },
  { id: 'Oftalmolog', name: 'Oftalmologiya', icon: 'Eye' },
];

export const INITIAL_APPOINTMENTS: import('../types').Appointment[] = [
  {
    id: 'SHIFO-84920',
    doctorId: 'doc-1',
    doctorName: 'Dr. Alisher Rasulov',
    doctorSpeciality: 'Kardiolog',
    doctorAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    clinic: 'Shifo Med Markazi',
    date: '2026-10-12',
    time: '10:00',
    patientName: 'Azizbek Rahimov',
    patientPhone: '+998 90 123 45 67',
    patientNote: 'Muntazam qon bosimi oshishi sababli ko‘rik',
    consultationType: 'clinic',
    status: 'tasdiqlandi',
    price: 250000,
    createdAt: '2026-10-06 14:20',
    hasReviewed: false
  },
  {
    id: 'SHIFO-47102',
    doctorId: 'doc-2',
    doctorName: 'Dr. Shahnoza Karimova',
    doctorSpeciality: 'Pediatr',
    doctorAvatar: 'https://images.unsplash.com/photo-1594824813572-c5188f583526?auto=format&fit=crop&w=600&q=80',
    clinic: 'Bolalar Salomatligi Klinikasi',
    date: '2026-10-03',
    time: '11:00',
    patientName: 'Azizbek Rahimov',
    patientPhone: '+998 90 123 45 67',
    patientNote: 'Farzandimning mavsumiy shamollashi',
    consultationType: 'clinic',
    status: 'yakunlandi',
    price: 180000,
    createdAt: '2026-10-01 09:15',
    hasReviewed: true
  }
];
