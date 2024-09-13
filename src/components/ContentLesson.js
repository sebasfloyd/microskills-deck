import React, { useState } from 'react';
import { Home, Book, Award, BarChart2, Settings, Menu, X, PlayCircle, CheckCircle } from 'lucide-react';

const MicrolearningPlatform = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NavItem = ({ icon: Icon, label, view }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`flex items-center space-x-2 p-2 rounded-lg ${currentView === view ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
      <div className="p-4">
        <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-8">MicroSkill</h2>
        <nav className="space-y-2">
          <NavItem icon={Home} label="Dashboard" view="dashboard" />
          <NavItem icon={Book} label="Mis Cursos" view="courses" />
          <NavItem icon={Award} label="Certificaciones" view="certifications" />
          <NavItem icon={BarChart2} label="Progreso" view="progress" />
          <NavItem icon={Settings} label="Configuración" view="settings" />
        </nav>
      </div>
    </div>
  );

  const LessonView = () => (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Marketing Digital: Email Campaigns</h2>
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <div className="bg-gray-200 flex items-center justify-center">
          <PlayCircle size={64} className="text-blue-500" />
        </div>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600">En esta lección, aprenderás las mejores prácticas para crear campañas de email efectivas.</p>
        <h3 className="text-xl font-semibold">Contenido de la lección:</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-green-500" />
            <span>Introducción a las campañas de email (2 min)</span>
          </li>
          <li className="flex items-center space-x-2">
            <CheckCircle size={20} className="text-green-500" />
            <span>Creación de asuntos efectivos (3 min)</span>
          </li>
          <li className="flex items-center space-x-2">
            <PlayCircle size={20} className="text-blue-500" />
            <span>Diseño de emails atractivos (5 min)</span>
          </li>
          <li className="flex items-center space-x-2">
            <PlayCircle size={20} className="text-gray-400" />
            <span>Medición y análisis de resultados (4 min)</span>
          </li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Continuar lección
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="p-6 ml-0 md:ml-64">
        <header className="bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden">
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">MicroSkill</h1>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </header>
        
        {currentView === 'dashboard' && <LessonView />}
        {/* Aquí irían las otras vistas (courses, certifications, etc.) */}
      </div>
    </div>
  );
};

export default MicrolearningPlatform;