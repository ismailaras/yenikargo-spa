import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import Footer from "../Footer";
import Navi from "../Navi";

const gonderis = [
  {
    name:
      "BAGLAMANIZI SİZƏ YAXIN OLAN FİLİALA ÖZÜNÜZ GƏTİRİN VƏ YA KURYER SİFARİŞ EDİN (KURYER SİFARİŞ ET)",
  },
  {
    name:
      "LAZIM OLAN MƏLUMATLARI BİLDİRİN - GÖNDƏRİŞ EDƏNİN ADI VƏ MOBİL NÖMRƏSİ",
  },
  { name: "TƏHVİL ALANIN ŞƏHƏR FİLİALI, ADI VƏ MOBİL NÖMRƏSİ" },
  { name: "ÖDƏNİŞİ EDİN VƏ YA TƏHVİL ALAN ÖZÜ ÖDƏYƏCƏK BİLDİRİN" },
  { name: "SİZE VERİLƏN QƏBZDƏKİ İZLƏMƏ KODUNU YADDA SAXLAYIN" },
];

const tehvil = [
  {
    name:
      "BAĞLAMANIZ TEHVİL FİLİALINDADIR MƏLUMATIN ALDIQDAN SONRA HƏMİN FİLİALA YAXİNLAŞIN.(FİLİALLARIN İŞ QRAFİKİ)",
  },
  {
    name:
      "SİZƏ BİLDİRİŞDƏ GƏLƏN BAĞLAMA İZLƏMƏ KODUNU VƏ ŞƏXSİYYƏTİNİZİ TƏSTİQ EDƏN SƏNƏDİ TƏQDİM EDİN",
  },
  { name: "QƏBZDƏ ÖDƏNİŞ VARSA ÖDƏYİN VƏ BİZDƏ QALAN QƏBZİ İMZALAYIN" },
];

const IndividualCustomers = () => {
  return (
    <div id="franchising">
      <Navi />
      <Container className="my-4">
        <h3>Fərdi müştərilər</h3>
        <hr />
        <ListGroup>
          <h4>Göndəriş:</h4>
          {gonderis.map((g) => {
            return (
              <ListGroupItem color="success" key={g.name}>
                {g.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <ListGroup className="my-4">
          <h4>Təhvil:</h4>
          {tehvil.map((g) => {
            return (
              <ListGroupItem color="info" key={g.name}>
                {g.name}
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <ListGroup className="my-4">
          <h4>GÖNDƏRİŞDƏN SONRA DƏYİŞİKLİKLƏR</h4>
          <ListGroupItem color="light">
            KARGONUZU YOLA SALDIQDAN SONRA ALICI MƏLUMATLARINDA HƏR HANSISA
            DƏYİŞİKLİKLƏR EDİLMƏSİ ÜÇÜN MÜTLƏQ ŞƏKİLDƏ GÖNDƏRİŞ EDƏNİN MOBİL
            NÖMRƏSİNDƏN SMS VƏ YA VVATSAPP VASİTƏSİ İLƏ YENİKARGO MƏLUMAT
            NÖMRƏSİNƏ XƏBƏRDARLIQ EDİN.
          </ListGroupItem>
        </ListGroup>

        <ListGroup className="my-4">
          <h4>GERİ ÖDƏMƏLİ BAĞLAMALAR</h4>
          <ListGroupItem color="warning">
            ONLAYN SATIŞ ZAMANI ALICI HƏR HANSISA SƏBƏBDƏN ÖDƏNİŞ ETMİRSƏ,
            KARGONU TƏHVİL ALAN ZAMAN ALDIĞI MƏHSULUN DÜZGÜNLÜYÜNƏ ƏMİN OLDUQDAN
            SONRA ÖDƏNİŞİ YENİKARGO KASSASINA EDİR VƏ KARGOSUNU TƏHVİL ALIR.
            GERİ ÖDƏMƏLİ BALAMA GÖNDƏRMƏK ÜÇÜN GÖNDƏRİŞ EDƏN ZAMAN BANK ADINI VƏ
            BANK KARTI 16 RƏQƏMLI KODUNU TƏQDİM ETMƏK LAZIMDIR.
          </ListGroupItem>
        </ListGroup>

        <ListGroup className="my-4">
          <h4>GERİ QAYTARMA</h4>
          <ListGroupItem color="danger">
            YALNIZ GÖNDƏRİŞ EDƏN TƏRƏF KARGONUN GERİ QAYTARILMASINI SİFARİŞ EDƏ
            BİLƏR. BUNUN UÇUN MÜTLƏQ ŞƏKİLDƏ GÖNDƏRİŞ EDƏNİN MOBİL NÖMRƏSİNDƏN
            SMS VƏ YA VVATSAPP VASİTƏSİ İLƏ YENİKARGO MƏLUMAT NÖMRƏSİNƏ
            XƏBƏRDARLIQ OLUNMALIDI. ALICI KARGONU 7 GÜN ƏRZİNDƏ TƏHVİL ALMADIQDA
            AVTOMATİK OLARAQ HƏR GÜN ÜÇÜN 50 QƏP SAXLANC PULU HESABLANİR.
          </ListGroupItem>
        </ListGroup>
      </Container>
      <Footer />
    </div>
  );
};

export default IndividualCustomers;
