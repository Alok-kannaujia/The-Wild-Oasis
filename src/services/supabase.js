import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vyyxkhxdwzicmbvfxcud.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eXhraHhkd3ppY21idmZ4Y3VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5OTY3NDcsImV4cCI6MjA0MTU3Mjc0N30.qjAweUIVDMXYvAvaD0DT4A8JHZEilfIMfuCQlPL3T8E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
