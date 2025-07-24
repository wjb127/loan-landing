import ProcessSteps from '@/components/ProcessSteps'
import EligibilitySection from '@/components/EligibilitySection'
import TargetAudienceSection from '@/components/TargetAudienceSection'
import Footer from '@/components/Footer'
import StickyLeadForm from '@/components/StickyLeadForm'

export default function Home() {
  return (
    <>
      <main className="bg-gray-50 pb-32">
        {/* Process Steps Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-center text-4xl font-bold text-gray-800 mb-4">
              최저금리 안심대출 <span className="text-blue-600">신청 절차</span>
            </h1>
            <ProcessSteps />
          </div>
        </section>

        {/* Blue Background Section with Form */}
        <section className="bg-gradient-to-br from-blue-500 to-blue-600 py-16 relative">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-white text-3xl font-bold mb-4">
                근로자 안심대출<br/>
                <span className="text-yellow-200">신청 모집안내</span>
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
        <section className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 inline-block">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">월 납입금</h3>
              <div className="text-blue-600 text-6xl font-bold mb-2">예시</div>
              <div className="text-right">
                <span className="text-gray-600 text-xl">5천만원 융통 시 </span>
                <span className="text-blue-600 text-3xl font-bold">3.9%</span>
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
      <StickyLeadForm />
    </>
  )
}