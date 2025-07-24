'use client'

import { useState } from 'react'
import { type Lead } from '@/lib/supabase'

interface LeadDetailModalProps {
  lead: Lead
  onClose: () => void
  onUpdateStatus: (leadId: string, status: Lead['status']) => Promise<void>
  onUpdateNotes: (leadId: string, notes: string) => Promise<void>
  onDeleteLead: (leadId: string) => Promise<void>
  isPending: boolean
}

export default function LeadDetailModal({ 
  lead, 
  onClose, 
  onUpdateStatus, 
  onUpdateNotes,
  onDeleteLead,
  isPending 
}: LeadDetailModalProps) {
  const [notes, setNotes] = useState(lead.notes || '')
  const [status, setStatus] = useState<Lead['status']>(lead.status)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

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

  const handleDelete = async () => {
    await onDeleteLead(lead.id!)
    onClose()
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
          
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setShowDeleteConfirm(true)}
              disabled={isPending}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              삭제
            </button>
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

      {/* Delete confirmation modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full z-60 animate-in fade-in duration-200">
          <div className="relative top-1/2 transform -translate-y-1/2 mx-auto p-5 border w-80 shadow-xl rounded-md bg-white animate-in slide-in-from-bottom duration-300">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">리드 삭제</h3>
              <p className="text-sm text-gray-500 mb-6">
                <strong>{lead.name}</strong> 님의 신청 정보를 삭제하시겠습니까?<br/>
                이 작업은 되돌릴 수 없습니다.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  disabled={isPending}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors disabled:opacity-50"
                >
                  취소
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isPending}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
                >
                  {isPending ? '삭제 중...' : '삭제'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}