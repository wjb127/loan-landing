'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

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
    const diffTime = Math.abs(currentDate.getTime() - baseDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  // 동적 통계 계산 (랜덤성 추가)
  const daysPassed = getDateDifference()
  
  
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
    const seededRandom = () => ((seed * 9301 + 49297) % 233280) / 233280
    
    // 기본 일일 증가량에 랜덤성 추가 (±20% 변동)
    const getRandomizedIncreaseForDay = (baseAmount: number) => {
      const randomFactor = 0.8 + (seededRandom() * 0.4) // 0.8 ~ 1.2 사이
      return Math.floor(baseAmount * randomFactor)
    }
    
    totalApprovalIncrease += getRandomizedIncreaseForDay(baseDailyApprovals)
    totalLoanIncrease += getRandomizedIncreaseForDay(baseDailyLoanAmount * 100) / 100 // 소수점 처리
    totalInquiryIncrease += getRandomizedIncreaseForDay(baseDailyInquiries)
  }
  
  const currentApprovals = baseApprovals + totalApprovalIncrease
  const currentLoanAmount = baseLoanAmount + Math.floor(totalLoanIncrease * 10) / 10 // 소수점 첫째자리까지
  const currentInquiries = baseInquiries + totalInquiryIncrease

  // 승인 사례 데이터
  const approvalCases = [
    { type: '대환대출', profile: '30대/직장인/개인신용점수 641점', amount: '7,200만원' },
    { type: '신규대출', profile: '30대/직장인/개인신용점수 688점', amount: '2,500만원' },
    { type: '추가대출', profile: '40대/직장인/개인신용점수 717점', amount: '3,500만원' },
    { type: '신규대출', profile: '20대/직장인/개인신용점수 645점', amount: '5,000만원' },
    { type: '대환대출', profile: '40대/사업자/개인신용점수 672점', amount: '8,500만원' },
    { type: '추가대출', profile: '50대/직장인/개인신용점수 703점', amount: '4,200만원' },
  ]

  return (
    <section className="bg-white py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Statistics */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {getCurrentDate()} 기준<br/>
            지금까지 <span className="text-blue-900">{currentApprovals.toLocaleString()}명</span>이 승인되었습니다.
          </h2>
        </div>

        {/* Approval Cases Swiper */}
        <div className="bg-white rounded-lg shadow-sm border mb-8 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            direction="vertical"
            spaceBetween={0}
            slidesPerView={4}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="approval-swiper h-64"
          >
            {approvalCases.map((caseItem, index) => (
              <SwiperSlide key={index}>
                <div className="px-4 md:px-6 py-3 md:py-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div className="text-blue-900 font-medium text-sm md:text-base min-w-[60px] md:min-w-[80px]">
                      {caseItem.type}
                    </div>
                    <div className="text-gray-900 flex-1 px-2 md:px-4 text-xs md:text-base text-center">
                      {caseItem.profile}
                    </div>
                    <div className="text-gray-900 font-bold text-sm md:text-base min-w-[80px] md:min-w-[100px] text-right">
                      {caseItem.amount}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

      </div>
    </section>
  )
}