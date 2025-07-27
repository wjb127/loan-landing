import { NextRequest, NextResponse } from 'next/server'
import { supabase, isDemoMode, type Lead } from '@/lib/supabase'

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

    if (isDemoMode || !supabase) {
      // Demo mode: Return mock success
      console.log('🗑️ Demo Mode - Lead deleted:', { id })
      return NextResponse.json({ success: true, id, mode: 'demo' })
    }

    // Production mode: Delete from Supabase
    console.log('🗑️ Production Mode - Attempting Supabase delete for ID:', id)
    const { error } = await supabase
      .from('kmong_2_leads')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('❌ Supabase delete error:', error)
      throw error
    }

    console.log('✅ Supabase delete successful for ID:', id)
    return NextResponse.json({ success: true, id, mode: 'production' })
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