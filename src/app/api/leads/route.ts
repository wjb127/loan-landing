import { NextRequest, NextResponse } from 'next/server'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'
import { sendLeadNotificationEmail } from '@/lib/email'

// GET - Fetch all leads
export async function GET() {
  try {
    if (isDemoMode || !supabase) {
      // Demo mode: Return empty array (no sample data)
      console.log('📝 Demo Mode - No Supabase connection')
      return NextResponse.json({ data: [] })
    }

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
      
      // 데모 모드에서도 이메일 발송 (테스트용)
      const emailData = {
        name: leadData.name,
        contact: leadData.contact,
        loanType: leadData.notes?.split(', ')[0]?.replace('대출종류: ', '') || '',
        creditStatus: leadData.notes?.split(', ')[1]?.replace('신용상태: ', '') || '',
        submittedAt: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
      }
      
      // 비동기로 이메일 발송 (실패해도 요청은 성공 처리)
      sendLeadNotificationEmail(emailData).catch(error => {
        console.error('Email notification failed:', error)
      })
      
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

    // 이메일 알림 발송
    if (data && data[0]) {
      const emailData = {
        name: data[0].name,
        contact: data[0].contact,
        loanType: data[0].notes?.split(', ')[0]?.replace('대출종류: ', '') || '',
        creditStatus: data[0].notes?.split(', ')[1]?.replace('신용상태: ', '') || '',
        submittedAt: new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })
      }
      
      // 비동기로 이메일 발송 (실패해도 요청은 성공 처리)
      sendLeadNotificationEmail(emailData).catch(error => {
        console.error('Email notification failed:', error)
      })
    }

    return NextResponse.json({ data: data?.[0] })
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Failed to create lead' },
      { status: 500 }
    )
  }
}