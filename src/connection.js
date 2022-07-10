import {createClient} from '@supabase/supabase-js'

const PROJECT_URL = "https://fzqnxybtezbfeeonukmb.supabase.co"
const PUBLIC_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6cW54eWJ0ZXpiZmVlb251a21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTcxNzMwNjIsImV4cCI6MTk3Mjc0OTA2Mn0.tq7vLL9tKOyJXDQBS0rbLlSo5zS7pK9oYQQMmNuD8Ck"

const supabase = createClient(PROJECT_URL, PUBLIC_ANON_KEY)

export {
    supabase
};