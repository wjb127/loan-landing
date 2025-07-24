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
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Step Icon */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg relative bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-6xl opacity-70">
                  {index === 0 && '⌨️'}
                  {index === 1 && '📝'}
                  {index === 2 && '🤝'}
                </div>
              </div>
            </div>
            
            {/* Step Title */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {step.title}
            </h3>
            
            {/* Step Description */}
            <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
              {step.description}
            </p>
            
            {/* Arrow (except for last step) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-20 left-full transform -translate-y-1/2 translate-x-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}