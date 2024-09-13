import React, { useState } from 'react';
import { Play, CheckCircle, Clock, RotateCcw, Award, Calendar, BarChart2, MessageSquare, Book } from 'lucide-react';

const MicroSkillPlatform = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const Header = () => (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MicroSkill</h1>
      <nav className="flex space-x-4">
        <button onClick={() => setCurrentView('dashboard')} className="text-gray-600 hover:text-blue-600">Dashboard</button>
        <button onClick={() => setCurrentView('practice')} className="text-gray-600 hover:text-blue-600">Práctica</button>
        <button onClick={() => setCurrentView('progress')} className="text-gray-600 hover:text-blue-600">Progreso</button>
      </nav>
    </header>
  );

  const DashboardView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tu Plan de Aprendizaje Personalizado</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Hoy</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Play size={16} className="text-green-500 mr-2" />
                <span>Micro-lección: Análisis FODA (5 min)</span>
              </li>
              <li className="flex items-center">
                <CheckCircle size={16} className="text-blue-500 mr-2" />
                <span>Quiz rápido: Estrategias de Marketing (2 min)</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Esta Semana</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={16} className="text-orange-500 mr-2" />
                <span>Proyecto: Plan de Marketing Digital (30 min)</span>
              </li>
              <li className="flex items-center">
                <RotateCcw size={16} className="text-purple-500 mr-2" />
                <span>Repaso: Conceptos clave de SEO (10 min)</span>
              </li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Próximo Hito</h3>
            <div className="flex items-center">
              <Award size={20} className="text-yellow-500 mr-2" />
              <span>Certificación en Marketing Digital</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">2 semanas para completar</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Integración con tu Rutina</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Calendar size={24} className="text-blue-500 mr-2" />
            <span>Sesiones adaptadas a tu calendario</span>
          </div>
          <button className="text-blue-600 hover:underline">Sincronizar Calendario</button>
        </div>
        <p className="text-sm text-gray-600 mt-2">MicroSkill se adapta a tus horarios libres para un aprendizaje sin interrupciones.</p>
      </div>
    </div>
  );

  const PracticeView = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Práctica Interactiva: Análisis FODA</h2>
      <div className="mb-6">
        <p className="text-gray-700">Aplica lo aprendido en la micro-lección de hoy realizando un análisis FODA para el siguiente caso de estudio:</p>
        <div className="bg-gray-50 p-4 rounded-lg mt-2">
          <p className="font-semibold">Caso: Startup de delivery de comida saludable</p>
          <p className="text-sm text-gray-600">Una nueva startup quiere entrar al mercado de delivery de comida, enfocándose en opciones saludables y sostenibles.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {['Fortalezas', 'Debilidades', 'Oportunidades', 'Amenazas'].map((section) => (
          <div key={section} className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{section}</h3>
            <textarea 
              className="w-full h-24 p-2 border border-gray-300 rounded-md resize-none"
              placeholder={`Ingresa las ${section.toLowerCase()} aquí...`}
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Enviar para revisión
        </button>
        <div className="flex items-center">
          <Clock size={16} className="text-gray-500 mr-1" />
          <span className="text-sm text-gray-600">Tiempo estimado: 10 min</span>
        </div>
      </div>
    </div>
  );

  const ProgressView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tu Progreso en Marketing Digital</h2>
        <div className="flex items-center mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '65%'}}></div>
          </div>
          <span className="text-sm font-semibold">65% Completado</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <h3 className="font-semibold text-sm mb-1">Micro-lecciones</h3>
            <p className="text-2xl font-bold">18/25</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <h3 className="font-semibold text-sm mb-1">Prácticas</h3>
            <p className="text-2xl font-bold">12/20</p>
          </div>
        </div>
        <h3 className="font-semibold mb-2">Habilidades Adquiridas</h3>
        <div className="flex flex-wrap gap-2">
          {['SEO Básico', 'Email Marketing', 'Análisis FODA', 'Google Ads'].map((skill) => (
            <span key={skill} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Impacto en tu Carrera</h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <BarChart2 size={24} className="text-blue-500 mr-2" />
            <span>Habilidades más demandadas</span>
          </div>
          <button className="text-blue-600 hover:underline">Ver Informe</button>
        </div>
        <p className="text-sm text-gray-600">
          Tus habilidades en Marketing Digital te posicionan en el top 20% de profesionales en tu área.
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'practice' && <PracticeView />}
        {currentView === 'progress' && <ProgressView />}
      </main>
    </div>
  );
};

export default MicroSkillPlatform;