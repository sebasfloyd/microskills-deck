import React, { useState } from 'react';
import { Home, Book, Award, BarChart2, Settings, Search, Bell, User, ChevronRight, PlayCircle, CheckCircle, Star, Clock, Target, FileText, MessageSquare } from 'lucide-react';

const MicrolearningPlatform = () => {
  const [currentView, setCurrentView] = useState('lesson');

  // ... (Componentes anteriores como NavItem, Sidebar, y Header se mantienen iguales)

  const LessonView = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        <div className="bg-gray-800 flex items-center justify-center">
          <PlayCircle size={64} className="text-white opacity-80" />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Estrategias de Email Marketing</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
          <span className="flex items-center"><Clock size={16} className="mr-1" /> 8 min</span>
          <span className="flex items-center"><Target size={16} className="mr-1" /> Intermedio</span>
        </div>
        <p className="text-gray-700 mb-6">Aprende a crear campañas de email efectivas que aumenten tus tasas de apertura y conversión.</p>
        <div className="space-y-4 mb-6">
          <h3 className="font-semibold">Contenido de la lección:</h3>
          <div className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-green-500" />
            <span>1. Introducción al email marketing</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-green-500" />
            <span>2. Creación de listas de suscriptores</span>
          </div>
          <div className="flex items-center space-x-2 font-semibold">
            <PlayCircle size={20} className="text-blue-500" />
            <span>3. Diseño de emails efectivos</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Clock size={20} />
            <span>4. Medición y análisis de resultados</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Continuar lección
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
            <MessageSquare size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  const ProgressView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Mi Progreso</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Cursos Completados</h3>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Horas de Aprendizaje</h3>
            <p className="text-3xl font-bold text-green-600">47</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Certificaciones</h3>
            <p className="text-3xl font-bold text-purple-600">3</p>
          </div>
        </div>
        <h3 className="font-semibold mb-4">Cursos en Progreso</h3>
        <div className="space-y-4">
          {['Marketing Digital Avanzado', 'Data Science Fundamentals', 'Liderazgo Efectivo'].map((course) => (
            <div key={course} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">{course}</h4>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${Math.floor(Math.random() * 100)}%`}}></div>
                </div>
                <span className="text-sm text-gray-600">68%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Próximas Metas</h2>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <Star size={20} className="text-yellow-500" />
            </div>
            <div>
              <h3 className="font-semibold">Completar el curso de Marketing Digital</h3>
              <p className="text-sm text-gray-600">Faltan 2 lecciones</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <FileText size={20} className="text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold">Obtener certificación en Data Science</h3>
              <p className="text-sm text-gray-600">Programa el examen final</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="md:ml-64 p-6">
        <Header />
        <main className="mt-6">
          {currentView === 'lesson' && <LessonView />}
          {currentView === 'progress' && <ProgressView />}
        </main>
      </div>
    </div>
  );
};

export default MicrolearningPlatform;