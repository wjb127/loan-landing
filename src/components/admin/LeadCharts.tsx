'use client'

import { useState, useMemo } from 'react'
import { type Lead } from '@/lib/supabase'

interface LeadChartsProps {
  leads: Lead[]
}

type Period = 'daily' | 'weekly' | 'monthly'

export default function LeadCharts({ leads }: LeadChartsProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('daily')

  const chartData = useMemo(() => {
    const now = new Date()
    const data: { [key: string]: number } = {}

    if (selectedPeriod === 'daily') {
      // Last 7 days
      for (let i = 6; i >= 0; i--) {
        const date = new Date(now)
        date.setDate(date.getDate() - i)
        const key = date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })
        data[key] = 0
      }
      
      leads.forEach(lead => {
        if (lead.created_at) {
          const leadDate = new Date(lead.created_at)
          const key = leadDate.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })
          if (data.hasOwnProperty(key)) {
            data[key]++
          }
        }
      })
    } else if (selectedPeriod === 'weekly') {
      // Last 4 weeks
      for (let i = 3; i >= 0; i--) {
        const date = new Date(now)
        date.setDate(date.getDate() - (i * 7))
        const weekStart = new Date(date)
        weekStart.setDate(weekStart.getDate() - weekStart.getDay())
        const key = `${weekStart.getMonth() + 1}/${weekStart.getDate()}`
        data[key] = 0
      }
      
      leads.forEach(lead => {
        if (lead.created_at) {
          const leadDate = new Date(lead.created_at)
          const weekStart = new Date(leadDate)
          weekStart.setDate(weekStart.getDate() - weekStart.getDay())
          const key = `${weekStart.getMonth() + 1}/${weekStart.getDate()}`
          if (data.hasOwnProperty(key)) {
            data[key]++
          }
        }
      })
    } else {
      // Last 6 months
      for (let i = 5; i >= 0; i--) {
        const date = new Date(now)
        date.setMonth(date.getMonth() - i)
        const key = date.toLocaleDateString('ko-KR', { year: '2-digit', month: 'short' })
        data[key] = 0
      }
      
      leads.forEach(lead => {
        if (lead.created_at) {
          const leadDate = new Date(lead.created_at)
          const key = leadDate.toLocaleDateString('ko-KR', { year: '2-digit', month: 'short' })
          if (data.hasOwnProperty(key)) {
            data[key]++
          }
        }
      })
    }

    return data
  }, [leads, selectedPeriod])

  const maxValue = Math.max(...Object.values(chartData), 1) // At least 1 for proper scaling
  const entries = Object.entries(chartData)

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">리드 수집 통계</h2>
        <div className="flex space-x-2">
          {(['daily', 'weekly', 'monthly'] as Period[]).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                selectedPeriod === period
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {period === 'daily' ? '일간' : period === 'weekly' ? '주간' : '월간'}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="relative">
        <div className="flex items-end justify-between space-x-2 h-64">
          {entries.map(([label, value]) => {
            const heightPercentage = maxValue > 0 ? (value / maxValue) * 100 : 0
            const minHeight = 4 // Minimum height in pixels
            const actualHeight = value > 0 ? Math.max(heightPercentage, 10) : 0 // Show at least 10% if has data
            
            return (
              <div key={label} className="flex-1 flex flex-col items-center">
                <div className="relative w-full h-64 flex items-end">
                  <div 
                    className={`w-full rounded-t transition-all duration-300 relative group cursor-pointer ${
                      value > 0 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-200'
                    }`}
                    style={{ 
                      height: value > 0 ? `${actualHeight}%` : `${minHeight}px`,
                      minHeight: `${minHeight}px`
                    }}
                  >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                        {value}건
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                    {/* Value label on bar */}
                    {value > 0 && (
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium">
                        {value}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center text-xs text-gray-600 mt-2 transform -rotate-45 origin-center whitespace-nowrap">
                  {label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-64 flex flex-col justify-between text-xs text-gray-500 -ml-8">
          <span>{maxValue}</span>
          <span>{Math.round(maxValue * 0.75)}</span>
          <span>{Math.round(maxValue * 0.5)}</span>
          <span>{Math.round(maxValue * 0.25)}</span>
          <span>0</span>
        </div>
      </div>

      {/* Summary */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-blue-50 rounded">
          <div className="text-2xl font-bold text-blue-600">{Object.values(chartData).reduce((a, b) => a + b, 0)}</div>
          <div className="text-sm text-gray-600">
            {selectedPeriod === 'daily' ? '최근 7일' : selectedPeriod === 'weekly' ? '최근 4주' : '최근 6개월'}
          </div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded">
          <div className="text-2xl font-bold text-green-600">{Math.max(...Object.values(chartData))}</div>
          <div className="text-sm text-gray-600">최대 일일</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded">
          <div className="text-2xl font-bold text-orange-600">
            {Object.values(chartData).length > 0 ? Math.round(Object.values(chartData).reduce((a, b) => a + b, 0) / Object.values(chartData).length) : 0}
          </div>
          <div className="text-sm text-gray-600">평균</div>
        </div>
      </div>
    </div>
  )
}