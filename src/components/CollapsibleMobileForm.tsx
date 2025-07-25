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
    privacyAgreed: false
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
      
      // Consider "bottom" when user is within 100px of the actual bottom
      const threshold = 100
      const isNearBottom = scrollTop + windowHeight >= documentHeight - threshold
      
      setIsAtBottom(isNearBottom)
      
      // Auto-expand when at bottom on mobile
      if (isNearBottom && window.innerWidth < 768) {
        setIsExpanded(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        {/* Collapsed State - Tab */}
        {!isExpanded && (
          <div 
            className="bg-blue-500 text-white text-center py-4 rounded-t-3xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
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

        {/* Expanded State - Full Form */}
        {isExpanded && (
          <div className="bg-blue-500 text-white shadow-2xl animate-slideUp">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-blue-400">
              <h3 className="text-lg font-bold">원클릭 상담 신청</h3>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-white hover:text-gray-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                </svg>
              </button>
            </div>

            <div className="p-4">
              <p className="text-sm mb-2 opacity-90">
                *정부지원/정책자금이 아닌 대출상담서비스입니다.
              </p>
              <p className="text-xs mb-4 opacity-80">
                ※ 허위, 허황, 파산, 면책, 무직, 신용불량자는 신청이 불가합니다.
              </p>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✅</div>
                  <div className="text-xl font-semibold mb-2">
                    신청이 완료되었습니다!
                  </div>
                  <div className="text-sm opacity-90">
                    빠른 시일 내에 연락드리겠습니다.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="text-red-200 text-sm text-center bg-red-700 bg-opacity-50 p-3 rounded">
                      {error}
                    </div>
                  )}
                  
                  <input
                    type="text"
                    name="name"
                    placeholder="이름"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white bg-opacity-90 text-gray-900 placeholder-gray-600 rounded-lg focus:ring-2 focus:ring-blue-300 focus:bg-white"
                    disabled={isPending}
                  />
                  
                  <input
                    type="tel"
                    name="contact"
                    placeholder="연락처(-없이 입력)"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white bg-opacity-90 text-gray-900 placeholder-gray-600 rounded-lg focus:ring-2 focus:ring-blue-300 focus:bg-white"
                    disabled={isPending}
                  />

                  <div className="space-y-3">
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
                    <Link href="/privacy" className="text-blue-200 underline ml-1">
                      [보기]
                    </Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending || !formData.name || !formData.contact || !formData.privacyAgreed}
                    className="w-full bg-white text-blue-600 font-bold py-4 px-6 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transform hover:scale-105"
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
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  )
}