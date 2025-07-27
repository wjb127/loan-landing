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
      
      <main className="bg-white pb-20 md:pb-60">
        {/* Process Steps Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-center text-xl md:text-4xl font-bold text-gray-900 mb-4 animate-slideUp animation-delay-100">
              최저금리 안심대출 <span className="text-blue-500">신청 절차</span>
            </h1>
            <ProcessSteps />
          </div>
        </section>

        {/* White Background Section with Scroll Animation */}
        <section className="py-16 relative bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <ScrollAnimatedText>
                <h2 className="text-gray-900 text-3xl font-bold mb-4">
                  근로자 안심대출<br/>
                  <span className="text-gray-700">신청 모집안내</span>
                </h2>
              </ScrollAnimatedText>
            </div>
          </div>
        </section>

        {/* Eligibility Section with Scroll Animation */}
        <section className="bg-white py-16">
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
              <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-md relative">
                {/* 상단 아이콘 */}
                <div className="absolute top-4 right-4">
                  <div className="w-16 h-12 bg-green-500 rounded border-2 border-green-600 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 2h10c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z"/>
                      <path d="M8 6h8v2H8zm0 3h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H8zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2H8zm3 0h5v2h-5z" fill="white"/>
                    </svg>
                  </div>
                </div>
                
                {/* 제목 */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">월 납입금</h3>
                  <div className="text-4xl font-bold text-blue-900">예시</div>
                </div>
                
                {/* 계산 내용 */}
                <div className="mt-8 space-y-3">
                  <div className="text-lg text-gray-700">
                    <span>5천만원 융통 시 </span>
                    <span className="text-2xl font-bold text-blue-900">3.9%</span>
                  </div>
                  <div className="text-lg text-gray-700">
                    <span>월납입금 </span>
                    <span className="text-2xl font-bold text-blue-900">162,500원</span>
                  </div>
                </div>
              </div>
            </ScrollAnimatedText>
          </div>
        </section>

        {/* Target Audience Section with Scroll Animation */}
        <section className="bg-white py-16">
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