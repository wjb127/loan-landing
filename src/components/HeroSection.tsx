export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
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
          <div className="inline-block border-2 border-blue-900 rounded-full px-4 md:px-8 py-3 md:py-3 text-white text-xs md:text-sm backdrop-blur-sm animate-slideUp animation-delay-100" style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)' }}>
            <div className="block">주식회사 에이스대부중개법인</div>
            <div className="block">등록번호2025-대구남구-0006</div>
          </div>
        </div>

        {/* Main title - slide up with delay */}
        <div className="text-center mb-8 md:mb-12" style={{ marginTop: '100px' }}>
          <h1 className="text-blue-900 text-3xl md:text-2xl font-bold mb-3 animate-slideUp animation-delay-300">
            근로자 대상 안심대출
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg animate-slideUp animation-delay-500">
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - slide up with staggered delay */}
        <div className="border-2 border-blue-900 rounded-xl p-4 md:p-8 max-w-4xl mx-auto shadow-2xl backdrop-blur-md animate-slideUp animation-delay-700" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="md:border-r border-blue-900 border-opacity-50 pb-4 md:pb-0">
              <div className="text-xl md:text-xl font-bold mb-2 md:mb-3 text-blue-900">금리</div>
              <div className="text-sm md:text-sm opacity-95 mb-1 md:mb-2">최저 연</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">3.9%</div>
              <div className="text-sm md:text-sm opacity-95">부터</div>
            </div>
            <div className="md:border-r border-blue-900 border-opacity-50 pb-4 md:pb-0">
              <div className="text-xl md:text-xl font-bold mb-2 md:mb-3 text-blue-900">한도</div>
              <div className="text-sm md:text-sm opacity-95 mb-1 md:mb-2">최대</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">1억원</div>
              <div className="text-sm md:text-sm opacity-95">집·자동차소유자는 한도2배</div>
            </div>
            <div>
              <div className="text-xl md:text-xl font-bold mb-2 md:mb-3 text-blue-900">상환기간</div>
              <div className="text-sm md:text-sm opacity-95 mb-1 md:mb-2">최장</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1">10년</div>
              <div className="text-sm md:text-sm opacity-95"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}