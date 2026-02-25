import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('⚠️ Supabase URL or Anon Key is missing. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

/**
 * ESPAÇO RESERVADO: ESQUEMA DO BANCO DE DADOS
 * 
 * As tabelas e schemas do Supabase deverão ser documentados e refletidos aqui
 * futuramente (ex: funções helpers de queries tipadas).
 */
