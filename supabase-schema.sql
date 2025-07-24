-- Create leads table with kmong_2_ prefix
create table if not exists public.kmong_2_leads (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  contact text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  status text default 'new' check (status in ('new', 'contacted', 'converted', 'rejected')),
  notes text
);

-- Enable RLS (Row Level Security)
alter table public.kmong_2_leads enable row level security;

-- Create policy for inserting leads (allow all)
create policy "Anyone can insert kmong_2_leads" on public.kmong_2_leads
  for insert with check (true);

-- Create policy for selecting leads (admin only - you'll need to implement admin auth)
create policy "Admin can view all kmong_2_leads" on public.kmong_2_leads
  for select using (true);

-- Create policy for updating leads (admin only)
create policy "Admin can update all kmong_2_leads" on public.kmong_2_leads
  for update using (true);

-- Create index on created_at for better performance
create index if not exists kmong_2_leads_created_at_idx on public.kmong_2_leads(created_at desc);