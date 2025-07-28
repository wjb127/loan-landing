# 이메일 알림 설정 가이드

상담 신청 시 이메일 알림을 받으려면 아래의 환경 변수를 설정해야 합니다.

## 환경 변수 설정

`.env.local` 파일에 다음 환경 변수를 추가하세요:

### Gmail 사용 시 (권장)

```env
# 이메일 서비스 타입
EMAIL_SERVICE=gmail

# Gmail 계정 정보
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# 알림을 받을 이메일 주소
NOTIFICATION_EMAIL=wjb127@naver.com
```

**중요**: Gmail을 사용할 경우 반드시 **앱 비밀번호**를 생성하여 사용하세요.

#### Gmail 앱 비밀번호 생성 방법:
1. Google 계정 설정으로 이동: https://myaccount.google.com/
2. 보안 → 2단계 인증 활성화
3. 보안 → 앱 비밀번호로 이동
4. "메일" 선택 후 앱 비밀번호 생성
5. 생성된 16자리 비밀번호를 `EMAIL_PASS`에 입력

### 일반 SMTP 서버 사용 시

```env
# SMTP 서버 정보
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-password

# 알림을 받을 이메일 주소
NOTIFICATION_EMAIL=wjb127@naver.com
```

## 이메일 알림 내용

상담 신청 시 다음 정보가 포함된 이메일이 발송됩니다:
- 신청자명
- 연락처
- 대출종류 (4대보험가입/사업자/기타)
- 신용상태 (신용카드소유/미소유)
- 신청일시

## 테스트 방법

1. 환경 변수 설정 후 서버 재시작
2. 상담 신청 폼에서 테스트 신청 제출
3. 설정한 `NOTIFICATION_EMAIL`로 알림 이메일 수신 확인

## 주의사항

- 이메일 설정이 없어도 상담 신청은 정상적으로 처리됩니다
- 이메일 발송 실패 시 콘솔에 로그만 남고 사용자에게는 영향 없음
- 프로덕션 환경에서는 반드시 보안이 강화된 이메일 서비스 사용 권장

## 문제 해결

### 이메일이 발송되지 않는 경우:
1. 환경 변수가 올바르게 설정되었는지 확인
2. Gmail의 경우 "보안 수준이 낮은 앱 허용" 설정 확인
3. 서버 로그에서 에러 메시지 확인
4. 스팸함 확인

### 지원되는 이메일 서비스:
- Gmail (권장)
- Naver Mail (SMTP 설정 필요)
- Daum/Kakao Mail (SMTP 설정 필요)
- 기타 SMTP를 지원하는 모든 이메일 서비스