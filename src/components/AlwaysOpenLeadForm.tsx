'use client'

import { useState, useTransition } from 'react'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'
import Link from 'next/link'

export default function AlwaysOpenLeadForm() {
  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    loanType: '4대보험가입',
    creditStatus: '신용카드소유',
    privacyAgreed: false
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleRadioChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.contact) {
      setError('이름과 연락처를 입력해주세요.')
      return
    }

    if (!formData.privacyAgreed) {
      setError('개인정보 수집/이용에 동의해주세요.')
      return
    }

    startTransition(async () => {
      try {
        setError('')

        if (isDemoMode || !supabase) {
          // Demo mode: Just log the form data
          console.log('📝 Demo Mode - Form submitted:', formData)
          setSubmitted(true)
          setTimeout(() => {
            setSubmitted(false)
            setFormData({
              name: '',
              contact: '',
              loanType: '4대보험가입',
              creditStatus: '신용카드소유',
              privacyAgreed: false
            })
          }, 3000)
        } else {
          // Production mode: Save to Supabase
          const leadData: Omit<Lead, 'id' | 'created_at'> = {
            name: formData.name,
            contact: formData.contact,
            notes: `대출종류: ${formData.loanType}, 신용상태: ${formData.creditStatus}`,
            status: 'new'
          }

          const { error } = await supabase
            .from('kmong_2_leads')
            .insert([leadData])

          if (error) throw error

          setSubmitted(true)
          setTimeout(() => {
            setSubmitted(false)
            setFormData({
              name: '',
              contact: '',
              loanType: '4대보험가입',
              creditStatus: '신용카드소유',
              privacyAgreed: false
            })
          }, 3000)
        }
      } catch (err) {
        console.error('Error submitting form:', err)
        setError('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 shadow-2xl border-t-4 border-amber-400 z-50" style={{ backgroundColor: '#1a2332' }}>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="border border-amber-400 border-opacity-40 rounded-lg p-6" style={{ backgroundColor: 'rgba(15, 23, 32, 0.95)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            {/* Left side - Form info */}
            <div className="lg:col-span-1">
              <h3 className="text-amber-400 font-bold text-lg mb-2">원클릭 상담 신청</h3>
              <p className="text-sm text-slate-200 mb-2">
                ※ 허위, 허황, 파산, 면책, 무직, 신용불량자는 신청이 불가합니다.
              </p>
              <p className="text-xs text-red-400 mt-2">
                *정부지원/정책자금이 아닌 대출상담서비스입니다.
              </p>
            </div>

            {/* Center - Form fields */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-2xl mb-4">✅</div>
                  <div className="text-lg font-semibold text-green-400 mb-2">
                    신청이 완료되었습니다!
                  </div>
                  <div className="text-sm text-slate-200">
                    빠른 시일 내에 연락드리겠습니다.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="text-red-400 text-sm text-center bg-red-900 bg-opacity-30 p-2 rounded">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="이름"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" style={{ backgroundColor: '#0f1720' }}
                      disabled={isPending}
                    />
                    <input
                      type="tel"
                      name="contact"
                      placeholder="연락처(-없이 입력)"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent" style={{ backgroundColor: '#0f1720' }}
                      disabled={isPending}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center space-x-4 text-sm text-slate-200">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="loanType"
                            checked={formData.loanType === '4대보험가입'}
                            onChange={() => handleRadioChange('loanType', '4대보험가입')}
                            className="mr-2 text-amber-400"
                            disabled={isPending}
                          />
                          4대보험가입
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="loanType"
                            checked={formData.loanType === '사업자/기타'}
                            onChange={() => handleRadioChange('loanType', '사업자/기타')}
                            className="mr-2 text-amber-400"
                            disabled={isPending}
                          />
                          사업자/기타
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-4 text-sm text-slate-200">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="creditStatus"
                            checked={formData.creditStatus === '신용카드소유'}
                            onChange={() => handleRadioChange('creditStatus', '신용카드소유')}
                            className="mr-2 text-amber-400"
                            disabled={isPending}
                          />
                          신용카드소유
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="creditStatus"
                            checked={formData.creditStatus === '미소유'}
                            onChange={() => handleRadioChange('creditStatus', '미소유')}
                            className="mr-2 text-amber-400"
                            disabled={isPending}
                          />
                          미소유
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-slate-200">
                    <input
                      type="checkbox"
                      name="privacyAgreed"
                      checked={formData.privacyAgreed}
                      onChange={handleInputChange}
                      className="mr-2 text-amber-400"
                      disabled={isPending}
                    />
                    <span>개인정보 수집/이용/제공 동의 </span>
                    <Link href="/privacy" className="text-amber-400 underline ml-1">
                      [보기]
                    </Link>
                  </div>
                </form>
              )}
            </div>

            {/* Right side - Submit button */}
            <div className="lg:col-span-1">
              {!submitted && (
                <button
                  onClick={handleSubmit}
                  disabled={isPending || !formData.name || !formData.contact || !formData.privacyAgreed}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-slate-900 font-bold py-4 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-amber-400"
                >
                  {isPending ? '처리중...' : '신청'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}