export default function TargetAudienceSection() {
  return (
    <div className="bg-white py-8">
      {/* 상단 아이콘과 제목 - 중앙 정렬 */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 mr-6">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* 클립보드 */}
              <rect x="25" y="15" width="50" height="70" rx="3" fill="#f3f4f6" stroke="#374151" strokeWidth="2"/>
              <rect x="35" y="10" width="30" height="8" rx="2" fill="#374151"/>
              
              {/* 신용카드 */}
              <rect x="30" y="25" width="20" height="12" rx="2" fill="#10b981" stroke="#059669" strokeWidth="1"/>
              <line x1="32" y1="29" x2="48" y2="29" stroke="#ffffff" strokeWidth="1"/>
              <line x1="32" y1="32" x2="44" y2="32" stroke="#ffffff" strokeWidth="0.5"/>
              
              {/* 펜 */}
              <line x1="55" y1="45" x2="70" y2="30" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="70" cy="30" r="2" fill="#1d4ed8"/>
              
              {/* 서류 라인들 */}
              <line x1="30" y1="50" x2="65" y2="50" stroke="#9ca3af" strokeWidth="1"/>
              <line x1="30" y1="55" x2="60" y2="55" stroke="#9ca3af" strokeWidth="1"/>
              <line x1="30" y1="60" x2="65" y2="60" stroke="#9ca3af" strokeWidth="1"/>
              <line x1="30" y1="65" x2="55" y2="65" stroke="#9ca3af" strokeWidth="1"/>
            </svg>
          </div>
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">근로자 안심대출</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">신청 대상자</h3>
          </div>
        </div>
      </div>

      {/* 텍스트 섹션 - 아이콘 아래 정렬 */}
      <div className="flex justify-center">
        <div className="flex">
          {/* 아이콘 위치와 맞추기 위한 왼쪽 여백 */}
          <div className="w-20 mr-6"></div>
          {/* 텍스트 컨테이너 */}
          <div className="max-w-2xl">
            {/* 설명 텍스트 */}
            <div className="mb-8 space-y-4 text-gray-700 leading-relaxed text-left">
              <p>대출상품은 조건이 다양하므로<br/>본인에게 적합한 대출상품에 대해 구체적으로 확인 후<br/>진행하여야 합니다.</p>
              <p>모바일 안심신청시 대출 사기나 불법 사채에 대한<br/>걱정 없이 안전하게 상담을 받을 수 있습니다.</p>
            </div>

            {/* 대상 조건들 */}
            <div className="space-y-4 text-left">
              <div className="text-lg">
                <span className="text-blue-900 font-bold">대상</span>
                <span className="text-gray-900 font-bold ml-2">4대보험 가입 직장인 및 소득증명 가능자</span>
              </div>
              
              <div className="text-lg">
                <span className="text-blue-900 font-bold">소득</span>
                <span className="text-gray-900 font-bold ml-2">재직기간 3개월 이상 근로자</span>
              </div>
              
              <div className="text-lg">
                <span className="text-blue-900 font-bold">신용</span>
                <span className="text-gray-900 font-bold ml-2">신용점수 600점 이상 우대</span>
              </div>
              
              <div className="text-lg">
                <span className="text-blue-900 font-bold">나이</span>
                <span className="text-gray-900 font-bold ml-2">만 25세~55세 대상</span>
              </div>
              
              <div className="text-lg">
                <span className="text-blue-900 font-bold">부채</span>
                <span className="text-gray-900 font-bold ml-2">담보대출을 제외한 연봉대비 200% 미만</span>
              </div>

              {/* 불가 조건들 */}
              <div className="mt-6 space-y-2">
                <div className="text-lg">
                  <span className="text-blue-900 font-bold">불가</span>
                  <span className="text-gray-900 font-bold ml-2">무직 · 연체 · 회생 · 파산자 불가</span>
                </div>
                
                <div className="space-y-1 text-gray-900 text-lg">
                  <div><span className="text-blue-900 font-bold">　　</span><span className="text-gray-900 font-bold ml-2">3개월내 연체이력보유자 불가</span></div>
                  <div><span className="text-blue-900 font-bold">　　</span><span className="text-gray-900 font-bold ml-2">미필자 불가</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}