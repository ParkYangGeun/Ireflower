import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Watch() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: true,
    centerPadding: "0px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="slide_box1">
        <h3>수입꽃</h3>
        <Slider {...settings}>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20160920_292/1474321273874pF1Eb_JPEG/mosaBeaXB3.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
            아스트란시아 Pink
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20160920_178/1474321274520sHnfm_JPEG/mosawou1Av.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20160920_196/1474321185042lVF1l_JPEG/mosaSeiYvz.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
            아스트란시아 White
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20160920_126/1474321185723GawsM_JPEG/mosam4iM83.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20161028_148/1477599785936NuVve_JPEG/mosaDUtLf4.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
            알비플로라
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20161028_148/1477599785936NuVve_JPEG/mosaDUtLf4.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20170906_254/1504646115031eJIj0_JPEG/mosahCbKd0.jpeg?type=f353_353"
              alt=""
              className="slide_item"
            />
            핀쿠션 믹스
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20170906_115/1504646117118WaFAC_JPEG/mosa9POsCx.jpeg?type=f353_353"
              alt=""
              className="slide_item"
            />
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20170906_206/1504646220571gnL0w_JPEG/mosaVoixwg.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
            만다린 믹스
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20170906_80/1504646221503oJsyB_JPEG/mosaoCUINl.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20160920_185/1474330275953DmlBt_JPEG/mosaGFGoKT.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
            프로티아 믹스
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20160920_36/1474330276637el0l2_JPEG/mosaznCIND.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20160920_169/1474330443585uCCIN_JPEG/mosahyGqkI.jpeg?type=f353_353"
              alt=""
              className="slide_item"
            />
            왁스플라워
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20160920_290/1474330444432l8nqb_JPEG/mosauQlrcK.jpeg?type=f353_353"
              alt=""
              className="slide_item"
            />
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20170906_165/1504646343319kMp15_JPEG/mosarcpVWK.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
            왁스플라워 염색
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20170906_159/1504646344209gCUyf_JPEG/mosaGpTniZ.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20170906_277/1504646987001WFkJo_JPEG/mosa0lUhpV.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
            왁스플라워 버드
          </div>
          <div className="item_wrap">
            <img
              src="https://modo-phinf.pstatic.net/20170906_201/1504646987897uSORi_JPEG/mosaDN2uU5.jpeg?type=f540_540"
              alt=""
              className="slide_item"
            />
          </div>
        </Slider>
      </div>


      <div className="slide_box1">
      <h3>수입꽃2</h3>
      <Slider {...settings}>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160920_154/1474321369909tfRA8_JPEG/mosauzSoNV.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
          히아신스
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160920_145/1474321370413lkTCf_JPEG/mosacacF0p.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160920_294/1474322395459pCVXq_JPEG/mosalMGK9w.jpeg?type=f353_353"
            alt=""
            className="slide_item"
          />
          튤립
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160920_214/1474322394547o5m67_JPEG/mosafDHE4L.jpeg?type=f353_353"
            alt=""
            className="slide_item"
          />
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160920_44/1474322514112Xgi4y_JPEG/mosaMejTdm.jpeg?type=f353_353"
            alt=""
            className="slide_item"
          />
          에렌지움
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160920_110/1474322514795eSGSg_JPEG/mosaoFMzef.jpeg?type=f353_353"
            alt=""
            className="slide_item"
          />
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20170906_13/1504647109885EIXAC_JPEG/mosaLXIVVG.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
          랑귀로사
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20170906_215/1504647110802FiGwT_JPEG/mosaOqaBYB.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20170906_256/1504647201928xrL69_JPEG/mosahzGVrR.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
            실버부루니아
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20170906_137/1504647202780Rv0P5_JPEG/mosa6cIMb6.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20170906_147/1504647333984wdtnL_JPEG/mosazvJmRa.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
            레드부루니아
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20170906_178/1504647334942PjfKX_JPEG/mosau7AT5L.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20170906_227/1504657718366YJYfp_JPEG/mosaJFUoq6.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
            블러싱브라이드
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20170906_73/1504657719452TDi3C_JPEG/mosacMBGzh.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160921_6/1474403820956yrW0N_JPEG/mosaRnkvUj.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
            아스틸베 에리카
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160921_293/1474403821713J179z_JPEG/mosaN9W1SP.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160921_62/1474403922414wy3SR_JPEG/mosanQP9Zm.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
            아스틸베 유로파
        </div>
        <div className="item_wrap">
          <img
            src="https://modo-phinf.pstatic.net/20160921_163/1474403923023dqFkj_JPEG/mosahrMmee.jpeg?type=f540_540"
            alt=""
            className="slide_item"
          />
        </div>
      </Slider>
    </div>
    </>
  );
}
