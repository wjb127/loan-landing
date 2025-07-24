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
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl border-t-4 border-blue-600 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            {/* Left side - Form info */}
            <div className="lg:col-span-1">
              <h3 className="text-red-600 font-bold text-lg mb-2">원클릭 상담 신청</h3>
              <p className="text-sm text-gray-600 mb-2">
                ※ 허위, 허황, 파산, 면적, 무직, 신용불량자는
              </p>
              <p className="text-sm text-red-600 font-medium">
                신청이 불가합니다.
              </p>
              <p className="text-xs text-red-500 mt-2">
                *정확한정보/정확한금액이 아니다대출상담서비스입니다.
              </p>
            </div>

            {/* Center - Form fields */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-2xl mb-4">✅</div>
                  <div className="text-lg font-semibold text-green-600 mb-2">
                    신청이 완료되었습니다!
                  </div>
                  <div className="text-sm text-gray-600">
                    빠른 시일 내에 연락드리겠습니다.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
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
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isPending}
                    />
                    <input
                      type="tel"
                      name="contact"
                      placeholder="연락처(-없이 입력)"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isPending}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center space-x-4 text-sm">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="loanType"
                            checked={formData.loanType === '4대보험가입'}
                            onChange={() => handleRadioChange('loanType', '4대보험가입')}
                            className="mr-2"
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
                            className="mr-2"
                            disabled={isPending}
                          />
                          사업자/기타
                        </label>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-4 text-sm">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="creditStatus"
                            checked={formData.creditStatus === '신용카드소유'}
                            onChange={() => handleRadioChange('creditStatus', '신용카드소유')}
                            className="mr-2"
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
                            className="mr-2"
                            disabled={isPending}
                          />
                          미소유
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      name="privacyAgreed"
                      checked={formData.privacyAgreed}
                      onChange={handleInputChange}
                      className="mr-2"
                      disabled={isPending}
                    />
                    <span>개인정보 수집/이용/제공 동의 </span>
                    <Link href="/privacy" className="text-blue-600 underline ml-1">
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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