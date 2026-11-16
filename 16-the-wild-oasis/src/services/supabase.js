import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kzxjumjwywmeyideoahx.supabase.co";
const supabaseKey = "sb_publishable_P1A_OaORt17WhLBcyfsUCw_u1JLNCre";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
