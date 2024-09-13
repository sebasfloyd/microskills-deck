import React, { useState } from 'react';
import { Target, Zap, BarChart2, Clock, Calendar, CheckCircle, ArrowRight, User, Settings, BookOpen } from 'lucide-react';

const MicroSkillPlatform = () => {
  const [currentView, setCurrentView] = useState('personalization');

  const Header = () => (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MicroSkill</h1>
      <nav className="flex space-x-4">
        <button onClick={() => setCurrentView('personalization')} className="text-gray-600 hover:text-blue-600">Personalización</button>
        <button onClick={() => setCurrentView('realWorldApplication')} className="text-gray-600 hover:text-blue-600">Aplicación Real</button>
        <button onClick={() => setCurrentView('adaptiveLearning')} className="text-gray-600 hover:text-blue-600">Aprendizaje Adaptativo</button>
      </nav>
    </header>
  );

  const PersonalizationView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tu Plan de Aprendizaje Personalizado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Objetivos Profesionales</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Target className="text-blue-500 mr-2" size={20} />
                <span className="font-medium">Convertirte en Gerente de Marketing Digital</span>
              </div>
              <p className="text-sm text-gray-600">Basado en tu perfil y aspiraciones</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Habilidades Recomendadas</h3>
            <ul className="space-y-2">
              {['Estrategia de Contenido', 'Analítica Avanzada', 'Gestión de Equipos', 'Presupuesto de Marketing'].map((skill) => (
                <li key={skill} className="flex items-center">
                  <Zap className="text-yellow-500 mr-2" size={16} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Adaptación a tu Ritmo</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Clock className="text-green-500 mr-2" size={24} />
            <span>Tiempo diario disponible: 30 minutos</span>
          </div>
          <button className="text-blue-600 hover:underline">Ajustar</button>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Tu Plan Diario</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Micro-lección: Estrategias de SEO (5 min)</span>
              <span className="text-sm text-gray-500">9:00 AM</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Práctica: Optimización de Keywords (10 min)</span>
              <span className="text-sm text-gray-500">1:00 PM</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Quiz: Fundamentos de PPC (5 min)</span>
              <span className="text-sm text-gray-500">5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const RealWorldApplicationView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Aplicación en el Mundo Real</h2>
        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h3 className="font-semibold mb-2">Desafío Semanal</h3>
          <p>Crea una estrategia de contenido para aumentar el engagement en redes sociales de una startup de tecnología.</p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Pasos del Desafío</h3>
            <ul className="space-y-2">
              {[
                'Analizar la audiencia objetivo',
                'Definir los tipos de contenido',
                'Crear un calendario editorial',
                'Establecer KPIs para medir el éxito'
              ].map((step, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Recursos</h3>
            <ul className="space-y-1">
              <li className="text-blue-600 hover:underline cursor-pointer">• Guía: Mejores prácticas en contenido para redes sociales</li>
              <li className="text-blue-600 hover:underline cursor-pointer">• Template: Calendario editorial</li>
              <li className="text-blue-600 hover:underline cursor-pointer">• Video: Cómo definir KPIs efectivos</li>
            </ul>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Comenzar Desafío
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Conexión con Expertos</h2>
        <p className="mb-4">Recibe feedback de profesionales en activo sobre tu estrategia de contenido.</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <p className="font-semibold">María González</p>
              <p className="text-sm text-gray-600">Directora de Marketing Digital en TechCorp</p>
            </div>
          </div>
          <button className="text-blue-600 hover:underline">Solicitar Revisión</button>
        </div>
      </div>
    </div>
  );

  const AdaptiveLearningView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tu Estilo de Aprendizaje</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Tipo Primario</h3>
            <p className="text-lg font-medium">Visual</p>
            <p className="text-sm text-gray-600 mt-1">Aprendes mejor con imágenes y diagramas</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Tipo Secundario</h3>
            <p className="text-lg font-medium">Kinestésico</p>
            <p className="text-sm text-gray-600 mt-1">Te beneficias de ejercicios prácticos</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Ritmo Óptimo</h3>
            <p className="text-lg font-medium">Intensivo Corto</p>
            <p className="text-sm text-gray-600 mt-1">Prefieres sesiones cortas y frecuentes</p>
          </div>
        </div>
        <h3 className="font-semibold mb-2">Cómo Adaptamos tu Contenido</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <ArrowRight className="text-blue-500 mr-2" size={16} />
            <span>Más infografías y videos en tus lecciones</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="text-blue-500 mr-2" size={16} />
            <span>Ejercicios prácticos después de cada concepto clave</span>
          </li>
          <li className="flex items-center">
            <ArrowRight className="text-blue-500 mr-2" size={16} />
            <span>Lecciones divididas en segmentos de 5-10 minutos</span>
          </li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Progreso Adaptativo</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium">Nivel Actual: Intermedio en Marketing Digital</span>
          <BarChart2 className="text-blue-500" size={24} />
        </div>
        <div className="bg-gray-100 h-2 rounded-full mb-4">
          <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Principiante</span>
          <span>Intermedio</span>
          <span>Avanzado</span>
          <span>Experto</span>
        </div>
        <button className="mt-4 text-blue-600 hover:underline">Ver detalles de progreso</button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        {currentView === 'personalization' && <PersonalizationView />}
        {currentView === 'realWorldApplication' && <RealWorldApplicationView />}
        {currentView === 'adaptiveLearning' && <AdaptiveLearningView />}
      </main>
    </div>
  );
};

export default MicroSkillPlatform;