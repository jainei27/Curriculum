const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Configurar cliente de Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; // Cambié de SUPABASE_ANON_KEY a SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ ERROR: Variables de entorno SUPABASE_URL o SUPABASE_KEY no definidas');
  process.exit(1);
}

console.log('🔗 Conectando a Supabase:', supabaseUrl);
const supabase = createClient(supabaseUrl, supabaseKey);

// Middlewares
app.use(cors({
  origin: '*', // Permite todas las origenes (ajusta en producción)
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Middleware para loggear peticiones
app.use((req, res, next) => {
  console.log(`📥 ${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Ruta de verificación de salud
app.get('/api/health', async (req, res) => {
  try {
    // Verificar conexión a Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .select('count', { count: 'exact', head: true });
    
    if (error) {
      console.error('❌ Error en conexión Supabase:', error.message);
      return res.status(500).json({
        status: 'error',
        message: 'Error conectando a Supabase',
        error: error.message
      });
    }
    
    res.json({
      status: 'healthy',
      message: '✅ Servidor de contactos funcionando correctamente',
      timestamp: new Date().toISOString(),
      supabase: 'conectado',
      environment: process.env.NODE_ENV || 'development',
      port: PORT
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Servidor de Contactos - Jainer Gallego',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
      docs: 'Consulte la documentación para más información'
    },
    version: '1.0.0'
  });
});

// Endpoint para guardar datos de contacto
app.post('/api/contact', async (req, res) => {
  console.log('📨 Recibiendo datos de contacto:', req.body);
  
  try {
    const { name, email, subject, message } = req.body;

    // Validaciones
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: 'Faltan campos requeridos',
        required: ['name', 'email', 'subject', 'message'],
        received: { name: !!name, email: !!email, subject: !!subject, message: !!message }
      });
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Formato de email inválido'
      });
    }

    // Validar longitud mínima
    if (name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'El nombre debe tener al menos 2 caracteres'
      });
    }

    if (message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'El mensaje debe tener al menos 10 caracteres'
      });
    }

    // Preparar datos para Supabase
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      created_at: new Date().toISOString()
    };

    console.log('💾 Guardando en Supabase:', contactData);

    // Insertar en Supabase
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([contactData])
      .select();

    if (error) {
      console.error('❌ Error de Supabase:', error);
      return res.status(500).json({
        success: false,
        error: 'Error al guardar en la base de datos',
        details: error.message,
        code: error.code
      });
    }

    console.log('✅ Datos guardados exitosamente:', data);

    // Respuesta exitosa
    res.status(201).json({
      success: true,
      message: '📬 Mensaje guardado exitosamente en la base de datos',
      data: {
        id: data[0].id,
        name: data[0].name,
        email: data[0].email,
        subject: data[0].subject,
        created_at: data[0].created_at
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('💥 Error interno del servidor:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor',
      message: error.message
    });
  }
});

// Endpoint para obtener todos los contactos (solo para desarrollo/admin)
app.get('/api/contacts', async (req, res) => {
  try {
    // Puedes agregar autenticación aquí si lo necesitas
    const { data, error } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.json({
      success: true,
      count: data.length,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Manejo de errores 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Ruta no encontrada',
    path: req.originalUrl
  });
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error('🔥 Error no manejado:', err);
  res.status(500).json({
    success: false,
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`
  🚀 Servidor iniciado exitosamente!
  ├─ 📍 Puerto: ${PORT}
  ├─ 🔗 URL: http://localhost:${PORT}
  ├─ 🌐 Health Check: http://localhost:${PORT}/api/health
  ├─ 📨 Endpoint Contacto: POST http://localhost:${PORT}/api/contact
  └─ ⚡ Entorno: ${process.env.NODE_ENV || 'development'}
  `);
});

// Manejo de cierre elegante
process.on('SIGTERM', () => {
  console.log('👋 Recibida señal SIGTERM, cerrando servidor...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('👋 Recibida señal SIGINT, cerrando servidor...');
  process.exit(0);
});