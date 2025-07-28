import { test, expect } from '@playwright/test';

test.describe('상담 신청 폼 테스트', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('데스크탑에서 상담 신청 폼이 표시되는지 확인', async ({ page }) => {
    // 데스크탑 사이즈로 설정
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // 데스크탑 폼이 보이는지 확인
    await expect(page.locator('text=원클릭 상담 신청').first()).toBeVisible();
    
    // 필수 입력 필드들이 존재하는지 확인
    await expect(page.locator('input[name="name"]').first()).toBeVisible();
    await expect(page.locator('input[name="contact"]').first()).toBeVisible();
    await expect(page.locator('input[name="privacyAgreed"]').first()).toBeVisible();
  });

  test('모바일에서 상담 신청 폼 토글 테스트', async ({ page }) => {
    // 모바일 사이즈로 설정
    await page.setViewportSize({ width: 375, height: 667 });
    
    // 초기에는 모바일 폼이 축소된 상태
    await expect(page.locator('text=원클릭 상담 신청').last()).toBeVisible();
    
    // 모바일 폼 탭 클릭하여 확장
    await page.locator('text=원클릭 상담 신청').last().click();
    
    // 확장된 폼의 입력 필드들 확인
    await expect(page.locator('input[name="name"]').last()).toBeVisible();
    await expect(page.locator('input[name="contact"]').last()).toBeVisible();
  });

  test('데스크탑에서 유효한 데이터로 상담 신청 제출', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // 콘솔 로그 캡처를 위한 설정
    const consoleLogs: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'log') {
        consoleLogs.push(msg.text());
      }
    });

    // 폼 입력
    await page.locator('input[name="name"]').first().fill('테스트사용자');
    await page.locator('input[name="contact"]').first().fill('01012345678');
    
    // 라디오 버튼 선택 (텍스트로 찾기)
    await page.locator('label:has-text("4대보험가입")').first().click();
    await page.locator('label:has-text("신용카드소유")').first().click();
    
    // 개인정보 동의 체크
    await page.locator('input[name="privacyAgreed"]').first().check();
    
    // 폼 제출
    await page.locator('button:has-text("신청")').first().click();
    
    // 성공 메시지 확인
    await expect(page.locator('text=신청이 완료되었습니다!')).toBeVisible({ timeout: 10000 });
    
    // 이메일 발송 로그 확인 (3초 대기)
    await page.waitForTimeout(3000);
    
    const emailLog = consoleLogs.find(log => 
      log.includes('Email sent successfully via Resend') || 
      log.includes('Demo Mode - Lead created')
    );
    
    expect(emailLog).toBeTruthy();
    console.log('📧 이메일 발송 로그:', emailLog);
  });

  test('모바일에서 유효한 데이터로 상담 신청 제출', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    // 콘솔 로그 캡처
    const consoleLogs: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'log') {
        consoleLogs.push(msg.text());
      }
    });

    // 모바일 폼 열기
    await page.locator('text=원클릭 상담 신청').last().click();
    
    // 폼 입력
    await page.locator('input[name="name"]').last().fill('모바일테스트');
    await page.locator('input[name="contact"]').last().fill('01087654321');
    
    // 라디오 버튼 선택 (텍스트로 찾기)
    await page.locator('label:has-text("사업자/기타")').last().click();
    await page.locator('label:has-text("미소유")').last().click();
    
    // 개인정보 동의 체크
    await page.locator('input[name="privacyAgreed"]').last().check();
    
    // 폼 제출
    await page.locator('button[type="submit"]').last().click();
    
    // 성공 메시지 확인
    await expect(page.locator('text=신청이 완료되었습니다!')).toBeVisible({ timeout: 10000 });
    
    // 이메일 발송 확인
    await page.waitForTimeout(3000);
    
    const emailLog = consoleLogs.find(log => 
      log.includes('Email sent successfully via Resend') || 
      log.includes('Demo Mode - Lead created')
    );
    
    expect(emailLog).toBeTruthy();
    console.log('📱 모바일 이메일 발송 로그:', emailLog);
  });

  test('필수 필드 누락 시 에러 메시지 표시', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // 이름만 입력하고 제출
    await page.locator('input[name="name"]').first().fill('테스트');
    await page.locator('button:has-text("신청")').first().click();
    
    // 에러 메시지 확인
    await expect(page.locator('text=이름과 연락처를 입력해주세요.')).toBeVisible({ timeout: 5000 });
  });

  test('개인정보 동의 없이 제출 시 에러 메시지 표시', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // 모든 필드 입력하되 개인정보 동의는 체크하지 않음
    await page.locator('input[name="name"]').first().fill('테스트사용자');
    await page.locator('input[name="contact"]').first().fill('01012345678');
    await page.locator('label:has-text("4대보험가입")').first().click();
    await page.locator('label:has-text("신용카드소유")').first().click();
    
    // 제출
    await page.locator('button:has-text("신청")').first().click();
    
    // 에러 메시지 확인
    await expect(page.locator('text=개인정보 수집/이용에 동의해주세요.')).toBeVisible({ timeout: 5000 });
  });

  test('폼 제출 후 3초 뒤 폼 리셋 확인', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    
    // 폼 입력 및 제출
    await page.locator('input[name="name"]').first().fill('리셋테스트');
    await page.locator('input[name="contact"]').first().fill('01011111111');
    await page.locator('label:has-text("4대보험가입")').first().click();
    await page.locator('label:has-text("신용카드소유")').first().click();
    await page.locator('input[name="privacyAgreed"]').first().check();
    
    await page.locator('button:has-text("신청")').first().click();
    
    // 성공 메시지 확인
    await expect(page.locator('text=신청이 완료되었습니다!')).toBeVisible();
    
    // 4초 대기 (3초 후 리셋 + 여유시간)
    await page.waitForTimeout(4000);
    
    // 폼이 리셋되었는지 확인
    await expect(page.locator('input[name="name"]').first()).toHaveValue('');
    await expect(page.locator('input[name="contact"]').first()).toHaveValue('');
    await expect(page.locator('input[name="privacyAgreed"]').first()).not.toBeChecked();
  });
});