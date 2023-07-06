import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Group from "./Group";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";

const DATA = [
  {
    groupId: 1,
    name: "수입꽃1",
    list: [
      {
        listId: 1,
        name: "아스트란시아 Pink",
        src: "https://modo-phinf.pstatic.net/20160920_292/1474321273874pF1Eb_JPEG/mosaBeaXB3.jpeg?type=f540_540",
      },
      {
        listId: 2,
        name: "아스트란시아 White",
        src: "https://modo-phinf.pstatic.net/20160920_196/1474321185042lVF1l_JPEG/mosaSeiYvz.jpeg?type=f540_540",
      },
      {
        listId: 3,
        name: "알비플로라",
        src: "https://modo-phinf.pstatic.net/20161028_148/1477599785936NuVve_JPEG/mosaDUtLf4.jpeg?type=f540_540",
      },
      {
        listId: 4,
        name: "핀쿠션 믹스",
        src: "https://modo-phinf.pstatic.net/20170906_254/1504646115031eJIj0_JPEG/mosahCbKd0.jpeg?type=f353_353",
      },
      {
        listId: 5,
        name: "만다린 믹스",
        src: "https://modo-phinf.pstatic.net/20170906_206/1504646220571gnL0w_JPEG/mosaVoixwg.jpeg?type=f540_540",
      },
      {
        listId: 6,
        name: "프로티아 믹스",
        src: "https://modo-phinf.pstatic.net/20160920_185/1474330275953DmlBt_JPEG/mosaGFGoKT.jpeg?type=f540_540",
      },
      {
        listId: 7,
        name: "왁스플라워",
        src: "https://modo-phinf.pstatic.net/20160920_169/1474330443585uCCIN_JPEG/mosahyGqkI.jpeg?type=f353_353",
      },
      {
        listId: 8,
        name: "왁스플라워 염색",
        src: "https://modo-phinf.pstatic.net/20170906_165/1504646343319kMp15_JPEG/mosarcpVWK.jpeg?type=f540_540",
      },
      {
        listId: 9,
        name: "왁스플라워 버드",
        src: "https://modo-phinf.pstatic.net/20170906_277/1504646987001WFkJo_JPEG/mosa0lUhpV.jpeg?type=f540_540",
      },
    ],
    list2: [
      {
        listId: 1,
        name: "히아신스",
        src: "https://modo-phinf.pstatic.net/20160920_154/1474321369909tfRA8_JPEG/mosauzSoNV.jpeg?type=f540_540",
      },
      {
        listId: 2,
        name: "튤립",
        src: "https://modo-phinf.pstatic.net/20160920_294/1474322395459pCVXq_JPEG/mosalMGK9w.jpeg?type=f353_353",
      },
      {
        listId: 3,
        name: "에렌지움",
        src: "https://modo-phinf.pstatic.net/20160920_44/1474322514112Xgi4y_JPEG/mosaMejTdm.jpeg?type=f353_353",
      },
      {
        listId: 4,
        name: "랑귀로사",
        src: "https://modo-phinf.pstatic.net/20170906_13/1504647109885EIXAC_JPEG/mosaLXIVVG.jpeg?type=f540_540",
      },
      {
        listId: 5,
        name: "실버부루니아",
        src: "https://modo-phinf.pstatic.net/20170906_256/1504647201928xrL69_JPEG/mosahzGVrR.jpeg?type=f540_540",
      },
      {
        listId: 6,
        name: "레드부루니아",
        src: "https://modo-phinf.pstatic.net/20170906_147/1504647333984wdtnL_JPEG/mosazvJmRa.jpeg?type=f540_540",
      },
      {
        listId: 7,
        name: "블러싱브라이드",
        src: "https://modo-phinf.pstatic.net/20170906_227/1504657718366YJYfp_JPEG/mosaJFUoq6.jpeg?type=f540_540",
      },
      {
        listId: 8,
        name: "아스틸베 에리카",
        src: "https://modo-phinf.pstatic.net/20160921_6/1474403820956yrW0N_JPEG/mosaRnkvUj.jpeg?type=f540_540",
      },
      {
        listId: 9,
        name: "아스틸베 유로파",
        src: "https://modo-phinf.pstatic.net/20160921_62/1474403922414wy3SR_JPEG/mosanQP9Zm.jpeg?type=f540_540",
      },
    ],
  },
  {
    groupId: 2,
    name: "수입꽃2",
    list: [
      {
        listId: 1,
        name: "클러스터",
        src: "https://modo-phinf.pstatic.net/20170906_56/1504648183187x6w71_JPEG/mosahCeYSd.jpeg?type=f540_540",
      },
      {
        listId: 2,
        name: "프로티아 로빈",
        src: "https://modo-phinf.pstatic.net/20170906_223/1504657637849wPHc6_JPEG/mosal7pVQn.jpeg?type=f540_540",
      },
      {
        listId: 3,
        name: "프로티아 비너스",
        src: "https://modo-phinf.pstatic.net/20170906_194/1504648937465D1Bmo_JPEG/mosaXXmFWj.jpeg?type=f540_540",
      },
      {
        listId: 4,
        name: "방크시아 믹스",
        src: "https://modo-phinf.pstatic.net/20170906_270/1504649092940mspv3_JPEG/mosa4IuLaP.jpeg?type=f540_540",
      },
      {
        listId: 5,
        name: "쓰립토메인",
        src: "https://modo-phinf.pstatic.net/20170906_51/1504649177034mw2pB_JPEG/mosah7G097.jpeg?type=f353_353",
      },
      {
        listId: 6,
        name: "이반호프",
        src: "https://modo-phinf.pstatic.net/20170906_39/1504649376532AMt3K_JPEG/mosaaTmIue.jpeg?type=f540_540",
      },
      {
        listId: 7,
        name: "미스티블루",
        src: "https://modo-phinf.pstatic.net/20170913_260/1505258736805R8Cdt_JPEG/mosaUk8eMa.jpeg?type=f540_540",
      },
      {
        listId: 8,
        name: "시넨시스",
        src: "https://modo-phinf.pstatic.net/20170906_53/1504649615100qDKe1_JPEG/mosaAD5Vef.jpeg?type=f353_353",
      },
      {
        listId: 9,
        name: "킹프로티아",
        src: "https://modo-phinf.pstatic.net/20170906_92/1504657888535QMFKN_JPEG/mosacykJi0.jpeg?type=f540_540",
      },
      {
        listId: 10,
        name: "헬레보루스",
        src: "https://modo-phinf.pstatic.net/20170906_73/1504658126977vE3PU_JPEG/mosaRARSXq.jpeg?type=f540_540",
      },
      {
        listId: 11,
        name: "핀쿠션",
        src: "https://modo-phinf.pstatic.net/20170906_7/1504658087427siWJ4_JPEG/mosacgYz5i.jpeg?type=f540_540",
      },
    ],
    list2: [
      {
        listId: 1,
        name: "클레마티스",
        src: "https://modo-phinf.pstatic.net/20170906_273/1504658222335GXF7a_JPEG/mosamjzRCN.jpeg?type=f540_540",
      },
      {
        listId: 2,
        name: "베로니카",
        src: "https://modo-phinf.pstatic.net/20170906_173/1504658323929A4gnv_JPEG/mosaahfG0n.jpeg?type=f353_353",
      },
      {
        listId: 3,
        name: "유카리 폴리안",
        src: "https://modo-phinf.pstatic.net/20170913_77/1505258209176vUH9c_JPEG/mosaZQjoKs.jpeg?type=f540_540",
      },
      {
        listId: 4,
        name: "미니 파인애플",
        src: "https://modo-phinf.pstatic.net/20170913_192/1505258294056QveEy_JPEG/mosalJZDve.jpeg?type=f540_540",
      },
      {
        listId: 5,
        name: "프로티아 샤론",
        src: "https://modo-phinf.pstatic.net/20170913_272/1505258368463D4VPw_JPEG/mosa9RwJ6t.jpeg?type=f540_540",
      },
      {
        listId: 6,
        name: "코치니아",
        src: "https://modo-phinf.pstatic.net/20170913_48/1505258416866WNySk_JPEG/mosaZ1Wk0P.jpeg?type=f540_540",
      },
      {
        listId: 7,
        name: "라이스플라워",
        src: "https://modo-phinf.pstatic.net/20171012_96/1507769472419n55TV_JPEG/mosawGcNMQ.jpeg?type=f540_540",
      },
      {
        listId: 8,
        name: "니콜",
        src: "https://modo-phinf.pstatic.net/20171019_245/1508358240347BgxHC_JPEG/mosa3mFsd6.jpeg?type=f540_540",
      },
      {
        listId: 9,
        name: "코치니아 믹스",
        src: "https://modo-phinf.pstatic.net/20171024_183/1508803534292o3YKO_JPEG/mosaSbJlZL.jpeg?type=f540_540",
      },
      {
        listId: 10,
        name: "유카리 씨드",
        src: "https://modo-phinf.pstatic.net/20170908_290/1504815380712S5opw_JPEG/mosaojv34I.jpeg?type=f540_540",
      },
      {
        listId: 11,
        name: "그라빌리아",
        src: "https://modo-phinf.pstatic.net/20170908_137/1504815670587quBWH_JPEG/mosaTlQZuG.jpeg?type=f353_353",
      },
    ],
  },
  {
    groupId: 3,
    name: "장미꽃",
    list: [
      {
        listId: 1,
        name: "푸에고",
        src: "https://modo-phinf.pstatic.net/20160317_65/1458170042721TvESG_JPEG/mosa9weDuG.jpeg",
      },
      {
        listId: 2,
        name: "부루트",
        src: "https://modo-phinf.pstatic.net/20160422_6/1461286690857C3AE0_JPEG/mosaH4v5nI.jpeg?type=f540_540",
      },
      {
        listId: 3,
        name: "카렌자",
        src: "https://modo-phinf.pstatic.net/20160330_119/1459293290584WYeQe_JPEG/mosa5fJmuw.jpeg?type=f540_540",
      },
      {
        listId: 4,
        name: "모네",
        src: "https://modo-phinf.pstatic.net/20160525_222/14641340726068ShzL_JPEG/mosaXtHZAc.jpeg?type=f540_540",
      },
      {
        listId: 5,
        name: "도미니카",
        src: "https://modo-phinf.pstatic.net/20160407_108/1459994489722sKvT2_JPEG/mosaGI1L4i.jpeg?type=f540_540",
      },
      {
        listId: 6,
        name: "헤라",
        src: "https://modo-phinf.pstatic.net/20160321_91/1458516382971bFspO_JPEG/mosaA6UpSQ.jpeg?type=f540_540",
      },
      {
        listId: 7,
        name: "벨리나",
        src: "https://modo-phinf.pstatic.net/20160328_160/14591173998478Mrf4_JPEG/mosamtCVom.jpeg?type=f540_540",
      },
      {
        listId: 8,
        name: "어텀파티",
        src: "https://modo-phinf.pstatic.net/20160422_16/1461286982576iT8ny_JPEG/mosa3oioZk.jpeg?type=f540_540",
      },
      {
        listId: 9,
        name: "햇살",
        src: "https://modo-phinf.pstatic.net/20160330_11/1459293358679iADmD_JPEG/mosabL4DPg.jpeg?type=f540_540",
      },
      {
        listId: 10,
        name: "플래시댄스",
        src: "https://modo-phinf.pstatic.net/20160321_252/1458515336131oAaqG_JPEG/mosaosodlW.jpeg?type=f540_540",
      },
    ],
    list2: [
      {
        listId: 1,
        name: "옐로우바베",
        src: "https://modo-phinf.pstatic.net/20160317_8/1458171829318rx6c4_JPEG/mosaEKoV5w.jpeg",
      },
      {
        listId: 2,
        name: "수퍼센세이션",
        src: "https://modo-phinf.pstatic.net/20160321_270/1458515478937AEDR1_JPEG/mosas66Vd5.jpeg?type=f540_540",
      },
      {
        listId: 3,
        name: "옐로우골드",
        src: "https://modo-phinf.pstatic.net/20160422_148/14612870389576Km7X_JPEG/mosaQX11bq.jpeg?type=f540_540",
      },
      {
        listId: 4,
        name: "오렌지골드",
        src: "https://modo-phinf.pstatic.net/20160321_32/14585157112619oxD3_JPEG/mosa48JYay.jpeg?type=f540_540",
      },
      {
        listId: 5,
        name: "러블리리디아",
        src: "https://modo-phinf.pstatic.net/20160525_8/1464134768682ya6G6_JPEG/mosa6m64iM.jpeg?type=f540_540",
      },
      {
        listId: 6,
        name: "자나",
        src: "https://modo-phinf.pstatic.net/20160323_57/1458693593990XJSqV_JPEG/mosaZfYk2M.jpeg?type=f540_540",
      },
      {
        listId: 7,
        name: "이리스카 핑크",
        src: "https://modo-phinf.pstatic.net/20160321_277/14585162476815i680_JPEG/mosas07trk.jpeg?type=f540_540",
      },
      {
        listId: 8,
        name: "썸머파티",
        src: "https://modo-phinf.pstatic.net/20160321_287/1458515777823ALyha_JPEG/mosaHNvO1w.jpeg?type=f540_540",
      },
      {
        listId: 9,
        name: "엠세컨드러브",
        src: "https://modo-phinf.pstatic.net/20160422_97/1461286556178R7MIO_JPEG/mosaQSkBoE.jpeg?type=f540_540",
      },
      {
        listId: 10,
        name: "파스텔플래시",
        src: "https://modo-phinf.pstatic.net/20160429_155/1461888448504lc9mX_JPEG/mosa6OF6l9.jpeg?type=f540_540",
      },
      {
        listId: 11,
        name: "에이핑크",
        src: "https://modo-phinf.pstatic.net/20160429_74/1461888571562Cvvh7_JPEG/mosaj4pCnd.jpeg?type=f540_540",
      },
    ],
  },
  {
    groupId: 4,
    name: "기타꽃1",
    list: [
      {
        listId: 1,
        name: "라넌큘러스 하노이",
        src: "https://modo-phinf.pstatic.net/20160317_134/14581704772762qD2a_JPEG/mosauyQdoT.jpeg",
      },
      {
        listId: 2,
        name: "라넌큘러스 오로라",
        src: "https://modo-phinf.pstatic.net/20160323_203/1458691049181sqt3r_JPEG/mosazNNa7N.jpeg?type=f540_540",
      },
      {
        listId: 3,
        name: "라넌큘러스 로사",
        src: "https://modo-phinf.pstatic.net/20160323_91/1458691132334nev9h_JPEG/mosa3Sm3kK.jpeg?type=f540_540",
      },
      {
        listId: 4,
        name: "라넌큘러스 폰폰",
        src: "https://modo-phinf.pstatic.net/20160317_105/1458170401981qpBim_JPEG/mosaQf0S9i.jpeg",
      },
      {
        listId: 5,
        name: "보리",
        src: "https://modo-phinf.pstatic.net/20160328_255/14591192210152vlbv_JPEG/mosaiO6IEi.jpeg",
      },
      {
        listId: 6,
        name: "조팝",
        src: "https://modo-phinf.pstatic.net/20160328_16/1459128845318mp9N5_JPEG/mosaTh1BWY.jpeg?type=f540_540",
      },
      {
        listId: 7,
        name: "리시안 보야쥬 그린",
        src: "https://modo-phinf.pstatic.net/20160328_171/1459118951700pnHYv_JPEG/mosaILFOY8.jpeg?type=f540_540",
      },
      {
        listId: 8,
        name: "리시안 보야쥬 핑크",
        src: "https://modo-phinf.pstatic.net/20160328_188/1459119001932SASb1_JPEG/mosaVdlZWk.jpeg?type=f540_540",
      },
      {
        listId: 9,
        name: "리시안 보야쥬 보라",
        src: "https://modo-phinf.pstatic.net/20160328_200/14591191207369Q6l7_JPEG/mosam7UfdI.jpeg?type=f540_540",
      },
      {
        listId: 10,
        name: "옥시페탈륨",
        src: "https://modo-phinf.pstatic.net/20160323_70/1458691889007ge1Vg_JPEG/mosalYAxdU.jpeg?type=f540_540",
      },
      {
        listId: 11,
        name: "부푸리움",
        src: "https://modo-phinf.pstatic.net/20160323_165/1458691982687sTfzg_JPEG/mosa54R0fy.jpeg?type=f540_540",
      },
      {
        listId: 12,
        name: "시레네",
        src: "https://modo-phinf.pstatic.net/20160323_38/1458691225274br75k_JPEG/mosapXkrVW.jpeg?type=f540_540",
      },
      {
        listId: 13,
        name: "알륨",
        src: "https://modo-phinf.pstatic.net/20160426_6/1461616792339jRb9T_JPEG/mosaxhK9Ig.jpeg?type=f540_540",
      },
      {
        listId: 14,
        name: "시네라리아",
        src: "https://modo-phinf.pstatic.net/20160426_143/1461616849481zK8eU_JPEG/mosaJCjnFC.jpeg?type=f540_540",
      },
      {
        listId: 15,
        name: "천일홍",
        src: "https://modo-phinf.pstatic.net/20160318_79/1458250402536gyoxB_JPEG/mosayPNuPR.jpeg",
      },
    ],
    list2: [
      {
        listId: 1,
        name: "시네라리아",
        src: "https://modo-phinf.pstatic.net/20160330_293/1459293454825dGa02_JPEG/mosaaLZzd7.jpeg?type=f540_540",
      },
      {
        listId: 2,
        name: "안개",
        src: "https://modo-phinf.pstatic.net/20160317_198/1458170089427TSjvy_JPEG/mosaBh3CJf.jpeg",
      },
      {
        listId: 3,
        name: "후리지아 노랑",
        src: "https://modo-phinf.pstatic.net/20160323_116/1458691938915j34o2_JPEG/mosaQjpXwi.jpeg?type=f540_540",
      },
      {
        listId: 4,
        name: "칼라",
        src: "https://modo-phinf.pstatic.net/20160323_161/1458693410317srjku_JPEG/mosaiVgdFQ.jpeg?type=f540_540",
      },
      {
        listId: 5,
        name: "스토크",
        src: "https://modo-phinf.pstatic.net/20160317_181/1458172064424YgKYl_JPEG/mosawZeAwZ.jpeg",
      },
      {
        listId: 6,
        name: "스타치스",
        src: "https://modo-phinf.pstatic.net/20160317_185/1458171977123jMD43_JPEG/mosaOrFb4q.jpeg",
      },
      {
        listId: 7,
        name: "심비",
        src: "https://modo-phinf.pstatic.net/20160317_76/1458170330685aP3Jf_JPEG/mosairf7Bz.jpeg",
      },
      {
        listId: 8,
        name: "카네이션",
        src: "https://modo-phinf.pstatic.net/20160323_214/1458690852556toAvu_JPEG/mosaNJsnCq.jpeg?type=f540_540",
      },
      {
        listId: 9,
        name: "시넨시스",
        src: "https://modo-phinf.pstatic.net/20160323_244/1458690981981mssBi_JPEG/mosaCxboim.jpeg?type=f540_540",
      },
      {
        listId: 10,
        name: "미스티블루",
        src: "https://modo-phinf.pstatic.net/20160323_186/1458691187758zixrS_JPEG/mosa9kZR5i.jpeg?type=f540_540",
      },
      {
        listId: 11,
        name: "마도리카리아",
        src: "https://modo-phinf.pstatic.net/20160525_61/146413485997343qXU_JPEG/mosaC4m9v6.jpeg?type=f540_540",
      },
      {
        listId: 12,
        name: "골든볼",
        src: "https://modo-phinf.pstatic.net/20160418_3/1460937931551dBaa4_JPEG/mosauFWrqs.jpeg?type=f540_540",
      },
      {
        listId: 13,
        name: "헬리옵시스",
        src: "https://modo-phinf.pstatic.net/20160426_54/14616169049855IKGx_JPEG/mosagf2yFZ.jpeg?type=f540_540",
      },
      {
        listId: 14,
        name: "센트란사스",
        src: "https://modo-phinf.pstatic.net/20160427_126/1461705422987LQFLR_JPEG/mosap6kfUv.jpeg?type=f540_540",
      },
    ],
  },
  {
    groupId: 5,
    name: "기타꽃2",
    list: [
      {
        listId: 1,
        name: "아킬레아",
        src: "https://modo-phinf.pstatic.net/20160427_130/14617202841844cWn1_JPEG/mosavVkCcN.jpeg?type=f540_540",
      },
      {
        listId: 2,
        name: "에렌지움",
        src: "https://modo-phinf.pstatic.net/20160525_145/1464135334549rCoR4_JPEG/mosajDPHg2.jpeg?type=f540_540",
      },
      {
        listId: 3,
        name: "투베로사",
        src: "https://modo-phinf.pstatic.net/20160427_108/1461720362365Tyx6N_JPEG/mosaWxZNTv.jpeg?type=f540_540",
      },
      {
        listId: 4,
        name: "트리플륨 화이트",
        src: "https://modo-phinf.pstatic.net/20160510_89/1462839081748epJ57_JPEG/mosa1EtG9D.jpeg?type=f540_540",
      },
      {
        listId: 5,
        name: "사루비아",
        src: "https://modo-phinf.pstatic.net/20160510_276/1462839146433LO8Bg_JPEG/mosavkPbNX.jpeg?type=f540_540",
      },
      {
        listId: 6,
        name: "브바르디아 핑크",
        src: "https://modo-phinf.pstatic.net/20160525_283/1464134450957R5i2U_JPEG/mosaAitbZN.jpeg?type=f540_540",
      },
      {
        listId: 7,
        name: "작약 사하라",
        src: "https://modo-phinf.pstatic.net/20160525_97/1464134494646Ci1PX_JPEG/mosadgwdUb.jpeg?type=f540_540",
      },
      {
        listId: 8,
        name: "미니델피늄",
        src: "https://modo-phinf.pstatic.net/20160525_134/1464134395057ty6M6_JPEG/mosaNxJlfJ.jpeg?type=f540_540",
      },
      {
        listId: 9,
        name: "도라지꽃",
        src: "https://modo-phinf.pstatic.net/20160826_166/14721707243662siWR_JPEG/mosaGa1XDt.jpeg?type=f540_540",
      },
      {
        listId: 10,
        name: "쿠루쿠마",
        src: "https://modo-phinf.pstatic.net/20160826_246/1472170783125KDqEz_JPEG/mosaTSOg3F.jpeg?type=f540_540",
      },
      {
        listId: 11,
        name: "퐁퐁소국",
        src: "https://modo-phinf.pstatic.net/20160826_221/1472170881687cQTNo_JPEG/mosaoGpy7K.jpeg?type=f540_540",
      },
    ],
    list2: [
      {
        listId: 1,
        name: "용담",
        src: "https://modo-phinf.pstatic.net/20160826_243/1472170922707mNoTB_JPEG/mosaVLjUIg.jpeg?type=f540_540",
      },
      {
        listId: 2,
        name: "과꽃 핑크",
        src: "https://modo-phinf.pstatic.net/20160826_125/1472170979635qE0YP_JPEG/mosafJ0N26.jpeg?type=f540_540",
      },
      {
        listId: 3,
        name: "석무초",
        src: "https://modo-phinf.pstatic.net/20160525_296/1464134146921VAwBX_JPEG/mosafP1Spd.jpeg?type=f540_540",
      },
      {
        listId: 4,
        name: "스프레이 카네이션 트랜디테시노",
        src: "https://modo-phinf.pstatic.net/20160426_296/1461617094298Hc8Id_JPEG/mosaAxQZTF.jpeg?type=f540_540",
      },
      {
        listId: 5,
        name: "스프레이 카네이션 체리테시노",
        src: "https://modo-phinf.pstatic.net/20160426_21/14616171605975NUb8_JPEG/mosahfwcBz.jpeg?type=f540_540",
      },
      {
        listId: 6,
        name: "카네이션-그랜드슬램",
        src: "https://modo-phinf.pstatic.net/20160526_220/14642096061900wg1S_JPEG/mosaypzC5n.jpeg?type=f540_540",
      },
      {
        listId: 7,
        name: "아스틸베 핑크",
        src: "https://modo-phinf.pstatic.net/20160527_207/1464304161388R4d5t_JPEG/mosaDdbFtK.jpeg?type=f540_540",
      },
    ],
  },
];

export default function Test() {
  const { groupId } = useParams();
  const group = DATA.find((group) => group.groupId == groupId);
  const [flower1, setFlower1] = useState(false);
  const [flower2, setFlower2] = useState(false);
  const [flower3, setFlower3] = useState(false);
  const [flower4, setFlower4] = useState(false);
  const [flower5, setFlower5] = useState(false);

  const el = useRef(null);
  const el2 = useRef(null);

  useEffect(() => {
    el2.current.slickGoTo(0, true);
    el.current.slickGoTo(0);
  }, [groupId]);

  

  const listtitle = (
    <h3 className="listtitle">
      {group.name}
    </h3>
  )

  const itemList = group.list.map((item) => (
    <div key={item.listId} className="item_wrap">
      <img src={item.src} alt="" className="slide_item" />
      {item.name}
    </div>
  ));

  const itemList2 = group.list2.map((item) => (
    <div key={item.listId} className="item_wrap">
      <img src={item.src} alt="" className="slide_item" />
      {item.name}
    </div>
  ));

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: true,
    centerPadding: "0px",
    touchMove: true,
    arrows: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true,
          dots: true,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <>
      <div className="wrap">
        <Group />
        {listtitle}
        <div className="aaa">
          <Slider {...settings} ref={el2}>
            {itemList}
          </Slider>
        </div>
        <div className="aaa">
          <Slider {...settings} ref={el}>
            {itemList2}
          </Slider>
        </div>
      </div>
    </>
  );
}
