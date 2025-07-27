export default function ProcessSteps() {
  const steps = [
    {
      icon: '💻',
      title: '온라인 간편신청',
      description: '간단한 정보 입력으로\n빠른 신청 완료'
    },
    {
      icon: '📋',
      title: '전문상담사 배정',
      description: '전담 상담사가\n맞춤 상담 진행'
    },
    {
      icon: '🤝',
      title: '당일조회 및 승인',
      description: '신속한 심사로\n당일 결과 확인'
    }
  ]

  return (
    <div className="mt-12">
      <div className="flex flex-row items-center justify-center gap-2 md:gap-8 relative overflow-x-auto">
        {steps.map((step, index) => {
          const animations = ['animate-bounceIn', 'animate-scaleIn', 'animate-rotateFadeIn'];
          const delays = ['animation-delay-100', 'animation-delay-200', 'animation-delay-300'];
          return (
          <div key={index} className={`flex flex-col items-center text-center ${animations[index]} ${delays[index]} min-w-0 flex-1`}>
            {/* Step Icon */}
            <div className="w-24 h-24 md:w-44 md:h-44 rounded-full overflow-hidden mb-3 md:mb-6 shadow-lg relative bg-white">
              <div className="w-full h-full flex items-center justify-center">
                {index === 0 && (
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop&crop=center" 
                    alt="온라인 신청"
                    className="w-full h-full object-cover rounded-full"
                  />
                )}
                {index === 1 && (
                  <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop&crop=center" 
                    alt="전문상담사 배정"
                    className="w-full h-full object-cover rounded-full"
                  />
                )}
                {index === 2 && (
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=400&fit=crop&crop=center" 
                    alt="당일조회 및 승인"
                    className="w-full h-full object-cover rounded-full"
                  />
                )}
              </div>
            </div>
            
            {/* Step Title */}
            <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-2">
              {step.title}
            </h3>
            
            {/* Step Description */}
            <p className="text-xs md:text-sm text-gray-600 whitespace-pre-line leading-relaxed">
              {step.description}
            </p>
            
            {/* Arrow (except for last step) */}
            {index < steps.length - 1 && (
              <div className="absolute top-12 md:top-22 left-full transform -translate-y-1/2 translate-x-2 md:translate-x-4">
                <svg className="w-4 h-4 md:w-8 md:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
          );
        })}
      </div>
    </div>
  )
}