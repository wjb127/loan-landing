'use client'

import { useState } from 'react'

export default function TestDeletePage() {
  const [leadId, setLeadId] = useState('1')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const testDelete = async () => {
    setIsLoading(true)
    setResult('')
    console.log('🧪 Testing delete for lead ID:', leadId)

    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: 'DELETE'
      })

      const data = await response.json()
      console.log('🧪 Test delete response:', { status: response.status, data })

      setResult(`
Status: ${response.status}
Response: ${JSON.stringify(data, null, 2)}
      `.trim())
    } catch (error) {
      console.error('🧪 Test delete error:', error)
      setResult(`Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const testGet = async () => {
    setIsLoading(true)
    setResult('')

    try {
      const response = await fetch('/api/leads')
      const data = await response.json()
      
      setResult(`
GET /api/leads
Status: ${response.status}
Leads count: ${data.data?.length || 0}
Leads: ${JSON.stringify(data.data?.map(l => ({ id: l.id, name: l.name })) || [], null, 2)}
      `.trim())
    } catch (error) {
      setResult(`Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">리드 삭제 기능 테스트</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Lead ID:</label>
            <input
              type="text"
              value={leadId}
              onChange={(e) => setLeadId(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full"
              placeholder="1"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={testDelete}
              disabled={isLoading}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
            >
              {isLoading ? '처리 중...' : 'DELETE 테스트'}
            </button>
            
            <button
              onClick={testGet}
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? '처리 중...' : 'GET 테스트'}
            </button>
          </div>

          {result && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">결과:</h3>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
                {result}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}