'use client'

import { useState, useEffect, useTransition } from 'react'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'
import { getStatusText } from '@/lib/utils'
import LeadsTable from '@/components/admin/LeadsTable'
import StatsCards from '@/components/admin/StatsCards'
import LeadDetailModal from '@/components/admin/LeadDetailModal'
import LeadCharts from '@/components/admin/LeadCharts'
import PasswordProtection from '@/components/admin/PasswordProtection'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'converted' | 'rejected'>('all')

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem('admin_authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads()
    }
  }, [isAuthenticated])

  const fetchLeads = async () => {
    try {
      setLoading(true)
      
      const response = await fetch('/api/leads')
      if (!response.ok) throw new Error('Failed to fetch leads')
      
      const result = await response.json()
      setLeads(result.data || [])
    } catch (err) {
      console.error('Error fetching leads:', err)
      setError('데이터를 불러오는 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const updateLeadStatus = async (leadId: string, status: Lead['status']) => {
    startTransition(async () => {
      try {
        const response = await fetch(`/api/leads/${leadId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ status })
        })

        if (!response.ok) throw new Error('Failed to update lead status')

        setLeads(leads.map(lead => 
          lead.id === leadId ? { ...lead, status } : lead
        ))
        setSelectedLead(null)
      } catch (err) {
        console.error('Error updating lead status:', err)
        setError('상태 업데이트 중 오류가 발생했습니다.')
      }
    })
  }

  const updateLeadNotes = async (leadId: string, notes: string) => {
    startTransition(async () => {
      try {
        const response = await fetch(`/api/leads/${leadId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ notes })
        })

        if (!response.ok) throw new Error('Failed to update lead notes')

        setLeads(leads.map(lead => 
          lead.id === leadId ? { ...lead, notes } : lead
        ))
      } catch (err) {
        console.error('Error updating notes:', err)
        setError('메모 업데이트 중 오류가 발생했습니다.')
      }
    })
  }

  const deleteLead = async (leadId: string) => {
    startTransition(async () => {
      try {
        const response = await fetch(`/api/leads/${leadId}`, {
          method: 'DELETE'
        })

        if (!response.ok) throw new Error('Failed to delete lead')

        setLeads(leads.filter(lead => lead.id !== leadId))
        setSelectedLead(null)
      } catch (err) {
        console.error('Error deleting lead:', err)
        setError('리드 삭제 중 오류가 발생했습니다.')
      }
    })
  }

  const filteredLeads = leads.filter(lead => 
    filter === 'all' || lead.status === filter
  )

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">데이터를 불러오는 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">리드 관리 대시보드</h1>
              <p className="text-gray-600 mt-1">접수된 대출 신청을 관리할 수 있습니다.</p>
              {isDemoMode && (
                <p className="text-amber-600 text-sm mt-2 font-medium">
                  🎯 데모 모드로 실행 중입니다. Supabase를 설정하면 실제 데이터를 사용할 수 있습니다.
                </p>
              )}
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">주식회사 에이스합동</div>
              <div className="text-xs text-gray-500">관리자 시스템</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 animate-in slide-in-from-top duration-300">
            {error}
          </div>
        )}

        {/* Stats Cards */}
        <StatsCards leads={leads} />

        {/* Lead Charts */}
        <LeadCharts leads={leads} />

        {/* Filter Buttons */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex flex-wrap gap-2">
            {(['all', 'new', 'contacted', 'converted', 'rejected'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                disabled={isPending}
                className={`px-4 py-2 rounded text-sm font-medium transition-all ${
                  filter === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } disabled:opacity-50`}
              >
                {status === 'all' ? '전체' : getStatusText(status)}
              </button>
            ))}
          </div>
        </div>

        {/* Leads Table */}
        <LeadsTable 
          leads={filteredLeads}
          onSelectLead={setSelectedLead}
          isPending={isPending}
        />

        {/* Lead Detail Modal */}
        {selectedLead && (
          <LeadDetailModal
            lead={selectedLead}
            onClose={() => setSelectedLead(null)}
            onUpdateStatus={updateLeadStatus}
            onUpdateNotes={updateLeadNotes}
            onDeleteLead={deleteLead}
            isPending={isPending}
          />
        )}
      </main>
    </div>
  )
}