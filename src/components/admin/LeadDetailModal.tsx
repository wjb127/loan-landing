'use client'

import { useState } from 'react'
import { type Lead } from '@/lib/supabase'

interface LeadDetailModalProps {
  lead: Lead
  onClose: () => void
  onUpdateStatus: (leadId: string, status: Lead['status']) => Promise<void>
  onUpdateNotes: (leadId: string, notes: string) => Promise<void>
  isPending: boolean
}

export default function LeadDetailModal({ 
  lead, 
  onClose, 
  onUpdateStatus, 
  onUpdateNotes,
  isPending 
}: LeadDetailModalProps) {
  const [notes, setNotes] = useState(lead.notes || '')
  const [status, setStatus] = useState<Lead['status']>(lead.status)

  const handleStatusChange = async (newStatus: Lead['status']) => {
    setStatus(newStatus)
    await onUpdateStatus(lead.id!, newStatus)
  }

  const handleNotesChange = (newNotes: string) => {
    setNotes(newNotes)
    // Debounced update to avoid too many updates
    const timeoutId = setTimeout(() => {
      onUpdateNotes(lead.id!, newNotes)
    }, 500)
    return () => clearTimeout(timeoutId)
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 animate-in fade-in duration-200">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white animate-in slide-in-from-bottom duration-300">
        <div className="mt-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">리드 관리</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">신청자</label>
              <p className="text-sm text-gray-900">{lead.name}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
              <p className="text-sm text-gray-900">{lead.contact}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">신청일시</label>
              <p className="text-sm text-gray-900">
                {lead.created_at ? new Date(lead.created_at).toLocaleString('ko-KR') : '-'}
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">상태 변경</label>
              <select
                value={status}
                onChange={(e) => handleStatusChange(e.target.value as Lead['status'])}
                disabled={isPending}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <option value="new">신규</option>
                <option value="contacted">연락완료</option>
                <option value="converted">전환완료</option>
                <option value="rejected">거절</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">메모</label>
              <textarea
                value={notes}
                onChange={(e) => handleNotesChange(e.target.value)}
                disabled={isPending}
                rows={4}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                placeholder="메모를 입력하세요..."
              />
            </div>
          </div>
          
          <div className="flex justify-end mt-6 gap-3">
            <button
              onClick={onClose}
              disabled={isPending}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors disabled:opacity-50"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}