function FooterSection() {
  return (
    <footer
      className="
        w-full bg-[#000000] text-[#CCCCCC] font-sans
        h-[70vh] xsm:h-[45vh] xmd:h-[36vh] xl:h-[30vh]
        py-10 px-6
        flex flex-col justify-between
        select-none
      "
    >
      <div className="max-w-[1440px] mx-auto w-full">
        <ul className="flex flex-wrap gap-x-8 gap-y-4 text-[16px] mb-16 md:px-6 ">
          {[
            "윤리 · 준법경영",
            "파트너사",
            "개인정보 처리방침",
            "고객센터",
            "사이트맵",
            "보안신고센터",
            "B2B대금결제",
            "공지사항",
            "재방객 신청 시스템",
            "Battery Safety Information",
          ].map((text, idx) => (
            <li key={idx} className="w-[240px] sm:w-[240px]">
              <a
                href="#"
                className={`block transition-colors duration-300 ${
                  text === "개인정보 처리방침"
                    ? "text-white font-semibold"
                    : "hover:text-white"
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-[1440px] mx-auto w-full flex justify-between items-center border-t border-[#333333] pt-6 px-6">
        <address className="not-italic text-[14px] leading-relaxed text-[#999999]">
          <p>삼성SDI(주) : 경기도 용인시 기흥구 공세로 150-20[17084]</p>
          <p>Copyright &copy; 2024 Samsung SDI. All Rights Reserved.</p>
        </address>
        <a href="#" className="block">
          <img
            src="/images/logo_wa.png"
            alt="Samsung SDI Logo"
            className="w-[90px] h-auto"
          />
        </a>
      </div>
    </footer>
  );
}

export default FooterSection;
