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

        {/* Illustration area - Business people illustrations */}
        <div className="flex justify-center items-center mb-12 space-x-6">
          {/* Person with laptop */}
          <div className="w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="25" r="12" fill="#FFE0B2"/>
              <path d="M38 37c0-6 5-11 12-11s12 5 12 11v20c0 6-5 11-12 11s-12-5-12-11V37z" fill="#2196F3"/>
              <rect x="42" y="65" width="16" height="10" rx="2" fill="#FF7043"/>
              <rect x="40" y="75" width="20" height="12" rx="2" fill="#37474F"/>
              <rect x="42" y="77" width="16" height="8" rx="1" fill="#00E676"/>
              <path d="M30 45h40v8c0 2-2 4-4 4H34c-2 0-4-2-4-4v-8z" fill="#FFE0B2"/>
            </svg>
          </div>

          {/* Person with megaphone */}
          <div className="w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="45" cy="25" r="12" fill="#FFE0B2"/>
              <path d="M33 37c0-6 5-11 12-11s12 5 12 11v20c0 6-5 11-12 11s-12-5-12-11V37z" fill="#FF7043"/>
              <path d="M25 42h15v8H25z" fill="#FFE0B2"/>
              <path d="M15 38l10 6v8l-10 6c-3-2-3-6 0-8v-4c-3-2-3-6 0-8z" fill="#FF5722"/>
              <circle cx="22" cy="46" r="2" fill="#FFF"/>
              <path d="M65 35l8 4v12l-8 4c-2-1-2-3 0-4v-8c-2-1-2-3 0-4z" fill="#FF9800"/>
            </svg>
          </div>

          {/* Business person pointing up */}
          <div className="w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="25" r="12" fill="#FFE0B2"/>
              <path d="M38 37c0-6 5-11 12-11s12 5 12 11v20c0 6-5 11-12 11s-12-5-12-11V37z" fill="#1976D2"/>
              <rect x="46" y="53" width="8" height="4" fill="#1976D2"/>
              <path d="M30 45h40v8c0 2-2 4-4 4H34c-2 0-4-2-4-4v-8z" fill="#FFE0B2"/>
              <path d="M48 15l2-8 2 8-2 2-2-2z" fill="#FFE0B2"/>
              <circle cx="50" cy="12" r="2" fill="#FF5722"/>
            </svg>
          </div>

          {/* Person with raised hand */}
          <div className="w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="25" r="12" fill="#FFE0B2"/>
              <path d="M38 37c0-6 5-11 12-11s12 5 12 11v20c0 6-5 11-12 11s-12-5-12-11V37z" fill="#FF7043"/>
              <path d="M62 35l8-5v12l-8 5c-2-1-2-3 0-4v-4c-2-1-2-3 0-4z" fill="#FFE0B2"/>
              <path d="M30 45h40v8c0 2-2 4-4 4H34c-2 0-4-2-4-4v-8z" fill="#FFE0B2"/>
              <circle cx="50" cy="25" r="2" fill="#2196F3"/>
            </svg>
          </div>

          {/* Business woman */}
          <div className="w-20 h-20">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="25" r="12" fill="#FFE0B2"/>
              <path d="M40 20c0-8 4-12 10-12s10 4 10 12v8c0-2-4-4-10-4s-10 2-10 8v-12z" fill="#8D6E63"/>
              <path d="M38 37c0-6 5-11 12-11s12 5 12 11v20c0 6-5 11-12 11s-12-5-12-11V37z" fill="#E91E63"/>
              <path d="M30 45h40v8c0 2-2 4-4 4H34c-2 0-4-2-4-4v-8z" fill="#FFE0B2"/>
              <path d="M65 40l8 4v8l-8-4c-2 1-2-1 0-2v-4c-2-1-2-1 0-2z" fill="#FFE0B2"/>
            </svg>
          </div>
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