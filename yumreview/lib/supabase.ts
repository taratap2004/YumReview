import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL' // ใส่ URL จาก Supabase
const supabaseKey = 'YOUR_SUPABASE_KEY' // ใส่ Key จาก Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
