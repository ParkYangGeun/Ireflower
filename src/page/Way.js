import React, { useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function KakaoMap() {
  return (
    <Map
      center={{
        lat: 37.46645440315568,
        lng: 127.03958139871162,
      }}
      style={{
        width: "90%",
        height: "450px",
        margin: "0px auto",
        marginTop: "100px",
        marginBottom: "30px",
      }}
      level={5}
    >
      <MapMarker
        position={{
          lat: 37.46645440315568,
          lng: 127.03958139871162,
        }}
        image={{
          src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png",
          size: {
            width: 55,
            height: 60,
          },
          options: {
            offset: {
              x: 27,
              y: 69,
            },
          },
        }}
      />
    </Map>
  );
}

export default function Way() {
  return (
    <>
      <KakaoMap></KakaoMap>
      <div className="Way_page">
        <span>159호 이레플라워</span>
        <h4>서울특별시 서초구 양재동 꽃도매시장</h4>
        <div className="Way_route">
          <h3 className="Way_route_title">오시는 길</h3>
          <h4 style={{ fontSize: "0.9rem" }}>지하철</h4>
          <p style={{ borderBottom: "1px dashed", paddingBottom: "2rem" }}>
            신분당선 양재시민의숲역(매헌역) 4번출구
          </p>
          <h4 style={{ fontSize: "0.9rem" }}>버스</h4>
          <p style={{ lineHeight: "2rem", marginBottom: "2rem" }}>
            마을버스 : 서초 09, 서초 20, 서초 21
            <br />
            일반버스 : 6, 11-3, 33, 500-5, 917 <br />
            간선버스 : 140, 400, 405, 407, 421, 440, 441, 462, 463, 470, 4432{" "}
            <br />
            지선버스 : 4211, 4432 <br />
            공항버스 : 6500
          </p>

          <h4 style={{ fontSize: "0.9rem" }}>자동차</h4>
          <p
            style={{
              lineHeight: "2rem",
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: "1px dashed",
            }}
          >
            경부고속도로 양재IC 근처 <br />
            <span className="hashtag blue" style={{fontWeight:600}}>
              "양재동 화훼공판장 생화 꽃도매시장"
            </span>{" "}
            을 입력하고 찾아오세요.
          </p>
          <h4 style={{ fontSize: "0.9rem" }}>주차안내</h4>
          <p>1시간 천원</p>
        </div>
      </div>
    </>
  );
}
