import { useEffect, useRef, useState } from "react";

function BusinessItem({ title, image, imageMobile, delay = 0, trigger }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 680);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 680);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const displayedImage = isMobile ? imageMobile : image;

  const delayClass =
    {
      0: "delay-[0ms]",
      300: "delay-[300ms]",
      500: "delay-[500ms]",
      700: "delay-[700ms]",
    }[delay] || "delay-[0ms]";

  return (
    <button
      className={`relative w-full max-w-[665px] transition-all duration-700 ease-out
        ${
          trigger
            ? `opacity-100 translate-y-0 animate-fadeUp ${delayClass}`
            : "opacity-0 translate-y-8"
        }
      `}
    >
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[6vw] sm:text-[30px] font-bold text-white z-10">
        {title}
      </span>
      <img
        src={displayedImage}
        alt={title}
        className="business-img w-full h-auto object-cover rounded-none"
      />
    </button>
  );
}

function BusinessSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-auto z-50 text-white pt-[100px] font-sans"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col text-left gap-10 mb-[80px]">
          <h1
            className={`font-[700] text-[48px] sm:text-[64px] md:text-[80px] transition-all duration-700
              ${
                inView
                  ? "opacity-100 translate-y-0 animate-fadeUp delay-[100ms]"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            BUSINESS
          </h1>
          <span
            className={`font-[400] text-[18px] sm:text-[22px] md:text-[28px] transition-all duration-700
              ${
                inView
                  ? "opacity-100 translate-y-0 animate-fadeUp delay-[300ms]"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            초격차 기술경쟁력으로 최고의 품질을 만듭니다.
          </span>
        </div>
        <div className="flex gap-10 justify-center max-[680px]:flex-wrap">
          <BusinessItem
            title="배터리"
            image="/images/cont_item_business_01.png"
            imageMobile="/images/cont_item_business_01_mo.png"
            delay={500}
            trigger={inView}
          />
          <BusinessItem
            title="전자재료"
            image="/images/cont_item_business_02.png"
            imageMobile="/images/cont_item_business_02_mo.png"
            delay={700}
            trigger={inView}
          />
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;
