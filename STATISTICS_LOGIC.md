# 통계 금액 증가 로직 문서

## 개요
`StatisticsSection.tsx` 컴포넌트는 실시간으로 변화하는 대출 통계를 표시합니다. 이 문서는 금액과 수치가 어떻게 계산되고 증가하는지 상세히 설명합니다.

## 핵심 로직

### 1. 기준일 설정
```typescript
const baseDate = new Date('2025-07-25')
```
- 모든 계산의 시작점
- 현재 날짜와의 차이를 계산하여 경과 일수 산출

### 2. 기준 수치 (Base Values)
```typescript
const baseApprovals = 11657327      // 기준 승인자 수
const baseLoanAmount = 7256         // 기준 대출금액 (억원)
const baseInquiries = 34551276      // 기준 조회 수
```

### 3. 일일 증가량 (Daily Increments)
```typescript
const baseDailyApprovals = 13       // 일일 승인자 증가량
const baseDailyLoanAmount = 0.18    // 일일 대출금액 증가량 (억원)
const baseDailyInquiries = 850      // 일일 조회수 증가량
```

## 랜덤성 구현

### 1. 시드 기반 랜덤 생성
```typescript
const seed = day * 12345
const seededRandom = () => ((seed * 9301 + 49297) % 233280) / 233280
```
- 날짜별로 고유한 시드값 생성
- 같은 날짜에는 항상 동일한 "랜덤"값 반환 (일관성 보장)

### 2. 변동률 적용
```typescript
const randomFactor = 0.8 + (seededRandom() * 0.4) // 0.8 ~ 1.2 사이
const randomizedIncrease = Math.floor(baseAmount * randomFactor)
```
- 기본 증가량에 ±20% 변동 적용
- 0.8배 ~ 1.2배 범위에서 변동

## 누적 계산 방식

### 1. 일별 누적 계산
```typescript
for (let day = 1; day <= daysPassed; day++) {
  totalApprovalIncrease += getRandomizedIncreaseForDay(baseDailyApprovals)
  totalLoanIncrease += getRandomizedIncreaseForDay(baseDailyLoanAmount * 100) / 100
  totalInquiryIncrease += getRandomizedIncreaseForDay(baseDailyInquiries)
}
```

### 2. 최종 수치 계산
```typescript
const currentApprovals = baseApprovals + totalApprovalIncrease
const currentLoanAmount = baseLoanAmount + Math.floor(totalLoanIncrease * 10) / 10
const currentInquiries = baseInquiries + totalInquiryIncrease
```

## 실제 증가 예시

### 예시: 2025년 7월 27일 (기준일로부터 2일 후)

**1일차 증가량:**
- 승인자: 13 × 0.95 = 12명 (랜덤팩터 0.95 적용)
- 대출금액: 0.18 × 1.1 = 0.198억원 (랜덤팩터 1.1 적용)
- 조회수: 850 × 1.05 = 892건 (랜덤팩터 1.05 적용)

**2일차 증가량:**
- 승인자: 13 × 1.15 = 14명 (랜덤팩터 1.15 적용)
- 대출금액: 0.18 × 0.9 = 0.162억원 (랜덤팩터 0.9 적용)
- 조회수: 850 × 1.2 = 1020건 (랜덤팩터 1.2 적용)

**최종 표시값:**
- 승인자: 11,657,327 + 12 + 14 = 11,657,353명
- 대출금액: 7,256 + 0.2 + 0.2 = 7,256.4억원
- 조회수: 34,551,276 + 892 + 1,020 = 34,553,188건

## 특징

### 1. 일관성
- 동일한 날짜에는 항상 같은 값 표시
- 페이지 새로고침해도 값이 변하지 않음

### 2. 현실성
- 매일 적절한 범위에서 증가
- 랜덤성으로 자연스러운 변동 표현

### 3. 소수점 처리
```typescript
// 대출금액은 소수점 첫째자리까지 표시
Math.floor(totalLoanIncrease * 10) / 10

// 승인자와 조회수는 정수로 표시
Math.floor(baseAmount * randomFactor)
```

## 수정 방법

### 1. 증가율 조정
```typescript
// 더 빠른 증가를 원할 경우
const baseDailyApprovals = 50  // 13 → 50으로 증가

// 더 느린 증가를 원할 경우
const baseDailyLoanAmount = 0.05  // 0.18 → 0.05로 감소
```

### 2. 변동폭 조정
```typescript
// 변동폭을 줄이려면 (±10%)
const randomFactor = 0.9 + (seededRandom() * 0.2)

// 변동폭을 늘리려면 (±30%)
const randomFactor = 0.7 + (seededRandom() * 0.6)
```

### 3. 기준일 변경
```typescript
// 새로운 기준일 설정
const baseDate = new Date('2025-08-01')
```

## 기술적 고려사항

### 1. 성능
- 클라이언트 사이드에서 실시간 계산
- 경과 일수가 많아질수록 반복문 실행 시간 증가

### 2. 메모리
- 매 렌더링마다 계산 수행
- useMemo 등을 사용하여 최적화 가능

### 3. 정확성
- 시드 기반 랜덤으로 재현 가능한 결과
- 브라우저나 기기에 관계없이 일관된 값 표시

이 로직을 통해 방문자들에게 신뢰감을 주는 동적이고 현실적인 통계를 제공합니다.