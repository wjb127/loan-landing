export default function Footer() {
  return (
    <footer className="text-gray-600 py-8 mb-16 md:mb-48 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          {/* 회사 정보 */}
          <div className="space-y-2">
            <div className="text-gray-900 font-semibold mb-3">회사 정보</div>
            <div>• 사이트명: 안심대출</div>
            <div>• 회사명: 주식회사 에이스대부중개법인</div>
            <div>• 대부중개업등록번호: 2025-대구남구-0006</div>
            <div>• 사업자등록번호: 601-81-39646</div>
            <div>• 법인등록번호: 170111-0984428</div>
            <div>• 대표자: 심상민</div>
            <div>• 대표번호: 1577-8505</div>
          </div>

          {/* 주소 및 대출 조건 */}
          <div className="space-y-2">
            <div className="text-gray-900 font-semibold mb-3">주소 및 대출 조건</div>
            <div className="mb-3">
              <strong>주소:</strong><br/>
              대구광역시 남구 명덕로 110-2, 4층
            </div>
            <div>• 대출금리: 연20% 이내</div>
            <div>• 연체이율: 연20% 이내</div>
            <div>• 대출중개수수료: 없음</div>
            <div className="text-gray-900 font-medium">
              ※ 취급 수수료 등 기타 부대비용이 없습니다.
            </div>
          </div>

          {/* 상환 방법 및 주의사항 */}
          <div className="space-y-2">
            <div className="text-gray-900 font-semibold mb-3">상환 및 주의사항</div>
            <div>
              <strong>상환방법:</strong><br/>
              원리금균등상환방식, 만기일시상환방식
            </div>
            <div className="text-gray-800 font-medium mt-3">
              중개수수료를 요구하거나 받는 것은 불법으로<br/>
              대출과 관련된 일체의 수수료를 받지 않습니다.
            </div>
            <div className="text-gray-700">
              <strong>연체시 불이익:</strong><br/>
              신용등급 또는 개인신용평점 하락 및<br/>
              연체 이자가 발생할 수 있음.
            </div>
          </div>
        </div>

        {/* 대출 상품 정보 */}
        <div className="border-t border-gray-200 mt-6 pt-6">
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
            <h3 className="text-gray-900 font-semibold mb-3">대출 상품 안내</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-1">
                <div>• 상환 기간: 모두 12개월 이상, 최장 120개월 미만</div>
                <div>• 최대 연 이자율: 20.0%</div>
                <div>• 연체이자율: 약정금리+3% (단, 법정 최고금리 20% 이내)</div>
                <div>• 채무의 조기상환수수료율: 없음</div>
              </div>
              <div className="border border-gray-300 p-3 rounded bg-white">
                <div className="text-gray-900 font-medium mb-2">대출 총비용 예시</div>
                <div className="text-sm text-gray-600">
                  1,000,000원을 12개월 동안<br/>
                  이자 20.0%로 대출할 시<br/>
                  <span className="text-gray-900 font-semibold">
                    총 상환금액: 1,134,715원
                  </span><br/>
                  <span className="text-xs">(대출 상품에 따라 달라질 수 있습니다.)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-center text-xs text-gray-500">
          <p className="mb-2">
            본 사업자는 금융소비자 정보포털 파인에서 조회 가능합니다.
          </p>
          <p>
            © 2025 주식회사 에이스대부중개법인. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}