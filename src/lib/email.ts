import { Resend } from 'resend'

// Resend 인스턴스 생성
const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailNotificationData {
  name: string
  contact: string
  loanType: string
  creditStatus: string
  submittedAt: string
}

export async function sendLeadNotificationEmail(data: EmailNotificationData) {
  console.log('📧 이메일 전송 시작:', {
    수신자: ['wjb127@naver.com', 'evenros01@naver.com'],
    신청자: data.name,
    연락처: data.contact
  })

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ Resend API 키가 설정되지 않음')
    return { success: false, error: 'Resend API key not configured' }
  }

  try {
    console.log('📮 Resend API로 이메일 전송 시도')
    console.log('- API 키 설정됨:', !!process.env.RESEND_API_KEY)
    
    const { data: emailData, error } = await resend.emails.send({
      from: 'Applicforge <noreply@mail.applicforge.com>',
      to: ['wjb127@naver.com', 'evenros01@naver.com'], // 여러 수신자 배열로 전달
      subject: `🔔 새로운 상담 문의가 접수되었습니다 - ${data.name}님`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1e3a8a; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1>🔔 새로운 상담 신청</h1>
          </div>
          <div style="background-color: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0;">
            <h2 style="color: #1e3a8a;">상담 신청 정보</h2>
            <div style="margin: 10px 0; padding: 10px; background-color: white; border-left: 3px solid #1e3a8a; border-radius: 4px;">
              <strong style="color: #666;">신청자명:</strong> <span style="color: #333; margin-left: 10px;">${data.name}</span>
            </div>
            <div style="margin: 10px 0; padding: 10px; background-color: white; border-left: 3px solid #1e3a8a; border-radius: 4px;">
              <strong style="color: #666;">연락처:</strong> <span style="color: #333; margin-left: 10px;">${data.contact}</span>
            </div>
            <div style="margin: 10px 0; padding: 10px; background-color: white; border-left: 3px solid #1e3a8a; border-radius: 4px;">
              <strong style="color: #666;">대출종류:</strong> <span style="color: #333; margin-left: 10px;">${data.loanType}</span>
            </div>
            <div style="margin: 10px 0; padding: 10px; background-color: white; border-left: 3px solid #1e3a8a; border-radius: 4px;">
              <strong style="color: #666;">신용상태:</strong> <span style="color: #333; margin-left: 10px;">${data.creditStatus}</span>
            </div>
            <div style="margin: 10px 0; padding: 10px; background-color: white; border-left: 3px solid #1e3a8a; border-radius: 4px;">
              <strong style="color: #666;">신청일시:</strong> <span style="color: #333; margin-left: 10px;">${data.submittedAt}</span>
            </div>
          </div>
          <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px; padding: 20px; background-color: #f0f0f0; border-radius: 0 0 8px 8px;">
            <p>이 이메일은 자동으로 발송되었습니다.</p>
            <p><strong>주식회사 에이스대부중개법인</strong></p>
            <p>등록번호: 2025-대구남구-0006</p>
          </div>
        </div>
      `
    })

    if (error) {
      console.error('❌ Resend 에러:', error)
      return { success: false, error }
    }

    console.log('✅ 이메일 발송 성공:', emailData)
    return { success: true, data: emailData }
  } catch (error) {
    console.error('💥 이메일 발송 실패:', error)
    return { success: false, error }
  }
}