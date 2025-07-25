export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-1 bg-amber-400 transform rotate-45 opacity-30"></div>
      <div className="absolute top-40 right-20 w-24 h-1 bg-amber-300 transform rotate-12 opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-amber-200 rounded-full opacity-20"></div>
      <div className="absolute bottom-60 right-40 w-8 h-8 bg-amber-500 rounded-full opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 relative z-10">
        {/* Company Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-4 mb-4">
            {/* Company Logo - Diamond Shape */}
            <div className="relative">
              <svg width="60" height="60" viewBox="0 0 100 100" className="text-amber-400">
                <path d="M50 10 L80 35 L65 65 L35 65 L20 35 Z" fill="currentColor" opacity="0.9"/>
                <path d="M50 20 L70 40 L60 60 L40 60 L30 40 Z" fill="currentColor" opacity="0.7"/>
                <path d="M50 25 L65 42 L58 58 L42 58 L35 42 Z" fill="currentColor" opacity="0.5"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-amber-400 text-2xl font-bold">㈜ 에이스함동</div>
              <div className="text-slate-300 text-sm">프랜차이즈 설립 | 부동산 중개</div>
              <div className="text-slate-300 text-sm">정책자금 | 매출채권 유동화</div>
            </div>
          </div>
          <div className="inline-block border-2 border-amber-400 border-opacity-50 rounded-full px-6 py-2 text-slate-300 text-sm bg-slate-800 bg-opacity-50">
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

        {/* Illustration area - Celebrating people with megaphone */}
        <div className="relative mb-12 h-80">
          <svg viewBox="0 0 800 400" className="w-full h-full max-w-4xl mx-auto">
            {/* Person 1 - With megaphone (left) */}
            <g transform="translate(100, 100)">
              {/* Head */}
              <circle cx="50" cy="50" r="30" fill="#F4D1AE"/>
              {/* Hair */}
              <path d="M20 40 Q20 20 50 15 Q80 20 80 40 L80 45 Q65 30 35 30 Q20 30 20 45 Z" fill="#5C4033"/>
              {/* Eyes */}
              <circle cx="35" cy="50" r="2" fill="#333"/>
              <circle cx="65" cy="50" r="2" fill="#333"/>
              {/* Smile */}
              <path d="M35 60 Q50 70 65 60" stroke="#333" strokeWidth="2" fill="none"/>
              {/* Body */}
              <path d="M20 80 Q20 100 30 120 L30 200 L70 200 L70 120 Q80 100 80 80 Z" fill="#7986CB"/>
              {/* Arm with megaphone */}
              <path d="M80 100 L120 80 L120 90 L80 110 Z" fill="#F4D1AE"/>
              {/* Megaphone */}
              <path d="M120 70 L180 50 L180 110 L120 90 Z" fill="#FF5252"/>
              <path d="M180 50 L200 40 L200 120 L180 110 Z" fill="#FF7043"/>
              <circle cx="200" cy="80" r="30" fill="none" stroke="#FFF" strokeWidth="2" strokeDasharray="5,5" opacity="0.5"/>
              {/* Other arm raised */}
              <path d="M20 100 L0 60 L10 55 L30 95 Z" fill="#F4D1AE"/>
            </g>

            {/* Person 2 - Jumping with joy (center-left) */}
            <g transform="translate(250, 80)">
              {/* Head */}
              <circle cx="50" cy="50" r="30" fill="#F4D1AE"/>
              {/* Hair */}
              <path d="M20 40 Q20 20 50 15 Q80 20 80 40 L75 50 Q65 35 35 35 Q25 35 25 50 Z" fill="#FF6F00"/>
              {/* Eyes */}
              <circle cx="35" cy="50" r="2" fill="#333"/>
              <circle cx="65" cy="50" r="2" fill="#333"/>
              {/* Big smile */}
              <path d="M30 60 Q50 75 70 60" stroke="#333" strokeWidth="3" fill="none"/>
              {/* Body - jumping pose */}
              <path d="M20 80 Q20 100 30 120 L25 180 L40 185 L50 130 L60 185 L75 180 L70 120 Q80 100 80 80 Z" fill="#FF7043"/>
              {/* Arms up */}
              <path d="M20 90 L0 40 L10 35 L30 85 Z" fill="#F4D1AE"/>
              <path d="M80 90 L100 40 L90 35 L70 85 Z" fill="#F4D1AE"/>
              {/* Motion lines */}
              <path d="M-20 180 L-10 180" stroke="#FFB74D" strokeWidth="3"/>
              <path d="M110 180 L120 180" stroke="#FFB74D" strokeWidth="3"/>
            </g>

            {/* Person 3 - Professional with raised arm (center) */}
            <g transform="translate(400, 120)">
              {/* Head */}
              <circle cx="50" cy="50" r="30" fill="#F4D1AE"/>
              {/* Hair */}
              <path d="M20 40 Q20 20 50 15 Q80 20 80 40 L80 45 Q70 30 30 30 Q20 30 20 45 Z" fill="#424242"/>
              {/* Eyes */}
              <circle cx="35" cy="50" r="2" fill="#333"/>
              <circle cx="65" cy="50" r="2" fill="#333"/>
              {/* Smile */}
              <path d="M35 60 Q50 65 65 60" stroke="#333" strokeWidth="2" fill="none"/>
              {/* Body - suit */}
              <path d="M20 80 Q20 100 30 120 L30 200 L70 200 L70 120 Q80 100 80 80 Z" fill="#1565C0"/>
              {/* Tie */}
              <rect x="45" y="80" width="10" height="40" fill="#D32F2F"/>
              {/* Arm raised */}
              <path d="M80 100 L100 40 L90 35 L70 95 Z" fill="#F4D1AE"/>
              {/* Hand waving */}
              <circle cx="95" cy="37" r="8" fill="#F4D1AE"/>
              {/* Other arm */}
              <path d="M20 100 L10 140 L20 145 L30 105 Z" fill="#F4D1AE"/>
            </g>

            {/* Person 4 - Woman celebrating (right) */}
            <g transform="translate(550, 100)">
              {/* Head */}
              <circle cx="50" cy="50" r="30" fill="#F4D1AE"/>
              {/* Hair - long */}
              <path d="M20 40 Q20 20 50 15 Q80 20 80 40 L80 70 Q75 80 70 70 L70 50 Q60 35 40 35 Q30 35 30 50 L30 70 Q25 80 20 70 Z" fill="#6D4C41"/>
              {/* Eyes */}
              <circle cx="35" cy="50" r="2" fill="#333"/>
              <circle cx="65" cy="50" r="2" fill="#333"/>
              {/* Excited expression */}
              <ellipse cx="50" cy="65" rx="8" ry="5" fill="#333"/>
              {/* Body */}
              <path d="M20 80 Q20 100 30 120 L30 200 L70 200 L70 120 Q80 100 80 80 Z" fill="#EC407A"/>
              {/* Both arms up in victory */}
              <path d="M20 90 L5 50 L15 45 L30 85 Z" fill="#F4D1AE"/>
              <path d="M80 90 L95 50 L85 45 L70 85 Z" fill="#F4D1AE"/>
              {/* Victory hands */}
              <circle cx="10" cy="47" r="8" fill="#F4D1AE"/>
              <circle cx="90" cy="47" r="8" fill="#F4D1AE"/>
            </g>

            {/* Decorative elements */}
            {/* Confetti */}
            <rect x="150" y="50" width="10" height="20" fill="#FFD54F" transform="rotate(25 155 60)"/>
            <rect x="300" y="40" width="8" height="15" fill="#4FC3F7" transform="rotate(-30 304 47)"/>
            <rect x="450" y="60" width="12" height="18" fill="#AED581" transform="rotate(45 456 69)"/>
            <rect x="600" y="50" width="10" height="16" fill="#F06292" transform="rotate(-20 605 58)"/>
            
            {/* Stars */}
            <path d="M200 30 L205 40 L215 40 L207 47 L210 57 L200 50 L190 57 L193 47 L185 40 L195 40 Z" fill="#FFD54F"/>
            <path d="M500 40 L503 46 L509 46 L504 50 L506 56 L500 52 L494 56 L496 50 L491 46 L497 46 Z" fill="#FF7043"/>
            
            {/* Motion lines */}
            <path d="M100 250 L120 250" stroke="#64B5F6" strokeWidth="4" strokeLinecap="round"/>
            <path d="M680 250 L700 250" stroke="#64B5F6" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Key information boxes */}
        <div className="bg-slate-800 bg-opacity-90 border border-amber-400 border-opacity-30 rounded-lg p-6 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-3 gap-6 text-center text-white">
            <div className="border-r border-amber-400 border-opacity-30">
              <div className="text-lg font-medium mb-2 text-amber-400">금리</div>
              <div className="text-sm opacity-80 mb-1">최저 연</div>
              <div className="text-3xl font-bold text-amber-400">3.9%</div>
              <div className="text-sm opacity-80">부터</div>
            </div>
            <div className="border-r border-amber-400 border-opacity-30">
              <div className="text-lg font-medium mb-2 text-amber-400">한도</div>
              <div className="text-sm opacity-80 mb-1">최대</div>
              <div className="text-3xl font-bold text-amber-400">1억원</div>
              <div className="text-sm opacity-80">집·자동차소유자는 한도2배</div>
            </div>
            <div>
              <div className="text-lg font-medium mb-2 text-amber-400">상환기간</div>
              <div className="text-sm opacity-80 mb-1">최장</div>
              <div className="text-3xl font-bold text-amber-400">10년</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}