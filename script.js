// ==========================================
// DATA SOAL
// ==========================================

const questions = [

  // =====================================================
  // 1–10
  // MANASIK HAJI & UMRAH
  // =====================================================

  {
    category: "Manasik Haji & Umrah",
    question: "Apa yang dimaksud dengan miqat?",
    options: [
      "Batas tempat atau waktu untuk memulai ihram",
      "Tempat untuk melempar jumrah",
      "Tempat untuk melaksanakan tawaf",
      "Tempat untuk melakukan tahallul"
    ],
    answer: 0,
    explanation:
      "Miqat merupakan batas tempat atau waktu yang ditentukan untuk memulai ihram."
  },

  {
    category: "Manasik Haji & Umrah",
    question: "Masjid Bir Ali atau Dzul Hulaifah merupakan miqat bagi jamaah yang datang dari arah?",
    options: [
      "Madinah",
      "Yaman",
      "Najd",
      "Irak"
    ],
    answer: 0,
    explanation:
      "Dzul Hulaifah, yang dikenal sebagai Bir Ali, merupakan miqat bagi jamaah yang datang dari arah Madinah."
  },

  {
    category: "Manasik Haji & Umrah",
    question: "Di antara berikut ini yang termasuk rukun haji adalah?",
    options: [
      "Mabit di Mina",
      "Wukuf di Arafah",
      "Mabit di Muzdalifah",
      "Tawaf wada"
    ],
    answer: 1,
    explanation:
      "Wukuf di Arafah termasuk rukun haji. Jika rukun haji ditinggalkan, hajinya tidak sah."
  },

  {
    category: "Manasik Haji & Umrah",
    question: "Apa konsekuensi umum meninggalkan wajib haji tanpa uzur syar'i?",
    options: [
      "Haji otomatis batal",
      "Tidak ada konsekuensi apa pun",
      "Haji tetap sah dan dikenai dam sesuai ketentuan",
      "Harus mengulang haji pada hari yang sama"
    ],
    answer: 2,
    explanation:
      "Dalam tuntunan manasik Kemenag, wajib haji yang ditinggalkan menyebabkan haji tetap sah tetapi terdapat kewajiban dam sesuai ketentuan."
  },

  {
    category: "Manasik Haji & Umrah",
    question: "Wukuf dalam ibadah haji dilaksanakan di?",
    options: [
      "Mina",
      "Muzdalifah",
      "Arafah",
      "Masjidil Haram"
    ],
    answer: 2,
    explanation:
      "Wukuf dilaksanakan di Arafah dan merupakan salah satu rukun haji."
  },

  {
    category: "Manasik Haji & Umrah",
    question: "Sa'i dilakukan antara?",
    options: [
      "Arafah dan Muzdalifah",
      "Safa dan Marwah",
      "Mina dan Arafah",
      "Ka'bah dan Hijr Ismail"
    ],
    answer: 1,
    explanation:
      "Sa'i merupakan berjalan atau berlari kecil antara bukit Safa dan Marwah sesuai ketentuan manasik."
  },

  {
    category: "Manasik Haji & Umrah",
    question: "Tawaf dilakukan dengan mengelilingi?",
    options: [
      "Ka'bah",
      "Mina",
      "Jabal Rahmah",
      "Masjid Nabawi"
    ],
    answer: 0,
    explanation:
      "Tawaf adalah mengelilingi Ka'bah sesuai ketentuan pelaksanaannya."
  },

  {
    category: "Manasik Haji & Umrah",
    question: "Salah satu wajib haji adalah mabit di?",
    options: [
      "Mina",
      "Masjid Nabawi",
      "Jabal Uhud",
      "Masjid Quba"
    ],
    answer: 0,
    explanation:
      "Mabit di Mina termasuk salah satu wajib haji."
  },

  {
    category: "Manasik Haji & Umrah",
    question: "Melontar jumrah dalam rangkaian haji meliputi?",
    options: [
      "Jumrah Ula, Wusta, dan Aqabah",
      "Jumrah Safa, Marwah, dan Aqabah",
      "Jumrah Arafah, Mina, dan Muzdalifah",
      "Jumrah Kubra, Sughra, dan Wusta"
    ],
    answer: 0,
    explanation:
      "Wajib haji mencakup melontar Jamrah Ula, Wusta, dan Aqabah."
  },

  {
    category: "Manasik Haji & Umrah",
    question: "Apa yang dimaksud dengan tahallul?",
    options: [
      "Memulai perjalanan menuju Arafah",
      "Mengakhiri keadaan ihram dengan mencukur atau memotong rambut sesuai ketentuan",
      "Mengelilingi Ka'bah tujuh kali",
      "Bermalam di Muzdalifah"
    ],
    answer: 1,
    explanation:
      "Tahallul berkaitan dengan mencukur atau memotong rambut sebagai bagian dari rangkaian ibadah haji atau umrah sesuai ketentuannya."
  },


  // =====================================================
  // 11–20
  // REGULASI & PENYELENGGARAAN HAJI
  // =====================================================

  {
    category: "Regulasi Haji",
    question: "Undang-Undang yang menjadi salah satu dasar utama penyelenggaraan ibadah haji dan umrah adalah?",
    options: [
      "UU Nomor 8 Tahun 2019",
      "UU Nomor 1 Tahun 2004",
      "UU Nomor 20 Tahun 2003",
      "UU Nomor 23 Tahun 2014"
    ],
    answer: 0,
    explanation:
      "UU Nomor 8 Tahun 2019 mengatur tentang Penyelenggaraan Ibadah Haji dan Umrah."
  },

  {
    category: "Regulasi Haji",
    question: "Salah satu tujuan penyelenggaraan ibadah haji adalah memberikan pembinaan, pelayanan, dan?",
    options: [
      "Pelindungan kepada jemaah",
      "Persaingan antarjemaah",
      "Promosi perjalanan wisata",
      "Penjualan perlengkapan"
    ],
    answer: 0,
    explanation:
      "Penyelenggaraan ibadah haji mencakup pembinaan, pelayanan, dan pelindungan kepada jemaah."
  },

  {
    category: "Regulasi Haji",
    question: "PPIH merupakan singkatan dari?",
    options: [
      "Petugas Pelayanan Ibadah Harian",
      "Petugas Penyelenggara Ibadah Haji",
      "Panitia Pelaksana Ibadah Haji",
      "Petugas Pengawas Ibadah Haji"
    ],
    answer: 1,
    explanation:
      "PPIH adalah singkatan dari Petugas Penyelenggara Ibadah Haji."
  },

  {
    category: "Regulasi Haji",
    question: "Secara umum, PPIH bertugas melaksanakan pembinaan, pelayanan, pelindungan, serta?",
    options: [
      "Pengendalian dan pengoordinasian operasional ibadah haji",
      "Penjualan paket wisata",
      "Pengelolaan hotel swasta",
      "Pengadaan perlengkapan pribadi jemaah"
    ],
    answer: 0,
    explanation:
      "Pedoman rekrutmen PPIH menyebut tugas PPIH mencakup pembinaan, pelayanan, pelindungan, serta pengendalian dan pengoordinasian operasional ibadah haji."
  },

  {
    category: "Regulasi Haji",
    question: "PPIH Kloter mendampingi jemaah terutama dalam lingkup?",
    options: [
      "Perjalanan kloter dari tanah air hingga kembali ke tanah air",
      "Pengelolaan perdagangan di Arab Saudi",
      "Pengelolaan visa seluruh negara",
      "Pengelolaan bandara internasional seluruh dunia"
    ],
    answer: 0,
    explanation:
      "PPIH Kloter menyertai dan mendampingi jemaah dalam perjalanan kloter sejak keberangkatan hingga kembali ke tanah air."
  },

  {
    category: "Regulasi Haji",
    question: "Dalam seleksi PPIH yang diberitakan Kemenag, CAT digunakan sebagai salah satu instrumen untuk?",
    options: [
      "Menilai kompetensi peserta secara objektif",
      "Menggantikan seluruh proses administrasi",
      "Menentukan hotel jemaah",
      "Mengurus paspor peserta"
    ],
    answer: 0,
    explanation:
      "CAT digunakan sebagai bagian dari proses seleksi untuk menilai kompetensi peserta secara objektif dan terukur."
  },

  {
    category: "Regulasi Haji",
    question: "Salah satu prinsip penting dalam rekrutmen PPIH adalah?",
    options: [
      "Tertib, transparan, dan akuntabel",
      "Tertutup dan tidak terdokumentasi",
      "Berdasarkan hubungan pribadi",
      "Tanpa persyaratan"
    ],
    answer: 0,
    explanation:
      "Pedoman rekrutmen PPIH menekankan proses rekrutmen yang tertib, transparan, dan akuntabel."
  },

  {
    category: "Regulasi Haji",
    question: "Untuk formasi pembimbing ibadah kloter, salah satu persyaratan yang disebut dalam pedoman rekrutmen adalah?",
    options: [
      "Memiliki sertifikat pembimbing manasik",
      "Memiliki usaha travel",
      "Memiliki hotel di Arab Saudi",
      "Memiliki perusahaan transportasi"
    ],
    answer: 0,
    explanation:
      "Persyaratan pembimbing ibadah kloter mencakup kepemilikan sertifikat pembimbing manasik."
  },

  {
    category: "Regulasi Haji",
    question: "Dalam pelayanan haji, prinsip yang paling tepat adalah?",
    options: [
      "Mengutamakan kepentingan petugas",
      "Mengutamakan kebutuhan dan keselamatan jemaah sesuai ketentuan",
      "Mendahulukan jemaah yang dikenal",
      "Memberikan pelayanan berdasarkan imbalan"
    ],
    answer: 1,
    explanation:
      "Petugas haji memiliki orientasi pelayanan sehingga kebutuhan, keselamatan, dan hak jemaah harus menjadi perhatian utama sesuai ketentuan."
  },

  {
    category: "Regulasi Haji",
    question: "Mengapa regulasi penting dipahami oleh calon petugas haji?",
    options: [
      "Agar petugas dapat bertindak sesuai kewenangan dan ketentuan",
      "Agar petugas bebas membuat aturan sendiri",
      "Agar petugas dapat mengabaikan SOP",
      "Agar petugas dapat memilih jemaah tertentu"
    ],
    answer: 0,
    explanation:
      "Pemahaman regulasi membantu petugas menjalankan tugas sesuai kewenangan, prosedur, dan ketentuan yang berlaku."
  },


  // =====================================================
  // 21–30
  // TUGAS & FUNGSI PETUGAS HAJI
  // =====================================================

  {
    category: "Tugas & Fungsi Petugas",
    question: "Sikap utama seorang petugas haji ketika menghadapi jemaah lansia adalah?",
    options: [
      "Terburu-buru agar pekerjaan cepat selesai",
      "Sabar, empatik, dan memberikan bantuan sesuai kebutuhan",
      "Mengabaikan karena dianggap memperlambat",
      "Meminta jemaah mengurus semuanya sendiri"
    ],
    answer: 1,
    explanation:
      "Pelayanan jemaah membutuhkan kesabaran, empati, dan perhatian terhadap kebutuhan khusus, terutama bagi lansia."
  },

  {
    category: "Tugas & Fungsi Petugas",
    question: "Jika jemaah tersesat di area masjid, tindakan awal petugas yang paling tepat adalah?",
    options: [
      "Meninggalkannya agar mencari sendiri",
      "Menenangkan, mengidentifikasi kebutuhannya, lalu membantu mengarahkan atau menghubungkan dengan layanan terkait",
      "Memarahinya",
      "Meminta jemaah lain mengambil alih tanpa koordinasi"
    ],
    answer: 1,
    explanation:
      "Petugas harus menenangkan jemaah, mengidentifikasi kebutuhan, dan memberikan bantuan atau koordinasi yang tepat."
  },

  {
    category: "Tugas & Fungsi Petugas",
    question: "Jika terjadi perubahan jadwal transportasi, petugas sebaiknya?",
    options: [
      "Menyebarkan informasi yang belum terverifikasi",
      "Memastikan informasi melalui jalur resmi lalu menyampaikan kepada jemaah",
      "Diam agar jemaah tidak bertanya",
      "Membuat jadwal sendiri"
    ],
    answer: 1,
    explanation:
      "Informasi perubahan layanan harus diverifikasi melalui jalur resmi agar jemaah menerima informasi yang benar."
  },

  {
    category: "Tugas & Fungsi Petugas",
    question: "Ketika dua jemaah berselisih, petugas sebaiknya?",
    options: [
      "Memihak salah satu",
      "Mendengarkan kedua pihak dan mencari penyelesaian secara tenang sesuai prosedur",
      "Meninggalkan lokasi",
      "Menyebarkan masalah kepada jemaah lain"
    ],
    answer: 1,
    explanation:
      "Petugas harus bersikap profesional, mendengarkan pihak terkait, dan mengupayakan penyelesaian yang adil dan kondusif."
  },

  {
    category: "Tugas & Fungsi Petugas",
    question: "Koordinasi antarpetugas diperlukan terutama untuk?",
    options: [
      "Menghindari duplikasi dan memastikan pelayanan berjalan terpadu",
      "Membatasi informasi kepada jemaah",
      "Mengurangi tanggung jawab petugas",
      "Menentukan siapa yang paling berkuasa"
    ],
    answer: 0,
    explanation:
      "Koordinasi membantu memastikan pelayanan berjalan terpadu, efektif, dan tidak terjadi tumpang tindih."
  },

  {
    category: "Tugas & Fungsi Petugas",
    question: "Jika petugas tidak mengetahui jawaban atas pertanyaan jemaah, tindakan paling tepat adalah?",
    options: [
      "Mengarang jawaban",
      "Mengatakan informasi akan dicek dan mencari sumber resmi",
      "Menyalahkan jemaah",
      "Memberikan informasi dari media sosial yang belum diverifikasi"
    ],
    answer: 1,
    explanation:
      "Petugas harus menghindari informasi yang tidak pasti dan mencari jawaban dari sumber atau pihak yang berwenang."
  },

  {
    category: "Tugas & Fungsi Petugas",
    question: "Dalam menjalankan tugas, petugas menerima uang dari jemaah sebagai imbalan khusus. Sikap yang paling tepat adalah?",
    options: [
      "Menerima karena dianggap ucapan terima kasih",
      "Menolak atau mengikuti ketentuan resmi mengenai pemberian tersebut",
      "Meminta jumlah yang lebih besar",
      "Menyembunyikan pemberian"
    ],
    answer: 1,
    explanation:
      "Petugas harus menjaga integritas dan menghindari konflik kepentingan serta mengikuti ketentuan yang berlaku."
  },

  {
    category: "Tugas & Fungsi Petugas",
    question: "Pelayanan yang baik kepada jemaah seharusnya diberikan berdasarkan?",
    options: [
      "Kedekatan pribadi",
      "Status sosial",
      "Kebutuhan dan hak jemaah sesuai ketentuan",
      "Besarnya pemberian"
    ],
    answer: 2,
    explanation:
      "Pelayanan publik harus profesional dan tidak diskriminatif, dengan memperhatikan kebutuhan dan hak jemaah."
  },

  {
    category: "Tugas & Fungsi Petugas",
    question: "Jika menemukan barang milik jemaah yang tertinggal, petugas sebaiknya?",
    options: [
      "Menyimpannya untuk diri sendiri",
      "Mengikuti prosedur barang hilang dan menyerahkannya kepada pihak yang berwenang",
      "Membagikannya kepada jemaah lain",
      "Meninggalkannya"
    ],
    answer: 1,
    explanation:
      "Barang temuan harus ditangani sesuai prosedur agar dapat dikembalikan kepada pemiliknya."
  },

  {
    category: "Tugas & Fungsi Petugas",
    question: "Mengapa kemampuan komunikasi penting bagi petugas haji?",
    options: [
      "Agar petugas dapat memberikan informasi dengan jelas dan menangani kebutuhan jemaah",
      "Agar petugas dapat berbicara lebih banyak",
      "Agar petugas dapat menghindari koordinasi",
      "Agar petugas dapat memerintah jemaah sesuka hati"
    ],
    answer: 0,
    explanation:
      "Komunikasi yang baik membantu petugas menyampaikan informasi secara jelas, mendengar kebutuhan jemaah, dan melakukan koordinasi."
  },


  // =====================================================
  // 31–40
  // WAWASAN KEBANGSAAN
  // =====================================================

  {
    category: "Wawasan Kebangsaan",
    question: "Dasar negara Republik Indonesia adalah?",
    options: [
      "Pancasila",
      "UUD 1945",
      "Bhinneka Tunggal Ika",
      "NKRI"
    ],
    answer: 0,
    explanation:
      "Pancasila merupakan dasar negara Republik Indonesia."
  },

  {
    category: "Wawasan Kebangsaan",
    question: "Semboyan Bhinneka Tunggal Ika mengandung makna?",
    options: [
      "Berbeda-beda tetapi tetap satu",
      "Semua harus sama",
      "Perbedaan harus dihilangkan",
      "Setiap kelompok berjalan sendiri"
    ],
    answer: 0,
    explanation:
      "Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu."
  },

  {
    category: "Wawasan Kebangsaan",
    question: "Bentuk Negara Kesatuan Republik Indonesia adalah?",
    options: [
      "Negara kesatuan",
      "Negara serikat",
      "Konfederasi",
      "Monarki"
    ],
    answer: 0,
    explanation:
      "Indonesia merupakan Negara Kesatuan Republik Indonesia."
  },

  {
    category: "Wawasan Kebangsaan",
    question: "Sikap yang paling mencerminkan persatuan dalam keberagaman adalah?",
    options: [
      "Mengutamakan kelompok sendiri",
      "Menghormati perbedaan dan bekerja sama untuk kepentingan bersama",
      "Menolak semua perbedaan",
      "Menganggap kelompok sendiri paling benar dalam semua urusan sosial"
    ],
    answer: 1,
    explanation:
      "Persatuan dalam keberagaman diwujudkan melalui sikap saling menghormati dan kerja sama untuk kepentingan bersama."
  },

  {
    category: "Wawasan Kebangsaan",
    question: "Ketika terjadi perbedaan pendapat dalam tim, tindakan yang paling sesuai dengan semangat musyawarah adalah?",
    options: [
      "Memaksakan pendapat",
      "Mencari titik temu melalui pembahasan",
      "Meninggalkan rapat",
      "Mengabaikan pendapat anggota lain"
    ],
    answer: 1,
    explanation:
      "Musyawarah mengedepankan pembahasan untuk mencapai keputusan yang dapat diterima bersama."
  },

  {
    category: "Wawasan Kebangsaan",
    question: "Contoh penerapan cinta tanah air bagi petugas haji adalah?",
    options: [
      "Menjaga nama baik dan memberikan pelayanan profesional sebagai bagian dari representasi Indonesia",
      "Mengutamakan kepentingan pribadi",
      "Mengabaikan aturan",
      "Menyebarkan konflik antarjemaah"
    ],
    answer: 0,
    explanation:
      "Petugas yang melayani jemaah di dalam maupun luar negeri membawa nama baik Indonesia sehingga profesionalitas dan integritas penting dijaga."
  },

  {
    category: "Wawasan Kebangsaan",
    question: "Menghormati pemeluk agama lain dalam kehidupan bermasyarakat merupakan contoh?",
    options: [
      "Intoleransi",
      "Toleransi",
      "Diskriminasi",
      "Eksklusivisme sosial"
    ],
    answer: 1,
    explanation:
      "Toleransi berarti menghargai perbedaan dan memberikan ruang bagi orang lain dalam kehidupan bersama sesuai ketentuan."
  },

  {
    category: "Wawasan Kebangsaan",
    question: "Dalam konteks pelayanan publik, diskriminasi berdasarkan suku, agama, atau latar belakang pribadi seharusnya?",
    options: [
      "Diperbolehkan",
      "Dihindari",
      "Menjadi prioritas",
      "Dijadikan dasar pemberian layanan"
    ],
    answer: 1,
    explanation:
      "Pelayanan publik harus dilakukan secara profesional dan adil tanpa diskriminasi yang tidak dibenarkan."
  },

  {
    category: "Wawasan Kebangsaan",
    question: "Salah satu cara menjaga persatuan dalam kelompok kerja adalah?",
    options: [
      "Menyebarkan informasi yang belum pasti",
      "Membangun komunikasi dan saling menghormati",
      "Mengutamakan konflik",
      "Membentuk kelompok eksklusif"
    ],
    answer: 1,
    explanation:
      "Komunikasi, saling menghormati, dan kerja sama membantu menjaga persatuan dalam tim."
  },

  {
    category: "Wawasan Kebangsaan",
    question: "Sikap yang tepat terhadap keberagaman budaya Indonesia adalah?",
    options: [
      "Menganggap budaya sendiri satu-satunya yang benar",
      "Menghargai keberagaman sebagai bagian dari kehidupan bangsa",
      "Menolak budaya daerah lain",
      "Menghilangkan seluruh tradisi daerah"
    ],
    answer: 1,
    explanation:
      "Keberagaman budaya merupakan bagian dari kehidupan bangsa Indonesia dan perlu dihargai selama tidak bertentangan dengan ketentuan yang berlaku."
  },


  // =====================================================
  // 41–45
  // MODERASI BERAGAMA
  // =====================================================

  {
    category: "Moderasi Beragama",
    question: "Salah satu indikator utama moderasi beragama adalah?",
    options: [
      "Komitmen kebangsaan",
      "Fanatisme kelompok",
      "Kekerasan",
      "Eksklusivisme"
    ],
    answer: 0,
    explanation:
      "Kementerian Agama mengenalkan empat indikator moderasi beragama: komitmen kebangsaan, toleransi, anti-kekerasan, dan akomodatif terhadap kebudayaan lokal."
  },

  {
    category: "Moderasi Beragama",
    question: "Sikap moderat dalam beragama secara umum berarti?",
    options: [
      "Bersikap ekstrem",
      "Mengambil posisi yang adil, seimbang, dan tidak berlebihan",
      "Tidak menjalankan agama",
      "Mengikuti semua pendapat tanpa pertimbangan"
    ],
    answer: 1,
    explanation:
      "Moderasi beragama menekankan sikap yang adil, seimbang, dan menghindari sikap ekstrem."
  },

  {
    category: "Moderasi Beragama",
    question: "Ketika menghadapi perbedaan pendapat keagamaan di antara jemaah, petugas sebaiknya?",
    options: [
      "Memprovokasi perdebatan",
      "Menghormati perbedaan dan merujuk pada ketentuan atau pembimbing yang berwenang",
      "Memaksa semua jemaah mengikuti pendapat pribadi",
      "Menghentikan komunikasi"
    ],
    answer: 1,
    explanation:
      "Petugas perlu menjaga suasana kondusif, menghormati perbedaan, dan merujuk persoalan manasik kepada sumber atau pembimbing yang berwenang."
  },

  {
    category: "Moderasi Beragama",
    question: "Sikap anti-kekerasan dalam moderasi beragama berarti?",
    options: [
      "Menyelesaikan perbedaan dengan ancaman",
      "Menghindari kekerasan dan mengutamakan penyelesaian secara damai",
      "Membalas penghinaan",
      "Membenarkan kekerasan atas nama kelompok"
    ],
    answer: 1,
    explanation:
      "Anti-kekerasan merupakan salah satu indikator moderasi beragama dan mendorong penyelesaian persoalan secara damai."
  },

  {
    category: "Moderasi Beragama",
    question: "Sikap akomodatif terhadap kebudayaan lokal berarti?",
    options: [
      "Menghargai budaya lokal secara proporsional selama tidak bertentangan dengan prinsip yang berlaku",
      "Menganggap semua budaya salah",
      "Menghapus semua budaya lokal",
      "Memaksakan satu budaya kepada semua orang"
    ],
    answer: 0,
    explanation:
      "Akomodatif terhadap kebudayaan lokal merupakan salah satu indikator moderasi beragama, dengan tetap mempertimbangkan prinsip dan ketentuan yang berlaku."
  },


  // =====================================================
  // 46–50
  // PSIKOLOGI, INTEGRITAS & PELAYANAN
  // =====================================================

  {
    category: "Psikologi & Integritas",
    question: "Ketika menghadapi tekanan pekerjaan yang tinggi, sikap petugas yang paling tepat adalah?",
    options: [
      "Panik dan menyalahkan orang lain",
      "Tetap tenang, menentukan prioritas, dan berkoordinasi",
      "Mengabaikan tugas",
      "Meninggalkan tanggung jawab"
    ],
    answer: 1,
    explanation:
      "Kemampuan mengelola tekanan, menentukan prioritas, dan berkoordinasi merupakan bagian penting dari profesionalitas petugas."
  },

  {
    category: "Psikologi & Integritas",
    question: "Jika teman satu tim melakukan kesalahan yang berpotensi merugikan jemaah, tindakan paling tepat adalah?",
    options: [
      "Menyembunyikannya",
      "Melaporkan atau mengomunikasikannya melalui jalur yang tepat dan membantu memperbaiki keadaan",
      "Menyebarkannya di media sosial",
      "Membiarkannya"
    ],
    answer: 1,
    explanation:
      "Integritas mengharuskan petugas mengutamakan kepentingan jemaah dan menyelesaikan masalah melalui jalur yang tepat."
  },

  {
    category: "Psikologi & Integritas",
    question: "Seorang jemaah marah karena merasa tidak mendapatkan informasi yang cukup. Respons awal petugas sebaiknya?",
    options: [
      "Membalas dengan nada tinggi",
      "Mendengarkan keluhan dengan tenang lalu memberikan penjelasan yang terverifikasi",
      "Meninggalkan jemaah",
      "Menyalahkan petugas lain di depan jemaah"
    ],
    answer: 1,
    explanation:
      "Petugas perlu menunjukkan empati, mendengarkan keluhan, kemudian memberikan informasi yang benar dan terverifikasi."
  },

  {
    category: "Psikologi & Integritas",
    question: "Jika seorang petugas mengetahui bahwa data laporan tidak sesuai kenyataan, tindakan yang paling berintegritas adalah?",
    options: [
      "Membiarkannya",
      "Mengubah data agar terlihat baik",
      "Melaporkan dan memperbaiki data melalui prosedur yang benar",
      "Menghapus laporan"
    ],
    answer: 2,
    explanation:
      "Integritas menuntut kejujuran dan ketepatan pelaporan. Ketidaksesuaian harus ditangani melalui prosedur yang benar."
  },

  {
    category: "Psikologi & Integritas",
    question: "Manakah sikap yang paling menggambarkan pelayanan prima seorang petugas haji?",
    options: [
      "Cepat tetapi tidak peduli",
      "Ramah, responsif, bertanggung jawab, dan sesuai prosedur",
      "Hanya melayani orang yang dikenal",
      "Mengutamakan kepentingan pribadi"
    ],
    answer: 1,
    explanation:
      "Pelayanan prima membutuhkan keramahan, responsivitas, tanggung jawab, dan kepatuhan terhadap prosedur."
  }

];
// ==========================================
// VARIABEL UTAMA
// ==========================================

let currentQuestion = 0;

let answers = [];

let doubtful = [];

let timeLeft = 90 * 60;

let submitted = false;


// ==========================================
// MENAMPILKAN SOAL
// ==========================================

function showQuestion() {

  if (submitted) return;

  const q = questions[currentQuestion];

  // Nomor soal
  const questionNumber =
    document.getElementById("questionNumber");

  if (questionNumber) {

    questionNumber.textContent =
      `Soal ke-${currentQuestion + 1} dari ${questions.length}`;

  }


  // Kategori
  const category =
    document.querySelector(".category");

  if (category && q.category) {

    category.textContent = q.category;

  }


  // Pertanyaan
  const question =
    document.getElementById("question");

  if (question) {

    question.textContent = q.question;

  }


  // Pilihan jawaban
  const options =
    document.getElementById("options");

  if (!options) return;

  options.innerHTML = "";


  q.options.forEach((option, index) => {

    const button =
      document.createElement("button");

    button.className = "option";

    button.innerHTML = `
      <span class="option-letter">
        ${String.fromCharCode(65 + index)}
      </span>
      ${option}
    `;


    // Jika sudah pernah dijawab
    if (answers[currentQuestion] === index) {

      button.classList.add("selected");

    }


    // Klik jawaban
    button.onclick = function() {

      if (submitted) return;

      answers[currentQuestion] = index;

      saveProgress();

      showQuestion();

    };


    options.appendChild(button);

  });


  updateNavigation();

  updateDoubtButton();

}


// ==========================================
// SOAL SEBELUMNYA
// ==========================================

function previousQuestion() {

  if (currentQuestion > 0) {

    currentQuestion--;

    showQuestion();

  }

}


// ==========================================
// SOAL BERIKUTNYA
// ==========================================

function nextQuestion() {

  if (currentQuestion < questions.length - 1) {

    currentQuestion++;

    showQuestion();

  } else {

    finishTryout();

  }

}


// ==========================================
// RAGU-RAGU
// ==========================================

function toggleDoubt() {

  if (submitted) return;

  const index =
    doubtful.indexOf(currentQuestion);


  if (index === -1) {

    doubtful.push(currentQuestion);

  } else {

    doubtful.splice(index, 1);

  }


  saveProgress();

  updateNavigation();

  updateDoubtButton();

}


// ==========================================
// UPDATE TOMBOL RAGU-RAGU
// ==========================================

function updateDoubtButton() {

  const doubtButton =
    document.querySelector(".doubt");

  if (!doubtButton) return;


  if (doubtful.includes(currentQuestion)) {

    doubtButton.textContent = "✓ Ragu-ragu";

  } else {

    doubtButton.textContent = "Ragu-ragu";

  }

}


// ==========================================
// NAVIGASI SOAL
// ==========================================

function updateNavigation() {

  const container =
    document.getElementById("navigationButtons");

  if (!container) return;

  container.innerHTML = "";


  questions.forEach((q, index) => {

    const button =
      document.createElement("button");

    button.textContent = index + 1;

    button.className = "nav-button";


    // Soal sedang aktif
    if (index === currentQuestion) {

      button.classList.add("active");

    }


    // Soal sudah dijawab
    if (answers[index] !== undefined) {

      button.classList.add("answered");

    }


    // Soal ragu-ragu
    if (doubtful.includes(index)) {

      button.classList.add("doubtful");

    }


    // Klik nomor soal
    button.onclick = function() {

      if (submitted) return;

      currentQuestion = index;

      showQuestion();

    };


    container.appendChild(button);

  });

}


// ==========================================
// TIMER
// ==========================================

function updateTimer() {

  const timerElement =
    document.getElementById("timer");

  if (!timerElement) return;


  let hours =
    Math.floor(timeLeft / 3600);

  let minutes =
    Math.floor((timeLeft % 3600) / 60);

  let seconds =
    timeLeft % 60;


  timerElement.textContent =

    String(hours).padStart(2, "0") + ":" +

    String(minutes).padStart(2, "0") + ":" +

    String(seconds).padStart(2, "0");


  // Jika waktu habis
  if (timeLeft <= 0) {

    finishTryout();

    return;

  }


  timeLeft--;

}


// Jalankan timer langsung
updateTimer();


// Jalankan setiap 1 detik
setInterval(updateTimer, 1000);


// ==========================================
// HITUNG NILAI
// ==========================================

function calculateScore() {

  let correct = 0;


  questions.forEach((q, index) => {

    if (answers[index] === q.answer) {

      correct++;

    }

  });


  const total =
    questions.length;


  const score =
    Math.round((correct / total) * 100);


  return {
    correct: correct,
    wrong: total - correct,
    total: total,
    score: score
  };

}


// ==========================================
// SELESAIKAN TRYOUT
// ==========================================
function finishTryout() {

  if (submitted) return;

  submitted = true;

  const result = calculateScore();

  localStorage.removeItem("tryoutProgress");

  showResult(result);
}
// ==========================================
// HALAMAN HASIL
// ==========================================

function showResult(result) {

  document.body.innerHTML = `

    <div class="result-page">

      <div class="result-card">

        <div class="result-icon">
          🎉
        </div>

        <h1>Tryout Selesai!</h1>

        <p class="result-subtitle">
          Berikut hasil pengerjaan kamu
        </p>


        <div class="score-box">

          <div class="score-label">
            NILAI
          </div>

          <div class="score">
            ${result.score}
          </div>

          <div class="score-total">
            dari 100
          </div>

        </div>


        <div class="result-grid">

          <div class="result-item">
            <div class="result-number">
              ${result.correct}
            </div>

            <div class="result-label">
              Jawaban Benar
            </div>
          </div>


          <div class="result-item">
            <div class="result-number">
              ${result.wrong}
            </div>

            <div class="result-label">
              Jawaban Salah
            </div>
          </div>


          <div class="result-item">
            <div class="result-number">
              ${result.total}
            </div>

            <div class="result-label">
              Total Soal
            </div>
          </div>


          <div class="result-item">
            <div class="result-number">
              ${Math.round(
                (result.correct / result.total) * 100
              )}%
            </div>

            <div class="result-label">
              Persentase
            </div>
          </div>

        </div>


        <div class="result-actions">

          <button
            class="retry-button"
            onclick="location.reload()"
          >
            🔄 Ulangi Tryout
          </button>


          <button
            class="review-button"
            onclick="reviewAnswers()"
          >
            📖 Lihat Pembahasan
          </button>

        </div>

      </div>

    </div>

  `;
}
// ==========================================
// PEMBAHASAN
// ==========================================

function reviewAnswers() {

  let html = `

    <div class="review-page">

      <h1>Pembahasan Tryout</h1>

      <p class="review-subtitle">
        Periksa jawaban dan pembahasan setiap soal
      </p>

  `;


  questions.forEach((q, index) => {

    const userAnswer =
      answers[index];

    const isCorrect =
      userAnswer === q.answer;


    html += `

      <div class="review-card">

        <div class="review-number">
          Soal ${index + 1}
        </div>

        <h3>
          ${q.question}
        </h3>


        <div class="review-answer">

          <strong>
            Jawaban kamu:
          </strong>

          ${
            userAnswer !== undefined
              ? q.options[userAnswer]
              : "Tidak dijawab"
          }

        </div>


        <div class="review-correct">

          <strong>
            Jawaban benar:
          </strong>

          ${q.options[q.answer]}

        </div>


        <div class="review-status">

          ${
            isCorrect
              ? "✅ Jawaban Benar"
              : "❌ Jawaban Salah"
          }
          <div class="review-explanation">

  <strong>Pembahasan:</strong>

  <p>
    ${q.explanation || "Pembahasan belum tersedia."}
  </p>

</div>

        </div>

      </div>

    `;

  });


  html += `

      <button
        class="back-result-button"
        onclick="location.reload()"
      >
        ← Kembali
      </button>

    </div>

  `;


  document.body.innerHTML = html;
}


// ==========================================
// SIMPAN PROGRES
// ==========================================

function saveProgress() {

  const progress = {

    currentQuestion: currentQuestion,

    answers: answers,

    doubtful: doubtful,

    timeLeft: timeLeft

  };


  localStorage.setItem(
    "tryoutProgress",
    JSON.stringify(progress)
  );

}


// ==========================================
// LOAD PROGRES
// ==========================================

function loadProgress() {

  const saved =
    localStorage.getItem("tryoutProgress");


  if (!saved) return;


  try {

    const progress =
      JSON.parse(saved);


    if (progress.answers) {

      answers = progress.answers;

    }


    if (progress.doubtful) {

      doubtful = progress.doubtful;

    }


    if (
      progress.currentQuestion !== undefined &&
      progress.currentQuestion < questions.length
    ) {

      currentQuestion =
        progress.currentQuestion;

    }


    if (progress.timeLeft !== undefined) {

      timeLeft =
        progress.timeLeft;

    }

  } catch (error) {

    console.log(
      "Gagal membaca progres."
    );

  }

}


// ==========================================
// MULAI
// ==========================================

loadProgress();

showQuestion();
/* =================================
   PINDAH DARI HOME KE CAT
================================= */

function startTryout() {

  document.getElementById("homePage").style.display = "none";

  document.getElementById("loginPage").style.display = "flex";

}
function buyTryout() {

  alert(
    "Fitur pembelian sedang dipersiapkan.\n\n" +
    "Nantinya tombol ini akan mengarahkan " +
    "peserta ke halaman pembayaran."
  );

}
function startTryoutFromDashboard() {

  document.getElementById("dashboardPage").style.display = "none";

  document.getElementById("catPage").style.display = "block";

  currentQuestion = 0;

  showQuestion();

}


function backToHome() {

  localStorage.removeItem("tryoutLoggedIn");

  document.getElementById("dashboardPage").style.display = "none";

  document.getElementById("catPage").style.display = "none";

  document.getElementById("homePage").style.display = "block";

}
/* =================================
   LOGIN
================================= */

function loginUser(event) {

  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedUser =
    JSON.parse(localStorage.getItem("tryoutUser"));

  if (!savedUser) {

    alert("Akun belum ditemukan. Silakan daftar terlebih dahulu.");

    return;

  }

  if (
    email !== savedUser.email ||
    password !== savedUser.password
  ) {

    alert("Email atau password salah.");

    return;

  }

  localStorage.setItem(
    "tryoutLoggedIn",
    "true"
  );

  showDashboard();

}
/* =================================
   REGISTER
================================= */

function registerUser(event) {

  event.preventDefault();

  const name =
    document.getElementById("registerName").value;

  const email =
    document.getElementById("registerEmail").value;

  const password =
    document.getElementById("registerPassword").value;


  const user = {
    name: name,
    email: email,
    password: password
  };


  localStorage.setItem(
    "tryoutUser",
    JSON.stringify(user)
  );


  localStorage.setItem(
    "tryoutLoggedIn",
    "true"
  );


  alert("Akun berhasil dibuat.");

  showDashboard();

}
function showRegister() {

  document.getElementById("loginPage").style.display = "none";

  document.getElementById("registerPage").style.display = "flex";

}


function showLogin() {

  document.getElementById("registerPage").style.display = "none";

  document.getElementById("loginPage").style.display = "flex";

}


function showDashboard() {

  document.getElementById("homePage").style.display = "none";

  document.getElementById("loginPage").style.display = "none";

  document.getElementById("registerPage").style.display = "none";

  document.getElementById("purchasePage").style.display = "none";

  document.getElementById("catPage").style.display = "none";

  document.getElementById("dashboardPage").style.display = "block";

  checkPurchaseStatus();

}

function backToHomeFromLogin() {

  document.getElementById("loginPage").style.display = "none";

  document.getElementById("homePage").style.display = "block";

}
/* =================================
   SISTEM AKSES TRYOUT
================================= */

function checkPurchaseStatus() {

  const purchased =
    localStorage.getItem("tryoutPurchased") === "true";

  const status =
    document.getElementById("accessStatus");

  const button =
    document.getElementById("dashboardActionButton");


  if (!status || !button) {
    return;
  }


  if (purchased) {

    status.className = "access-status";

    status.innerHTML =
      '<span class="status-dot"></span>' +
      ' Akses aktif';

    button.className = "dashboard-start";

    button.innerHTML =
      "Mulai Tryout →";

  } else {

    status.className =
      "access-status access-locked";

    status.innerHTML =
      '<span class="status-dot"></span>' +
      ' Belum membeli akses';

    button.className =
      "dashboard-buy";

    button.innerHTML =
      "Beli Akses";

  }

}
function handleTryoutAccess() {

  const purchased =
    localStorage.getItem("tryoutPurchased") === "true";


  if (purchased) {

    startTryoutFromDashboard();

  } else {

    showPurchasePage();

  }

}
function showPurchasePage() {

  document.getElementById("homePage").style.display = "none";

  document.getElementById("loginPage").style.display = "none";

  document.getElementById("registerPage").style.display = "none";

  document.getElementById("dashboardPage").style.display = "none";

  document.getElementById("catPage").style.display = "none";

  document.getElementById("purchasePage").style.display = "flex";

}
function simulatePurchase() {

  const confirmation =
    confirm(
      "SIMULASI PEMBELIAN\n\n" +
      "Tryout PPIH 2027\n" +
      "Harga: Rp49.000\n\n" +
      "Apakah pembayaran berhasil?"
    );


  if (confirmation) {

    localStorage.setItem(
      "tryoutPurchased",
      "true"
    );

    alert(
      "Pembelian berhasil!\n\n" +
      "Akses tryout sekarang aktif."
    );

    showDashboard();

    checkPurchaseStatus();

  }

}