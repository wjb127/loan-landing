# 🚀 Vercel용 Resend 이메일 설정 가이드

Vercel 배포에 최적화된 Resend API를 사용한 이메일 알림 설정 방법입니다.

## 📋 Resend 계정 설정

### 1. Resend 계정 생성
1. **Resend 가입**: https://resend.com
2. GitHub 계정으로 로그인 가능 (권장)
3. 무료 플랜: **월 3,000통 (일 100통 제한)**

### 2. API Key 발급
1. Resend 대시보드 로그인
2. **API Keys** 메뉴 클릭
3. **Create API Key** 버튼 클릭
4. Name: `loan-landing-page` (원하는 이름)
5. Permission: **Full access** 선택
6. **Create** 클릭
7. 생성된 API Key 복사 (re_로 시작하는 문자열)

## ⚙️ 환경 변수 설정

### 로컬 개발 환경
`.env.local` 파일에 추가:

```bash
# Resend API 설정
RESEND_API_KEY=re_AbCdEf123456_YourActualApiKeyHere
NOTIFICATION_EMAIL=wjb127@naver.com
```

### Vercel 배포 환경
1. **Vercel Dashboard** 접속
2. 프로젝트 선택 → **Settings** → **Environment Variables**
3. 다음 환경 변수 추가:

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | `re_your_api_key_here` | Production, Preview, Development |
| `NOTIFICATION_EMAIL` | `wjb127@naver.com` | Production, Preview, Development |

## 🎯 설정 완료 체크리스트

- [ ] Resend 계정 생성 완료
- [ ] API Key 발급 완료
- [ ] `.env.local`에 환경 변수 추가 완료
- [ ] `NOTIFICATION_EMAIL=wjb127@naver.com` 설정 완료
- [ ] 서버 재시작 완료

## 🧪 테스트 방법

### 로컬 테스트
```bash
npm run dev --turbo
```
1. 상담 신청 폼에서 테스트 신청
2. 콘솔에서 "Email sent successfully via Resend" 메시지 확인
3. wjb127@naver.com에서 이메일 수신 확인

### Vercel 배포 후 테스트
1. Vercel에 배포
2. 배포된 사이트에서 상담 신청
3. Vercel Functions 로그 확인
4. 이메일 수신 확인

## 📧 이메일 템플릿 미리보기

수신될 이메일 내용:
- **제목**: [새 상담 신청] 홍길동님의 대출 상담 신청
- **발신자**: 대출 상담 시스템 <onboarding@resend.dev>
- **수신자**: wjb127@naver.com

이메일에 포함되는 정보:
- 신청자명
- 연락처
- 대출종류 (4대보험가입/사업자/기타)
- 신용상태 (신용카드소유/미소유)
- 신청일시 (한국 시간)

## 🔧 문제 해결

### API Key 오류
- API Key가 `re_`로 시작하는지 확인
- Full access 권한으로 생성했는지 확인

### 이메일이 오지 않는 경우
1. **스팸함 확인**
2. **Resend 대시보드**에서 Logs 확인
3. **Vercel Functions** 로그 확인
4. 환경 변수가 올바르게 설정되었는지 확인

### 일일 발송 제한
- 무료 플랜: 일 100통
- 초과 시 다음날까지 대기 또는 유료 플랜 업그레이드

## 💰 비용 정보

- **무료**: 월 3,000통 (일 100통)
- **Pro**: $20/월 10,000통
- **비즈니스**: $80/월 50,000통

대부분의 소규모 대출 상담 사이트는 무료 플랜으로 충분합니다.

## 🎉 장점

✅ **Vercel과 완벽 호환**  
✅ **빠른 배포 (서버리스)**  
✅ **높은 전달률**  
✅ **실시간 로그 및 분석**  
✅ **간단한 설정**  
✅ **SMTP 설정 불필요**