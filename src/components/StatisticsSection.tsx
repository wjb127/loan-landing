'use client'

export default function StatisticsSection() {
  // 현재 날짜 가져오기
  const getCurrentDate = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    return `${year}년 ${month}월 ${day}일`
  }

  // 기준일부터 현재까지의 일수 계산
  const getDateDifference = () => {
    const baseDate = new Date('2025-07-25')
    const currentDate = new Date()
    const diffTime = Math.abs(currentDate - baseDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // 동적 통계 계산 (랜덤성 추가)
  const daysPassed = getDateDifference()
  
  // 기본 일일 증가량에 랜덤성 추가 (±20% 변동)
  const getRandomizedIncrease = (baseAmount: number) => {
    const randomFactor = 0.8 + (Math.random() * 0.4) // 0.8 ~ 1.2 사이
    return Math.floor(baseAmount * randomFactor)
  }
  
  const baseDailyApprovals = 13 // 일일 승인자 증가량 (127 → 13)
  const baseDailyLoanAmount = 0.18 // 일일 대출금액 증가량 (1.8억 → 0.18억)
  const baseDailyInquiries = 850 // 조회수는 유지
  
  const baseApprovals = 11657327
  const baseLoanAmount = 7256 // 억원
  const baseInquiries = 34551276
  
  // 각 날짜별 누적 증가량 계산 (랜덤성 적용)
  let totalApprovalIncrease = 0
  let totalLoanIncrease = 0
  let totalInquiryIncrease = 0
  
  for (let day = 1; day <= daysPassed; day++) {
    // 날짜를 시드로 사용하여 일관된 랜덤값 생성
    const seed = day * 12345
    Math.random = () => ((seed * 9301 + 49297) % 233280) / 233280
    
    totalApprovalIncrease += getRandomizedIncrease(baseDailyApprovals)
    totalLoanIncrease += getRandomizedIncrease(baseDailyLoanAmount * 100) / 100 // 소수점 처리
    totalInquiryIncrease += getRandomizedIncrease(baseDailyInquiries)
  }
  
  // 원래 Math.random 복원
  Math.random = () => Math.random()
  
  const currentApprovals = baseApprovals + totalApprovalIncrease
  const currentLoanAmount = baseLoanAmount + Math.floor(totalLoanIncrease * 10) / 10 // 소수점 첫째자리까지
  const currentInquiries = baseInquiries + totalInquiryIncrease

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Statistics */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {getCurrentDate()} 기준<br/>
            지금까지 <span className="text-blue-600">{currentApprovals.toLocaleString()}명</span>이 승인되었습니다.
          </h2>
        </div>

        {/* Loan Types Table */}
        <div className="bg-white rounded-lg shadow-sm border mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-blue-600 font-medium">대한대출</td>
                  <td className="px-6 py-4 text-gray-900">30대/직장인/개인신용점수 641점</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">7,200만원</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-blue-600 font-medium">신규대출</td>
                  <td className="px-6 py-4 text-gray-900">30대/직장인/개인신용점수 688점</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">2,500만원</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-blue-600 font-medium">추가대출</td>
                  <td className="px-6 py-4 text-gray-900">40대/직장인/개인신용점수 717점</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">3,500만원</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-blue-600 font-medium">신규대출</td>
                  <td className="px-6 py-4 text-gray-900">20대/직장인/개인신용점수 645점</td>
                  <td className="px-6 py-4 text-gray-900 font-bold">5,000만원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Statistics */}
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-gray-600 text-sm mb-1">누적 대출금액</div>
              <div className="text-2xl font-bold text-gray-900">{currentLoanAmount.toLocaleString()}억</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm mb-1">누적 대출조회</div>
              <div className="text-2xl font-bold text-gray-900">{currentInquiries.toLocaleString()}건</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm mb-1">평균 대출 승인비율</div>
              <div className="text-2xl font-bold text-gray-900">97.38%</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            최저금리 안심대출 <span className="text-blue-600">신청 절차</span>
          </h3>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
            원클릭 상담 신청
          </button>
        </div>
      </div>
    </section>
  )
}