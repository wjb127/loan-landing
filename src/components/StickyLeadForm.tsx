'use client'

import { useState, useTransition } from 'react'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'
import Link from 'next/link'

export default function StickyLeadForm() {
  const [isPending, startTransition] = useTransition()
  const [isExpanded, setIsExpanded] = useState(false)
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
          console.log('🎯 Demo Mode - Lead submitted:', leadData)
          await new Promise(resolve => setTimeout(resolve, 1000))
        } else {
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
        
        // Auto collapse after submission
        setTimeout(() => {
          setIsExpanded(false)
          setSubmitted(false)
        }, 3000)
      } catch (err) {
        console.error('Error submitting form:', err)
        setError('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    })
  }

  if (submitted) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-green-600 text-white p-4 shadow-lg animate-in slide-in-from-bottom duration-300">
        <div className="max-w-md mx-auto text-center">
          <div className="text-2xl mb-2">✓</div>
          <p className="font-medium">신청이 완료되었습니다!</p>
          <p className="text-sm opacity-90">빠른 시간 내에 연락드리겠습니다.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t">
      {/* Collapse/Expand Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full bg-blue-600 text-white py-3 px-4 font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <span>💰 무료 대출 상담 신청</span>
        <svg 
          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded Form */}
      {isExpanded && (
        <div className="animate-in slide-in-from-bottom duration-300">
          <div className="bg-gray-50 px-4 py-2 border-b">
            <p className="text-sm text-red-600 font-medium">※ 회생,파산,회복,피산 무료상담서비스입니다.</p>
            <p className="text-xs text-gray-600">정부지원/정책자금이 아닌 대출중개상담서비스입니다.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-4 space-y-3 max-h-96 overflow-y-auto">
            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
                {error}
              </div>
            )}

            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleInputChange}
              required
              disabled={isPending}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:opacity-50"
            />

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
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm disabled:opacity-50"
              />
              <p className="text-xs text-gray-500 mt-1">예: 010-1234-5678</p>
            </div>

            {/* Radio Buttons */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2">대출종류</p>
                <div className="space-y-1">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="loanType"
                      checked={formData.loanType === '4대보험가입'}
                      onChange={() => handleRadioChange('loanType', '4대보험가입')}
                      disabled={isPending}
                      className="w-3 h-3 text-blue-600 disabled:opacity-50"
                    />
                    <span className="ml-2 text-sm">4대보험가입</span>
                  </label>
                  
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="loanType"
                      checked={formData.loanType === '사업자/기타'}
                      onChange={() => handleRadioChange('loanType', '사업자/기타')}
                      disabled={isPending}
                      className="w-3 h-3 text-blue-600 disabled:opacity-50"
                    />
                    <span className="ml-2 text-sm">사업자/기타</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="font-medium mb-2">신용상태</p>
                <div className="space-y-1">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="creditStatus"
                      checked={formData.creditStatus === '신용카드소유'}
                      onChange={() => handleRadioChange('creditStatus', '신용카드소유')}
                      disabled={isPending}
                      className="w-3 h-3 text-blue-600 disabled:opacity-50"
                    />
                    <span className="ml-2 text-sm">신용카드소유</span>
                  </label>
                  
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="creditStatus"
                      checked={formData.creditStatus === '미소유'}
                      onChange={() => handleRadioChange('creditStatus', '미소유')}
                      disabled={isPending}
                      className="w-3 h-3 text-blue-600 disabled:opacity-50"
                    />
                    <span className="ml-2 text-sm">미소유</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Privacy Agreement */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="sticky-privacy"
                name="privacyAgreed"
                checked={formData.privacyAgreed}
                onChange={handleInputChange}
                disabled={isPending}
                className="w-4 h-4 text-blue-600 mt-1 disabled:opacity-50"
              />
              <label htmlFor="sticky-privacy" className="text-xs text-gray-600">
                개인정보 수집/이용/제공 동의{' '}
                <Link href="/privacy" className="text-blue-600 underline">
                  [더보기]
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 px-4 rounded transition-all"
            >
              {isPending ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  신청 중...
                </span>
              ) : '무료 상담 신청하기'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}