import React, { useState } from 'react';
import { Glasses, Zap, TrendingUp, Clock, Calendar, User, Briefcase, Award, BookOpen, Coffee } from 'lucide-react';

const MicroSkillPlatform = () => {
  const [currentView, setCurrentView] = useState('immersiveLearning');

  const Header = () => (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MicroSkill</h1>
      <nav className="flex space-x-4">
        <button onClick={() => setCurrentView('immersiveLearning')} className="text-gray-600 hover:text-blue-600">Aprendizaje Inmersivo</button>
        <button onClick={() => setCurrentView('lifestyleAdaptation')} className="text-gray-600 hover:text-blue-600">Adaptación al Estilo de Vida</button>
        <button onClick={() => setCurrentView('careerDevelopment')} className="text-gray-600 hover:text-blue-600">Desarrollo Profesional</button>
      </nav>
    </header>
  );

  const ImmersiveLearningView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Experiencias de Aprendizaje Inmersivo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center">
              <Glasses className="text-purple-500 mr-2" size={20} />
              Simulación VR: Presentación de Campaña
            </h3>
            <p className="text-sm mb-3">Practica tus habilidades de presentación en un entorno virtual realista.</p>
            <ul className="space-y-2 text-sm">
              <li>• Audiencia interactiva con IA</li>
              <li>• Análisis de lenguaje corporal y tono de voz</li>
              <li>• Escenarios de preguntas y respuestas</li>
            </ul>
            <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors">
              Iniciar Simulación
            </button>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center">
              <Zap className="text-green-500 mr-2" size={20} />
              Desafío AR: Optimización de Tienda
            </h3>
            <p className="text-sm mb-3">Usa realidad aumentada para optimizar el diseño de una tienda física.</p>
            <ul className="space-y-2 text-sm">
              <li>• Visualización de datos de tráfico de clientes</li>
              <li>• Experimentación con diseños de estantería</li>
              <li>• Análisis de impacto en ventas en tiempo real</li>
            </ul>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
              Comenzar Desafío AR
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Aprendizaje Contextual en Tiempo Real</h2>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Asistente IA en Tiempo Real</h3>
          <p className="text-sm mb-3">Tu asistente de aprendizaje te acompaña durante tu jornada laboral, ofreciendo apoyo contextual.</p>
          <div className="space-y-3">
            <div className="flex items-start">
              <Coffee className="text-blue-500 mr-2 mt-1" size={20} />
              <div>
                <p className="font-medium">9:15 AM - Preparando informe de ventas</p>
                <p className="text-sm text-gray-600">Sugerencia: "Aquí tienes un repaso rápido sobre visualización de datos para mejorar tu informe."</p>
              </div>
            </div>
            <div className="flex items-start">
              <User className="text-blue-500 mr-2 mt-1" size={20} />
              <div>
                <p className="font-medium">11:30 AM - Reunión con cliente potencial</p>
                <p className="text-sm text-gray-600">Consejo: "Repasa estas técnicas de cierre de ventas antes de tu reunión."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LifestyleAdaptationView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Aprendizaje Adaptado a tu Estilo de Vida</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center">
              <Clock className="text-yellow-500 mr-2" size={20} />
              Optimización de Tiempo
            </h3>
            <p className="text-sm mb-3">MicroSkill se adapta a tu horario y energía diaria.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Zap className="text-yellow-500 mr-2" size={16} />
                <span>Pico de energía detectado: 10 AM - 12 PM</span>
              </li>
              <li className="flex items-center">
                <BookOpen className="text-yellow-500 mr-2" size={16} />
                <span>Lecciones intensivas programadas en este horario</span>
              </li>
              <li className="flex items-center">
                <Coffee className="text-yellow-500 mr-2" size={16} />
                <span>Contenido ligero para momentos de baja energía</span>
              </li>
            </ul>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center">
              <User className="text-pink-500 mr-2" size={20} />
              Personalización Contextual
            </h3>
            <p className="text-sm mb-3">Contenido adaptado a tu ubicación y actividades.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Briefcase className="text-pink-500 mr-2" size={16} />
                <span>En la oficina: Micro-lecciones de productividad</span>
              </li>
              <li className="flex items-center">
                <Coffee className="text-pink-500 mr-2" size={16} />
                <span>En cafetería: Podcasts educativos cortos</span>
              </li>
              <li className="flex items-center">
                <Calendar className="text-pink-500 mr-2" size={16} />
                <span>Viajes: Cursos descargables offline</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Integración con Bienestar</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Equilibrio Aprendizaje-Vida</h3>
          <p className="text-sm mb-3">MicroSkill se integra con tus metas de bienestar para un aprendizaje sostenible.</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">Tiempo de pantalla diario</span>
              <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded">Dentro del objetivo</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Recordatorios de pausa</span>
              <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">Activados</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Sesiones de mindfulness</span>
              <span className="text-sm bg-purple-200 text-purple-800 px-2 py-1 rounded">2/día</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CareerDevelopmentView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Desarrollo de Carrera Integral</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center">
              <TrendingUp className="text-blue-500 mr-2" size={20} />
              Proyección de Carrera
            </h3>
            <p className="text-sm mb-3">Visualiza tu trayectoria profesional basada en tu aprendizaje actual.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <Award className="text-blue-500 mr-2" size={16} />
                <span>Rol actual: Marketing Manager</span>
              </li>
              <li className="flex items-center">
                <Zap className="text-blue-500 mr-2" size={16} />
                <span>Próximo hito: Director de Marketing Digital (2 años)</span>
              </li>
              <li className="flex items-center">
                <Briefcase className="text-blue-500 mr-2" size={16} />
                <span>Meta a largo plazo: CMO (5-7 años)</span>
              </li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 flex items-center">
              <BookOpen className="text-purple-500 mr-2" size={20} />
              Plan de Desarrollo Personalizado
            </h3>
            <p className="text-sm mb-3">Habilidades clave para alcanzar tus metas profesionales.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span>Liderazgo Estratégico</span>
                <div className="w-20 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '65%'}}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>Análisis Avanzado de Datos</span>
                <div className="w-20 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
                </div>
              </li>
              <li className="flex items-center justify-between">
                <span>Gestión de Presupuestos</span>
                <div className="w-20 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '40%'}}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Mentoría y Networking Inteligente</h2>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-3">Conexiones Estratégicas</h3>
          <p className="text-sm mb-3">MicroSkill te conecta con mentores y pares relevantes para tu crecimiento profesional.</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="text-green-500 mr-2" size={20} />
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-xs text-gray-600">CMO en Tech Innovators</p>
                </div>
              </div>
              <button className="text-green-600 hover:underline">Conectar</button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="text-green-500 mr-2" size={20} />
                <div>
                  <p className="font-medium">Alex Chen</p>
                  <p className="text-xs text-gray-600">Experto en Marketing de IA</p>
                </div>
              </div>
              <button className="text-green-600 hover:underline">Conectar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        {currentView === 'immersiveLearning' && <ImmersiveLearningView />}
        {currentView === 'lifestyleAdaptation' && <LifestyleAdaptationView />}
        {currentView === 'careerDevelopment' && <CareerDevelopmentView />}
      </main>
    </div>
  );
};

export default MicroSkillPlatform;