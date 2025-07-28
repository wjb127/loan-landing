import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Debug environment variables (서버와 클라이언트 모두)
console.log('🔍 Supabase 환경 변수 상태:')
console.log('- NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? `${supabaseUrl.substring(0, 30)}...` : '❌ 없음')
console.log('- NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? `${supabaseAnonKey.substring(0, 30)}...` : '❌ 없음')
console.log('- 환경:', typeof window !== 'undefined' ? '클라이언트' : '서버')

if (typeof window !== 'undefined') {
  console.log('- 전체 NEXT_PUBLIC_ 환경변수:', Object.keys(process.env).filter(key => key.startsWith('NEXT_PUBLIC_')))
}

// Check if we have valid Supabase credentials
const hasValidSupabaseConfig = supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_url_here' &&
  supabaseUrl.startsWith('https://')

// 상세 설정 확인 로그
if (typeof window !== 'undefined') {
  console.log('🔧 Supabase 설정 검증:')
  console.log('- URL 존재:', !!supabaseUrl)
  console.log('- Key 존재:', !!supabaseAnonKey)
  console.log('- URL이 플레이스홀더가 아님:', supabaseUrl !== 'your_supabase_url_here')
  console.log('- URL이 https로 시작:', supabaseUrl?.startsWith('https://'))
  console.log('- 최종 유효성:', hasValidSupabaseConfig)
}

// Create Supabase client only if we have valid credentials
export const supabase = hasValidSupabaseConfig 
  ? (() => {
      try {
        return createClient(supabaseUrl, supabaseAnonKey, {
          auth: {
            persistSession: false,
          },
        })
      } catch (error) {
        console.error('Failed to create Supabase client:', error)
        return null
      }
    })()
  : null

// Set demo mode based on Supabase availability
export const isDemoMode = !hasValidSupabaseConfig || !supabase

if (typeof window !== 'undefined') {
  if (isDemoMode) {
    console.warn('⚠️ 데모 모드로 실행 중입니다!')
    console.log('- 원인: hasValidSupabaseConfig =', hasValidSupabaseConfig, ', supabase =', !!supabase)
  } else {
    console.info('✅ Supabase 연결 성공! 프로덕션 모드로 실행됩니다.')
  }
}

// Type definitions for our database
export interface Lead {
  id?: string
  name: string
  contact: string
  created_at?: string
  status: 'new' | 'contacted' | 'converted' | 'rejected'
  notes?: string
}