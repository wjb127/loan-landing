export default function HeroSection() {
  return (
    <section className="min-h-[80vh] md:min-h-screen relative overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/alternative-logo.jpg)',
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-16 pb-16 relative z-10">
        {/* Company registration info - slide up animation */}
        <div className="text-center mb-6">
          <div className="inline-block border-2 border-blue-900 rounded-full px-4 md:px-8 py-3 md:py-3 text-white text-sm md:text-base backdrop-blur-sm animate-fadeIn animation-delay-50" style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)' }}>
            <div className="block">주식회사 에이스대부중개법인</div>
            <div className="block">등록번호2025-대구남구-0006</div>
          </div>
        </div>

        {/* Main title - slide up with delay */}
        <div className="text-center mb-8 md:mb-12" style={{ marginTop: '120px' }}>
          <h1 className="text-blue-900 text-3xl md:text-2xl font-bold mb-3 animate-slideInLeft animation-delay-100">
            근로자 대상 안심대출
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg animate-slideInRight animation-delay-150">
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - mobile card design */}
        <div className="border-2 border-blue-900 rounded-xl max-w-4xl mx-auto shadow-2xl backdrop-blur-md animate-scaleIn animation-delay-200 overflow-hidden mt-12 md:-mt-4" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
          <div className="grid grid-cols-3">
            {/* 금리 섹션 */}
            <div className="py-6 px-3 md:p-8 text-center border-r border-white animate-fadeIn animation-delay-250">
              <div className="text-base md:text-2xl font-bold mb-3 md:mb-3 text-blue-900">금리</div>
              <div className="text-xs md:text-base text-gray-700 whitespace-nowrap leading-tight">
                최저 연 <span className="text-xs md:text-2xl font-bold text-blue-900">3.9%</span> 부터
              </div>
            </div>
            
            {/* 한도 섹션 */}
            <div className="py-6 px-3 md:p-8 text-center border-r border-white animate-fadeIn animation-delay-300">
              <div className="text-base md:text-2xl font-bold mb-3 md:mb-3 text-blue-900">한도</div>
              <div className="text-[10px] md:text-base text-gray-700 mb-2">최대 <span className="text-xs md:text-2xl font-bold text-blue-900">1억원</span></div>
              <div className="text-[10px] md:text-sm text-gray-700">집·자동차<br/>소유자는 한도2배</div>
            </div>
            
            {/* 상환기간 섹션 */}
            <div className="py-6 px-3 md:p-8 text-center animate-fadeIn animation-delay-350">
              <div className="text-base md:text-2xl font-bold mb-3 md:mb-3 text-blue-900">상환기간</div>
              <div className="text-[10px] md:text-base text-gray-700">최장 <span className="text-xs md:text-2xl font-bold text-blue-900">10년</span></div>
            </div>
          </div>
        </div>

        {/* 통화하기 버튼 */}
        <div className="text-center mt-6 md:mt-8 animate-fadeIn animation-delay-400">
          <a 
            href="tel:1577-8505" 
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            바로 통화하기
            <span className="text-base md:text-lg">1577-8505</span>
          </a>
        </div>

      </div>
    </section>
  )
}