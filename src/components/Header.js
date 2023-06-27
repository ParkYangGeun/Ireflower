import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="top_banner">
                <ul>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li>
                        <Link to="/shop">샵소개</Link>
                    </li>
                    <li>
                        <Link to="/watch">꽃구경</Link>

                    </li>
                    <li>
                        <Link to="/curious">궁금해요</Link>

                    </li>
                    <li>
                        <Link to="/way">오시는길</Link>

                    </li>
                    <li>
                        <Link to="/event">이벤트</Link>

                    </li>
                </ul>
                <div className="open_btn">

                </div>
            </div>
        </>
    )

}