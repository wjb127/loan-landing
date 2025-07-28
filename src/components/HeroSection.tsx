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
        <div className="text-center mb-8 md:mb-12" style={{ marginTop: '100px' }}>
          <h1 className="text-blue-900 text-3xl md:text-2xl font-bold mb-3 animate-slideInLeft animation-delay-100">
            근로자 대상 안심대출
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg animate-slideInRight animation-delay-150">
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - mobile card design */}
        <div className="mt-12 md:mt-0 border-2 border-blue-900 rounded-xl max-w-4xl mx-auto shadow-2xl backdrop-blur-md animate-scaleIn animation-delay-200 overflow-hidden" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
          <div className="grid grid-cols-3">
            {/* 금리 섹션 */}
            <div className="py-6 px-3 md:p-8 text-center border-r border-white animate-fadeIn animation-delay-250">
              <div className="text-sm md:text-xl font-bold mb-3 md:mb-3 text-blue-900">금리</div>
              <div className="text-xs md:text-base text-gray-700">최저 연 <span className="text-sm md:text-2xl font-bold text-blue-900 whitespace-nowrap">3.9% 부터</span></div>
            </div>
            
            {/* 한도 섹션 */}
            <div className="py-6 px-3 md:p-8 text-center border-r border-white animate-fadeIn animation-delay-300">
              <div className="text-sm md:text-xl font-bold mb-3 md:mb-3 text-blue-900">한도</div>
              <div className="text-xs md:text-base text-gray-700 mb-2">최대 <span className="text-sm md:text-2xl font-bold text-blue-900">1억원</span></div>
              <div className="text-xs md:text-sm text-gray-700">집·자동차<br/>소유자는 한도2배</div>
            </div>
            
            {/* 상환기간 섹션 */}
            <div className="py-6 px-3 md:p-8 text-center animate-fadeIn animation-delay-350">
              <div className="text-sm md:text-xl font-bold mb-3 md:mb-3 text-blue-900">상환기간</div>
              <div className="text-xs md:text-base text-gray-700">최장 <span className="text-sm md:text-2xl font-bold text-blue-900">10년</span></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}