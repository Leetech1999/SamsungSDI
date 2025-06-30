import { useEffect, useRef, useState } from "react";

function EsgSection() {
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

  // 요소별 등장 시간
  const delays = {
    title: 0,
    desc: 200,
    box1: 400,
    box2: 600,
    box3: 800,
    box4: 1000,
  };

  return (
    <section
      ref={sectionRef}
      className="w-full h-auto z-50 text-white pt-[100px] font-sans"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div
          className={`${inView ? animOn : baseAnim} w-full mb-[20px]`}
          style={{ transitionDelay: `${delays.title}ms` }}
        >
          <h1 className="font-[700] text-[48px] sm:text-[64px] md:text-[80px]">
            ESG
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`${inView ? animOn : baseAnim} w-full mb-[70px]`}
          style={{ transitionDelay: `${delays.desc}ms` }}
        >
          <span className="font-[400] text-[18px] sm:text-[22px] md:text-[28px] block">
            삼성SDI는 환경, 사회, 지배구조 영역에서 리더십을 가지고 지속가능한
            발전을 통해 인류 사회에 공헌하고자 노력합니다.
          </span>
        </div>

        {/* Boxes */}
        <div className="flex flex-wrap w-full gap-3 sm:flex-nowrap">
          {[1, 2, 3, 4].map((num, i) => {
            const bg = `/images/cont_item_esg_0${num}.png`;
            const labels = ["ESG 전략", "환경", "사회", "지배구조"];
            const delay = delays[`box${num}`];

            return (
              <div
                key={num}
                className={`${
                  inView ? animOn : baseAnim
                } w-[calc(50%-6px)] h-[200px] overflow-hidden rounded-[20px] relative sm:w-[calc(25%-6px)] lg:h-[440px] xl:h-[440px]`}
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transitionDelay: `${delay}ms`,
                }}
              >
                <a href="#" className="block w-full h-full">
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[25px] sm:text-[18px] lg:text-[25px] xl:text-[30px] text-white">
                    {labels[i]}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default EsgSection;
