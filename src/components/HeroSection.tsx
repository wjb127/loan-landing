export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#1a2332' }}>
      {/* Company Logo Image - Positioned Higher */}
      <div className="absolute inset-0 flex items-start justify-center pt-24">
        <div 
          className="w-96 h-64 bg-contain bg-center bg-no-repeat opacity-95"
          style={{
            backgroundImage: "url('/company-logo-bg.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-16 relative z-10">
        {/* Company registration info - positioned at the top */}
        <div className="text-center mb-6">
          <div className="inline-block border-2 border-amber-400 border-opacity-70 rounded-full px-8 py-3 text-white text-sm backdrop-blur-sm" style={{ backgroundColor: 'rgba(26, 35, 50, 0.8)' }}>
주식회사 에이스합동 등록번호 2025-대구남구-0006
          </div>
        </div>

        {/* Main title - positioned below logo */}
        <div className="text-center mb-12 mt-72">
          <h1 className="text-amber-400 text-2xl font-medium mb-3">
            근로자 대상 안심대출
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - Bottom section */}
        <div className="border border-amber-400 border-opacity-70 rounded-xl p-8 max-w-4xl mx-auto shadow-2xl backdrop-blur-md" style={{ backgroundColor: 'rgba(26, 35, 50, 0.95)' }}>
          <div className="grid grid-cols-3 gap-8 text-center text-white">
            <div className="border-r border-amber-400 border-opacity-50">
              <div className="text-xl font-bold mb-3 text-amber-400">금리</div>
              <div className="text-sm opacity-95 mb-2">최저 연</div>
              <div className="text-4xl font-bold text-amber-400 mb-1">3.9%</div>
              <div className="text-sm opacity-95">부터</div>
            </div>
            <div className="border-r border-amber-400 border-opacity-50">
              <div className="text-xl font-bold mb-3 text-amber-400">한도</div>
              <div className="text-sm opacity-95 mb-2">최대</div>
              <div className="text-4xl font-bold text-amber-400 mb-1">1억원</div>
              <div className="text-sm opacity-95">집·자동차소유자는 한도2배</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-3 text-amber-400">상환기간</div>
              <div className="text-sm opacity-95 mb-2">최장</div>
              <div className="text-4xl font-bold text-amber-400 mb-1">10년</div>
              <div className="text-sm opacity-95"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}