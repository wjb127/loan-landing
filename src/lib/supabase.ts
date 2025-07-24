import { createClient } from '@supabase/supabase-js'

// Supabase configuration with fallback for demo mode
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Check if we're in demo mode
export const isDemoMode = !supabaseUrl || !supabaseAnonKey || supabaseUrl === 'your_supabase_url_here'

if (isDemoMode && typeof window !== 'undefined') {
  console.info('🚀 Running in demo mode. Configure Supabase environment variables to enable database features.')
}

// Create Supabase client only if we have valid credentials
export const supabase = isDemoMode 
  ? null as any // In demo mode, we'll handle this in components
  : createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })

// Type definitions for our database
export interface Lead {
  id?: string
  name: string
  contact: string
  created_at?: string
  status: 'new' | 'contacted' | 'converted' | 'rejected'
  notes?: string
}