export default function StatisticsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Statistics */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2025년 07월 25일 기준<br/>
            지금까지 <span className="text-blue-600">11,657,327명</span>이 승인되었습니다.
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
              <div className="text-2xl font-bold text-gray-900">7,256억</div>
            </div>
            <div>
              <div className="text-gray-600 text-sm mb-1">누적 대출조회</div>
              <div className="text-2xl font-bold text-gray-900">34,551,276건</div>
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