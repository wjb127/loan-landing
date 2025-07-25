export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-1 bg-amber-400 transform rotate-45 opacity-20"></div>
      <div className="absolute top-40 right-20 w-24 h-1 bg-amber-300 transform rotate-12 opacity-25"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-amber-200 rounded-full opacity-10"></div>
      <div className="absolute bottom-60 right-40 w-8 h-8 bg-amber-500 rounded-full opacity-15"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 relative z-10">
        {/* Company Logo Section */}
        <div className="text-center mb-12">
          {/* Main Company Logo */}
          <div className="mb-8">
            <svg width="120" height="120" viewBox="0 0 200 200" className="mx-auto mb-6">
              {/* Logo Background - subtle */}
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9"/>
                  <stop offset="50%" stopColor="#D97706" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#B45309" stopOpacity="0.7"/>
                </linearGradient>
              </defs>
              
              {/* Main triangular logo structure */}
              <g transform="translate(100, 100)">
                {/* Outer triangle structure */}
                <path d="M 0,-60 L -52,30 L 52,30 Z" fill="url(#logoGradient)" stroke="none"/>
                
                {/* Inner geometric pattern */}
                <path d="M 0,-40 L -35,20 L 0,0 L 35,20 Z" fill="#1E293B" fillOpacity="0.8"/>
                <path d="M 0,-20 L -17,10 L 0,5 L 17,10 Z" fill="url(#logoGradient)" fillOpacity="0.6"/>
                
                {/* Center accent */}
                <circle cx="0" cy="-10" r="3" fill="#F59E0B"/>
              </g>
            </svg>
            
            <div className="text-center">
              <div className="text-amber-400 text-3xl font-bold mb-2">㈜ 에이스함동</div>
              <div className="text-slate-300 text-base font-medium mb-1">프랜차이즈 설립 | 부동산 중개</div>
              <div className="text-slate-300 text-base font-medium">정책자금 | 매출채권 유동화</div>
            </div>
          </div>
          
          <div className="inline-block border-2 border-amber-400 border-opacity-40 rounded-full px-6 py-2 text-slate-300 text-sm bg-blue-900 bg-opacity-30 backdrop-blur-sm">
            주식회사 에이스대부중개법인 등록번호 2025-대구남구-0006
          </div>
        </div>

        {/* Main title */}
        <div className="text-center mb-12">
          <h1 className="text-amber-400 text-2xl font-medium mb-2">
            근로자 대상 안심대출
          </h1>
          <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - Dark Navy Theme */}
        <div className="bg-blue-900 bg-opacity-80 border border-amber-400 border-opacity-50 rounded-lg p-8 max-w-4xl mx-auto shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            <div className="border-r border-amber-400 border-opacity-40">
              <div className="text-xl font-semibold mb-3 text-amber-400">금리</div>
              <div className="text-sm opacity-90 mb-2">최저 연</div>
              <div className="text-4xl font-bold text-amber-400 mb-1">3.9%</div>
              <div className="text-sm opacity-90">부터</div>
            </div>
            <div className="border-r border-amber-400 border-opacity-40">
              <div className="text-xl font-semibold mb-3 text-amber-400">한도</div>
              <div className="text-sm opacity-90 mb-2">최대</div>
              <div className="text-4xl font-bold text-amber-400 mb-1">1억원</div>
              <div className="text-sm opacity-90">집·자동차소유자는 한도2배</div>
            </div>
            <div>
              <div className="text-xl font-semibold mb-3 text-amber-400">상환기간</div>
              <div className="text-sm opacity-90 mb-2">최장</div>
              <div className="text-4xl font-bold text-amber-400 mb-1">10년</div>
              <div className="text-sm opacity-90"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}