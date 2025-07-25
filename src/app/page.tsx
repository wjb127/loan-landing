import HeroSection from '@/components/HeroSection'
import ProcessSteps from '@/components/ProcessSteps'
import EligibilitySection from '@/components/EligibilitySection'
import TargetAudienceSection from '@/components/TargetAudienceSection'
import Footer from '@/components/Footer'
import CollapsibleMobileForm from '@/components/CollapsibleMobileForm'

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

        {/* White Background Section */}
        <section className="py-16 relative bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-gray-900 text-3xl font-bold mb-4 animate-pulse" style={{animationDelay: '1s'}}>
                근로자 안심대출<br/>
                <span className="text-gray-700 animate-bounce" style={{animationDuration: '2s', animationDelay: '1.5s'}}>신청 모집안내</span>
              </h2>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <EligibilitySection />
          </div>
        </section>

        {/* Loan Amount Highlight */}
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="border border-gray-300 rounded-lg shadow-xl p-8 inline-block bg-white animate-bounce" style={{animationDuration: '3s', animationDelay: '0.5s'}}>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 animate-pulse">월 납입금</h3>
              <div className="text-gray-900 text-6xl font-bold mb-2 animate-bounce" style={{animationDuration: '2s', animationDelay: '1s'}}>예시</div>
              <div className="text-right animate-pulse" style={{animationDelay: '1.5s'}}>
                <span className="text-gray-600 text-xl">5천만원 융통 시 </span>
                <span className="text-gray-900 text-3xl font-bold animate-bounce" style={{animationDuration: '1s'}}>3.9%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <TargetAudienceSection />
          </div>
        </section>
      </main>
      
      <Footer />
      <CollapsibleMobileForm />
    </>
  )
}