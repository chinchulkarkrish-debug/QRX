create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  type text not null default 'generic',
  content jsonb not null default '{}'::jsonb,
  active boolean not null default true,
  visits integer not null default 0,
  created_at timestamptz not null default now()
);
