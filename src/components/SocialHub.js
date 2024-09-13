import React from 'react';
import { Users, MessageCircle, Video, Calendar, Award, Zap, Star, TrendingUp } from 'lucide-react';

const SocialCollaborativeHub = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="bg-white shadow-sm p-4 rounded-lg mb-6">
        <h1 className="text-2xl font-bold text-blue-600">MicroSkill: Hub Social</h1>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 text-blue-500" />
              Grupos de Aprendizaje Activos
            </h2>
            <ul className="space-y-4">
              {['Innovadores de Marketing Digital', 'Data Science para Principiantes', 'Club de Liderazgo Ágil'].map((group, index) => (
                <li key={index} className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                  <span className="font-medium">{group}</span>
                  <button className="text-blue-600 hover:underline">Unirse</button>
                </li>
              ))}
            </ul>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Crear Nuevo Grupo
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <MessageCircle className="mr-2 text-green-500" />
              Foros de Discusión
            </h2>
            <ul className="space-y-4">
              {[
                { title: 'Tendencias de IA en Marketing', replies: 23, hot: true },
                { title: 'Técnicas de Visualización de Datos', replies: 15 },
                { title: 'Estrategias de Liderazgo Remoto', replies: 31, hot: true }
              ].map((topic, index) => (
                <li key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div>
                    <span className="font-medium">{topic.title}</span>
                    {topic.hot && <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">Hot</span>}
                  </div>
                  <span className="text-sm text-gray-600">{topic.replies} respuestas</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Video className="mr-2 text-purple-500" />
              Sesiones en Vivo
            </h2>
            <ul className="space-y-3">
              {[
                { title: 'Masterclass: SEO Avanzado', time: '2:00 PM' },
                { title: 'Q&A: Estrategias de Growth Hacking', time: '4:30 PM' },
                { title: 'Workshop: Design Thinking', time: 'Mañana, 10:00 AM' }
              ].map((session, index) => (
                <li key={index} className="flex items-center justify-between bg-purple-50 p-3 rounded-lg">
                  <div>
                    <p className="font-medium">{session.title}</p>
                    <p className="text-sm text-gray-600">{session.time}</p>
                  </div>
                  <button className="text-purple-600 hover:underline">Agendar</button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2 text-yellow-500" />
              Logros Colaborativos
            </h2>
            <ul className="space-y-3">
              {[
                { icon: Zap, title: 'Solucionador Estrella', desc: 'Ayudaste a 50 compañeros' },
                { icon: Star, title: 'Creador de Contenido', desc: 'Tu guía fue vista 1000 veces' },
                { icon: TrendingUp, title: 'Impulsor de Grupos', desc: 'Lideraste 5 proyectos grupales' }
              ].map((achievement, index) => (
                <li key={index} className="flex items-center bg-yellow-50 p-3 rounded-lg">
                  <achievement.icon className="text-yellow-500 mr-2" size={20} />
                  <div>
                    <p className="font-medium">{achievement.title}</p>
                    <p className="text-xs text-gray-600">{achievement.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCollaborativeHub;