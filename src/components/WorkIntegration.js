import React, { useState } from 'react';
import { Briefcase, Brain, BarChart2, Zap, Calendar, MessageSquare, Clock, Target, TrendingUp, AlertCircle } from 'lucide-react';

const MicroSkillPlatform = () => {
  const [currentView, setCurrentView] = useState('workplaceIntegration');

  const Header = () => (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MicroSkill</h1>
      <nav className="flex space-x-4">
        <button onClick={() => setCurrentView('workplaceIntegration')} className="text-gray-600 hover:text-blue-600">Integración Laboral</button>
        <button onClick={() => setCurrentView('aiLearning')} className="text-gray-600 hover:text-blue-600">IA Personalizada</button>
        <button onClick={() => setCurrentView('advancedAnalytics')} className="text-gray-600 hover:text-blue-600">Analíticas</button>
      </nav>
    </header>
  );

  const WorkplaceIntegrationView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Integración con tu Flujo de Trabajo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Micro-lecciones Contextuales</h3>
            <ul className="space-y-3">
              {[
                { icon: Calendar, title: 'Antes de tu reunión de estrategia', desc: 'Repaso rápido: KPIs de marketing' },
                { icon: MessageSquare, title: 'En tu chat de equipo', desc: 'Tip del día: Optimización de landing pages' },
                { icon: Briefcase, title: 'Mientras trabajas en Ads', desc: 'Mini-tutorial: Ajuste de pujas en tiempo real' }
              ].map((item, index) => (
                <li key={index} className="flex items-start bg-blue-50 p-3 rounded-lg">
                  <item.icon className="text-blue-500 mr-2 mt-1" size={20} />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Aprendizaje Basado en Proyectos</h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Proyecto Actual: Lanzamiento de Producto</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Clock className="text-green-500 mr-2" size={16} />
                  <span>Micro-curso: Estrategias de Go-to-Market</span>
                </li>
                <li className="flex items-center">
                  <Target className="text-green-500 mr-2" size={16} />
                  <span>Práctica: Segmentación de audiencia</span>
                </li>
                <li className="flex items-center">
                  <MessageSquare className="text-green-500 mr-2" size={16} />
                  <span>Asesoría: Sesión con experto en lanzamientos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Aprendizaje Colaborativo en Equipo</h2>
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium">Desafío de Equipo: Incrementar Conversiones</span>
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">En Progreso</span>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Progreso del Equipo</h3>
          <div className="flex items-center mb-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '65%'}}></div>
            </div>
            <span className="text-sm font-medium">65%</span>
          </div>
          <ul className="space-y-2 mt-4">
            <li className="flex justify-between items-center">
              <span>Ana (Tú)</span>
              <span className="text-green-500">3/4 tareas completadas</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Carlos</span>
              <span className="text-yellow-500">2/4 tareas completadas</span>
            </li>
            <li className="flex justify-between items-center">
              <span>María</span>
              <span className="text-green-500">4/4 tareas completadas</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const AILearningView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tu Asistente de Aprendizaje IA</h2>
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <Brain className="text-blue-500" size={24} />
          </div>
          <div>
            <h3 className="font-semibold">MicroMentor</h3>
            <p className="text-sm text-gray-600">Tu guía personalizado impulsado por IA</p>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h3 className="font-medium mb-2">Recomendaciones Personalizadas</h3>
          <ul className="space-y-3">
            {[
              { icon: Zap, title: 'Curso Recomendado', desc: 'Análisis Avanzado de Datos de Marketing' },
              { icon: Clock, title: 'Mejor Momento para Estudiar', desc: 'Tus picos de productividad son entre 10-11 AM' },
              { icon: Target, title: 'Enfoque Sugerido', desc: 'Concentrarte en habilidades de visualización de datos' }
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <item.icon className="text-blue-500 mr-2 mt-1" size={20} />
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Alerta de Habilidad</h3>
          <div className="flex items-start">
            <AlertCircle className="text-yellow-500 mr-2 mt-1" size={20} />
            <div>
              <p className="font-medium">Actualización necesaria: SEO Técnico</p>
              <p className="text-sm text-gray-600">Nuevos algoritmos detectados. Sugerimos un curso de actualización.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Aprendizaje Adaptativo en Acción</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Ajuste Dinámico de Dificultad</h3>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm">El sistema ha detectado que dominas rápidamente los conceptos de SEO. Se están ajustando los contenidos para proporcionarte desafíos más avanzados.</p>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Refuerzo Inteligente</h3>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm">Basado en tus patrones de retención, se programarán mini-quizzes sobre "Estrategias de Content Marketing" en los próximos días para reforzar tu aprendizaje.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AdvancedAnalyticsView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Analíticas de Aprendizaje Avanzadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3">Progreso de Habilidades</h3>
            <div className="space-y-3">
              {[
                { skill: 'Marketing Digital', progress: 85 },
                { skill: 'Análisis de Datos', progress: 70 },
                { skill: 'SEO', progress: 90 },
                { skill: 'Social Media', progress: 75 }
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{item.skill}</span>
                    <span className="text-sm font-medium">{item.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${item.progress}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">Tendencias de Aprendizaje</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Horas de estudio por semana</span>
                <TrendingUp className="text-green-500" size={20} />
              </div>
              <p className="text-2xl font-bold">5.5 hrs</p>
              <p className="text-sm text-gray-600">+15% vs. semana anterior</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Impacto en el Rendimiento Laboral</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Productividad', value: '+20%', desc: 'Aumento en tareas completadas' },
            { title: 'Calidad', value: '+15%', desc: 'Mejora en evaluaciones de proyectos' },
            { title: 'Innovación', value: '+30%', desc: 'Incremento en ideas implementadas' }
          ].map((item, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-2xl font-bold text-blue-600">{item.value}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recomendaciones Basadas en Datos</h2>
        <ul className="space-y-3">
          {[
            'Enfócate en "Estrategias de Retención de Clientes" para complementar tus habilidades actuales.',
            'Considera colaborar más en proyectos de equipo para mejorar tus habilidades de liderazgo.',
            'Tus mejores sesiones de aprendizaje son por la mañana. Intenta programar más lecciones antes del almuerzo.'
          ].map((rec, index) => (
            <li key={index} className="flex items-start bg-yellow-50 p-3 rounded-lg">
              <Zap className="text-yellow-500 mr-2 mt-1" size={20} />
              <span>{rec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        {currentView === 'workplaceIntegration' && <WorkplaceIntegrationView />}
        {currentView === 'aiLearning' && <AILearningView />}
        {currentView === 'advancedAnalytics' && <AdvancedAnalyticsView />}
      </main>
    </div>
  );
};

export default MicroSkillPlatform;