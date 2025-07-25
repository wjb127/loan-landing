import HeroSection from '@/components/HeroSection'
import ProcessSteps from '@/components/ProcessSteps'
import EligibilitySection from '@/components/EligibilitySection'
import TargetAudienceSection from '@/components/TargetAudienceSection'
import Footer from '@/components/Footer'
import AlwaysOpenLeadForm from '@/components/AlwaysOpenLeadForm'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      
      <main className="bg-slate-200 pb-60">
        {/* Process Steps Section */}
        <section className="bg-slate-100 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-center text-4xl font-bold text-slate-800 mb-4">
              최저금리 안심대출 <span className="text-amber-600">신청 절차</span>
            </h1>
            <ProcessSteps />
          </div>
        </section>

        {/* Dark Navy Background Section */}
        <section className="py-16 relative" style={{ backgroundColor: '#1a2332' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-white text-3xl font-bold mb-4">
                근로자 안심대출<br/>
                <span className="text-amber-400">신청 모집안내</span>
              </h2>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="bg-slate-100 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <EligibilitySection />
          </div>
        </section>

        {/* Loan Amount Highlight */}
        <section className="bg-slate-300 py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="border border-amber-400 border-opacity-50 rounded-lg shadow-xl p-8 inline-block backdrop-blur-sm" style={{ backgroundColor: '#1a2332' }}>
              <h3 className="text-2xl font-bold text-amber-400 mb-2">월 납입금</h3>
              <div className="text-amber-400 text-6xl font-bold mb-2">예시</div>
              <div className="text-right">
                <span className="text-slate-200 text-xl">5천만원 융통 시 </span>
                <span className="text-amber-400 text-3xl font-bold">3.9%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="bg-slate-100 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <TargetAudienceSection />
          </div>
        </section>
      </main>
      
      <Footer />
      <AlwaysOpenLeadForm />
    </>
  )
}