import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zwjovdirkmxtmayensho.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3am92ZGlya214dG1heWVuc2hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1Njk3MzEsImV4cCI6MjA2OTE0NTczMX0.OBDAVAJp25B6mYpP1qntDws2-erD39cHrPtdWOQkc84'

export const supabase = createClient(supabaseUrl, supabaseKey)