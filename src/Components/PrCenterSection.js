import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../App.css";

import { FreeMode, Pagination } from "swiper/modules";

function PrCenterSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const baseAnim = "opacity-0 translate-y-8";
  const animOn =
    "opacity-100 translate-y-0 transition-all duration-[1000ms] ease-out";

  // 애니메이션 딜레이(ms)
  const delays = {
    title: 0,
    subtitle: 200,
    swiper: 400,
  };

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-screen z-50 text-white font-sans mt-[100px]"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`${inView ? animOn : baseAnim} w-full mb-[70px]`}
          style={{ transitionDelay: `${delays.title}ms` }}
        >
          <h1 className="font-[700] text-[48px] sm:text-[64px] md:text-[80px]">
            PR Center
          </h1>
          <span
            className="font-[400] text-[18px] sm:text-[22px] md:text-[28px]"
            style={{ display: "block", marginTop: "8px" }}
          >
            새로운 소식을 알려드립니다.
          </span>
        </div>
      </div>

      <div
        className={`${
          inView ? animOn : baseAnim
        } max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8`}
        style={{ transitionDelay: `${delays.swiper}ms` }}
      >
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          freeMode={true}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="h-[730px] !overflow-visible px-4 sm:px-6 lg:px-8"
        >
          <SwiperSlide className="h-auto !w-[400px]">
            <a href="#" className="block w-full">
              <div className="w-full rounded-[30px] overflow-hidden">
                <img
                  src="/images/imageView1.jfif"
                  alt="imageView1"
                  className="block w-full h-[300px]"
                />
                <div className="bg-white text-black p-10 flex flex-col gap-6">
                  <span className="text-[rgb(67,92,231)] text-[20px] font-bold">
                    News
                  </span>
                  <h3 className="text-[26px] font-bold tracking-[-0.25px] leading-tight">
                    삼성SDI, 유럽 최대 상업용 ESS업체에 'SBB'공급
                  </h3>
                  <p className="text-[20px] leading-[1.4] line-clamp-3 text-[rgb(102,102,102)]">
                    ​□ 독일 테스볼트와 공급 계약 체결…하반기 이후 추가 수주
                    추진□ 안전성·품질 등 글로벌 최고 수준 배터리 기술력 인정□
                    "제품 경쟁력 기반으로 글로벌 ESS 시장 공략
                    가속화"&nbsp;삼성SDI는 독일의 상업용 ESS(에너지저장...
                  </p>
                  <span className="text-[rgb(136,136,136)] text-[18px]">
                    2025.06.11
                  </span>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="h-auto !w-[400px]">
            <a href="#" className="block w-full">
              <div className="w-full rounded-[30px] overflow-hidden">
                <img
                  src="/images/imageView2.jfif"
                  alt="imageView2"
                  className="block w-full h-[300px]"
                />
                <div className="bg-white text-black p-10 flex flex-col gap-6">
                  <span className="text-[rgb(67,92,231)] text-[20px] font-bold">
                    News
                  </span>
                  <h3 className="text-[26px] font-bold tracking-[-0.25px] leading-tight line-clamp-2">
                    삼성SDI, 유럽 최대 에너지 전시회서 혁신상 수상…국내 업체로는
                    유일 '어워드 위너
                  </h3>
                  <p className="text-[20px] leading-[1.4] line-clamp-3 text-[rgb(102,102,102)]">
                    □ 고출력 UPS용 신제품 'U8A1', 열전파 차단 안전성 기술 'No
                    TP' 등 혁신 기술로 '더 스마터 E 어워드 2025' 영예□ 올해 5개
                    부문 총 14개 제품·기술 선정…참가업체中 유일 복수 수상 □
                    \"...
                  </p>
                  <span className="text-[rgb(136,136,136)] text-[18px]">
                    2025.05.07
                  </span>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="h-auto !w-[400px]">
            <a href="#" className="block w-full">
              <div className="w-full rounded-[30px] overflow-hidden">
                <img
                  src="/images/imageView3.jfif"
                  alt="imageView3"
                  className="block w-full h-[300px]"
                />
                <div className="bg-white text-black p-10 flex flex-col gap-6">
                  <span className="text-[rgb(67,92,231)] text-[20px] font-bold">
                    News
                  </span>
                  <h3 className="text-[26px] font-bold tracking-[-0.25px] leading-tight line-clamp-2">
                    삼성SDI, 'AI 시대 정조준' 차세대 배터리 공개- 인터배터리
                    유럽 2025 참가 -
                  </h3>
                  <p className="text-[20px] leading-[1.4] line-clamp-3 text-[rgb(102,102,102)]">
                    □ AI 데이터센터 UPS용 배터리, 안전성 강화 SBB 등 전시□ 5개
                    전시존에 차별화된 신제품 라인업·친환경 기술 공개□ \"AI
                    시대에 최적화된 혁신 제품·기술로 시장 선도\" 삼성SDI가
                    인공지능(AI) 시대에 각광받고...
                  </p>
                  <span className="text-[rgb(136,136,136)] text-[18px]">
                    2025.05.06
                  </span>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="h-auto !w-[400px]">
            <a href="#" className="block w-full">
              <div className="w-full rounded-[30px] overflow-hidden">
                <img
                  src="/images/imageView4.jfif"
                  alt="imageView4"
                  className="block w-full h-[300px]"
                />
                <div className="bg-white text-black p-10 flex flex-col gap-6">
                  <span className="text-[rgb(67,92,231)] text-[20px] font-bold">
                    News
                  </span>
                  <h3 className="text-[26px] font-bold tracking-[-0.25px] leading-tight line-clamp-2">
                    언제나 연결된 배터리 기술, Always ON… 삼성SDI, 인터배터리
                    유럽서 혁신 기술 소개
                  </h3>
                  <p className="text-[20px] leading-[1.4] line-clamp-3 text-[rgb(102,102,102)]">
                    □ 내달 7~9일 독일 뮌헨서 유럽시장 겨냥 고성능 ESS용 배터리
                    전시 □ AI 데이터센터에 최적화된 UPS용 배터리, 안전성 기술 등
                    공개□ 우수제품·기술 대상 '더 스마터 E어워드' 최종
                    후보…국내업계 유일 ...
                  </p>
                  <span className="text-[rgb(136,136,136)] text-[18px]">
                    2025.04.28
                  </span>
                </div>
              </div>
            </a>
          </SwiperSlide>

          <SwiperSlide className="h-auto !w-[400px]">
            <a href="#" className="block w-full">
              <div className="w-full rounded-[30px] overflow-hidden">
                <img
                  src="/images/imageView5.jfif"
                  alt="imageView5"
                  className="block w-full h-[300px]"
                />
                <div className="bg-white text-black p-10 flex flex-col gap-6">
                  <span className="text-[rgb(67,92,231)] text-[20px] font-bold">
                    News
                  </span>
                  <h3 className="text-[26px] font-bold tracking-[-0.25px] leading-tight line-clamp-2">
                    삼성SDI, 2025년 1분기 실적 발표
                  </h3>
                  <p className="text-[20px] leading-[1.4] line-clamp-3 text-[rgb(102,102,102)]">
                    □ [1분기] 매출 3조 1,768억 원, 영업손실 4,341억 원 - 고객
                    재고 조정, 계절적 비수기 등 영향으로 매출 및 수익성 하락□
                    [2분기] 전방 수요 회복으로 실적 개선 기대, 불확실성도 지속 -
                    하이니...
                  </p>
                  <span className="text-[rgb(136,136,136)] text-[18px]">
                    2025.04.25
                  </span>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default PrCenterSection;
