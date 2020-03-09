import React from "react";
import { DescriptionWrapper } from "./style";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Index = props => {
  return (
    <DescriptionWrapper>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Apa itu COVID-19 ?" key="1">
          <p>
            <strong>Virus Corona atau 2019 Novel Coronavirus</strong>
            <br /> adalah virus yang menyerang sistem pernapasan. Penyakit
            karena infeksi virus ini disebut COVID-19. Virus Corona bisa
            menyebabkan gangguan pada sistem pernapasan, pneumonia akut, sampai
            kematian.
          </p>
        </TabPane>
        <TabPane tab="Gejala" key="2">
          <p>
            Infeksi virus Corona atau COVID-19 bisa menyebabkan penderitanya
            mengalami gejala flu, seperti hidung berair dan meler, sakit kepala,
            batuk, nyeri tenggorokan, dan demam; atau gejala penyakit infeksi
            pernapasan berat, seperti demam tinggi, batuk berdahak bahkan
            berdarah, sesak napas, dan nyeri dada.
          </p>
          <p>
            Namun, secara umum ada 3 gejala umum yang bisa menandakan seseorang
            terinfeksi virus Corona, yaitu:
            <ul>
              <li>Demam</li>
              <li>Batuk</li>
              <li>Sesak napas</li>
            </ul>
          </p>
          <p>
            Menurut penelitian, gejala COVID-19 muncul dalam waktu 2 hari sampai
            2 minggu setelah terpapar virus Corona.
          </p>
        </TabPane>
        <TabPane tab="Cara Pencegahan" key="3">
          <ul>
            <li>
              Hindari bepergian ke Cina atau ke negara lain yang telah ditemukan
              adanya penularan virus Corona.
            </li>
            <li>
              Gunakan masker saat beraktivitas di luar ruangan, terutama di
              tempat umum atau keramaian.
            </li>
            <li>
              Rutin mencuci tangan dengan air dan sabun atau hand sanitizer yang
              mengandung alkohol setelah beraktivitas di luar ruangan.
            </li>
            <li>
              Hindari kontak dengan hewan, terutama hewan liar. Bila terjadi
              kontak dengan hewan, cuci tangan setelahnya.
            </li>
            <li>Masak daging sampai benar-benar matang sebelum dikonsumsi.</li>
            <li>
              Tutup mulut dan hidung dengan tisu saat batuk atau bersin,
              kemudian buang tisu ke tempat sampah.
            </li>
            <li>
              Jangan menyentuh mata, mulut, dan hidung sebelum mencuci tangan.
            </li>
            <li>Hindari berdekatan dengan seseorang yang sedang sakit.</li>
            <li>
              Jaga kebersihan benda yang sering disentuh dan kebersihan
              lingkungan.
            </li>
          </ul>
        </TabPane>
      </Tabs>
      ,
    </DescriptionWrapper>
  );
};

export default Index;
