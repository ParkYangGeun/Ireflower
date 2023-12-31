import React from "react";
import { Link } from "react-router-dom";

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
        <div className="go_to_contact">
          <svg
            className="go_contact_icon"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M480 96c17.7 0 32 14.3 32 32s-14.3 32-32 32l-208 0 0-64 208 0zM320 288c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32h64zm64-64c0 17.7-14.3 32-32 32H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h48c17.7 0 32 14.3 32 32zM288 384c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32h64zm-88-96l.6 0c-5.4 9.4-8.6 20.3-8.6 32c0 13.2 4 25.4 10.8 35.6C177.9 364.3 160 388.1 160 416c0 11.7 3.1 22.6 8.6 32H160C71.6 448 0 376.4 0 288l0-61.7c0-42.4 16.9-83.1 46.9-113.1l11.6-11.6C82.5 77.5 115.1 64 149 64l27 0c35.3 0 64 28.7 64 64v88c0 22.1-17.9 40-40 40s-40-17.9-40-40V160c0-8.8-7.2-16-16-16s-16 7.2-16 16v56c0 39.8 32.2 72 72 72z" />
          </svg>
          <button className="go_contact_btn">
            <Link className="go_contact" to="curious/contact">
              문의하러 가기
            </Link>
          </button>
        </div>
        <div className="QR_Wrap">
          <div className="home_QR_cord">
            <img
              className="QR_img"
              src="https://modo-phinf.pstatic.net/20210412_269/1618180603861754Vj_JPEG/mosa4ptfkV.jpeg?type=f530_353"
              alt=""
            />
          </div>

          <div className="QR_explain">
            <h3>영업시간</h3>
            평 일: 오전4시 ~ 오후1시까지
            <br />
            공휴일: ~12시
            <br />
            <p className="subtext">
              ★인스타 계정: jireh159 '이레무역'으로 검색하시면 빨라요
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
