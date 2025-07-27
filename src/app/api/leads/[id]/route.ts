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

    if (isDemoMode || !supabase) {
      // Demo mode: Return mock success
      console.log('🗑️ Demo Mode - Lead deleted:', { id })
      return NextResponse.json({ success: true })
    }

    // Production mode: Delete from Supabase
    const { error } = await supabase
      .from('kmong_2_leads')
      .delete()
      .eq('id', id)

    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting lead:', error)
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    )
  }
}