import { useEffect, useRef, useState } from "react";

function IrSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const delays = {
    title: 0,
    subtitleAndButtonWrapper: 300,
    mainContent: 600,
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
          className={`${
            inView ? animOnViewClasses : baseAnimClasses
          } w-full mb-[70px]`}
          style={{ transitionDelay: `${delays.title}ms` }}
        >
          <h1 className="font-[700] text-[48px] sm:text-[64px] md:text-[80px]">
            IR
          </h1>

          {/* 부제목 + 버튼 */}
          <div
            className={`${
              inView ? animOnViewClasses : baseAnimClasses
            } w-full flex flex-col gap-4 2xl:flex-row 2xl:justify-between 2xl:items-end mt-4`}
            style={{ transitionDelay: `${delays.subtitleAndButtonWrapper}ms` }}
          >
            <span className="font-[400] text-[18px] sm:text-[22px] md:text-[28px]">
              투명한 소통을 통해 주주의 이익과 기업의 가치를 제고합니다.
            </span>
            <div className="flex justify-start 2xl:justify-end">
              <button className="flex items-center gap-4 border-b border-white rounded-none h-auto pb-1">
                <p className="font-[400] text-[16px] sm:text-[18px] md:text-[20px]">
                  배당금조회
                </p>
                <img
                  src="/images/ico_inquire01.png"
                  alt="ico_inquire01"
                  className="w-[22px] h-[22px]"
                />
              </button>
            </div>
          </div>
        </div>

        {/* 메인 그리드 콘텐츠 */}
        <div
          className={`${
            inView ? animOnViewClasses : baseAnimClasses
          } w-full grid grid-cols-1 xl:grid-cols-[668px_repeat(3,216px)] gap-[20px] text-black`}
          style={{ transitionDelay: `${delays.mainContent}ms` }}
        >
          {/* 실시간 주가정보 */}
          <div className="bg-white rounded-[20px] flex p-6 md:p-10 justify-between min-h-[216px]">
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-[20px] sm:text-[24px] font-bold">
                실시간 주가정보
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-end sm:gap-[80px]">
                <p className="text-[20px] sm:text-[24px] font-bold leading-tight">
                  <strong className="text-[50px] sm:text-[70px] font-bold">
                    175,000
                  </strong>
                  <span className="ml-1 text-[20px] sm:text-[24px]">원</span>
                </p>
                <div className="flex flex-row gap-20 sm:flex-col sm:gap-3 items-center text-[16px] sm:text-[20px] mt-2 sm:mt-4">
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <span className="text-[#666] whitespace-nowrap">
                      전일대비
                    </span>
                    <span className="flex items-center gap-1">
                      <img
                        src="/images/arrow_down.png"
                        alt="arrow_down"
                        className="w-[15px] h-[15px]"
                      />
                      <p className="text-blue-900">1,800</p>
                    </span>
                  </div>
                  <span className="flex flex-col sm:flex-row sm:gap-5 sm:mt-2">
                    <p className="text-[#666] whitespace-nowrap">등락률(%)</p>
                    <p className="text-blue-900">-1.02%</p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 세 개의 버튼 카드 */}
          {[
            { label: "IR 정보", icon: "ico_ir01.png" },
            { label: "주식 정보", icon: "ico_ir02.png" },
            { label: "재무 정보", icon: "ico_ir03.png" },
          ].map((item, idx) => (
            <button
              key={item.label}
              className="bg-white rounded-[20px] w-full h-[160px] sm:h-[216px]"
            >
              <div className="flex flex-col items-center justify-center w-full h-full gap-[20px]">
                <img
                  src={`/images/${item.icon}`}
                  alt={item.label}
                  className="w-[35px] h-[35px]"
                />
                <span className="text-[18px] sm:text-[23px] font-bold">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IrSection;
