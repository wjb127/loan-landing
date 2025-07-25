export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0a2263' }}>
      {/* Company Logo - Triangle Logo Image Fixed Position */}
      <div className="absolute inset-0 flex items-start justify-center" style={{ paddingTop: '300px' }}>
        <div>
          <img 
            src="/triangle-logo.png" 
            alt="Company Logo"
            className="w-48 h-36 object-contain"
          />
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-16 relative z-10">
        {/* Company registration info - positioned at the top with animation */}
        <div className="text-center mb-6">
          <div className="inline-block border-2 border-amber-400 border-opacity-70 rounded-full px-8 py-3 text-white text-sm backdrop-blur-sm animate-pulse" style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}>
주식회사 에이스 대부 중개법인 등록번호 2025-대구남구-0006
          </div>
        </div>

        {/* Main title - positioned below logo with animations */}
        <div className="text-center mb-12" style={{ marginTop: '420px' }}>
          <h1 className="text-amber-400 text-2xl font-medium mb-3 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '2s'}}>
            근로자 대상 안심대출
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - Bottom section with animations */}
        <div className="border border-amber-400 border-opacity-70 rounded-xl p-4 md:p-8 max-w-4xl mx-auto shadow-2xl backdrop-blur-md animate-bounce" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)', animationDelay: '1.5s', animationDuration: '2s'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="md:border-r border-amber-400 border-opacity-50 pb-4 md:pb-0 animate-pulse" style={{animationDelay: '2s'}}>
              <div className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-amber-600">금리</div>
              <div className="text-xs md:text-sm opacity-95 mb-1 md:mb-2">최저 연</div>
              <div className="text-2xl md:text-4xl font-bold text-amber-600 mb-1 animate-bounce" style={{animationDuration: '1s'}}>3.9%</div>
              <div className="text-xs md:text-sm opacity-95">부터</div>
            </div>
            <div className="md:border-r border-amber-400 border-opacity-50 pb-4 md:pb-0 animate-pulse" style={{animationDelay: '2.2s'}}>
              <div className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-amber-600">한도</div>
              <div className="text-xs md:text-sm opacity-95 mb-1 md:mb-2">최대</div>
              <div className="text-2xl md:text-4xl font-bold text-amber-600 mb-1 animate-bounce" style={{animationDuration: '1s'}}>1억원</div>
              <div className="text-xs md:text-sm opacity-95">집·자동차소유자는 한도2배</div>
            </div>
            <div className="animate-pulse" style={{animationDelay: '2.4s'}}>
              <div className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-amber-600">상환기간</div>
              <div className="text-xs md:text-sm opacity-95 mb-1 md:mb-2">최장</div>
              <div className="text-2xl md:text-4xl font-bold text-amber-600 mb-1 animate-bounce" style={{animationDuration: '1s'}}>10년</div>
              <div className="text-xs md:text-sm opacity-95"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}