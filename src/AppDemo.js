import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor } from 'lucide-react';

// Importa todos los componentes
import AdvancedPersonalization from './components/AdvancedPersonalization';
import AISimulations from './components/AISimulations';
import ContentLesson from './components/ContentLesson';
import ExporeCourses from './components/ExporeCourses';
import Gamification from './components/Gamification';
import Immersive from './components/Immersive';
import MicroLearningDashboard from './components/MicroLearningDashboard';
import PracticalLearning from './components/PracticalLearning';
import SimulationsHistory from './components/SimulationsHistory';
import SocialHub from './components/SocialHub';
import TestTDA from './components/TestTDA';
import WorkIntegration from './components/WorkIntegration';

const AppDemo = () => {
  const [currentScreen, setCurrentScreen] = useState('aiSimulations');

  const screens = [
    { id: 'aiSimulations', name: 'Simulaciones IA', component: AISimulations },
    { id: 'advancedPersonalization', name: 'Personalización Avanzada', component: AdvancedPersonalization },
    { id: 'contentLesson', name: 'Lección de Contenido', component: ContentLesson },
    { id: 'exploreCourses', name: 'Explorar Cursos', component: ExporeCourses },
    { id: 'gamification', name: 'Gamificación', component: Gamification },
    { id: 'immersive', name: 'Aprendizaje Inmersivo', component: Immersive },
    { id: 'microLearning', name: 'Micro-Aprendizaje', component: MicroLearningDashboard },
    { id: 'practicalLearning', name: 'Aprendizaje Práctico', component: PracticalLearning },
    { id: 'simulationsHistory', name: 'Historial de Simulaciones', component: SimulationsHistory },
    { id: 'socialHub', name: 'Hub Social', component: SocialHub },
    { id: 'testTDA', name: 'Test TDA', component: TestTDA },
    { id: 'workIntegration', name: 'Integración Laboral', component: WorkIntegration },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h2 className="text-4xl font-bold text-blue-600 mb-4">Explora MicroSkill en Acción</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {screens.map((screen) => (
          <button
            key={screen.id}
            onClick={() => setCurrentScreen(screen.id)}
            className={`px-4 py-2 rounded-full ${
              currentScreen === screen.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {screen.name}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner" style={{ height: '70vh', overflow: 'hidden' }}>
        <div className="bg-white rounded-lg shadow-lg p-4 mx-auto h-full" style={{ maxWidth: '1024px' }}>
          <div className="flex justify-center mb-2">
            <Monitor size={24} />
          </div>
          <div className="h-full overflow-auto">
            {screens.map((screen) => (
              currentScreen === screen.id && (
                <motion.div
                  key={screen.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4"
                >
                  <screen.component />
                </motion.div>
              )
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppDemo;