export default function TargetAudienceSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Icon and Title */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-lg mb-6">
          <div className="text-4xl">📋</div>
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