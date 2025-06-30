import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

function Gnb({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out 
        ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } z-50`}
    >
      <GnbPc onClose={onClose} />
      <GnbMobile onClose={onClose} />
    </div>
  );
}

function GnbPc({ onClose }) {
  return (
    <div
      className="hidden 2xl:flex fixed top-0 left-0 w-full h-full bg-cover bg-center overflow-y-auto"
      style={{ backgroundImage: "url('/images/pannel_bg.jpg')" }}
    >
      <button
        onClick={onClose}
        className="absolute right-[100px] top-[80px] z-80"
      >
        <img
          src="/images/ico_close_white.png"
          alt="ico_close_white"
          className="w-[40px] h-auto"
        />
      </button>
      <div className="flex-row gap-[50px] w-[1500px] h-screen mt-[100px] p-10 mb-[500px] mx-auto hidden 2xl:flex">
        <div className="font-sans">
          <ul className="flex flex-row text-white w-[580px] flex-wrap font-bold text-[34px] text-left gap-[40px]">
            <li className="w-[270px] mb-[300px] flex flex-col gap-5">
              SAMSUNG SDI
              <ul className="text-[20px] flex flex-col gap-5">
                <li>
                  <a href="#">회사소개</a>
                </li>
                <li>
                  <a href="#">연혁</a>
                </li>
                <li>
                  <a href="#">CI</a>
                </li>
                <li>
                  <a href="#">연국개발</a>
                </li>
                <li>
                  <a href="#">글로벌 네트워크</a>
                </li>
              </ul>
            </li>
            <li className="w-[270px] mb-[300px] flex flex-col gap-5">
              BUSINESS
              <ul className="text-[20px] flex flex-col gap-5">
                <li>
                  <a href="#">배터리</a>
                </li>
                <li>
                  <a href="#">전자재료</a>
                </li>
              </ul>
            </li>
            <li className="w-[270px] flex flex-col gap-5">
              PR Center
              <ul className="text-[20px] flex flex-col gap-5">
                <li>
                  <a href="#">뉴스</a>
                </li>
                <li>
                  <a href="#">유튜브</a>
                </li>
              </ul>
            </li>
            <li className="w-[270px] flex flex-col gap-5">
              고객센터
              <ul className="text-[20px] flex flex-col gap-5">
                <li>
                  <a href="#">문의하기</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-row text-white w-[800px] font-bold text-[16px] text-left gap-[120px] flex-wrap">
            <li className="flex flex-col gap-5 text-[34px]">
              IR
              <ul className="font-normal text-[20px]">
                <li className="font-bold flex flex-col gap-5">
                  주식정보
                  <ul className="flex flex-col gap-4 mb-4 text-[#D7D7D7]">
                    <li className="font-normal">
                      <a href="#">주가정보</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">주식 상장 현황</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">배당 현황</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">주주 구성</a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  재무정보
                  <ul className="flex flex-col gap-4 mb-4 text-[#D7D7D7]">
                    <li className="font-normal">
                      <a href="#">주요 재무지표</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">신용등급</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">감사 보고서</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">사업 보고서</a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  주주총회
                  <ul className="flex flex-col gap-4 mb-4 text-[#D7D7D7]">
                    <li className="font-normal">
                      <a href="#">주주총회 소집/결과</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">배당금 조회</a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  공시
                  <ul className="flex flex-col gap-4 mb-4 text-[#D7D7D7]">
                    <li className="font-normal">
                      <a href="#">공시 자료</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">전자공고</a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  IR활동
                  <ul className="flex flex-col gap-4 mb-4 text-[#D7D7D7]">
                    <li className="font-normal">
                      <a href="#">IR활동내역</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">실적발표회</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="flex flex-col gap-5 text-[34px]">
              CAREER
              <ul className="font-normal text-[20px]">
                <li className="font-bold mb-4">
                  <a href="#">인재상</a>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  지원하기
                  <ul className="flex flex-col gap-4 mb-4  text-[#D7D7D7]">
                    <li className="font-normal">
                      <a href="#">채용전형</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">직무소개</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">복리후생</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">채용공고</a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  <a href="#">삼성SDI Life</a>
                </li>
              </ul>
            </li>
            <li className="flex flex-col gap-5 text-[34px]">
              ESG
              <ul className="font-normal text-[20px]">
                <li className="font-bold flex flex-col gap-5">
                  ESG 전략
                  <ul className="flex flex-col gap-4 mb-4 text-[#D7D7D7]">
                    <li className="font-normal">
                      <a href="#">지속가능경영 전략 체계</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">이중 중대성 평가</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">리스크 관리</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">지속가능경영 정책</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">글로벌 이니셔티브</a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  환경
                  <ul className="flex flex-col gap-4 mb-4 text-[#D7D7D7]">
                    <li className="font-normal">
                      <a href="#">환경경영</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">기후 위기 대응</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">자원 순환</a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  사회
                  <ul className="flex flex-col gap-4 mb-4 text-[#D7D7D7]">
                    <li className="font-normal">
                      <a href="#">안전보건</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">상생협력</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">공급망 관리</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">사회공헌</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">사회공헌 소식</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">다양성 및 포용성</a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  지배구조
                  <ul className="flex flex-col gap-4 mb-4">
                    <li className="font-normal">
                      <a href="#">이사회</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">위원회</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">정관</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">이해관계자</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">준법경영</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">윤리경영</a>
                    </li>
                    <li className="font-normal">
                      <a href="#">정보보호</a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold flex flex-col gap-5">
                  <a href="#">지속가능경영보고서</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function GnbMobile({ onClose }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = [
    {
      title: "SAMSUNG SDI",
      sub: ["회사소개", "연혁", "CI", "연구개발", "글로벌 네트워크"],
    },
    {
      title: "BUSINESS",
      sub: ["배터리", "전자재료"],
    },
    {
      title: "IR",
      sub: ["주식정보", "재무정보", "주주총회", "공시", "IR활동"],
    },
    {
      title: "CAREER",
      sub: ["인재상", "지원하기", "삼성SDI Life"],
    },
    {
      title: "ESG",
      sub: ["ESG 전략", "환경", "사회", "지배구조", "지속가능경영보고서"],
    },
    {
      title: "PR Center",
      sub: ["뉴스", "유튜브"],
    },
  ];

  return (
    <div className="font-sans block 2xl:hidden fixed top-0 left-0 w-full h-full bg-white overflow-hidden z-50">
      <button
        onClick={onClose}
        className="absolute right-[20px] top-[20px] z-80"
      >
        <img
          src="/images/ico_close_black.png"
          alt="ico_close_black"
          className="w-[30px] h-auto"
        />
      </button>

      <nav className="w-full h-full pt-[100px] pb-[70px] bg-white overflow-y-auto">
        <ul className="w-full h-auto text-left">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full">
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu(index);
                  }}
                  className={`w-full h-auto p-[28px] text-[28px] font-[700] block transition-colors duration-300 ${
                    openIndex === index ? "text-blue-600" : "text-black"
                  } hover:text-blue-500`}
                >
                  {item.title}
                </a>
                <button
                  onClick={() => toggleMenu(index)}
                  className="absolute right-[28px]"
                >
                  <FiChevronDown
                    className={`transition-transform duration-400 text-[26px] ${
                      openIndex === index ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                  openIndex === index
                    ? "max-h-[600px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="block w-full h-auto p-[28px] text-[24px] font-[400] bg-[#f6f7fe]">
                  {item.sub.map((sub, i) => (
                    <li
                      key={i}
                      className="mb-5 first:mt-5 transition-colors duration-300"
                    >
                      <a
                        href="#"
                        className="block hover:text-blue-600 text-black"
                      >
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Header() {
  const [isGnbOpen, setIsGnbOpen] = useState(false);

  const openGnb = () => setIsGnbOpen(true);
  const closeGnb = () => setIsGnbOpen(false);
  return (
    <>
      <header className="fixed w-[100vw] h-[80px] bg-white z-50">
        <div className="flex items-center justify-between w-[80vw] h-full mx-auto">
          <h1 className="w-[200px] h-auto">
            <a href="#" className="block w-full h-full">
              <img
                src="/images/logo_header_on.png"
                alt="logo_header_on"
                className="w-full h-auto"
              />
            </a>
          </h1>
          <div className="flex items-center content-between gap-[35px]">
            <button className="hidden md:block">
              <img
                src="/images/btn_g_language_on.png"
                alt="btn_g_language_on"
                className="w-[30px] h-auto"
              />
            </button>
            <button className="hidden md:block">
              <img
                src="/images/btn_KeyInfo_pc.png"
                alt="btn_KeyInfo_pc"
                className="w-[100px] h-auto"
              />
            </button>
            <button>
              <img
                src="/images/btn_g_search_on.png"
                alt="btn_g_search_on"
                className="w-[30px] h-auto"
              />
            </button>
            <button onClick={openGnb}>
              <img
                src="/images/btn_g_sitemap_on.png"
                alt="btn_g_sitemap_on.png"
                className="w-[30px] h-auto"
              />
            </button>
          </div>
        </div>
      </header>
      <Gnb isOpen={isGnbOpen} onClose={closeGnb} />
    </>
  );
}

export default Header;
