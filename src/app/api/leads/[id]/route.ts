import { NextRequest, NextResponse } from 'next/server'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'
import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client with service role for admin operations
const getServerSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !serviceRoleKey) {
    return null
  }
  
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

// PUT - Update lead
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    const updateData = await request.json()

    if (isDemoMode || !supabase) {
      // Demo mode: Return mock success
      console.log('✅ Demo Mode - Lead updated:', { id, updateData })
      return NextResponse.json({ data: { id, ...updateData } })
    }

    // Production mode: Update in Supabase
    const { data, error } = await supabase
      .from('kmong_2_leads')
      .update(updateData)
      .eq('id', id)
      .select()

    if (error) throw error

    return NextResponse.json({ data: data?.[0] })
  } catch (error) {
    console.error('Error updating lead:', error)
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    )
  }
}

// DELETE - Delete lead
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    console.log('🗑️ API DELETE endpoint called for ID:', id)

    if (isDemoMode) {
      // Demo mode: Return mock success
      console.log('🗑️ Demo Mode - Lead deleted:', { id })
      return NextResponse.json({ success: true, id, mode: 'demo' })
    }

    // Production mode: Delete from Supabase using service role
    const serverSupabase = getServerSupabase()
    if (!serverSupabase) {
      console.error('❌ No service role key configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    console.log('🗑️ Production Mode - Using service role for delete operation')
    console.log('🗑️ Attempting Supabase delete for ID:', id)
    
    // First, check if the record exists
    const { data: existingRecord, error: selectError } = await serverSupabase
      .from('kmong_2_leads')
      .select('id, name')
      .eq('id', id)
      .single()

    if (selectError) {
      console.error('❌ Error checking existing record:', selectError)
      if (selectError.code === 'PGRST116') {
        console.log('❌ Record not found with ID:', id)
        return NextResponse.json(
          { error: 'Record not found', id },
          { status: 404 }
        )
      }
      throw selectError
    }

    console.log('✅ Found existing record:', existingRecord)

    // Now attempt to delete with service role
    const { data: deleteResult, error: deleteError, count } = await serverSupabase
      .from('kmong_2_leads')
      .delete()
      .eq('id', id)
      .select()

    if (deleteError) {
      console.error('❌ Supabase delete error:', deleteError)
      throw deleteError
    }

    console.log('✅ Supabase delete result:', { deleteResult, count })
    console.log('✅ Supabase delete successful for ID:', id)
    
    return NextResponse.json({ 
      success: true, 
      id, 
      mode: 'production',
      deletedRecord: deleteResult?.[0],
      rowsAffected: count
    })
  } catch (error) {
    console.error('❌ API DELETE error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to delete lead', 
        details: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    )
  }
}