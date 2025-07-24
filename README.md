# 대출 랜딩페이지 - Next.js 15

근로자 대상 안심대출 랜딩페이지와 리드 관리 시스템입니다.

## 🚀 Next.js 15 Features

- **Turbopack**: 빠른 개발 서버
- **React 19 RC**: 최신 React 기능 활용
- **App Router**: 향상된 라우팅 시스템
- **Server Components**: 기본적으로 서버 컴포넌트 사용
- **Transitions**: `useTransition`을 활용한 부드러운 UI 업데이트

## 📋 기능

- 🎨 반응형 랜딩페이지 (제공된 디자인과 일치)
- 📝 이름/연락처 수집 폼 with 유효성 검사
- 📊 관리자 대시보드
- 💾 Supabase 데이터베이스 연동
- 🎯 데모 모드 지원 (Supabase 없이도 작동)

## 🛠 기술 스택

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Supabase
- **배포**: Vercel
- **기타**: React 19 RC, Turbopack

## 🏃‍♂️ 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일 생성:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

> 💡 환경 변수가 설정되지 않으면 자동으로 데모 모드로 실행됩니다.

### 3. Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트 생성
2. SQL Editor에서 `supabase-schema.sql` 실행 (테이블명: `kmong_2_leads`)
3. 프로젝트 URL과 API 키를 `.env.local`에 추가

### 4. 개발 서버 실행

```bash
npm run dev
```

서버가 `http://localhost:3000`에서 실행됩니다.

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx          # 메인 랜딩페이지
│   ├── admin/
│   │   └── page.tsx      # 관리자 대시보드
│   ├── layout.tsx        # 루트 레이아웃
│   └── globals.css       # 전역 스타일
├── components/
│   ├── LeadForm.tsx      # 리드 수집 폼
│   ├── HeroSection.tsx   # 히어로 섹션
│   ├── StatsSection.tsx  # 통계 섹션
│   ├── CompanyInfo.tsx   # 회사 정보
│   └── admin/
│       ├── StatsCards.tsx    # 통계 카드
│       ├── LeadsTable.tsx    # 리드 테이블
│       └── LeadDetailModal.tsx # 리드 상세 모달
└── lib/
    └── supabase.ts       # Supabase 클라이언트
```

## 🌐 페이지

- **`/`** - 메인 랜딩페이지
- **`/admin`** - 관리자 대시보드

## 🔒 보안

- 환경 변수를 통한 API 키 관리
- Supabase RLS (Row Level Security) 적용
- 클라이언트 사이드 유효성 검사

## 🚀 배포

### Vercel 배포

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 연결
3. 환경 변수 설정
4. 자동 배포

## 📞 회사 정보

- **회사명**: 주식회사 에이스대부중개법인
- **대표자**: 심상민
- **등록번호**: 2025-대구남구-0006
- **사업자등록번호**: 601-81-39646
- **법인등록번호**: 170111-0984428
- **전화번호**: 1577-8505
- **주소**: 대구광역시 남구 명덕로 110-2, 4층