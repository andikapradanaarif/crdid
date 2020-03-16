const logNews = [
  {
    date: "2020-03-02T17:00:00.000Z",
    activity: [
      {
        title:
          "Pengumuman Presiden Jokowi positif corona pertama di indonesia, 2 orang wanita, ibu dan anak",
        url:
          "https://nasional.kompas.com/read/2020/03/02/12002701/ini-pengumuman-lengkap-jokowi-soal-2-wni-positif-corona?page=2"
      },
      {
        title: "Profil 2 pasien pertama corona",
        url:
          "https://nasional.kompas.com/read/2020/03/03/06314981/fakta-lengkap-kasus-pertama-virus-corona-di-indonesia?page=all"
      }
    ]
  },
  {
    date: "2020-03-06T17:00:00.000Z",
    activity: [
      {
        title: "positif corona bertambah menjadi 4 kasus",
        desc:
          "Pasien ke 3 dan 4 masih memiliki hubungan dengan kasus 1 dan 2. Mereka meminta untuk tidak dibuka profilenya ke publik",
        url:
          "https://news.detik.com/berita/d-4931203/pasien-kasus-3-dan-4-corona-minta-tak-diumbar-identitasnya"
      }
    ]
  },
  {
    date: "2020-03-08T17:00:00.000Z",
    activity: [
      {
        title:
          "positif corona bertambah menjadi 6 kasus, tidak ada relasi dengan kasus sebelumnya",
        url:
          "https://www.liputan6.com/news/read/4196814/pasien-positif-virus-corona-di-indonesia-bertambah-jadi-6-orang"
      }
    ]
  },
  {
    date: "2020-03-09T15:54:35.205Z",
    activity: [
      {
        title:
          "positif corona bertambah menjadi 19 kasus, ada yang dirawat di jakarta dan di luar jakarta",
        url:
          "https://www.cnbcindonesia.com/news/20200309180128-4-143561/13-pasien-positif-corona-dirawat-di-jakarta-di-luar-jakarta"
      }
    ]
  },
  {
    date: "2020-03-10T15:54:35.205Z",
    activity: [
      {
        title: "positif corona bertambah menjadi 27 kasus",
        url:
          "https://www.cnbcindonesia.com/news/20200309180128-4-143561/13-pasien-positif-corona-dirawat-di-jakarta-di-luar-jakarta"
      },
      {
        title: "Pemerintah soal WNI Corona di Singapura: Biar Dirawat di Sana",
        url:
          "https://www.cnnindonesia.com/nasional/20200310185956-20-482247/pemerintah-soal-wni-corona-di-singapura-biar-dirawat-di-sana"
      }
    ]
  },
  {
    date: "2020-03-11T15:54:35.205Z",
    activity: [
      {
        title: "Dua Pasien Virus Corona Dinyatakan Sembuh dan Boleh Pulang",
        desc: `"Tadi malam pukul 02.00 WIB lewat sedikit, pasien identitas nomor 25 meninggal dunia," kata juru bicara pemerintah.
        Yuri mengatakan, pasien tersebut merupakan perempuan warga negara asing (WNA) berusia 53 tahun`,
        url:
          "https://nasional.kompas.com/read/2020/03/11/14235891/dua-pasien-virus-corona-dinyatakan-sembuh-dan-boleh-pulang"
      },
      {
        title: "Satu Pasien Corona di Indonesia Meninggal Dunia",
        desc: `Juru Bicara Pemerintah untuk Penanganan virus Corona Achmad Yurianto dalam konferensi pers di Istana Kepresidenan, Jakarta, Rabu (11/3/2020) mengatakan  dua pasien sudah sembuh.
        dua orang tersebut yakni pasien 06 dan pasien 14.`,
        url:
          "https://nasional.kompas.com/read/2020/03/11/13061741/breaking-news-satu-pasien-corona-di-indonesia-meninggal-dunia"
      },
      {
        title: "Kasus Positif corona bertambah 7 orang",
        desc: `"Hingga saat ini ada tambahan 7 pasien lagi dengan kondisi rata-rata sakit ringan sedang. Dan semuanya adalah imported case," kata Yurianto.`,
        url:
          "https://www.cnbcindonesia.com/news/20200311170046-4-144156/alert-pasien-positif-corona-nambah-7-lagi-total-ada-34"
      }
    ]
  },
  {
    date: "2020-03-12T15:54:35.205Z",
    activity: [
      {
        title:
          "Data Terbaru Corona Terkait Indonesia, 12 Maret 2020 Pukul 18.00 WIB",
        url:
          "https://news.detik.com/berita/d-4936570/data-terbaru-corona-terkait-indonesia-12-maret-2020-pukul-1800-wib/2"
      },
      {
        title: "RS Persahabatan Pulangkan Pasien 6 dan 14 yang Sembuh Corona",
        url:
          "https://www.cnnindonesia.com/nasional/20200312125338-20-482821/rs-persahabatan-pulangkan-pasien-6-dan-14-yang-sembuh-corona"
      },
      {
        title: "Total 3 Pasien di Indonesia Sembuh dari Corona",
        desc: `"Secara laboratorium dua kali kita lakukan pemeriksaan hasilnya negatif maka diputuskan ketiga pasien ini dinyatakan sembuh dan tidak membutuhkan lagi perawatan,"
         kata juru bicara pemerintah RI terkait COVID-19, Achmad Yurianto, di RSUP Persahabatan, Jakarta Timur, Kamis (12/3/2020)."`,
        url:
          "https://news.detik.com/berita/d-4936124/ini-data-3-pasien-di-indonesia-yang-sembuh-dari-corona"
      }
    ]
  },
  {
    date: "2020-03-13T15:54:35.205Z",
    activity: [
      {
        title:
          "Tambah 35 orang, total kasus corona 69 orang, 4 meninggal, 5 sembuh",
        url:
          "https://nasional.kontan.co.id/news/breaking-news-tambah-35-orang-total-terinfeksi-corona-69-orang-3-meninggal"
      },
      {
        title: "2 Pasien Suspect Virus Corona di RSPI Meninggal Dunia",
        desc:
          "Juru Bicara Pemerintah Untuk Penanganan Covid-19 (Corona) Achmad Yurianto mengatakan, kedua pasien tersebut semuanya perempuan, masing-masing berusia 57 tahun dan 37 tahun.",
        url:
          "https://www.ayobandung.com/read/2020/03/12/82416/2-pasien-suspect-virus-corona-di-rspi-meninggal-dunia"
      },
      {
        title: "Pasien Meninggal di RS Moewardi Solo Positif Virus Corona",
        desc:
          " pasien meninggal itu berstatus Pasien Dalam Pengawasan (PDP). Masuk ke ruang isolasi RSUD dr. Moewardi pada Minggu (8/3) lalu, dengan gejala awal menunjukkan terinfeksi Covid-19. Hanya 3 hari setelah masuk rumah sakit, pada Rabu (11/3), pasien itu dinyatakan meninggal dunia.",
        url:
          "https://jateng.idntimes.com/news/indonesia/sunariyah/pasien-meninggal-di-rs-moewardi-solo-positif-karena-virus-corona-regional-jateng"
      },
      {
        title:
          "1 Pasien Positif COVID-19 Melarikan Diri dari Isolasi RS Persahabatan",
        url:
          "https://www.idntimes.com/news/indonesia/aldzah-fatimah-aditya/breaking-1-pasien-positif-covid-19-melarikan-diri-dari-isolasi-rs-persahabatan/"
      }
    ]
  },
  {
    date: "2020-03-14T15:54:35.205Z",
    activity: [
      {
        title: "Update Corona 14 Maret: 96 Positif, 5 Meninggal, 8 Sembuh",
        url:
          "https://www.cnnindonesia.com/nasional/20200314160309-20-483417/update-corona-14-maret-96-positif-5-meninggal-8-sembuh"
      },
      {
        title: "Menhub Budi Karya Sumadi Positif Corona",
        url:
          "https://nasional.kompas.com/read/2020/03/14/20580251/breaking-news-menhub-budi-karya-sumadi-positif-corona"
      }
    ]
  },
  {
    date: "2020-03-15T15:54:35.205Z",
    activity: [
      {
        title: "21 Kasus Baru, Pasien Positif Corona Indonesia Jadi 117 Orang",
        desc: `"19 orang di Jakarta dan 2 di Jawa Tengah," kata Yurianto kepada wartawan, Minggu (15/3).`,

        url:
          "https://www.cnnindonesia.com/nasional/20200315133445-20-483573/21-kasus-baru-pasien-positif-corona-indonesia-jadi-117-orang"
      },
      {
        title: "Jokowi Imbau Masyarakat Bekerja, Belajar dan Ibadah di Rumah",
        url: "https://www.youtube.com/watch?v=xB1_Wfbd97s"
      }
    ]
  },
  {
    date: "2020-03-16T15:54:35.205Z",
    activity: [
      {
        title: "Kasus Positif Corona Bertambah 17 orang, Total 134 Pasien",
        desc: `Penambahan kasus sebanyak 17. Rinciannya, Jawa Barat 1, Banten 1, Jateng 1 dan DKI 14 pasien," demikian disampaikan oleh Juru Bicara Pemerintah untuk Covid-19 Achmad Yurianto`,
        url:
          "https://www.cnbcindonesia.com/news/20200316165218-4-145275/alert-ada-17-lagi-tambahan-positif-corona-total-134-pasien"
      },
      {
        title:
          "Kemenkes: Sekarang Pasien Positif Corona Bisa Diisolasi Mandiri di Rumah",
        url:
          "https://news.detik.com/berita/d-4941325/kemenkes-sekarang-pasien-positif-corona-bisa-diisolasi-mandiri-di-rumah"
      }
    ]
  }
];
export default logNews;
