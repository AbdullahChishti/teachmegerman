-- Run in the Supabase SQL editor. Uses the signed-in user's identity only.
create table if not exists public.learner_memory (
 user_id uuid primary key references auth.users(id) on delete cascade,
 memory jsonb not null default '{}'::jsonb,
 updated_at timestamptz not null default now(),
 constraint memory_is_object check (jsonb_typeof(memory) = 'object')
);
alter table public.learner_memory enable row level security;
create policy "Read own memory" on public.learner_memory for select to authenticated using ((select auth.uid()) = user_id);
create policy "Insert own memory" on public.learner_memory for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "Update own memory" on public.learner_memory for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "Delete own memory" on public.learner_memory for delete to authenticated using ((select auth.uid()) = user_id);
