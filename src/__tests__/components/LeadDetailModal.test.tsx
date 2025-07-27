import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import LeadDetailModal from '@/components/admin/LeadDetailModal'
import { Lead } from '@/lib/supabase'

// Mock fetch
global.fetch = jest.fn()

const mockLead: Lead = {
  id: '1',
  name: '김철수',
  contact: '010-1234-5678',
  created_at: '2023-07-27T00:00:00.000Z',
  status: 'new',
  notes: '테스트 노트'
}

const mockProps = {
  lead: mockLead,
  onClose: jest.fn(),
  onUpdateStatus: jest.fn(),
  onUpdateNotes: jest.fn(),
  onDeleteLead: jest.fn(),
  isPending: false
}

describe('LeadDetailModal', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(fetch as jest.Mock).mockClear()
  })

  it('should render lead details', () => {
    render(<LeadDetailModal {...mockProps} />)
    
    expect(screen.getByText('김철수')).toBeInTheDocument()
    expect(screen.getByText('010-1234-5678')).toBeInTheDocument()
    expect(screen.getByText('테스트 노트')).toBeInTheDocument()
  })

  it('should show delete confirmation when delete button is clicked', async () => {
    render(<LeadDetailModal {...mockProps} />)
    
    const deleteButton = screen.getByText('삭제')
    fireEvent.click(deleteButton)
    
    await waitFor(() => {
      expect(screen.getByText('정말로 이 리드를 삭제하시겠습니까?')).toBeInTheDocument()
    })
  })

  it('should call onDeleteLead when delete is confirmed', async () => {
    render(<LeadDetailModal {...mockProps} />)
    
    // Click delete button
    const deleteButton = screen.getByText('삭제')
    fireEvent.click(deleteButton)
    
    // Confirm deletion
    await waitFor(() => {
      const confirmButton = screen.getByText('삭제 확인')
      fireEvent.click(confirmButton)
    })
    
    expect(mockProps.onDeleteLead).toHaveBeenCalledWith('1')
  })

  it('should cancel delete when cancel button is clicked', async () => {
    render(<LeadDetailModal {...mockProps} />)
    
    // Click delete button
    const deleteButton = screen.getByText('삭제')
    fireEvent.click(deleteButton)
    
    // Cancel deletion
    await waitFor(() => {
      const cancelButton = screen.getByText('취소')
      fireEvent.click(cancelButton)
    })
    
    expect(mockProps.onDeleteLead).not.toHaveBeenCalled()
    expect(screen.queryByText('정말로 이 리드를 삭제하시겠습니까?')).not.toBeInTheDocument()
  })
})