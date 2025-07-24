import { type Lead } from '@/lib/supabase'

interface StatsCardsProps {
  leads: Lead[]
}

export default function StatsCards({ leads }: StatsCardsProps) {
  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    converted: leads.filter(l => l.status === 'converted').length,
    rejected: leads.filter(l => l.status === 'rejected').length,
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
        <div className="text-sm text-gray-600">전체 리드</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="text-2xl font-bold text-blue-600">{stats.new}</div>
        <div className="text-sm text-gray-600">신규</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="text-2xl font-bold text-yellow-600">{stats.contacted}</div>
        <div className="text-sm text-gray-600">연락완료</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="text-2xl font-bold text-green-600">{stats.converted}</div>
        <div className="text-sm text-gray-600">전환완료</div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
        <div className="text-sm text-gray-600">거절</div>
      </div>
    </div>
  )
}