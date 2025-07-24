export interface Lead {
  id?: string
  name: string
  contact: string
  created_at?: string
  status: 'new' | 'contacted' | 'converted' | 'rejected'
  notes?: string
}