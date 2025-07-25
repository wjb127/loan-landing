export default function TargetAudienceSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Icon and Title */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-lg mb-6 animate-bounce" style={{animationDuration: '3s'}}>
          <svg className="w-14 h-14 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="clipboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
            {/* Clipboard base */}
            <path fill="url(#clipboardGradient)" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            {/* Checkmark overlay */}
            <circle cx="16" cy="8" r="3" fill="#10B981" opacity="0.9"/>
            <path fill="white" d="M15 8.5l.5.5L17 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Decorative stars */}
            <g opacity="0.6">
              <path fill="#FBBF24" d="M6 2l.5 1.5L8 4l-1.5.5L6 6l-.5-1.5L4 4l1.5-.5z"/>
              <path fill="#FBBF24" d="M20 18l.3.9L21.2 19l-.9.3L20 20.2l-.3-.9L18.8 19l.9-.3z"/>
            </g>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          근로자 안심대출<br/>
          <span className="text-blue-600">신청 대상자</span>
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            대출상품을 조건이 다양하므로<br/>
            본인에게 적합한 대출상품에 대해 구체적으로 확인 후<br/>
            진행하여야 합니다.
          </p>
          <p>
            모바일 안심신청시 대출 사기나 불법 사채에 대한<br/>
            걱정 없이 안전하게 상담을 받을 수 있습니다.
          </p>
        </div>
      </div>

      {/* Right Side - Target Audience Details */}
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            <span className="text-blue-600">대상</span> 4대보험 가입 직장인 및 소득증명 가능자
          </h3>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            <span className="text-blue-600">소득</span> 재직기간 3개월 이상 근로자
          </h3>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            <span className="text-blue-600">신용</span> 신용점수 600점 이상 우대
          </h3>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            <span className="text-blue-600">나이</span> 만 25세~55세 대상
          </h3>
          <h3 className="text-lg font-semibold text-blue-800 mb-4">
            <span className="text-blue-600">부채</span> 담보대출을 제외한 연봉대비 200% 미만
          </h3>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-red-800 mb-4">
            <span className="text-red-600">불가</span> 무직 · 연체 · 회생 · 파산자 불가
          </h3>
          <div className="text-sm text-red-700 space-y-1">
            <p>• 3개월내 연체이력보유자 불가</p>
            <p>• 미필자 불가</p>
          </div>
        </div>
      </div>
    </div>
  )
}