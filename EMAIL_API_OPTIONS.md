# 이메일 발송 옵션 가이드

## 현재 구현 (Nodemailer + SMTP)

### 작동 환경
- ✅ 로컬 개발 환경
- ✅ VPS, EC2 등 일반 서버
- ⚠️ Vercel (불안정)
- ❌ Vercel Edge Functions

## Vercel 배포 시 권장 방법

### 1. Resend (권장) - 무료 100통/일
```typescript
// src/lib/email-resend.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendLeadNotificationEmail(data: EmailNotificationData) {
  const { data: result, error } = await resend.emails.send({
    from: 'onboarding@resend.dev', // 또는 인증된 도메인
    to: 'wjb127@naver.com',
    subject: `[새 상담 신청] ${data.name}님의 대출 상담 신청`,
    html: // ... HTML 템플릿
  });
  
  return { success: !error, result };
}
```

**설정 방법:**
1. https://resend.com 가입
2. API Key 발급
3. `.env.local`에 `RESEND_API_KEY` 추가

### 2. SendGrid - 무료 100통/일
```typescript
// src/lib/email-sendgrid.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendLeadNotificationEmail(data: EmailNotificationData) {
  const msg = {
    to: 'wjb127@naver.com',
    from: 'noreply@yourdomain.com', // 인증된 발신자
    subject: `[새 상담 신청] ${data.name}님의 대출 상담 신청`,
    html: // ... HTML 템플릿
  };
  
  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
```

### 3. 네이버 클라우드 플랫폼 SMS/이메일 API
- 한국 서비스에 최적화
- 네이버 계정으로 쉽게 시작
- 저렴한 비용

## 현재 코드 유지 + Vercel 배포 방법

### Edge Function 대신 일반 Function 사용
```javascript
// vercel.json
{
  "functions": {
    "src/app/api/leads/route.ts": {
      "maxDuration": 10
    }
  }
}
```

### 환경별 분기 처리
```typescript
// src/lib/email.ts
export async function sendLeadNotificationEmail(data: EmailNotificationData) {
  // Vercel 환경인 경우
  if (process.env.VERCEL) {
    // Resend 또는 다른 API 사용
    return sendViaResend(data);
  }
  
  // 로컬 또는 일반 서버
  return sendViaSMTP(data);
}
```

## 추천 우선순위

1. **로컬 테스트만**: 현재 코드 그대로 사용
2. **Vercel 배포 예정**: Resend로 변경 (가장 간단)
3. **대량 발송 예정**: SendGrid 또는 AWS SES
4. **한국 특화**: 네이버 클라우드 플랫폼

## 비용 비교
- Gmail SMTP: 무료 (일 500통 제한)
- Resend: 무료 (일 100통) / 월 $20 (10,000통)
- SendGrid: 무료 (일 100통) / 월 $19.95 (50,000통)
- 네이버 클라우드: 건당 과금 (이메일 9원/건)