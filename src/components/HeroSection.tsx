export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      {/* Company Logo Image - Centered and Properly Sized */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-96 h-64 bg-contain bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('/company-logo-bg.png')",
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        />
      </div>
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/50"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 relative z-10">
        {/* Company registration info */}
        <div className="text-center mb-8">
          <div className="inline-block border-2 border-amber-400 border-opacity-70 rounded-full px-8 py-3 text-white text-sm bg-blue-950 bg-opacity-60 backdrop-blur-sm">
주식회사 에이스합동 등록번호 2025-대구남구-0006
          </div>
        </div>

        {/* Main title - positioned to not overlap with logo */}
        <div className="text-center mb-12 mt-80">
          <h1 className="text-amber-400 text-2xl font-medium mb-3">
            근로자 대상 안심대출
          </h1>
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - Bottom section */}
        <div className="bg-blue-950 bg-opacity-95 border border-amber-400 border-opacity-70 rounded-xl p-8 max-w-4xl mx-auto shadow-2xl backdrop-blur-md">
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