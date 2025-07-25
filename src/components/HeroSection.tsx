export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/company-logo-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-16 relative z-10">
        {/* Company registration info */}
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-amber-400 border-opacity-60 rounded-full px-8 py-3 text-white text-sm bg-blue-900 bg-opacity-40 backdrop-blur-sm">
주식회사 에이스합동 등록번호 2025-대구남구-0006
          </div>
        </div>

        {/* Main title */}
        <div className="text-center mb-16">
          <h1 className="text-amber-400 text-3xl font-medium mb-4">
            근로자 대상 안심대출
          </h1>
          <h2 className="text-white text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - Overlay on background */}
        <div className="bg-blue-950 bg-opacity-90 border border-amber-400 border-opacity-60 rounded-lg p-10 max-w-5xl mx-auto shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-3 gap-10 text-center text-white">
            <div className="border-r border-amber-400 border-opacity-50">
              <div className="text-2xl font-bold mb-4 text-amber-400">금리</div>
              <div className="text-base opacity-95 mb-3">최저 연</div>
              <div className="text-5xl font-bold text-amber-400 mb-2">3.9%</div>
              <div className="text-base opacity-95">부터</div>
            </div>
            <div className="border-r border-amber-400 border-opacity-50">
              <div className="text-2xl font-bold mb-4 text-amber-400">한도</div>
              <div className="text-base opacity-95 mb-3">최대</div>
              <div className="text-5xl font-bold text-amber-400 mb-2">1억원</div>
              <div className="text-base opacity-95">집·자동차소유자는 한도2배</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-4 text-amber-400">상환기간</div>
              <div className="text-base opacity-95 mb-3">최장</div>
              <div className="text-5xl font-bold text-amber-400 mb-2">10년</div>
              <div className="text-base opacity-95"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}