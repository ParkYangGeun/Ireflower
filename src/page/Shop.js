import React from "react";

export default function Shop() {
  return (
    <main className="shop_main">
      <div className="QR_cord">
        <img className="QR_img" src="https://modo-phinf.pstatic.net/20210412_269/1618180603861754Vj_JPEG/mosa4ptfkV.jpeg?type=f530_353" alt="" />
      </div>
      <div className="shop_intro_text">
        <h2 className="shoppage_title">샵소개</h2>
        <div>
          <h3>영업시간</h3>
          <h3>평 일 : 오전4시 ~ 오후1시까지</h3>
          <h3>공휴일 : ~ 12시</h3>
        </div>
      </div>

      <div className="shop_imgbox">
        <img className="shop_image" src="https://modo-phinf.pstatic.net/20160319_251/1458336827793Xy0W3_JPEG/mosapqQRLS.jpeg" alt="" />
      </div>
      <div className="shop_imgbox">
        <img className="shop_image" src="https://modo-phinf.pstatic.net/20160323_17/1458682461397cuEYu_JPEG/mosaKxknK0.jpeg" alt="" />
      </div>
      <div className="shop_imgbox">
        <img className="shop_image" src="https://modo-phinf.pstatic.net/20160503_199/1462232412024mfzX8_JPEG/mosaMZqFFG.jpeg" alt="" />
      </div>
    </main>
  );
}
