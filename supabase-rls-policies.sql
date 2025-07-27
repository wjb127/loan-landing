-- RLS 정책 설정 (Supabase SQL 에디터에서 실행)

-- 1. 기존 정책들 확인 및 삭제 (필요시)
-- DROP POLICY IF EXISTS "Enable all access for service role" ON kmong_2_leads;
-- DROP POLICY IF EXISTS "Enable read for all users" ON kmong_2_leads;
-- DROP POLICY IF EXISTS "Enable insert for all users" ON kmong_2_leads;
-- DROP POLICY IF EXISTS "Enable update for all users" ON kmong_2_leads;
-- DROP POLICY IF EXISTS "Enable delete for all users" ON kmong_2_leads;

-- 2. RLS 활성화 (이미 활성화되어 있을 수 있음)
ALTER TABLE kmong_2_leads ENABLE ROW LEVEL SECURITY;

-- 3. 모든 CRUD 작업을 허용하는 정책 생성

-- SELECT 정책 (읽기)
CREATE POLICY "Enable read access for all users" ON kmong_2_leads
    FOR SELECT
    USING (true);

-- INSERT 정책 (생성)
CREATE POLICY "Enable insert access for all users" ON kmong_2_leads
    FOR INSERT
    WITH CHECK (true);

-- UPDATE 정책 (수정)
CREATE POLICY "Enable update access for all users" ON kmong_2_leads
    FOR UPDATE
    USING (true);

-- DELETE 정책 (삭제) - 가장 중요!
CREATE POLICY "Enable delete access for all users" ON kmong_2_leads
    FOR DELETE
    USING (true);

-- 4. 서비스 역할에 대한 모든 권한 부여 (추가 보안)
CREATE POLICY "Enable all access for service role" ON kmong_2_leads
    USING (auth.role() = 'service_role');

-- 5. 정책 확인
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'kmong_2_leads';

-- 6. 테이블 권한 확인
SELECT grantee, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'kmong_2_leads';