export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-1 bg-red-400 transform rotate-45"></div>
      <div className="absolute top-40 right-20 w-24 h-1 bg-orange-400 transform rotate-12"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-purple-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-60 right-40 w-8 h-8 bg-green-400 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 relative z-10">
        {/* Header badge */}
        <div className="text-center mb-8">
          <div className="inline-block border-2 border-white border-opacity-50 rounded-full px-6 py-2 text-white text-sm">
            웰스대부중개 대부중개 등록번호 2025-대구남구-0006
          </div>
        </div>

        {/* Main title */}
        <div className="text-center mb-12">
          <h1 className="text-yellow-300 text-2xl font-medium mb-2">
            근로자 대상 안심대출
          </h1>
          <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            최저금리 안심대출
          </h2>
        </div>

        {/* Illustration area - Using emojis to represent the people */}
        <div className="flex justify-center items-center mb-12 space-x-8">
          <div className="text-6xl">👨‍💼</div>
          <div className="text-6xl">📢</div>
          <div className="text-6xl">👨‍💻</div>
          <div className="text-6xl">💪</div>
          <div className="text-6xl">👩‍💼</div>
        </div>

        {/* Key information boxes */}
        <div className="bg-blue-800 bg-opacity-80 rounded-lg p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center text-white">
            <div className="border-r border-blue-400 border-opacity-50">
              <div className="text-lg font-medium mb-2">금리</div>
              <div className="text-sm opacity-80 mb-1">최저 연</div>
              <div className="text-3xl font-bold">3.9%</div>
              <div className="text-sm opacity-80">부터</div>
            </div>
            <div className="border-r border-blue-400 border-opacity-50">
              <div className="text-lg font-medium mb-2">한도</div>
              <div className="text-sm opacity-80 mb-1">최대</div>
              <div className="text-3xl font-bold">1억원</div>
              <div className="text-sm opacity-80">집·자동차소유자는 한도2배</div>
            </div>
            <div>
              <div className="text-lg font-medium mb-2">상환기간</div>
              <div className="text-sm opacity-80 mb-1">최장</div>
              <div className="text-3xl font-bold">10년</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}