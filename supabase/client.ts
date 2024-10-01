import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lzlswtkpaszbmiltkjdc.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!supabaseKey) throw new Error("supabaseKey가 준비되어 있지 않습니다.");

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
