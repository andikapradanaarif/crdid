//
// sex
// male = 2 , female = 1 , non gender 0

const patient = [
  {
    id: 1,
    sex: 1,
    age: 31,
    date: "2020-03-02T17:00:00.000Z",
    city: "Jakarta",
    url:
      "https://nasional.kompas.com/read/2020/03/03/06314981/fakta-lengkap-kasus-pertama-virus-corona-di-indonesia?page=all"
  },
  {
    id: 2,
    sex: 1,
    age: 64,
    date: "2020-03-02T17:00:00.000Z",
    city: "Jakarta",
    url:
      "https://nasional.kompas.com/read/2020/03/03/06314981/fakta-lengkap-kasus-pertama-virus-corona-di-indonesia?page=all"
  },
  {
    id: 3,
    sex: 0,
    age: 33,
    date: "2020-03-06T17:00:00.000Z",
    city: "Jakarta",
    url:
      "https://news.detik.com/berita/d-4931203/pasien-kasus-3-dan-4-corona-minta-tak-diumbar-identitasnya"
  },
  {
    id: 4,
    sex: 0,
    age: 34,
    date: "2020-03-06T17:00:00.000Z",
    city: "Jakarta",
    url:
      "https://news.detik.com/berita/d-4931203/pasien-kasus-3-dan-4-corona-minta-tak-diumbar-identitasnya"
  },
  {
    id: 5,
    sex: 2,
    age: 55,
    date: "2020-03-08T17:00:00.000Z",
    city: "Jakarta",
    url:
      "https://www.liputan6.com/news/read/4196814/pasien-positif-virus-corona-di-indonesia-bertambah-jadi-6-orang"
  },
  {
    id: 6,
    sex: 2,
    age: 36,
    date: "2020-03-08T17:00:00.000Z",
    city: "Jakarta",
    url:
      "https://www.liputan6.com/news/read/4196814/pasien-positif-virus-corona-di-indonesia-bertambah-jadi-6-orang"
  },
  {
    id: 7,
    sex: 1,
    age: 59,
    date: "2020-03-09T15:54:35.205Z",
    city: "-",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 8,
    sex: 2,
    age: 56,
    date: "2020-03-09T15:54:35.205Z",
    city: "-",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 9,
    sex: 1,
    age: 55,
    city: "-",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 10,
    sex: 2,
    age: 29,
    city: "-",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 11,
    sex: 1,
    age: 54,
    city: "jakarta",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 12,
    sex: 2,
    age: 31,
    city: "jakarta",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 13,
    sex: 1,
    age: 16,
    city: "jakarta",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 14,
    sex: 2,
    age: 50,
    city: "-",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 15,
    sex: 1,
    age: 43,
    city: "-",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 16,
    sex: 1,
    age: 17,
    city: "-",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 17,
    sex: 2,
    age: 56,
    city: "-",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 18,
    sex: 2,
    age: 55,
    city: "-",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 19,
    sex: 2,
    age: 40,
    city: "-",
    date: "2020-03-09T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200309172719-20-481849/pasien-positif-corona-di-indonesia-bertambah-jadi-19-orang"
  },
  {
    id: 20,
    sex: 1,
    age: 70,
    city: "jakarta",
    date: "2020-03-10T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200310175557-20-482202/jumlah-bertambah-27-pasien-di-indonesia-positif-corona"
  },
  {
    id: 21,
    sex: 1,
    age: 46,
    city: "jakarta",
    date: "2020-03-10T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200310175557-20-482202/jumlah-bertambah-27-pasien-di-indonesia-positif-corona"
  },
  {
    id: 22,
    sex: 1,
    age: 36,
    city: "-",
    date: "2020-03-10T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200310175557-20-482202/jumlah-bertambah-27-pasien-di-indonesia-positif-corona"
  },
  {
    id: 23,
    sex: 1,
    age: 73,
    city: "-",
    date: "2020-03-10T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200310175557-20-482202/jumlah-bertambah-27-pasien-di-indonesia-positif-corona"
  },
  {
    id: 24,
    sex: 2,
    age: 46,
    city: "-",
    date: "2020-03-10T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200310175557-20-482202/jumlah-bertambah-27-pasien-di-indonesia-positif-corona"
  },
  {
    id: 25,
    sex: 1,
    age: 53,
    city: "-",
    date: "2020-03-10T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200310175557-20-482202/jumlah-bertambah-27-pasien-di-indonesia-positif-corona"
  },
  {
    id: 26,
    sex: 2,
    age: 46,
    city: "-",
    date: "2020-03-10T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200310175557-20-482202/jumlah-bertambah-27-pasien-di-indonesia-positif-corona"
  },
  {
    id: 27,
    sex: 2,
    age: 33,
    city: "-",
    date: "2020-03-10T15:54:35.205Z",
    url:
      "https://www.cnnindonesia.com/nasional/20200310175557-20-482202/jumlah-bertambah-27-pasien-di-indonesia-positif-corona"
  }
];

export default patient;
