import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보 처리방침 | 주식회사 에이스대부중개법인',
  description: '개인정보 처리방침 - 주식회사 에이스대부중개법인',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">개인정보 처리방침</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-sm font-medium text-blue-800">
                '주식회사 에이스대부중개법인'(이하 "회사"라 함)는 신용정보의 이용 및 보호에 관한 법률, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 통신비밀보호법, 전기통신사업법, 개인정보보호법, 대부중개업 등의 등록 및 금융이용자 보호에 관한 법률 등 준수하여야 할 관련 법규상의 개인정보보호규정을 준수하며, 다음과 같이 개인정보처리방침을 정하여 이용자(이하 "고객")의 권익보호에 최선을 다하고 있습니다.
              </p>
              <p className="text-sm text-blue-700 mt-2">
                회사는 개인정보처리방침을 홈페이지에 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록 조치하고 있으며, 개인정보처리방침은 법령 및 지침에 따라 변경될 수 있으므로 정기적으로 확인하여 주시기 바랍니다.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. 전화권유동의</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">본인은 귀사가 상품 이용권유등의 목적으로 다음과 같은 동의합니다.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>전화, 문자메세지 등을 통한 상품 이용권유동의</li>
                  <li>기존 계약의 유지·관리를 위한 필수 고지사항은 상기 동의 대상에서 제외됩니다.</li>
                  <li>회사에서 제공하는 관련 부가서비스 안내를 제공 받고자 하며, 추가 서비스 안내를 받지 아니하시는 경우에는 체크박스에 클릭하지 않으시면 됩니다.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. 개인정보 수집 항목</h2>
              <p className="mb-4">회사는 금융거래의 설정·유지·이행·관리 및 상품서비스의 제공을 위한 필수정보 및 선택정보를 다음 각 호와 같이 수집하고 있습니다.</p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">가. 필수적 정보</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>개인식별정보:</strong> 성명, 국적, 주소, 성별, 연락처, 직장정보(직장명, 부서명) 등</li>
                    <li><strong>(금융)거래정보:</strong> 상품종류, 거래조건(이자율, 만기, 담보 등), 거래일시, 금액 등 거래 설정 및 내역정보</li>
                    <li><strong>신용평가정보:</strong> 신용등급 또는 개인신용평점</li>
                    <li><strong>신용도판단정보:</strong> 연체, 부도, 대지급, 신용질서문란행위 등 신용정보 일체</li>
                    <li><strong>신용능력정보:</strong> 재산, 채무, 소득의 총액, 납세실적 등</li>
                    <li><strong>공공기관정보:</strong> 개인회생, 파산, 면책, 채무불이행등재 등 법원의 재판·결정정보, 각종 체납정보, 사회보험(산업재해/건강/연금/고용보험), 공공요금관련 정보 등</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">나. 선택적 정보</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>개인식별정보 외에 거래신청서에 기재된 정보 또는 고객이 제공한 정보</li>
                    <li>주거 및 가족사항, 거주기간, 세대구성, 결혼여부 등</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">다. 수집방법</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>홈페이지</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>※ 주의사항:</strong><br/>
                    • 회사는 고객의 사생활을 침해할 우려가 있는 민감정보에 대해서는 원칙적으로 수집하지 않으며, 필요한 경우 고객의 별도 동의를 받아 수집하고 동의 목적을 위해서만 제한적으로 이용합니다.<br/>
                    • 회사 홈페이지에서는 만 14세 미만 아동으로부터 어떠한 개인정보도 수집하지 않습니다.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. 개인정보의 수집 및 이용목적</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">가. 금융거래관계 관련</h3>
                  <p className="text-sm">금융거래와 보험업무 관련하여 신용조회회사 또는 보험회사에 대한 개인신용정보의 조회, 보험가입, 금융거래 관계의 설정 여부의 판단, 금융거래 관계의 설정·유지·이행·관리, 금융사고 조사, 분쟁 해결, 민원 처리 및 법령상 의무이행 등의 목적으로 개인정보를 처리합니다.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">나. 상품 및 서비스 홍보 및 판매 권유</h3>
                  <p className="text-sm">대출, 보험상품의 신규 서비스 개발 및 맞춤 서비스 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고의 게재, 서비스의 유효성 확인, 고객의 편의제공 목적으로 개인정보를 처리합니다.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">다. 회원 가입 및 관리</h3>
                  <p className="text-sm">회원가입, 회원제 서비스 이용, 제한적 본인 확인제에 따른 본인확인, 개인식별, 부정이용방지, 비인가 사용방지, 가입의사 확인, 사고조사, 분쟁해결, 민원처리 및 고지사항 전달 등의 목적으로 개인정보를 처리합니다.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. 개인정보의 보유 및 이용기간</h2>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-sm"><strong>1)</strong> 금융거래와 관련한 개인(신용)정보는 수집·이용에 관한 동의일로부터 금융거래 종료일 이후 10년까지 위 이용목적을 위하여 보유·이용됩니다. 단, 금융거래 종료일 이후에는 금융사고 조사, 분쟁 해결, 민원처리, 법령상 의무이행 및 회사의 리스크 관리업무만을 위하여 보유/이용됩니다.</p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-sm"><strong>2)</strong> 개인(신용)정보의 조회를 목적으로 수집된 개인(신용)정보는 수집·이용에 대한 동의일로부터 고객에 대한 개인(신용)정보 제공·조회 동의의 효력 기간까지 보유·이용됩니다.</p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-sm"><strong>3)</strong> 상품 및 서비스 홍보 및 판매 권유 등과 관련한 개인(신용)정보는 수집·이용에 관한 동의일로부터 동의 철회일까지 보유·이용됩니다.</p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-sm"><strong>4)</strong> 회원 가입 및 관리 목적으로 수집된 개인(신용)정보는 고객의 회원 가입일로부터 회원 탈퇴일까지 보유·이용됩니다.</p>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-sm"><strong>5)</strong> 온라인 거래 관련한 개인(신용)정보는 전자금융거래법 시행령 제12조에서 정하는 기간까지 보유/이용됩니다.</p>
                </div>
              </div>
              
              <div className="bg-red-50 p-3 rounded border border-red-200 mt-4">
                <p className="text-sm text-red-800">
                  <strong>※</strong> 국가인권위원회의 권고에 따라 개인의 지문정보는 절대 수집/이용 하지 않음
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. 개인정보의 파기 절차 및 방법</h2>
              <p className="mb-4">회사는 『개인정보의 수집 및 이용목적』이 달성되면 다음과 같은 절차 및 방법에 따라 개인정보를 보관, 파기합니다.</p>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium text-gray-800">가. 파기절차</h3>
                  <p className="text-sm">개인정보는 『개인정보의 수집 및 이용목적』이 달성된 후 별도의 DB로 옮겨져 (종이의 경우 중개목적 달성 후 즉시 파쇄) 『개인정보의 수집 및 이용목적』에 따라 일정 기간 보관 후 파기됩니다. 위 보관된 개인정보는 법률에 의한 경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지 않습니다.</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800">나. 파기방법</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
                    <li>종이에 출력된 개인정보는 분쇄기로 분쇄합니다.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. 개인정보의 제3자 제공</h2>
              <p className="mb-4">회사는 원칙적으로 고객의 개인정보를 제1조에서 명시한 목적 범위 내에서 처리하며, 고객의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.</p>
              
              <div className="mb-4">
                <h3 className="font-medium text-gray-800 mb-2">단, 다음의 각 호의 경우에는 제3자에게 제공할 수 있습니다:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>고객이 사전에 제3자 제공 및 공개에 동의한 경우</li>
                  <li>다른 법률에 특별한 규정이 있는 경우</li>
                  <li>고객 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 고객 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-medium text-gray-800 mb-3">※ 회사의 개인정보 제3자 제공현황</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2">개인정보를 제공받는 자:</p>
                    <ul className="text-sm space-y-1">
                      <li>• (주) 에스엠플러스</li>
                      <li>• (주) 태산</li>
                      <li>• 저스티스솔루션</li>
                      <li>• 주식회사 바이원파트너스</li>
                      <li>• 주식회사 솔레</li>
                      <li>• 주식회사 트리플러스</li>
                      <li>• 주식회사 애드탱크</li>
                      <li>• 주식회사 에이유파트너스</li>
                      <li>• 주식회사 엔에프플러스</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-2">※ 회사가 중개업무를 취급하는 회사</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">제공할 개인정보의 내용:</p>
                    <p className="text-sm">성명, 주소, 생년월일, 성별, 전화번호</p>
                    
                    <p className="text-sm font-medium mb-2 mt-4">제공받는자의 이용목적:</p>
                    <p className="text-sm">대출중개업무 및 보험중개업무를 위한 기본정보제공, 전자금융서비스 연동, 수수료정산</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. 개인정보에 관한 민원서비스</h2>
              <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-4">
                <div className="text-center mb-4">
                  <h3 className="font-semibold text-blue-900">개인정보관리책임자</h3>
                  <p className="text-blue-800"><strong>성명:</strong> 심상민</p>
                  <p className="text-blue-800"><strong>상호명:</strong> 주식회사 에이스대부중개법인</p>
                </div>
              </div>
              
              <p className="mb-4 text-sm">이용자는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-3">기타 개인정보침해에 대한 신고나 상담이 필요하신 경우:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">1. 개인정보분쟁조정위원회</span>
                    </div>
                    <p>☎️ 1833-6972</p>
                    <p className="text-blue-600">https://www.kopico.go.kr</p>
                    
                    <div className="flex items-center space-x-2 mt-4">
                      <span className="font-medium">2. 한국인터넷진흥원</span>
                    </div>
                    <p>☎️ 국번없이 118</p>
                    <p className="text-blue-600">https://privacy.kisa.or.kr</p>
                    
                    <div className="flex items-center space-x-2 mt-4">
                      <span className="font-medium">3. 정보보호마크인증위원회</span>
                    </div>
                    <p>☎️ 02-580-0533~4</p>
                    <p className="text-blue-600">https://www.eprivacy.or.kr</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">4. 대검찰청 사이버수사과</span>
                    </div>
                    <p>☎️ 국번없이 1301</p>
                    <p className="text-blue-600">https://www.spo.go.kr</p>
                    
                    <div className="flex items-center space-x-2 mt-4">
                      <span className="font-medium">5. 경찰청 사이버수사국</span>
                    </div>
                    <p>☎️ 국번없이 182</p>
                    <p className="text-blue-600">https://cyberbureau.police.go.kr</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-gray-100 p-4 rounded mt-8">
              <p className="text-center text-sm text-gray-600">
                본 개인정보 처리방침은 2025년 1월부터 시행됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}