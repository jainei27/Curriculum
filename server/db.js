const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ ERROR: Variables de entorno no definidas');
  console.log('SUPABASE_URL:', supabaseUrl ? '✓ Definida' : '✗ Faltante');
  console.log('SUPABASE_KEY:', supabaseKey ? '✓ Definida' : '✗ Faltante');
  process.exit(1);
}

console.log('🔗 Configurando cliente Supabase...');

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
});

// Función para verificar conexión
const testConnection = async () => {
  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('❌ Error conectando a Supabase:', error.message);
      return false;
    }
    
    console.log('✅ Conexión a Supabase establecida correctamente');
    return true;
  } catch (error) {
    console.error('❌ Error en test de conexión:', error.message);
    return false;
  }
};

module.exports = { supabase, testConnection };