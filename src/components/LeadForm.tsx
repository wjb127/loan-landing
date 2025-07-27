'use client'

import { useState, useTransition } from 'react'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'

export default function LeadForm() {
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

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.privacyAgreed) {
      setError('개인정보 수집 및 이용에 동의해주세요.')
      return
    }

    setError('')
    
    startTransition(async () => {
      try {
        const leadData: Omit<Lead, 'id' | 'created_at'> = {
          name: formData.name,
          contact: formData.contact,
          notes: `대출종류: ${formData.loanType}, 신용상태: ${formData.creditStatus}`,
          status: 'new'
        }

        if (isDemoMode || !supabase) {
          // Demo mode: Just log the data
          console.log('🎯 Demo Mode - Lead submitted:', leadData)
          await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
        } else {
          // Production mode: Save to Supabase
          const { error: insertError } = await supabase
            .from('kmong_2_leads')
            .insert([leadData])

          if (insertError) {
            throw insertError
          }
        }

        setSubmitted(true)
        setFormData({
          name: '',
          contact: '',
          loanType: '4대보험가입',
          creditStatus: '신용카드소유',
          privacyAgreed: false
        })
      } catch (err) {
        console.error('Error submitting form:', err)
        setError('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    })
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-all animate-in fade-in zoom-in duration-500">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">신청이 완료되었습니다!</h3>
        <p className="text-gray-600 mb-4">
          빠른 시간 내에 연락드리겠습니다.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blue-900 hover:text-blue-800 font-medium transition-colors"
        >
          다시 신청하기
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-3 border-b">
        <h2 className="text-lg font-bold text-gray-800">원클릭 상담 신청</h2>
        <p className="text-sm text-red-600">※ 회생,파산,회복,피산 무료상담서비스입니다.</p>
        <p className="text-xs text-gray-600 mt-1">정부지원/정책자금이 아닌 대출중개상담서비스입니다.</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded animate-in slide-in-from-top duration-300">
            {error}
          </div>
        )}

        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleInputChange}
            required
            disabled={isPending}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
          />
        </div>

        {/* Contact Input */}
        <div>
          <input
            type="tel"
            name="contact"
            placeholder="연락처(휴대폰 번호)"
            value={formData.contact}
            onChange={handleInputChange}
            required
            disabled={isPending}
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
          />
          <p className="text-xs text-gray-500 mt-1">예: 010-1234-5678</p>
        </div>

        {/* Loan Type Radio Buttons */}
        <div className="space-y-2">
          <div className="flex items-center gap-4 flex-wrap">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="loanType"
                checked={formData.loanType === '4대보험가입'}
                onChange={() => handleRadioChange('loanType', '4대보험가입')}
                disabled={isPending}
                className="w-4 h-4 text-blue-900 disabled:opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">4대보험가입</span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="loanType"
                checked={formData.loanType === '사업자/기타'}
                onChange={() => handleRadioChange('loanType', '사업자/기타')}
                disabled={isPending}
                className="w-4 h-4 text-blue-900 disabled:opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">사업자/기타</span>
            </label>
          </div>
        </div>

        {/* Credit Status Radio Buttons */}
        <div className="space-y-2">
          <div className="flex items-center gap-4 flex-wrap">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="creditStatus"
                checked={formData.creditStatus === '신용카드소유'}
                onChange={() => handleRadioChange('creditStatus', '신용카드소유')}
                disabled={isPending}
                className="w-4 h-4 text-blue-900 disabled:opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">신용카드소유</span>
            </label>
            
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="creditStatus"
                checked={formData.creditStatus === '미소유'}
                onChange={() => handleRadioChange('creditStatus', '미소유')}
                disabled={isPending}
                className="w-4 h-4 text-blue-900 disabled:opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">미소유</span>
            </label>
          </div>
        </div>

        {/* Privacy Agreement */}
        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            id="privacy"
            name="privacyAgreed"
            checked={formData.privacyAgreed}
            onChange={handleInputChange}
            disabled={isPending}
            className="w-4 h-4 text-blue-900 mt-1 disabled:opacity-50"
          />
          <label htmlFor="privacy" className="text-xs text-gray-600">
            개인정보 수집/이용/제공 동의 <span className="text-blue-900 underline cursor-pointer">[더보기]</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none"
        >
          {isPending ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              신청 중...
            </span>
          ) : '신청'}
        </button>
      </form>
    </div>
  )
}