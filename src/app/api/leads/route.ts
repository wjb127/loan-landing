import { NextRequest, NextResponse } from 'next/server'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'

// GET - Fetch all leads
export async function GET() {
  try {
    if (isDemoMode || !supabase) {
      // Demo mode: Return sample data
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
        },
        {
          id: '4',
          name: '정수현',
          contact: '010-1111-2222',
          created_at: new Date(Date.now() - 259200000).toISOString(),
          status: 'new',
          notes: '대출종류: 4대보험가입, 신용상태: 신용카드소유'
        },
        {
          id: '5',
          name: '최지혜',
          contact: '010-3333-4444',
          created_at: new Date(Date.now() - 345600000).toISOString(),
          status: 'contacted',
          notes: '대출종류: 사업자/기타, 신용상태: 신용카드소유'
        },
        {
          id: '6',
          name: '한동훈',
          contact: '010-5555-6666',
          created_at: new Date(Date.now() - 432000000).toISOString(),
          status: 'converted',
          notes: '대출종류: 4대보험가입, 신용상태: 미소유'
        },
        {
          id: '7',
          name: '송민지',
          contact: '010-7777-8888',
          created_at: new Date(Date.now() - 518400000).toISOString(),
          status: 'new',
          notes: '대출종류: 사업자/기타, 신용상태: 신용카드소유'
        },
        {
          id: '8',
          name: '강태원',
          contact: '010-9999-0000',
          created_at: new Date().toISOString(),
          status: 'new',
          notes: '대출종류: 4대보험가입, 신용상태: 신용카드소유'
        }
      ]
      return NextResponse.json({ data: sampleLeads })
    }

    // Production mode: Fetch from Supabase
    const { data, error } = await supabase
      .from('kmong_2_leads')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error

    return NextResponse.json({ data: data || [] })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    )
  }
}

// POST - Create new lead
export async function POST(request: NextRequest) {
  try {
    const leadData = await request.json()

    if (isDemoMode || !supabase) {
      // Demo mode: Return mock success
      console.log('📝 Demo Mode - Lead created:', leadData)
      return NextResponse.json({ 
        data: { 
          id: Date.now().toString(), 
          ...leadData, 
          created_at: new Date().toISOString() 
        } 
      })
    }

    // Production mode: Insert to Supabase
    const { data, error } = await supabase
      .from('kmong_2_leads')
      .insert([leadData])
      .select()

    if (error) throw error

    return NextResponse.json({ data: data?.[0] })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}