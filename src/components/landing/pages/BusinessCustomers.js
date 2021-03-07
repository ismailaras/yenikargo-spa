import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import Footer from "../Footer";
import Navi from "../Navi";

const internetMagazine = [
  {
    name:
      "BAGLAMALARI SÜRƏTLİ  TƏHVİL VERMƏ XİDMƏTİNDƏN YARARLANMAQ ÜÇÜN QABAQCADAN BAĞLAMANIN ÜZƏRİNƏ TƏHVİL ALACAQ MÜŞTƏRİNİN ADİNİ, MOBİL NÖMRƏSİNİ VƏ CATDİRİLMA EDİLƏCƏK YENİKARGO FİLİALINI QEYD EDİN",
  },
  {
    name:
      "YENİKARGO FİLİALINDA CEMİ 1 DEQİQEYE BÜTÜN BAĞLAMALARINIZI TƏHVİL VERİN.",
  },
  { name: "GÖNDƏRİŞ ETDİYİNİZ BÜTUN BAĞLAMALARI İZLƏMƏ İMKANI" },
  { name: "ÖDƏNİŞİ EDİN VƏ YA TƏHVİL ALAN ÖZÜ ÖDƏYƏCƏK BİLDİRİN" },
  { name: "SİZE VERİLƏN QƏBZDƏKİ İZLƏMƏ KODUNU YADDA SAXLAYIN" },
];

const korporatovMusteriler = [
  {
    name:
      "YENİKARGO DİGƏR AZƏRBAYCANDA ÖLKƏ DAXİLİ KARGO VƏ KURYER XİDMƏTLƏRİ İLƏ MƏŞĞUL OLANLARI ƏMƏKDAŞLIĞA DƏVƏT EDİR. ",
  },
  {
    name:
      "YENİKARGO İLƏ GÖNDƏRİŞ EDƏCƏYİNİZ BAĞLAMALARI QABAQCADAN ANBARIMIZDA SAXLAMA XİDMƏTİ, MOBİL NÖMRƏSİNİ VƏ CATDİRİLMA EDİLƏCƏK YENİKARGO FİLİALINI QEYD EDİN. QEYD	*ANBAR XİDMƏTİ BAKI ŞƏHƏRİ  VƏ ABŞERON RAYONUNA AİTDİR ",
  },
  {
    name:
      "GÖNDƏRİŞ ÜNVANI KORPORATİV MÜŞTƏRİNİN MƏSUL ŞƏXSİ TƏRƏFİNDƏN BİLDİRİLDİKDƏ YENİKARGO ƏMƏKDAŞLARI TƏRƏFİNDƏN HAZIRLANIB DƏRHAL YOLA SALINMASI. QEYD. 	*GÖNDƏRİŞ ANCAQ RƏSMİ BİLDİRİŞLƏ OLUNUR",
  },
  {
    name:
      "DAİMA EYNİ İSTİQAMƏTLƏRƏ GÖNDƏRİŞLƏR EDƏN VƏ EKSPRES CATDIRILMA TƏLƏB ETMƏYƏN MÜŞTƏRİLƏRİN YÜKLƏRİNİ ENDİRİMLİ QİYMƏTƏ DAŞINMASI XİDMƏT. QEYD:*MAŞINLARDA BOŞLUQLAR OLDUQDA YERƏ  UYĞUN AZ AZ DAŞINIR",
  },
  { name: "DÖVRİYYƏ GÖRƏ ENDİRİMLƏR EDİLİR" },
];

const muqavileliGonderisler = [
  {
    name:
      "KARGOLAR BİZİM FİLİALLARI ÖZ MÜŞTƏRİLƏRİNƏ TƏSLİM MƏNTƏQƏSİ KİMİ MƏLUMAT VERMƏLİ",
  },
  {
    name: "FİLİALLARIMIZ OLAN BÖLGƏLƏRƏ REKLAM PAYLAŞMAQLARI TÖVSİYYƏ OLUNUR",
  },
  { name: "DAŞIMA RAZILAŞDIRILAN BİR VAHİD QİYMƏT ƏSASINDA HƏYATA KEÇİRİLİR" },
  {
    name:
      "BAĞLAMALARIN SAYI 20 dən AZ OLMAMAQ ŞƏRTİ İLƏ KARGOLARDAN PULSUZ TƏHVİL ALINIR",
  },
  {
    name:
      "DAHADA SÜRƏTLİ ÇATDIRILMA EDİLMƏSİ MƏQSƏDİ İLƏ BAĞLAMALAR QABAQCADAN BİZİM NÖMRƏLƏNMƏ QAYDALARINA UYĞÜN HAZIRLANMALI",
  },
];

const BusinessCustomers = () => {
  return (
    <div id="franchising">
      <Navi />
      <Container className="my-4">
        <h3>Biznes müştərilər</h3>
        <hr />
        <ListGroup>
          <h4>İNTERNET MAQAZİNLƏR</h4>
          <ListGroupItem color="success">
            İNTERNET MAĞAZALAR ÜÇÜN GÖNDƏRİŞ ZAMANI BAGLAMALARI SÜRƏTLİ TƏHVİL
            VERMƏ XİDMƏTİNDƏN YARARLANIN.
          </ListGroupItem>
          {internetMagazine.map((g) => {
            return (
              <ListGroupItem color="light" key={g.name}>
                {g.name}
              </ListGroupItem>
            );
          })}
          <ListGroupItem color="dark">
            QEYD. GƏLƏCƏKDƏ BİZNES MÜŞTƏRİLƏRƏ NÖVBƏDƏN KƏNAR XİDMƏT
            GÖSTƏRİLMƏSİ ÜÇÜN XÜSUSİ BİZNES KARTLAR VERİLƏCƏK.
          </ListGroupItem>
        </ListGroup>

        <ListGroup className="my-4">
          <h4>KORPORATİV MÜŞTƏRİLƏR</h4>
          <ListGroupItem color="light">
            İNTERNET MAĞAZALAR ÜÇÜN GÖNDƏRİŞ ZAMANI BAGLAMALARI SÜRƏTLİ TƏHVİL
            VERMƏ XİDMƏTİNDƏN YARARLANIN.
          </ListGroupItem>
          {korporatovMusteriler.map((g) => {
            return (
              <ListGroupItem color="success" key={g.name}>
                {g.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>

        <ListGroup className="my-4">
          <h4>MÜQAVİLƏ İLƏ GÖNDƏRİŞLƏR</h4>
          <ListGroupItem color="light">
          MÜQAVİLƏ İLƏ GÖNDƏRİŞLƏR BEYNƏLXALQ POÇT XİDMƏTİ GÖSTƏRƏN HÜQUQİ ŞƏXSLƏRƏ AİTDİR. (KARGOLARA)
          </ListGroupItem>
          {muqavileliGonderisler.map((g) => {
            return (
              <ListGroupItem color="success" key={g.name}>
                {g.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>

        <ListGroup>
          <h4>TOPDAN QUTU VƏ SAİRƏ SATIŞI</h4>
          <ListGroupItem color="light">
            ETİBARLI GÖNDƏRİŞLƏR EDİLMƏSİ ÜÇÜN HAZIR QUTU VƏ SAİRƏ QABLAŞDIRMA
            ÜÇÜN LAZIM OLAN HƏR ŞEY BİZDƏN DAHA UÇUZ ALIN.
          </ListGroupItem>
        </ListGroup>

        <ListGroup className="my-4">
          <h4>BİZNES MÜŞTƏRİ KARTI</h4>
          <ListGroupItem color="info">
            BİZİMLƏ ƏMƏKDAŞLIQ EDƏN BÜTÜN BİZNES MÜŞTƏRİLƏRƏ SÜRƏTLİ
            TƏHVİL-TƏSLİM APARILMASI ÜÇÜN VƏ BONUSLARIN HESABLANMASI ÜÇÜN BİZNES
            KARTI TƏQDİM OLUNACAQ.
          </ListGroupItem>
        </ListGroup>

      </Container>
      <Footer />
    </div>
  );
};

export default BusinessCustomers;
