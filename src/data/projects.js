const img = (n) => `assets/images/${n}`;

export const PROJECTS = [
  {
    id: "propertyiq",
    tags: ["mobile", "web", "uiux", "qa"],
    category: "Mobile & Admin Web, UI/UX, QA",

    title:
      "PropertyIQ: Property Marketplace with Machine Learning-Based Price Prediction",

    summary:
      "Marketplace properti berbasis mobile yang mendukung pencarian properti, estimasi harga rumah, dan rekomendasi berbasis machine learning.",

    role:
      "UI/UX Designer, Mobile Frontend Developer (Buyer & Seller), Admin Web Frontend Developer, Database Support, QA Contributor",

    contributions: [
      "Perancangan UI/UX untuk aplikasi dan antarmuka sesuai lingkup tugas",
      "Pengembangan frontend aplikasi mobile Buyer dan Seller",
      "Implementasi fitur Login dan Register",
      "Implementasi Favorite / Saved Properties",
      "Pengembangan pengelolaan listing Seller sesuai lingkup tugas",
      "Pengembangan halaman Bantuan dan Tentang Aplikasi",
      "Penanganan empty state dan network error",
      "Pengembangan frontend website admin",
      "Dukungan pekerjaan database pada bagian admin",
      "Penyusunan Robustness Diagram",
      "Pengujian perangkat lunak dan dokumentasi bug bersama tim QA",
    ],

    myStack: [
      "UI/UX Design",
      "Flutter",
      "Dart",
      "Mobile Frontend",
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Software Testing",
      "Robustness Diagram",
    ],

    projectStack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "GoRouter",
      "Dio",
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "FastAPI",
      "Python",
      "scikit-learn",
      "XGBoost",
    ],

    images: [
      img("propertyiq-1.png"),
      img("propertyiq-2.png"),
    ],

    repo: "https://github.com/fajarekasa555/PBL-Kelompok2-TI3A",
  },

  {
    id: "poliklinik",
    tags: ["web", "uiux"],
    category: "Web Development, UI/UX, System Analysis",

    title:
      "Sistem Reservasi Poliklinik Politeknik Negeri Malang",

    summary:
      "Sistem reservasi klinik berbasis web untuk civitas kampus, meliputi reservasi online, pemilihan dokter dan jadwal, pengelolaan kuota harian, nomor antrean, estimasi waktu pemeriksaan, rekam medis digital, umpan balik pasien, dan administrasi layanan.",

    role:
      "UI/UX Designer, Frontend Developer, System Analyst & Technical Documentation, Promotional Video Creator",

    contributions: [
      "Perancangan UI Design System",
      "Desain antarmuka daftar dan detail dokter",
      "Desain antarmuka formulir reservasi",
      "Perbaikan UX admin melalui relation dropdown, filter, dan status badge",
      "Desain antarmuka feedback dan monitoring",
      "Final UI polishing",
      "Implementasi desain menjadi antarmuka frontend website",
      "Penyusunan Use Case Diagram",
      "Penyusunan Activity Diagram",
      "Penyusunan Robustness Diagram",
      "Penyusunan Sequence Diagram",
      "Penyusunan Class Diagram",
      "Penyusunan Behavioral State Machine Diagram",
      "Penyusunan Deployment Diagram",
      "Pembuatan video iklan promosi proyek",
    ],

    diagrams: [
      "Use Case",
      "Activity",
      "Robustness",
      "Sequence",
      "Class",
      "Behavioral State Machine",
      "Deployment",
    ],

    myStack: [
      "UI/UX Design",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Blade",
      "System Analysis",
      "UML Diagrams",
      "Promotional Video",
    ],

    projectStack: [
      "PHP 8.3",
      "Laravel 12",
      "Filament v3",
      "MySQL",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "Blade",
      "Eloquent ORM",
    ],

    achievement:
      "Pencatatan Hak Cipta, Kementerian Hukum Republik Indonesia (2026), sebagai hasil kerja tim proyek.",

    images: [
      img("poliklinik-1.png"),
      img("poliklinik-2.png"),
    ],

    repo: "https://github.com/ddickyy/PBL_SMT4",
  },

  {
    id: "ivss",
    tags: ["web", "uiux", "api"],
    category: "Web Development, UI/UX, API Integration",

    title:
      "Website Profil Laboratorium IVSS Politeknik Negeri Malang",

    summary:
      "Website profil laboratorium untuk mengelola informasi laboratorium, anggota, penelitian, publikasi, berita, dan fasilitas.",

    role:
      "UI/UX Designer, Frontend Developer, System Documentation Contributor, API Integration Developer",

    contributions: [
      "Perancangan UI/UX website",
      "Pengembangan frontend website",
      "Penyusunan diagram sistem sesuai lingkup dokumentasi",
      "Integrasi REST API antara frontend dan backend",
      "Troubleshooting komunikasi dan pertukaran data melalui API",
    ],

    myStack: [
      "UI/UX Design",
      "HTML",
      "CSS",
      "JavaScript",
      "Frontend Development",
      "REST API Integration",
      "System Diagrams",
    ],

    projectStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "PostgreSQL",
      "REST API",
    ],

    images: [
      img("ivss-1.png"),
      img("ivss-2.png"),
    ],

    repo: "https://github.com/RizkyFirdiansyah/PBL25_IVSS",
    repo2: "https://github.com/RizkyFirdiansyah/cms_ivss",
  },


  {
    id: "vehicle-counting",
    tags: ["cv", "annotation"],
    category: "Computer Vision, Dataset Annotation",

    title: "Vehicle Detection & Counting pada Rekaman Lalu Lintas",

    summary:
      "Proyek kolaborasi bersama dosen untuk mendukung deteksi dan penghitungan kendaraan pada rekaman lalu lintas. Kontribusi saya berfokus pada anotasi objek kendaraan menggunakan Label Studio sebagai bagian dari persiapan dataset.",

    role:
      "Dataset Annotator / Vehicle Detection & Counting Contributor",

    contributions: [
      "Melakukan anotasi kendaraan pada citra atau frame rekaman lalu lintas menggunakan Label Studio",
      "Menggambar bounding box pada setiap kendaraan yang terlihat",
      "Memberikan label kelas kendaraan, meliputi Mobil, Motor, dan Kendaraan Besar",
      "Memeriksa ketepatan posisi bounding box dan konsistensi label anotasi",
      "Mendukung persiapan dataset untuk pengembangan sistem deteksi dan penghitungan kendaraan",
    ],

    myStack: [
      "Label Studio",
      "Dataset Annotation",
      "Bounding Box Annotation",
      "Vehicle Labeling",
    ],

    projectStack: [
      "Computer Vision",
      "Object Detection",
      "Vehicle Counting",
      "Label Studio",
      "Dataset Annotation",
    ],

    images: [
      img("vehicle-counting-1.png"),
      img("vehicle-counting-2.png"),
    ],

    repo: "",
    repoUnavailable: true,
  },

  {
    id: "next",
    comingSoon: true,
    tags: [],
    category: "Segera hadir",
    title: "Proyek berikutnya",
    summary:
      "Proyek ini sedang dikerjakan. Detailnya akan ditambahkan setelah selesai.",
    role: "",
    contributions: [],
    projectStack: [],
    myStack: [],
    images: [],
    repo: "",
  },
];

export const FILTERS = [
  ["all", "Semua"],
  ["mobile", "Mobile"],
  ["web", "Web"],
  ["uiux", "UI/UX"],
  ["api", "API"],
  ["qa", "QA"],
  ["cv", "Computer Vision"],
  ["annotation", "Data Annotation"],
];