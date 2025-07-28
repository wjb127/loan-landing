'use client'

import { useState, useTransition, useEffect } from 'react'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'
import Link from 'next/link'

export default function CollapsibleMobileForm() {
  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    loanType: '4대보험가입',
    creditStatus: '신용카드소유',
    privacyAgreed: true
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)
  const [isAtBottom, setIsAtBottom] = useState(false)

  // Check if user scrolled to bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Consider "bottom" when user is within 200px of the actual bottom
      const threshold = 200
      const isNearBottom = scrollTop + windowHeight >= documentHeight - threshold
      
      setIsAtBottom(isNearBottom)
      
      // Auto-expand when at bottom on mobile, but don't auto-collapse
      if (isNearBottom && window.innerWidth < 768 && !isExpanded) {
        setIsExpanded(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isExpanded])

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

        const leadData = {
          name: formData.name,
          contact: formData.contact,
          notes: `대출종류: ${formData.loanType}, 신용상태: ${formData.creditStatus}`,
          status: 'new' as const
        }

        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(leadData)
        })

        if (!response.ok) throw new Error('Failed to submit form')

        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: '',
            contact: '',
            loanType: '4대보험가입',
            creditStatus: '신용카드소유',
            privacyAgreed: true
          })
        }, 3000)
      } catch (err) {
        console.error('Error submitting form:', err)
        setError('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    })
  }

  return (
    <>
      {/* Desktop Version - Always visible */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 shadow-2xl border-t-4 border-gray-300 z-50 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
              {/* Left side - Form info */}
              <div className="lg:col-span-1">
                <h3 className="text-gray-900 font-bold text-lg mb-2 animate-pulse">원클릭 상담 신청</h3>
                <p className="text-sm text-gray-600 mb-2">
                  ※ 허위, 허황, 파산, 면책, 무직, 신용불량자는 신청이 불가합니다.
                </p>
                <p className="text-xs text-gray-700 mt-2">
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
                    <div className="text-sm text-gray-600">
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
                        className="px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white"
                        disabled={isPending}
                      />
                      <input
                        type="tel"
                        name="contact"
                        placeholder="연락처(-없이 입력)"
                        value={formData.contact}
                        onChange={handleInputChange}
                        className="px-4 py-3 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white"
                        disabled={isPending}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="loanType"
                              checked={formData.loanType === '4대보험가입'}
                              onChange={() => handleRadioChange('loanType', '4대보험가입')}
                              className="mr-2 text-gray-600"
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
                              className="mr-2 text-gray-600"
                              disabled={isPending}
                            />
                            사업자/기타
                          </label>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="creditStatus"
                              checked={formData.creditStatus === '신용카드소유'}
                              onChange={() => handleRadioChange('creditStatus', '신용카드소유')}
                              className="mr-2 text-gray-600"
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
                              className="mr-2 text-gray-600"
                              disabled={isPending}
                            />
                            미소유
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <input
                        type="checkbox"
                        name="privacyAgreed"
                        checked={formData.privacyAgreed}
                        onChange={handleInputChange}
                        className="mr-2 text-gray-600"
                        disabled={isPending}
                      />
                      <span>개인정보 수집/이용/제공 동의 </span>
                      <Link href="/privacy" className="text-gray-700 underline ml-1">
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
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700 animate-pulse"
                  >
                    {isPending ? '처리중...' : '신청'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - Collapsible */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60]">
        {/* Collapsed State - Tab */}
        {!isExpanded && (
          <div 
            className="bg-blue-500 text-white text-center py-3 rounded-t-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-blue-600"
            onClick={() => setIsExpanded(true)}
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-6 h-6 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
              </svg>
              <span className="font-bold text-lg">원클릭 상담 신청</span>
              <svg className="w-6 h-6 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
              </svg>
            </div>
          </div>
        )}

        {/* Expanded State - Slide Up Form */}
        {isExpanded && (
          <div className="bg-white text-gray-900 shadow-2xl form-slide-up max-h-[80vh] overflow-y-auto rounded-t-2xl border border-gray-200">
            {/* Drag handle */}
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
            </div>
            
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">원클릭 상담 신청</h3>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                </svg>
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm mb-2 text-gray-600">
                *정부지원/정책자금이 아닌 대출상담서비스입니다.
              </p>
              <p className="text-xs mb-4 text-gray-500">
                ※ 허위, 허황, 파산, 면책, 무직, 신용불량자는 신청이 불가합니다.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✅</div>
                  <div className="text-xl font-semibold mb-2 text-gray-900">
                    신청이 완료되었습니다!
                  </div>
                  <div className="text-sm text-gray-600">
                    빠른 시일 내에 연락드리겠습니다.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="text-red-700 text-sm text-center bg-red-100 p-3 rounded">
                      {error}
                    </div>
                  )}
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 placeholder-gray-500 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isPending}
                  />
                  
                  <input
                    type="tel"
                    name="contact"
                    placeholder="연락처(-없이 입력)"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 text-gray-900 placeholder-gray-500 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isPending}
                  />

                  <div className="space-y-3">
                    <div className="flex items-center space-x-4 text-sm text-gray-700">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="loanType"
                          checked={formData.loanType === '4대보험가입'}
                          onChange={() => handleRadioChange('loanType', '4대보험가입')}
                          className="mr-2 text-blue-500"
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
                          className="mr-2 text-blue-500"
                          disabled={isPending}
                        />
                        사업자/기타
                      </label>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-700">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="creditStatus"
                          checked={formData.creditStatus === '신용카드소유'}
                          onChange={() => handleRadioChange('creditStatus', '신용카드소유')}
                          className="mr-2 text-blue-500"
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
                          className="mr-2 text-blue-500"
                          disabled={isPending}
                        />
                        미소유
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-700">
                    <input
                      type="checkbox"
                      name="privacyAgreed"
                      checked={formData.privacyAgreed}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-500"
                      disabled={isPending}
                    />
                    <span>개인정보 수집/이용/제공 동의 </span>
                    <Link href="/privacy" className="text-blue-500 underline ml-1">
                      [보기]
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending || !formData.name || !formData.contact || !formData.privacyAgreed}
                    className="w-full bg-blue-500 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transform hover:scale-105"
                  >
                    {isPending ? '처리중...' : '신청'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideUpForm {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideDownForm {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        
        .form-slide-up {
          animation: slideUpForm 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .form-slide-down {
          animation: slideDownForm 0.3s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
        }
      `}</style>
    </>
  )
}