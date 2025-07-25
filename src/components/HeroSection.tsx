export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#1a237e' }}>
      {/* Company Logo - New Golden Triangle Design */}
      <div className="absolute inset-0 flex items-start justify-center pt-24">
        <div className="animate-bounce" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}>
          <svg className="w-80 h-64" viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFA500" />
                <stop offset="100%" stopColor="#B8860B" />
              </linearGradient>
            </defs>
            {/* Interlocked Triangle Design */}
            <g transform="translate(200, 160)">
              {/* Left Triangle */}
              <path d="M-120 40 L-40 -80 L-40 40 L-80 40 L-40 80 L-120 80 Z" 
                    fill="url(#goldGradient)" 
                    opacity="0.9"/>
              {/* Center Triangle */}
              <path d="M-40 -80 L40 -80 L0 40 L-40 40 Z" 
                    fill="url(#goldGradient)" 
                    opacity="0.95"/>
              {/* Right Triangle */}
              <path d="M40 -80 L120 40 L120 80 L40 80 L40 40 L80 40 Z" 
                    fill="url(#goldGradient)" 
                    opacity="0.9"/>
              {/* Bottom Triangle */}
              <path d="M-40 40 L0 40 L40 40 L0 120 Z" 
                    fill="url(#goldGradient)" 
                    opacity="0.85"/>
            </g>
          </svg>
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
        <div className="text-center mb-12 mt-72">
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