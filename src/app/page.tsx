import HeroSection from '@/components/HeroSection'
import ProcessSteps from '@/components/ProcessSteps'
import EligibilitySection from '@/components/EligibilitySection'
import TargetAudienceSection from '@/components/TargetAudienceSection'
import StatisticsSection from '@/components/StatisticsSection'
import Footer from '@/components/Footer'
import CollapsibleMobileForm from '@/components/CollapsibleMobileForm'
import ScrollAnimatedText from '@/components/ScrollAnimatedText'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      <main className="bg-white pb-10 md:pb-20">
        {/* Process Steps Section */}
        <section className="bg-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-center text-xl md:text-4xl font-bold text-gray-900 mb-4 animate-bounceIn animation-delay-50">
              최저금리 안심대출 <span className="text-blue-500">신청 절차</span>
            </h1>
            <ProcessSteps />
          </div>
        </section>

        {/* White Background Section with Scroll Animation */}
        <section className="py-8 relative bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <ScrollAnimatedText>
                <h2 className="text-gray-900 text-3xl font-bold mb-4 animate-slideInLeft">
                  근로자 안심대출<br/>
                  <span className="text-gray-700 animate-slideInRight animation-delay-100">신청 모집안내</span>
                </h2>
              </ScrollAnimatedText>
            </div>
          </div>
        </section>

        {/* Eligibility Section with Scroll Animation */}
        <section className="bg-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <ScrollAnimatedText delay={200}>
              <EligibilitySection />
            </ScrollAnimatedText>
          </div>
        </section>

        {/* Loan Amount Highlight with Scroll Animation */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <ScrollAnimatedText delay={400}>
              <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-md relative animate-scaleIn">
                {/* 상단 아이콘 - 세련된 계산기 */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    {/* 메인 계산기 본체 */}
                    <div className="w-16 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg relative">
                      {/* 화면 */}
                      <div className="w-12 h-6 bg-gray-900 rounded-sm mx-auto mt-2 flex items-end justify-end px-1 py-1">
                        <span className="text-green-400 text-xs font-mono">162,500</span>
                      </div>
                      
                      {/* 버튼 그리드 */}
                      <div className="grid grid-cols-3 gap-1 p-2 mt-1">
                        {/* 첫 번째 줄 */}
                        <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                        <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-sm"></div>
                        
                        {/* 두 번째 줄 */}
                        <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                        <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                        <div className="w-2 h-2 bg-orange-400 rounded-sm"></div>
                        
                        {/* 세 번째 줄 */}
                        <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                        <div className="w-2 h-2 bg-green-300 rounded-sm"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                      </div>
                      
                      {/* 브랜드 포인트 */}
                      <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full opacity-30"></div>
                    </div>
                    
                    {/* 그림자 효과 */}
                    <div className="absolute -bottom-1 left-1 right-1 h-1 bg-green-800 rounded-full opacity-20 blur-sm"></div>
                  </div>
                </div>
                
                {/* 제목 */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">월 납입금</h3>
                  <div className="text-4xl font-bold text-blue-900">예시</div>
                </div>
                
                {/* 계산 내용 */}
                <div className="space-y-4">
                  <div className="text-xl">
                    <span className="text-gray-700">5천만원 융통 시 </span>
                    <span className="text-3xl font-bold text-blue-900">3.9%</span>
                  </div>
                  <div className="text-xl">
                    <span className="text-gray-700">월납입금 </span>
                    <span className="text-3xl font-bold text-blue-900">162,500원</span>
                  </div>
                </div>
              </div>
            </ScrollAnimatedText>
          </div>
        </section>

        {/* Target Audience Section with Scroll Animation */}
        <section className="bg-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <ScrollAnimatedText delay={600}>
              <TargetAudienceSection />
            </ScrollAnimatedText>
          </div>
        </section>

        {/* Statistics Section with Scroll Animation */}
        <ScrollAnimatedText delay={800}>
          <StatisticsSection />
        </ScrollAnimatedText>
      </main>
      
      <Footer />
      <CollapsibleMobileForm />
    </>
  )
}