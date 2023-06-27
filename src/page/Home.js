import React from "react";
import Topbanner from "../components/Topbanner";

export default function Home() {
  return (
    <>
      <div className="header-wrap">
        <div className="header-container"></div>
        <div className="container-overlay"></div>
        <div className="home-overlay">
          <div className="logo_wrap">
            <img
              className="logo"
              src="https://modo-phinf.pstatic.net/20190411_189/1554930527283dDT2C_JPEG/mosabWZxMm.jpeg?type=f320_320"
              alt=""
            />
            <h3 className="logo_title">양재동 꽃시장 | 이레플라워</h3>
          </div>
        </div>
      </div>

      <div className="home-main">
        <span className="top-text">양재동꽃시장 / 생화도매 / 수입꽃</span>
        <h4>
          서울 서초구 양재동 화훼공판장 159호 수출입전문 이레플라워(경매번호
          1650) <br />
          <br />
          국내외의 다양한 생화들을 수입 및 도매가로 판매하고 있습니다. 항상
          신선하고 아름다운 꽃, 그리고 친절과 미소로 맞이하겠습니다.
        </h4>
        <span className="hashtag">#양재동꽃시장 </span>
        <span className="hashtag red">#이레플라워 </span>
        <span className="hashtag green">#생화도매 </span>
        <span className="hashtag yellow">#수입꽃 </span>
        <span className="hashtag teal">#수입꽃 </span>
        <span className="hashtag violet">#축하화환 </span>
        <span className="hashtag pink">#꽃다발 </span>
        <span className="hashtag blue">#여기가최고 </span>

        <div className="QR_cord"></div>
      </div>
    </>
  );
}
