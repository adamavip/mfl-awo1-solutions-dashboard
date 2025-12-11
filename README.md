# AWO Solutions Dashboard

A simple Next.js prototype inspired by the provided mockup. It includes three pages (Home, Where we work, and Institutionalization) with playful cards, filters, and a Supabase-backed chatbot on the Institutionalization page.

## Getting started

1. Install dependencies

```bash
npm install
```

2. Configure environment variables

Copy `.env.example` to `.env.local` and fill the Supabase settings:

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: anonymous/public key for storage access.
- `NEXT_PUBLIC_SUPABASE_BUCKET`: bucket that hosts your CSV.
- `NEXT_PUBLIC_SUPABASE_CSV_PATH`: path to the CSV file inside the bucket.

3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the app.

## Chatbot behavior

On the Institutionalization page, click the speech bubble button to open the chatbot. When the panel opens it downloads the configured CSV from Supabase Storage, parses it, and returns answers based on the closest matching question column. The component handles missing configuration gracefully and surfaces helpful status messages.
