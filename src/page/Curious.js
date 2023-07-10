import { useState } from "react";
import List from "../components/List";
import { Link } from "react-router-dom";

const DATA = [
  {
    id: 1,
    title: "소프라노 장미",
    createdAt: "2022.06.30",
    content: "소프라노 장미 가격이 어떻게 되나요?",
  },
  {
    id: 2,
    title: "졸업식 꽃다발",
    createdAt: "2022.07.03",
    content: "졸업식 꽃다발 선물용으로 대량 구매 하려는데 가능한가요?",
  },
  {
    id: 3,
    title: "대량 납품 문의 드립니다.",
    createdAt: "2022.08.09",
    content: "대량 납품 문의 드립니다.",
  },
  {
    id: 4,
    title: "소매 구입도 가능한가요?",
    createdAt: "2022.10.10",
    content: "소매 구입도 가능한가요?",
  },
  {
    id: 5,
    title: "소매 일반인도 구입 가능한가요?",
    createdAt: "2023.04.02",
    content: "소매 일반인도 구입 가능한가요?",
  },
  {
    id: 6,
    title: "질문 있습니다.",
    createdAt: "2023.06.04",
    content: "질문 있습니다.",
  },
  {
    id: 7,
    title: "소량 구입도 가능한가요?",
    createdAt: "2023.06.23",
    cotent: "소량 구입도 가능한가요?",
  },
];

export default function Curious() {
  return (
    <>
      <div className="Curious_page">
        <h3>궁금해요</h3>
        <hr />
        <List items={DATA} />

        <div className="btn_wrap">
          <button className="add_list_btn">
            <Link to="/curious/write" className="add_list_link">
              글쓰기
            </Link>
          </button>

          <button className="add_list_btn">
            <Link to="/curious/contact" className="add_list_link">
              문의하기
            </Link>
          </button>


        </div>
      </div>
    </>
  );
}
