export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-white">
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
          <div className="inline-block border-2 border-gray-300 rounded-full px-8 py-3 text-gray-600 text-sm bg-white shadow-md">
주식회사 에이스 대부 중개법인 등록번호 2025-대구남구-0006
          </div>
        </div>

        {/* Main title - positioned below logo */}
        <div className="text-center mb-12 mt-72">
          <h1 className="text-gray-600 text-2xl font-medium mb-3">
            근로자 대상 안심대출
          </h1>
          <h2 className="text-gray-900 text-4xl md:text-6xl font-bold leading-tight">
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - Bottom section */}
        <div className="border border-gray-300 rounded-xl p-4 md:p-8 max-w-4xl mx-auto shadow-xl bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="md:border-r border-gray-300 pb-4 md:pb-0">
              <div className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">금리</div>
              <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">최저 연</div>
              <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">3.9%</div>
              <div className="text-xs md:text-sm text-gray-600">부터</div>
            </div>
            <div className="md:border-r border-gray-300 pb-4 md:pb-0">
              <div className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">한도</div>
              <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">최대</div>
              <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">1억원</div>
              <div className="text-xs md:text-sm text-gray-600">집·자동차소유자는 한도2배</div>
            </div>
            <div>
              <div className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900">상환기간</div>
              <div className="text-xs md:text-sm text-gray-600 mb-1 md:mb-2">최장</div>
              <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">10년</div>
              <div className="text-xs md:text-sm text-gray-600"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}