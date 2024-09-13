import React, { useState } from 'react';
import { Trophy, Star, Zap, Users, Briefcase, TrendingUp, MessageCircle, Award, BookOpen, Map } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const MicroSkillPlatform = () => {
  const [currentView, setCurrentView] = useState('gamification');

  const Header = () => (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">MicroSkill</h1>
      <nav className="flex space-x-4">
        <button onClick={() => setCurrentView('gamification')} className="text-gray-600 hover:text-blue-600">Gamificación</button>
        <button onClick={() => setCurrentView('careerPath')} className="text-gray-600 hover:text-blue-600">Ruta Profesional</button>
        <button onClick={() => setCurrentView('collaboration')} className="text-gray-600 hover:text-blue-600">Colaboración</button>
      </nav>
    </header>
  );

  const GamificationView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tu Progreso Gamificado</h2>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Trophy className="text-yellow-500 mr-2" size={24} />
            <span className="text-lg font-medium">Nivel 7: Estratega Digital</span>
          </div>
          <div className="flex items-center">
            <Star className="text-blue-500 mr-1" size={20} />
            <span className="font-medium">2,450 XP</span>
          </div>
        </div>
        <div className="bg-gray-100 h-4 rounded-full mb-4">
          <div className="bg-blue-500 h-4 rounded-full" style={{width: '70%'}}></div>
        </div>
        <p className="text-sm text-gray-600 mb-4">550 XP más para alcanzar el Nivel 8: Maestro de Campañas</p>
        <h3 className="font-semibold mb-2">Logros Recientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Zap, title: 'Rayo del SEO', desc: 'Optimiza 10 páginas web' },
            { icon: Users, title: 'Influencer', desc: 'Alcanza 1000 seguidores' },
            { icon: Briefcase, title: 'Estratega', desc: 'Completa 5 planes de marketing' }
          ].map((achievement, index) => (
            <div key={index} className="bg-blue-50 p-3 rounded-lg flex items-center">
              <achievement.icon className="text-blue-500 mr-2" size={20} />
              <div>
                <p className="font-medium">{achievement.title}</p>
                <p className="text-xs text-gray-600">{achievement.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Desafíos Diarios</h2>
        <ul className="space-y-3">
          {[
            { title: 'Racha de Aprendizaje', desc: 'Completa 3 micro-lecciones hoy', xp: 50 },
            { title: 'Quiz Maestro', desc: 'Obtén 100% en un quiz de Marketing Digital', xp: 100 },
            { title: 'Colaborador Activo', desc: 'Responde a 2 preguntas en el foro', xp: 75 }
          ].map((challenge, index) => (
            <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
              <div>
                <p className="font-medium">{challenge.title}</p>
                <p className="text-sm text-gray-600">{challenge.desc}</p>
              </div>
              <span className="text-green-500 font-medium">+{challenge.xp} XP</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const CareerPathView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tu Ruta Profesional Personalizada</h2>
        <div className="flex items-center mb-6">
          <Map className="text-blue-500 mr-2" size={24} />
          <span className="text-lg font-medium">Especialista en Marketing Digital a CMO</span>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          {[
            { title: 'Especialista en Marketing Digital', status: 'completed' },
            { title: 'Gerente de Marketing Digital', status: 'in-progress' },
            { title: 'Director de Marketing', status: 'upcoming' },
            { title: 'CMO (Chief Marketing Officer)', status: 'upcoming' }
          ].map((step, index) => (
            <div key={index} className="relative pl-10 pb-8">
              <div className={`absolute left-2 w-6 h-6 rounded-full ${
                step.status === 'completed' ? 'bg-green-500' :
                step.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
              } flex items-center justify-center`}>
                {step.status === 'completed' && <CheckCircle className="text-white" size={14} />}
                {step.status === 'in-progress' && <TrendingUp className="text-white" size={14} />}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
              {step.status === 'in-progress' && (
                <p className="text-sm text-gray-600 mt-1">En progreso - 60% completado</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Próximos Hitos</h2>
        <ul className="space-y-4">
          {[
            { icon: Award, title: 'Certificación en Google Ads', desc: 'Fundamental para tu rol actual' },
            { icon: Users, title: 'Gestión de Equipos', desc: 'Prepárate para liderar un equipo de marketing' },
            { icon: TrendingUp, title: 'Estrategia de Crecimiento', desc: 'Habilidad clave para tu próximo ascenso' }
          ].map((milestone, index) => (
            <li key={index} className="flex items-start">
              <milestone.icon className="text-blue-500 mr-3 mt-1" size={20} />
              <div>
                <p className="font-medium">{milestone.title}</p>
                <p className="text-sm text-gray-600">{milestone.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const CollaborationView = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Aprendizaje Colaborativo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-3">Grupos de Estudio Activos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Innovadores del SEO', members: 28 },
                { name: 'Maestros del Content Marketing', members: 35 },
                { name: 'Estrategas de Social Media', members: 42 }
              ].map((group, index) => (
                <li key={index} className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                  <span className="font-medium">{group.name}</span>
                  <span className="text-sm text-gray-600">{group.members} miembros</span>
                </li>
              ))}
            </ul>
            <button className="mt-4 text-blue-600 hover:underline">Unirse a un grupo</button>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Proyectos Colaborativos</h3>
            <ul className="space-y-3">
              {[
                { title: 'Análisis de Tendencias 2025', deadline: '2 semanas' },
                { title: 'Estrategia Omnicanal', deadline: '1 mes' },
                { title: 'Optimización de Funnel', deadline: '3 semanas' }
              ].map((project, index) => (
                <li key={index} className="bg-green-50 p-3 rounded-lg">
                  <p className="font-medium">{project.title}</p>
                  <p className="text-sm text-gray-600">Plazo: {project.deadline}</p>
                </li>
              ))}
            </ul>
            <button className="mt-4 text-blue-600 hover:underline">Proponer un proyecto</button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Foro de Discusión</h2>
        <div className="space-y-4">
          {[
            { title: '¿Cómo optimizar campañas de PPC en 2025?', replies: 23, views: 156 },
            { title: 'Estrategias de retención de clientes post-pandemia', replies: 18, views: 132 },
            { title: 'IA en Marketing: ¿Oportunidad o amenaza?', replies: 45, views: 287 }
          ].map((topic, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-medium mb-1">{topic.title}</h3>
              <div className="flex items-center text-sm text-gray-600">
                <MessageCircle size={16} className="mr-1" />
                <span className="mr-3">{topic.replies} respuestas</span>
                <BookOpen size={16} className="mr-1" />
                <span>{topic.views} vistas</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Iniciar nueva discusión
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-6">
        {currentView === 'gamification' && <GamificationView />}
        {currentView === 'careerPath' && <CareerPathView />}
        {currentView === 'collaboration' && <CollaborationView />}
      </main>
    </div>
  );
};

export default MicroSkillPlatform;