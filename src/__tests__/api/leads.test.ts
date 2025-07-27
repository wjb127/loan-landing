/**
 * @jest-environment node
 */
import { NextRequest } from 'next/server'
import { DELETE } from '@/app/api/leads/[id]/route'

// Mock the Supabase module
jest.mock('@/lib/supabase', () => ({
  supabase: {
    from: jest.fn(() => ({
      delete: jest.fn(() => ({
        eq: jest.fn(() => ({ error: null }))
      }))
    }))
  },
  isDemoMode: false
}))

describe('/api/leads/[id] DELETE', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should delete a lead successfully', async () => {
    const request = new NextRequest('http://localhost:3000/api/leads/123', {
      method: 'DELETE'
    })
    
    const context = {
      params: Promise.resolve({ id: '123' })
    }

    const response = await DELETE(request, context)
    const result = await response.json()

    expect(response.status).toBe(200)
    expect(result.success).toBe(true)
  })

  it('should handle demo mode deletion', async () => {
    // Mock demo mode
    jest.doMock('@/lib/supabase', () => ({
      supabase: null,
      isDemoMode: true
    }))

    const request = new NextRequest('http://localhost:3000/api/leads/123', {
      method: 'DELETE'
    })
    
    const context = {
      params: Promise.resolve({ id: '123' })
    }

    const response = await DELETE(request, context)
    const result = await response.json()

    expect(response.status).toBe(200)
    expect(result.success).toBe(true)
  })

  it('should handle database errors', async () => {
    // Mock Supabase error
    jest.doMock('@/lib/supabase', () => ({
      supabase: {
        from: jest.fn(() => ({
          delete: jest.fn(() => ({
            eq: jest.fn(() => ({ error: new Error('Database error') }))
          }))
        }))
      },
      isDemoMode: false
    }))

    const request = new NextRequest('http://localhost:3000/api/leads/123', {
      method: 'DELETE'
    })
    
    const context = {
      params: Promise.resolve({ id: '123' })
    }

    const response = await DELETE(request, context)
    const result = await response.json()

    expect(response.status).toBe(500)
    expect(result.error).toBe('Failed to delete lead')
  })
})