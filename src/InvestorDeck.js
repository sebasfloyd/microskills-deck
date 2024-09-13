import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ChevronRight, ChevronLeft, Play, Pause, BarChart2, Users, Brain, Globe, Zap, Check, Clock, Layers, Target, DollarSign, Award, TrendingUp, Maximize, Minimize, Menu, MessageCircle } from 'lucide-react';
import AppDemo from './AppDemo';

const InvestorDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showIndex, setShowIndex] = useState(false);

  const growthData = [
    { year: '2022', users: 100000, revenue: 1000000 },
    { year: '2023', users: 500000, revenue: 5000000 },
    { year: '2024', users: 2000000, revenue: 20000000 },
    { year: '2025', users: 5000000, revenue: 50000000 },
  ];

  const pieData = [
    { name: 'B2B', value: 60 },
    { name: 'B2C', value: 30 },
    { name: 'Premium', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const slides = [
    // Slide 1: Introducción mejorada
    {
      title: "MicroSkill: Revolucionando el Aprendizaje Corporativo",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">Aprendizaje Personalizado con IA</h2>
          <p className="text-2xl text-gray-700">Transformando el desarrollo profesional a través de micro-simulaciones y análisis de datos en tiempo real.</p>
          <motion.div 
            className="grid grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            <div className="bg-blue-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
              <Users className="text-blue-500 mx-auto mb-2" size={48} />
              <span className="text-4xl font-bold block">2M+</span>
              <span className="text-xl">Usuarios Activos</span>
            </div>
            <div className="bg-green-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
              <Globe className="text-green-500 mx-auto mb-2" size={48} />
              <span className="text-4xl font-bold block">75+</span>
              <span className="text-xl">Países</span>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
              <Zap className="text-yellow-500 mx-auto mb-2" size={48} />
              <span className="text-4xl font-bold block">98%</span>
              <span className="text-xl">Satisfacción</span>
            </div>
          </motion.div>
        </motion.div>
      )
    },
    // Slide 2: El Problema
    {
      title: "El Desafío del Aprendizaje Corporativo",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-red-600 mb-4">Obstáculos en el Desarrollo Profesional Actual</h2>
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {[
              { icon: Users, title: "Falta de Personalización", description: "Contenido genérico que no se adapta a necesidades individuales" },
              { icon: Clock, title: "Tiempo Limitado", description: "Empleados sobrecargados sin tiempo para formación tradicional" },
              { icon: BarChart2, title: "Medición Ineficaz", description: "Dificultad para medir el impacto real en el desempeño laboral" },
              { icon: Brain, title: "Baja Retención", description: "Pérdida rápida de conocimientos adquiridos en formaciones tradicionales" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="text-red-500 flex-shrink-0" size={36} />
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )
    },
    // Slide 3: Nuestra Solución
    {
      title: "La Solución MicroSkill",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Aprendizaje Adaptativo e Inmersivo</h2>
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {[
              { icon: Brain, title: "IA Personalizada", description: "Adapta el contenido a cada usuario en tiempo real" },
              { icon: Play, title: "Micro-Simulaciones", description: "Práctica inmersiva en escenarios laborales reales" },
              { icon: BarChart2, title: "Análisis Avanzado", description: "Métricas detalladas de progreso y ROI" },
              { icon: Users, title: "Aprendizaje Social", description: "Colaboración y competencia entre pares" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="text-green-500 mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )
    },
    // Slide 4: Características del Producto
    {
      title: "Características Clave de MicroSkill",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Potenciando el Aprendizaje Corporativo</h2>
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Plataforma Intuitiva</h3>
              <img src="/api/placeholder/600/400" alt="UI de MicroSkill" className="w-full rounded-lg mb-4" />
              <p className="text-gray-600">Interfaz de usuario diseñada para maximizar el engagement y la facilidad de uso.</p>
            </motion.div>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800">Características Destacadas</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={24} />
                  <span>Simulaciones de escenarios reales con IA</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={24} />
                  <span>Feedback instantáneo y personalizado</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={24} />
                  <span>Análisis detallado del progreso individual y grupal</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={24} />
                  <span>Gamificación para aumentar la motivación</span>
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={24} />
                  <span>Integración con sistemas de RRHH existentes</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      )
    },
    // Slide 5: Demostración del Producto
    {
      title: "MicroSkill en Acción",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Experiencia de Usuario Inmersiva</h2>
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">Simulación de Ventas</h3>
              <img src="/api/placeholder/600/400" alt="Simulación de Ventas" className="w-full rounded-lg mb-4" />
              <p className="text-gray-600">Los usuarios practican técnicas de venta en un entorno virtual seguro.</p>
            </motion.div>
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4">Análisis de Desempeño</h3>
              <img src="/api/placeholder/600/400" alt="Dashboard de Análisis" className="w-full rounded-lg mb-4" />
              <p className="text-gray-600">Dashboards intuitivos muestran el progreso y áreas de mejora.</p>
            </motion.div>
          </div>
        </motion.div>
      )
    },
    // Slide 6: Modelo de Negocio
    {
      title: "Modelo de Negocio",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Estrategia de Monetización</h2>
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {[
                { title: "Suscripción B2B", description: "Planes corporativos basados en número de empleados", price: "$10 - $50 por usuario/mes", percentage: "60%" },
                { title: "Suscripción Individual", description: "Planes mensuales y anuales para profesionales", price: "$29.99/mes o $299/año", percentage: "30%" },
                { title: "Contenido Premium", description: "Cursos y simulaciones especializadas", price: "$49.99 - $199.99 por curso", percentage: "10%" },
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <p className="text-lg font-semibold text-green-600">{item.price}</p>
                  <p className="text-sm text-purple-600 mt-2">Contribución: {item.percentage}</p>
                </div>
              ))}
            </motion.div>
            <motion.div 
              className="bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Distribución de Ingresos</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </motion.div>
      )
      },
    // Nuevo slide para la demo interactiva
    {
      title: "Demo Interactiva de MicroSkill",
      content: <AppDemo />
    },
    // Slide 7: Tracción y Métricas
    {
      title: "Tracción y Métricas",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-green-600 mb-4">Crecimiento Exponencial</h2>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="users" stroke="#8884d8" name="Usuarios" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" name="Ingresos ($)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div 
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
          >
            <div className="bg-blue-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-blue-600">2M</p>
              <p className="text-xl">Usuarios Activos</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-green-600">$20M</p>
              <p className="text-xl">ARR</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform">
              <p className="text-4xl font-bold text-purple-600">300%</p>
              <p className="text-xl">Crecimiento Anual</p>
            </div>
          </motion.div>
        </motion.div>
      )
    },
    // Slide 8: Equipo
    {
      title: "Nuestro Equipo",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Liderazgo Visionario</h2>
          <motion.div 
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
          >
            {[
              { name: "Jane Doe", role: "CEO", background: "Ex-Google, 15 años en EdTech", achievement: "Lideró 2 startups exitosas" },
              { name: "John Smith", role: "CTO", background: "Ex-Amazon, PhD en IA", achievement: "20+ patentes en ML" },
              { name: "Emily Brown", role: "COO", background: "Ex-LinkedIn, MBA Harvard", achievement: "Escaló operaciones globales" }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.background}</p>
                <p className="text-sm text-green-600 mt-2">{member.achievement}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p 
            className="text-center mt-6 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Respaldados por un equipo de 75+ expertos en IA, UX, y aprendizaje corporativo
          </motion.p>
        </motion.div>
      )
    },
    // Slide 9: Inversión y Uso de Fondos
    {
      title: "Inversión y Uso de Fondos",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-purple-600 mb-4">Ronda de Financiación Serie A</h2>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-5xl font-bold text-center mb-6">Buscando $25M</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Desarrollo de Producto', value: 40 },
                    { name: 'Expansión de Mercado', value: 35 },
                    { name: 'Operaciones y Equipo', value: 25 },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-6 mt-6">
              {[
                { category: "Desarrollo de Producto", percentage: "40%", description: "Mejora de IA y nuevas simulaciones" },
                { category: "Expansión de Mercado", percentage: "35%", description: "Penetración en EMEA y APAC" },
                { category: "Operaciones y Equipo", percentage: "25%", description: "Contratación de talento clave" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <p className="text-3xl font-bold" style={{color: COLORS[index % COLORS.length]}}>{item.percentage}</p>
                  <p className="font-semibold">{item.category}</p>
                  <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="bg-blue-50 p-4 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="font-bold text-xl mb-2">Objetivos Post-Inversión</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Alcanzar 5M de usuarios activos en 18 meses</li>
              <li>Expandir a 10 nuevos mercados internacionales</li>
              <li>Lanzar 50 nuevas simulaciones de industrias específicas</li>
              <li>Lograr $50M ARR para finales de 2025</li>
            </ul>
          </motion.div>
        </motion.div>
      )
    },
    // Slide 10: Testimonios de Clientes
    {
      title: "Lo que dicen nuestros clientes",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Testimonios</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { name: "John Doe", position: "Director de RRHH, TechCorp", quote: "MicroSkill ha transformado nuestra forma de capacitar al personal. Hemos visto un aumento del 40% en la retención de conocimientos." },
              { name: "Jane Smith", position: "CEO, InnovateCo", quote: "La personalización del aprendizaje que ofrece MicroSkill es incomparable. Nuestros empleados están más comprometidos que nunca." },
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <MessageCircle className="text-blue-500 mb-4" size={40} />
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )
    },
    // Slide 11: Llamado a la Acción
    {
      title: "Únete a Nuestra Revolución del Aprendizaje",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">Sé Parte del Futuro del Aprendizaje Corporativo</h2>
          <motion.p 
            className="text-2xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            MicroSkill está listo para revolucionar la manera en que las empresas desarrollan su talento. Con tu inversión, podemos acelerar nuestro crecimiento y impactar millones de carreras profesionales.
          </motion.p>
          <motion.div 
            className="grid grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-blue-100 p-6 rounded-lg">
              <Target className="text-blue-500 mx-auto mb-2" size={48} />
              <p className="text-xl font-bold">Mercado Potencial</p>
              <p className="text-3xl font-bold text-blue-600">$300B+</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <TrendingUp className="text-green-500 mx-auto mb-2" size={48} />
              <p className="text-xl font-bold">Crecimiento Proyectado</p>
              <p className="text-3xl font-bold text-green-600">200% Anual</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <Users className="text-purple-500 mx-auto mb-2" size={48} />
              <p className="text-xl font-bold">Usuarios Objetivo 2028</p>
              <p className="text-3xl font-bold text-purple-600">50M+</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-blue-600 text-white text-2xl font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors">
              Invierte en el Futuro del Aprendizaje
            </button>
          </motion.div>
        </motion.div>
      )
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 15000); // Cambia cada 15 segundos
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen flex flex-col ${isFullscreen ? 'p-0' : 'p-4'}`}>
      <header className={`bg-white shadow-md p-4 ${isFullscreen ? 'hidden' : ''}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">MicroSkill Investor Deck</h1>
          <nav className="space-x-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`text-sm ${currentSlide === index ? 'text-blue-600 font-bold' : 'text-gray-600'}`}
                onClick={() => setCurrentSlide(index)}
              >
                {slide.title}
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-6 relative">
        <div className="absolute top-4 right-4 flex space-x-2">
          <button onClick={toggleFullscreen} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
            {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
          </button>
          <button onClick={() => setShowIndex(!showIndex)} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
            <Menu size={24} />
          </button>
        </div>
        {showIndex && (
          <div className="absolute left-4 top-4 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-bold mb-2">Índice</h3>
            <ul>
              {slides.map((slide, index) => (
                <li key={index} className="cursor-pointer hover:text-blue-600" onClick={() => setCurrentSlide(index)}>
                  {index + 1}. {slide.title}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-7xl p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6">{slides[currentSlide].title}</h2>
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-between items-center w-full max-w-7xl">
          <button onClick={prevSlide} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center space-x-2">
            <button onClick={() => setIsPlaying(!isPlaying)} className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <span className="text-gray-600 font-semibold">{currentSlide + 1} / {slides.length}</span>
          </div>
          <button onClick={nextSlide} className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default InvestorDeck;