'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [showTitle, setShowTitle] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTitle(prev => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/alternative-logo.jpg)',
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      ></div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-16 pb-16 relative z-10">
        {/* Company registration info - mobile optimized */}
        <div className="text-center mb-6">
          <div className="inline-block border-2 border-blue-900 rounded-full px-4 md:px-8 py-3 md:py-3 text-white text-xs md:text-sm backdrop-blur-sm animate-fadeIn" style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)' }}>
            <div className="block">주식회사 에이스대부중개법인</div>
            <div className="block">등록번호2025-대구남구-0006</div>
          </div>
        </div>

        {/* Main title - mobile optimized with fade animation */}
        <div className="text-center mb-8 md:mb-12" style={{ marginTop: '100px', '@media (min-width: 768px)': { marginTop: '180px' } }}>
          <h1 className="text-blue-900 text-3xl md:text-2xl font-bold mb-3 animate-slideDown">
            근로자 대상 안심대출
          </h1>
          <h2 className={`text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg transition-opacity duration-1000 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
            최저금리 안심대출
          </h2>
        </div>

        {/* Key information boxes - mobile optimized */}
        <div className="border-2 border-blue-900 rounded-xl p-4 md:p-8 max-w-4xl mx-auto shadow-2xl backdrop-blur-md animate-slideUp" style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="md:border-r border-blue-900 border-opacity-50 pb-4 md:pb-0">
              <div className="text-xl md:text-xl font-bold mb-2 md:mb-3 text-blue-900">금리</div>
              <div className="text-sm md:text-sm opacity-95 mb-1 md:mb-2">최저 연</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1 animate-scaleIn">3.9%</div>
              <div className="text-sm md:text-sm opacity-95">부터</div>
            </div>
            <div className="md:border-r border-blue-900 border-opacity-50 pb-4 md:pb-0">
              <div className="text-xl md:text-xl font-bold mb-2 md:mb-3 text-blue-900">한도</div>
              <div className="text-sm md:text-sm opacity-95 mb-1 md:mb-2">최대</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1 animate-scaleIn" style={{animationDelay: '0.2s'}}>1억원</div>
              <div className="text-sm md:text-sm opacity-95">집·자동차소유자는 한도2배</div>
            </div>
            <div>
              <div className="text-xl md:text-xl font-bold mb-2 md:mb-3 text-blue-900">상환기간</div>
              <div className="text-sm md:text-sm opacity-95 mb-1 md:mb-2">최장</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-1 animate-scaleIn" style={{animationDelay: '0.4s'}}>10년</div>
              <div className="text-sm md:text-sm opacity-95"></div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out both;
        }
      `}</style>
    </section>
  )
}