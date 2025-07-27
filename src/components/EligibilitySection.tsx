export default function EligibilitySection() {
  return (
    <div className="space-y-12">
      {/* 지원자격 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-900 pl-4">
          지원자격
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          저금리 대출 희망자 또는 고금리 기대출을 이용중인 4대보험 근로자
        </p>
      </div>

      {/* 자격대상 및 신청방법 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-900 pl-4">
          자격대상 및 신청방법
        </h2>
        <div className="space-y-4">
          <div>
            <span className="text-blue-900 font-semibold">자격대상: </span>
            <span className="text-gray-700">만 24세 이상의 소득확인이 가능한 자</span>
          </div>
          <div>
            <span className="text-blue-900 font-semibold">신청방법: </span>
            <span className="text-gray-700">하단 신청란에 신청 가능 (무방문, 무서류 당일승인)</span>
          </div>
          <div>
            <span className="text-gray-800 font-semibold">신청불가 대상: </span>
            <span className="text-gray-700">연체, 회생, 회복, 파산 이력자는 지원이 불가능합니다.</span>
          </div>
        </div>
      </div>

      {/* 대출내용 */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-blue-900 pl-4">
          대출내용
        </h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="text-blue-900 text-xl font-semibold text-center">
            최저금리 <span className="text-2xl font-bold">3.9%</span> 부터 
            최대한도 <span className="text-2xl font-bold">1억원</span> 까지 
            상환기간 <span className="text-2xl font-bold">최장 10년</span>
          </p>
        </div>
      </div>
    </div>
  )
}