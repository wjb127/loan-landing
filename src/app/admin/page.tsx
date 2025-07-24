'use client'

import { useState, useEffect, useTransition } from 'react'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'
import LeadsTable from '@/components/admin/LeadsTable'
import StatsCards from '@/components/admin/StatsCards'
import LeadDetailModal from '@/components/admin/LeadDetailModal'

export default function AdminDashboard() {
  const [isPending, startTransition] = useTransition()
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'converted' | 'rejected'>('all')

  useEffect(() => {
    fetchLeads()
  }, [])

  const fetchLeads = async () => {
    try {
      setLoading(true)
      
      if (isDemoMode || !supabase) {
        // Demo mode: Use sample data
        console.log('📊 Demo Mode - Loading sample leads')
        const sampleLeads: Lead[] = [
          {
            id: '1',
            name: '김철수',
            contact: '010-1234-5678',
            created_at: new Date().toISOString(),
            status: 'new',
            notes: '대출종류: 4대보험가입, 신용상태: 신용카드소유'
          },
          {
            id: '2',
            name: '이영희',
            contact: '010-9876-5432',
            created_at: new Date(Date.now() - 86400000).toISOString(),
            status: 'contacted',
            notes: '대출종류: 사업자/기타, 신용상태: 미소유'
          },
          {
            id: '3',
            name: '박민수',
            contact: '010-5555-5555',
            created_at: new Date(Date.now() - 172800000).toISOString(),
            status: 'converted',
            notes: '대출종류: 4대보험가입, 신용상태: 신용카드소유'
          }
        ]
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate loading
        setLeads(sampleLeads)
      } else {
        // Production mode: Fetch from Supabase
        const { data, error } = await supabase
          .from('kmong_2_leads')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setLeads(data || [])
      }
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
        if (isDemoMode || !supabase) {
          // Demo mode: Update local state only
          setLeads(leads.map(lead => 
            lead.id === leadId ? { ...lead, status } : lead
          ))
          console.log('✅ Demo Mode - Status updated:', { leadId, status })
        } else {
          // Production mode: Update in Supabase
          const { error } = await supabase
            .from('kmong_2_leads')
            .update({ status })
            .eq('id', leadId)

          if (error) throw error
          
          setLeads(leads.map(lead => 
            lead.id === leadId ? { ...lead, status } : lead
          ))
        }
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
        if (isDemoMode || !supabase) {
          // Demo mode: Update local state only
          setLeads(leads.map(lead => 
            lead.id === leadId ? { ...lead, notes } : lead
          ))
          console.log('📝 Demo Mode - Notes updated:', { leadId, notes })
        } else {
          // Production mode: Update in Supabase
          const { error } = await supabase
            .from('kmong_2_leads')
            .update({ notes })
            .eq('id', leadId)

          if (error) throw error
          
          setLeads(leads.map(lead => 
            lead.id === leadId ? { ...lead, notes } : lead
          ))
        }
      } catch (err) {
        console.error('Error updating notes:', err)
        setError('메모 업데이트 중 오류가 발생했습니다.')
      }
    })
  }

  const filteredLeads = leads.filter(lead => 
    filter === 'all' || lead.status === filter
  )

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
              <div className="text-sm text-gray-600">웰스대부중개</div>
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
            isPending={isPending}
          />
        )}
      </main>
    </div>
  )
}

export function getStatusText(status: Lead['status']) {
  switch (status) {
    case 'new': return '신규'
    case 'contacted': return '연락완료'
    case 'converted': return '전환완료'
    case 'rejected': return '거절'
    default: return '알 수 없음'
  }
}