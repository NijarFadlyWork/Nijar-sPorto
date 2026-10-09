export const profile = {
  name: "Nijar Fadly",
  role: "Software engineer, game developer, dan pengajar coding",
  city: "Bandung, Indonesia",
  email: "nijarfadly@gmail.com",
  github: "https://github.com/NijarFadlyWork",
  school: "SMK Negeri 2 Cimahi, Teknik Informatika",
};

export const teaching = {
  org: "CodingBee Academy",
  years: "sekitar 3 tahun",
  schools: [
    "Bintang Harapan (SD-SMA)",
    "BPK Penabur(SD)",
    "Bintang Mulia(SD-SMP-SMA)",
    "Sahabat Anak Terang(SD-SMP)",
    "Lentera Bangsa School (SMP-SMA)"
  ],
};

export const biodata = {
  nama : "Nijar Fadly",
  hobby: "riding"
}

export const featured = {
  title: "Warisan Batik",
  href: "https://warisan-batik-fawn.vercel.app",

  summary:
    "Toko online batik dan pakaian tradisional Indonesia. Pembeli harus login sebelum memakai keranjang, dan toko punya panel admin dengan peran terpisah untuk pengelola produk dan petugas gudang.",
  points: [
    "Login dengan JWT di cookie HTTP-only, password di-hash dengan bcryptjs",
    "PostgreSQL lewat Prisma; stok gudang dan etalase toko dipisah menjadi dua model",
    "Katalog dengan filter kategori dan paginasi 6 produk per halaman",
    "Pembayaran QRIS dan virtual account masih simulasi; integrasi Mayar.id sedang dikerjakan",
  ],
  stack: ["Next.js App Router", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "GSAP"],
};

export const projects = [
  {
    title: "WEBKITA",
    text: "Marketplace jasa pembuatan web bertema gelap untuk konteks pelaku usaha di Bandung.",
    stack: "HTML, CSS, JavaScript",
  },
  {
    title: "Dashboard pembayaran siswa",
    text: "Panel admin yang menampilkan statistik pembayaran siswa.",
    stack: "Laravel Blade, Bootstrap 5",
  },
  
  {
    title: "Aplikasi biodata",
    text: "Aplikasi pribadi yang dibangun bertahap dari dasar Dart, widget, layout, sampai navigasi.",
    stack: "Flutter, Dart",
  },
  {
    title: "Jam RTC dan lampu RGB",
    text: "Eksperimen Arduino dengan modul RTC DS3231 lewat I2C, plus efek strobo sirene polisi di LED RGB.",
    stack: "Arduino, C++",
  },
  {
    title: "Hangman dan sistem antrian",
    text: "Latihan struktur data: permainan Hangman memakai vector di C++, dan antrian berbasis linked list di C.",
    stack: "C, C++",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind", "HTML, CSS, JavaScript"],
  },
  {
    group: "Backend dan data",
    items: ["Express.js", "RESTful API", "Laravel", "Prisma", "PostgreSQL", "SQL", "MongoDB", "Data engineering"],
  },
  {
    group: "Bahasa lain",
    items: ["Python (Pandas, OOP)", "C++", "C", "Lua", "Dart dan Flutter"],
  },
  {
    group: "Game dan perangkat keras",
    items: ["Roblox Studio", "Arduino"],
  },
];
