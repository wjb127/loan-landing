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
            <h1 className="text-center text-4xl font-bold text-gray-900 mb-4 animate-bounce" style={{animationDuration: '2s', animationDelay: '0.5s'}}>
              최저금리 안심대출 <span className="text-gray-700 animate-pulse">신청 절차</span>
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
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <ScrollAnimatedText delay={400}>
              <div className="border border-gray-300 rounded-lg shadow-xl p-8 inline-block bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">월 납입금</h3>
                <div className="text-gray-900 text-6xl font-bold mb-2">예시</div>
                <div className="text-right">
                  <span className="text-gray-600 text-xl">5천만원 융통 시 </span>
                  <span className="text-gray-900 text-3xl font-bold">3.9%</span>
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