import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rltxgwnknpnrsnzyqbps.supabase.co' // ใส่ URL จาก Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsdHhnd25rbnBucnNuenlxYnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NTI5MTMsImV4cCI6MjA1NTUyODkxM30.AsQKMbTjsRlHyw4AEn9nE2OsiIMN8uNxIZP7nuY_bdE' // ใส่ Key จาก Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
