import { useEffect, useRef, useState } from "react";

function CareerSection() {
  const commonCardClass =
    "lg:w-[331px] h-[331px] bg-white rounded-[15px] p-[40px] text-black flex flex-col";

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

  const delays = {
    title: 0,
    subtitle: 300,
    firstButton: 600,
    secondButton: 900,
    thirdButton: 1200,
  };

  const baseAnimClasses = "opacity-0 translate-y-8";
  const animOnViewClasses =
    "opacity-100 translate-y-0 transition-all duration-[1000ms] ease-out";

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-[50vh] z-50 text-white font-sans mt-[100px]"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 제목 */}
        <div
          className={`w-full mb-[70px] ${
            inView ? animOnViewClasses : baseAnimClasses
          }`}
          style={{ transitionDelay: `${delays.title}ms` }}
        >
          <h1 className="font-[700] text-[48px] sm:text-[64px] md:text-[80px]">
            CAREER
          </h1>
        </div>

        {/* 부제목 */}
        <span
          className={`font-[400] text-[18px] sm:text-[22px] md:text-[28px] block mb-[40px] ${
            inView ? animOnViewClasses : baseAnimClasses
          }`}
          style={{ transitionDelay: `${delays.subtitle}ms` }}
        >
          인재의 가치를 부여하고 존중합니다.
        </span>

        {/* 카드들 */}
        <div className="w-full flex gap-[25px] flex-wrap lg:flex-nowrap">
          {/* 인재상 카드 */}
          <button
            className={`lg:w-[663px] h-[331px] rounded-[15px] overflow-hidden flex flex-col w-full ${
              inView ? animOnViewClasses : baseAnimClasses
            }`}
            style={{ transitionDelay: `${delays.firstButton}ms` }}
          >
            <div
              className="flex gap-10 bg-[#283895] p-[40px] items-center h-[30%]"
              style={{ flexShrink: 0 }}
            >
              <h3 className="font-bold text-[20px] sm:text-[24px] md:text-[28px] text-white">
                인재상
              </h3>
              <p className="font-normal text-[14px] sm:text-[16px] md:text-[18px] text-white">
                인재가 기업을 변화 시킨다.
              </p>
            </div>
            <ul className="flex p-[30px] bg-white text-black flex-row w-full h-full justify-center gap-[100px] text-[14px] sm:text-[16px] md:text-[17px] font-semibold">
              {[
                {
                  src: "/images/ico_career01.png",
                  alt: "열정과 도전 아이콘",
                  text: "열정과 도전",
                },
                {
                  src: "/images/ico_career02.png",
                  alt: "창의와 혁신 아이콘",
                  text: "창의와 혁신",
                },
                {
                  src: "/images/ico_career03.png",
                  alt: "인간미와 도덕성 아이콘",
                  text: "인간미와 도덕성",
                },
              ].map(({ src, alt, text }) => (
                <li
                  key={text}
                  className="w-[120px] h-[120px] flex flex-col gap-5"
                >
                  <img src={src} alt={alt} className="w-full h-full" />
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </button>

          {/* 삼성SDI Life 카드 */}
          <button
            className={`${commonCardClass} w-[calc(50%-12.5px)] ${
              inView ? animOnViewClasses : baseAnimClasses
            }`}
            style={{ transitionDelay: `${delays.secondButton}ms` }}
          >
            <div className="flex flex-col gap-2 flex-1 text-left">
              <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-bold flex items-center">
                <span>삼성SDI Life</span>
              </h3>
              <p className="mb-[100px] text-[14px] sm:text-[16px] md:text-[20px]">
                SDI인의 생생한 인터뷰
              </p>
              <img
                src="/images/ico_career04.png"
                alt="삼성SDI Life 아이콘"
                className="w-[60px] h-[60px] ml-auto"
                style={{ flexShrink: 0 }}
              />
            </div>
          </button>

          {/* 채용공고 카드 */}
          <button
            className={`${commonCardClass} w-[calc(50%-12.5px)] ${
              inView ? animOnViewClasses : baseAnimClasses
            }`}
            style={{ transitionDelay: `${delays.thirdButton}ms` }}
          >
            <div className="flex flex-col gap-2 flex-1 text-left">
              <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-bold flex items-center">
                <span>채용 공고</span>
                <img
                  src="/images/ico_career_outlink.png"
                  alt="외부 링크 아이콘"
                  className="w-[28px] h-[28px] ml-2 mb-0"
                  style={{ flexShrink: 0 }}
                />
              </h3>
              <p className="mb-[100px] text-[14px] sm:text-[16px] md:text-[20px]">
                채용공고 보러가기
              </p>
              <img
                src="/images/ico_career05.png"
                alt="채용 공고 아이콘"
                className="w-[60px] h-[60px] ml-auto"
                style={{ flexShrink: 0 }}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CareerSection;
