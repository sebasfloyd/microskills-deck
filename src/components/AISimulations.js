import React, { useState, useEffect } from 'react';
import { Video, MessageCircle, Mic, Settings, User, Star, BarChart2, Book, Globe, ShoppingCart, Headphones, PenTool, Users, GraduationCap, Zap, ThumbsUp, ThumbsDown, ChevronRight, Maximize2, Play, Clock, TrendingUp, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const AISimulations = () => {
  const [selectedSimulation, setSelectedSimulation] = useState(null);
  const [simulationState, setSimulationState] = useState('selection'); // 'selection', 'intro', 'active', 'feedback'
  const [timer, setTimer] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    let interval = null;
    if (simulationState === 'active' && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setSimulationState('feedback');
    }
    return () => clearInterval(interval);
  }, [simulationState, timer]);

  const simulations = [
    { id: 'sales', name: 'Ventas', icon: ShoppingCart, color: 'bg-blue-100 text-blue-600' },
    { id: 'customer-service', name: 'Atención al Cliente', icon: Headphones, color: 'bg-green-100 text-green-600' },
    { id: 'language', name: 'Práctica de Idiomas', icon: Globe, color: 'bg-yellow-100 text-yellow-600' },
    { id: 'pitch', name: 'Pitch de Negocios', icon: PenTool, color: 'bg-purple-100 text-purple-600' },
    { id: 'leadership', name: 'Liderazgo y Feedback', icon: Users, color: 'bg-red-100 text-red-600' },
    { id: 'oral-exam', name: 'Examen Oral', icon: GraduationCap, color: 'bg-indigo-100 text-indigo-600' },
  ];

  const SimulationCard = ({ simulation }) => (
    <div 
      className={`p-4 rounded-lg cursor-pointer transition-all hover:shadow-md ${simulation.color}`}
      onClick={() => {
        setSelectedSimulation(simulation);
        setSimulationState('intro');
      }}
    >
      <simulation.icon size={24} className="mb-2" />
      <h3 className="font-semibold">{simulation.name}</h3>
    </div>
  );

  const IntroView = ({ simulation }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <simulation.icon size={28} className="mr-2" />
        {simulation.name}
      </h2>
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-2">Objetivo de la Simulación</h3>
        <p>En esta simulación, practicarás una venta de software B2B a una empresa mediana. Tu objetivo es entender las necesidades del cliente, presentar efectivamente tu producto y manejar objeciones.</p>
      </div>
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-2">Escenario</h3>
        <p>Eres un representante de ventas de TechSolutions. Tu cliente potencial es una empresa de logística que busca mejorar su eficiencia operativa. Tienes 5 minutos para realizar tu presentación y responder preguntas.</p>
      </div>
      <div className="bg-yellow-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-2">Consejos</h3>
        <ul className="list-disc list-inside">
          <li>Escucha atentamente las necesidades del cliente</li>
          <li>Enfócate en los beneficios específicos para su industria</li>
          <li>Está preparado para manejar objeciones comunes sobre precio y implementación</li>
        </ul>
      </div>
      <button 
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => setSimulationState('active')}
      >
        Comenzar Simulación
      </button>
    </div>
  );

  const SimulationInterface = ({ simulation }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <simulation.icon size={28} className="mr-2" />
          {simulation.name}
        </h2>
        <div className="flex items-center">
          <Clock size={20} className="mr-2 text-blue-500" />
          <span className="text-lg font-semibold">{Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-gray-100 rounded-lg aspect-video flex items-center justify-center relative">
          <Video size={48} className="text-gray-400" />
          <div className="absolute bottom-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-full text-sm flex items-center">
            <Mic size={16} className="mr-2" />
            Conversación en vivo
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center">
              <User size={20} className="mr-2 text-blue-500" />
              Tu Avatar IA
            </h3>
            <p className="text-sm text-gray-600">John, Director de Operaciones</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center">
              <Star size={20} className="mr-2 text-green-500" />
              Etapa Actual
            </h3>
            <p className="text-sm text-gray-600">Presentación de Beneficios</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center">
              <AlertCircle size={20} className="mr-2 text-purple-500" />
              Próximo Desafío
            </h3>
            <p className="text-sm text-gray-600">Manejo de Objeciones de Precio</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-2 flex items-center">
          <MessageCircle size={20} className="mr-2 text-gray-700" />
          Diálogo en Tiempo Real
        </h3>
        <div className="h-60 overflow-y-auto bg-white border border-gray-200 rounded-md p-3 mb-3">
          <p className="text-sm"><strong>IA:</strong> Entiendo que la eficiencia operativa es una prioridad para ustedes. ¿Podría contarme más sobre los desafíos específicos que están enfrentando en este momento?</p>
          <p className="text-sm mt-2"><strong>Tú:</strong> Por supuesto. Actualmente, nuestro principal desafío es la coordinación entre nuestros equipos de logística distribuidos globalmente. Estamos buscando una solución que nos permita mejorar la comunicación y el seguimiento de envíos en tiempo real.</p>
          <p className="text-sm mt-2"><strong>IA:</strong> Gracias por compartir eso. Basado en lo que me cuentas, creo que nuestro software LogiTech podría ser una excelente solución para ustedes. ¿Te gustaría que te explique cómo podría abordar específicamente el desafío de coordinación global?</p>
          <p className="text-sm mt-2 text-blue-500">Habla para responder...</p>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between">
        <button className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
          Terminar Simulación
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600" onClick={() => setSimulationState('feedback')}>
          Finalizar y Ver Feedback
        </button>
      </div>
    </div>
  );

  const FeedbackView = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Feedback Detallado de la Simulación</h2>
      
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2 flex items-center">
            <Star size={20} className="mr-2 text-blue-500" />
            Puntuación General
          </h3>
          <p className="text-4xl font-bold text-blue-600">85%</p>
          <p className="text-sm text-gray-600 mt-1">Excelente desempeño</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2 flex items-center">
            <TrendingUp size={20} className="mr-2 text-green-500" />
            Progreso
          </h3>
          <p className="text-lg font-bold text-green-600">+5% vs. última simulación</p>
          <p className="text-sm text-gray-600 mt-1">Mejora consistente</p>
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        <h3 className="font-semibold">Desglose de Habilidades</h3>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Técnicas de Venta</span>
            <span className="text-sm font-medium text-blue-600">80% (+5%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Manejo de Objeciones</span>
            <span className="text-sm font-medium text-blue-600">75% (+10%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium">Cierre de Venta</span>
            <span className="text-sm font-medium text-blue-600">90% (0%)</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '90%'}}></div>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-2 flex items-center">
          <Clock size={20} className="mr-2 text-yellow-600" />
          Línea de Tiempo de la Simulación
        </h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle size={16} className="mr-2 text-green-500 mt-1" />
            <div>
              <p className="font-medium">0:30 - Introducción efectiva</p>
              <p className="text-sm text-gray-600">Buena presentación y establecimiento de rapport</p>
            </div>
          </li>
          <li className="flex items-start">
            <AlertCircle size={16} className="mr-2 text-yellow-500 mt-1" />
            <div>
              <p className="font-medium">1:45 - Análisis de necesidades</p>
              <p className="text-sm text-gray-600">Podrías haber profundizado más en las necesidades específicas</p>
            </div>
          </li>
          <li className="flex items-start">
            <CheckCircle size={16} className="mr-2 text-green-500 mt-1" />
            <div>
              <p className="font-medium">3:20 - Manejo de objeciones</p>
              <p className="text-sm text-gray-600">Excelente respuesta a la objeción de precio</p>
            </div>
          </li>
          <li className="flex items-start">
            <XCircle size={16} className="mr-2 text-red-500 mt-1" />
            <div>
              <p className="font-medium">4:50 - Cierre</p>
              <p className="text-sm text-gray-600">Faltó un llamado a la acción más claro</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold mb-2 flex items-center">
          <Maximize2 size={20} className="mr-2 text-purple-600" />
          Próximos Pasos
        </h3>
        <p className="text-sm mb-2">Basado en tu desempeño, te recomendamos:</p>
        <ul className="text-sm space-y-1">
          <li className="flex items-center">
            <ChevronRight size={16} className="mr-2 text-purple-600" />
            Curso: "Técnicas Avanzadas de Análisis de Necesidades"
          </li>
          <li className="flex items-center">
            <ChevronRight size={16} className="mr-2 text-purple-600" />
            Práctica: Simulación de venta con objeciones complejas
          </li>
          <li className="flex items-center">
            <ChevronRight size={16} className="mr-2 text-purple-600" />
            Ejercicio: Mejorar técnicas de cierre de ventas
          </li>
        </ul>
      </div>
      
      <div className="flex justify-between">
        <button 
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          onClick={() => {
            setSelectedSimulation(null);
            setSimulationState('selection');
            setTimer(300);
          }}
        >
          Volver a Simulaciones
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Guardar y Continuar Aprendizaje
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Simulaciones Prácticas con IA</h1>
        
        {simulationState === 'selection' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {simulations.map((sim) => (
              <SimulationCard key={sim.id} simulation={sim} />
            ))}
          </div>
        )}
        
        {simulationState === 'intro' && selectedSimulation && (
          <IntroView simulation={selectedSimulation} />
        )}
        
        {simulationState === 'active' && selectedSimulation && (
          <SimulationInterface simulation={selectedSimulation} />
        )}
        
        {simulationState === 'feedback' && (
          <FeedbackView />
        )}
      </div>
    </div>
  );
};

export default AISimulations;