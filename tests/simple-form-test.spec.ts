import { test, expect } from '@playwright/test';

test.describe('간단한 상담 신청 테스트', () => {
  test('데스크탑에서 상담 신청 성공', async ({ page }) => {
    console.log('🚀 테스트 시작: 상담 신청 폼 제출');
    
    await page.goto('/');
    await page.setViewportSize({ width: 1200, height: 800 });
    
    console.log('📝 폼 필드 입력 중...');
    
    // 폼 입력
    await page.locator('input[name="name"]').first().fill('Playwright테스트');
    await page.locator('input[name="contact"]').first().fill('01012341234');
    
    console.log('✅ 라디오 버튼 선택 중...');
    
    // 라디오 버튼 선택
    await page.locator('label:has-text("4대보험가입")').first().click();
    await page.locator('label:has-text("신용카드소유")').first().click();
    
    console.log('☑️ 개인정보 동의 체크...');
    
    // 개인정보 동의 체크
    await page.locator('input[name="privacyAgreed"]').first().check();
    
    console.log('🎯 폼 제출 버튼 클릭...');
    
    // 네트워크 요청 모니터링
    const responsePromise = page.waitForResponse(response => 
      response.url().includes('/api/leads') && response.request().method() === 'POST'
    );
    
    // 폼 제출
    await page.locator('button:has-text("신청")').first().click();
    
    console.log('⏳ API 응답 대기 중...');
    
    // API 응답 확인
    const response = await responsePromise;
    const responseData = await response.json();
    
    console.log('📡 API 응답:', JSON.stringify(responseData, null, 2));
    
    // 응답 상태 확인
    expect(response.status()).toBe(200);
    expect(responseData.data).toBeDefined();
    expect(responseData.data.name).toBe('Playwright테스트');
    
    console.log('✨ 성공 메시지 확인 중...');
    
    // 성공 메시지 확인
    await expect(page.locator('text=신청이 완료되었습니다!')).toBeVisible({ timeout: 10000 });
    
    console.log('🎉 테스트 완료! 이메일은 qhv147@gmail.com을 확인하세요.');
  });
});