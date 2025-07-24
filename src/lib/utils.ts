import { Lead } from '@/lib/supabase'

export function getStatusText(status: Lead['status']) {
  switch (status) {
    case 'new': return '신규'
    case 'contacted': return '연락완료'
    case 'converted': return '전환완료'
    case 'rejected': return '거절'
    default: return '알 수 없음'
  }
}