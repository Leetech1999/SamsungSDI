function MainVisual() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center gap-4"
      style={{ backgroundImage: "url('/images/visual_main.png')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

      {/* First text animation */}
      <p
        className="text-white text-center mx-auto px-4 max-w-[90%] md:max-w-[1000px] lg:max-w-[1280px] leading-relaxed z-20
        opacity-0 translate-y-8 animate-fadeUp"
        style={{
          fontSize: "clamp(1.25rem, 2.5vw, 3.5rem)",
          fontFamily: "Samsung Sans",
          fontWeight: "bold",
        }}
      >
        To make the world greener and sustainable through our innovative
        technology
      </p>

      {/* Second text animation with slight delay */}
      <p
        className="text-white text-center mx-auto px-4 max-w-[90%] md:max-w-[1000px] lg:max-w-[1280px] leading-relaxed z-20
        opacity-0 translate-y-8 animate-fadeUp delay-300"
        style={{
          fontSize: "clamp(1.25rem, 2.5vw, 2.2rem)",
          fontFamily: "Samsung Sans",
          fontWeight: "bold",
        }}
      >
        초격차 기술력을 통해 지속가능한 · 친환경 미래 사회 구현
      </p>
    </section>
  );
}

export default MainVisual;
