import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

export default function Header() {
  const [scr_active, setscrActive] = useState(false);

  const [bodyscr, setBodyscr] = useState(false);
  const [color_active, setColor_active] = useState(false);
  

  let scrollY;
  let prescrollY;

  const { pathname } = useLocation();

  useEffect(() => {
    if(pathname!=="/"){
        setColor_active(true);
    }
    else{
        setColor_active(false);
    }
        
    }, [pathname])


  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      scrollY = window.scrollY;

      if (scrollY > prescrollY) {
        setscrActive(false);
        if (scrollY > 300) {
          setBodyscr(true);
        } else {
          setBodyscr(false);
        }
      } else {
        setscrActive(true);
        if (scrollY > 300) {
          setBodyscr(true);
        } else {
          setBodyscr(false);
        }
      }
      prescrollY = scrollY;
    });
  }, []);

  const banner_st = {
    // display:active ? "block" : "none"
    opacity: scr_active ? 100 : 1,
    backgroundColor: bodyscr ? "#333" : "",
    backgroundColor: color_active ? "#aaa" : "#333",
    fontWeight:600,
    transition : "0.5s",
    width:"100%"
  };

  const list_st = {
    // color: color_active ? "#333" : "white"
    color: color_active ? "#333" : "white"
  }

  return (
    <>
      <div className="top_banner" style={banner_st}>
        <ul >
          <li >
            <Link to="/" style={list_st}>홈</Link>
          </li>
          <li>
            <Link to="/shop" style={list_st}>샵소개</Link>
          </li>
          <li>
            <Link to="/group/1" style={list_st}>꽃구경</Link>
          </li>
          <li>
            <Link to="/curious" style={list_st}>궁금해요</Link>
          </li>
          <li>
            <Link to="/way" style={list_st}>오시는길</Link>
          </li>
          <li>
            <Link to="/event" style={list_st}>이벤트</Link>
          </li>
        </ul>
        <div className="open_btn"></div>
      </div>
    </>
  );
}
