import React, { useState } from 'react';
import { Home, Book, Award, BarChart2, Settings, Search, Bell, User, ChevronRight, PlayCircle, CheckCircle, Star } from 'lucide-react';

const MicrolearningPlatform = () => {
  const [currentView, setCurrentView] = useState('explore');

  const NavItem = ({ icon: Icon, label }) => (
    <button className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-gray-100">
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  const Sidebar = () => (
    <div className="hidden md:block w-64 bg-white shadow-lg h-screen fixed left-0 top-0 p-4">
      <h2 className="text-2xl font-bold mb-8">MicroSkill</h2>
      <nav className="space-y-2">
        <NavItem icon={Home} label="Dashboard" />
        <NavItem icon={Book} label="Mis Cursos" />
        <NavItem icon={Award} label="Certificaciones" />
        <NavItem icon={BarChart2} label="Progreso" />
        <NavItem icon={Settings} label="Configuración" />
      </nav>
    </div>
  );

  const Header = () => (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-gray-800">Explorar Cursos</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
          <User size={20} />
        </button>
      </div>
    </header>
  );

  const ExploreView = () => (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar cursos, habilidades, temas..."
          className="w-full p-3 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-lg"
        />
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Marketing Digital', 'Data Science', 'UX/UI Design', 'Liderazgo', 'Finanzas', 'Programación'].map((category) => (
          <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-40 bg-blue-500 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">{category}</h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-2">12 cursos • 36 horas de contenido</p>
              <button className="text-blue-500 font-semibold flex items-center">
                Ver cursos <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CourseView = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-green-500 flex items-center justify-center">
        <h2 className="text-3xl font-bold text-white">Marketing Digital Avanzado</h2>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Star className="text-yellow-400" fill="currentColor" />
          <span className="font-semibold">4.8</span>
          <span className="text-gray-500">(2,456 valoraciones)</span>
        </div>
        <p className="text-gray-600 mb-6">Domina las últimas estrategias y herramientas de marketing digital para impulsar el crecimiento de tu negocio.</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-semibold mb-2">Duración</h4>
            <p>4 semanas • 2-3 horas/semana</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Nivel</h4>
            <p>Intermedio</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Idioma</h4>
            <p>Español</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Certificación</h4>
            <p>Incluida</p>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Comenzar curso
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="md:ml-64 p-6">
        <Header />
        <main className="mt-6">
          {currentView === 'explore' && <ExploreView />}
          {currentView === 'course' && <CourseView />}
        </main>
      </div>
    </div>
  );
};

export default MicrolearningPlatform;