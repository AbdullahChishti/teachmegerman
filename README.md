# Ganz Natürlich

A calm German learning companion for everyday life in Germany. Next.js App Router, TypeScript, React, responsive CSS, Supabase, and server-side OpenAI structured responses.

## Run locally

Requires Node 20.9+.

```sh
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. No credentials are needed for lessons, notebook, review scheduling, and local progress. `npm run build` creates the production app; `npm start` serves it.

## Connect the tutor

Set `OPENAI_API_KEY` in `.env.local` and restart the server. `OPENAI_MODEL` defaults to `gpt-4.1-mini`; choose a model available to your project that supports structured output. The browser never receives the key. The tutor preserves up to 40 turns in the current tab and receives saved expressions for context. It returns validated German replies, English translations, concise feedback, and suggested responses. Missing credentials and API failures produce explicit setup/error states. No simulated AI is used.

Implementation reference: [OpenAI structured outputs](https://developers.openai.com/api/docs/guides/structured-outputs?api-mode=chat).

This is a personal local application. Before internet deployment, restrict `/api/tutor` to authenticated users and add a durable per-user rate limit and provider spending limits. The local endpoint is not a public multi-user service.

## Optional Supabase account and backup

1. Create a Supabase project and run `supabase/schema.sql` in its SQL editor.
2. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (the public/anon key, never a service-role key).
3. Enable email sign-in and allow the application origin as an auth redirect URL.
4. Open Preferences to sign in via email link. Use Back up progress or Restore backup.

Row-level security isolates backups by authenticated user ID. Backup/restore is deliberate rather than automatic to prevent conflicting device copies from overwriting each other. Delete cloud data removes the signed-in user's backup. Delete my learning data separately removes the local learning data and current chat. Deleting the Supabase auth account itself is managed in Supabase.

## What works

- Ten curated A1 lessons, each with discover, listen, speak, use, and remember steps.
- Five scenario contexts: café, bakery, supermarket, transport, meeting someone.
- German browser speech synthesis, normal and slow playback.
- Real browser speech recognition on supported browsers, with editable transcripts and a text alternative everywhere.
- Four AI conversation modes, translations, help composing a phrase, contextual corrections, and audio playback of replies once the API is configured.
- Local persistent notebook, practice attempts, corrections, lesson completion, interrupted lesson position, and review dates.
- A1–B2 journey structure with honest distinction between practice and assessed proficiency.
- Optional authenticated Supabase backup with row-level security.
- Responsive desktop navigation and mobile bottom navigation.

## Learning and privacy limits

Browser speech recognition support and German voice quality vary by operating system and browser. Recognition may use the browser vendor’s remote service. Microphone permission is requested only after pressing the microphone. Audio is not recorded or stored by this app. Text is sent to OpenAI only when a tutor message is submitted. Chat history stays in tab memory; saved practice and corrections persist locally and in Supabase only when explicitly backed up. External font requests are made to Google Fonts; the interface has system fallbacks.

Offline practice feedback checks whether a relevant key word appears. It does not assess full grammar, pronunciation, communicative success, or CEFR proficiency. Review intervals use a simple expanding schedule (1, 2, 4… days, maximum 90) for successful keyword recalls; unsuccessful attempts return after ten minutes. This first version does not implement a calibrated FSRS model. Lesson completion is self-paced and may be recorded without a successful recall; it never awards mastery.

The first release intentionally excludes generated lessons, formal CEFR assessment, advanced A2–B2 content, reliable phoneme scoring, word-aligned audio highlighting, automatic multi-device synchronization, and standalone grammar/listening libraries.

## Validation

`npm run typecheck` and `npm run build`. Browser QA covers onboarding, lesson entry, typed keyword feedback, completion, notebook persistence, navigation, and explicit missing-key tutor state. Live AI and Supabase require credentials; microphone and audio require a suitable browser and hardware permissions and must be checked on the target device.
