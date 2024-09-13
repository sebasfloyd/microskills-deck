import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check, BarChart2, Book, Brain, Target, Clock, User, Zap } from 'lucide-react';

const AdvancedPDATest = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const sections = [
    { title: "Estilo de Aprendizaje", icon: Book },
    { title: "Motivaciones", icon: Target },
    { title: "Habilidades y Competencias", icon: Brain },
    { title: "Preferencias de Tiempo", icon: Clock },
  ];

  const questions = [
    // Estilo de Aprendizaje
    [
      {
        question: "¿Cómo prefieres absorber nueva información?",
        options: ["Visualmente", "Auditivamente", "Leyendo/Escribiendo", "Kinestésicamente"]
      },
      {
        question: "Al enfrentarte a un nuevo desafío, ¿qué enfoque prefieres?",
        options: ["Analizar detalladamente", "Buscar una solución rápida", "Consultar con otros", "Experimentar diferentes enfoques"]
      },
      {
        question: "¿Qué tipo de actividades de aprendizaje disfrutas más?",
        options: ["Debates y discusiones", "Ejercicios prácticos", "Lecturas y análisis", "Proyectos creativos"]
      }
    ],
    // Motivaciones
    [
      {
        question: "¿Qué te impulsa más a aprender algo nuevo?",
        options: ["Curiosidad personal", "Avance profesional", "Resolver problemas actuales", "Preparación para el futuro"]
      },
      {
        question: "¿Qué tipo de reconocimiento valoras más?",
        options: ["Certificaciones formales", "Feedback positivo de pares", "Aplicación exitosa del conocimiento", "Crecimiento personal"]
      },
      {
        question: "¿Qué factor te mantiene más comprometido con tu aprendizaje?",
        options: ["Desafíos constantes", "Progreso visible", "Relevancia para tus metas", "Interacción social"]
      }
    ],
    // Habilidades y Competencias
    [
      {
        question: "¿En qué área sientes que necesitas más desarrollo?",
        options: ["Habilidades técnicas", "Habilidades blandas", "Liderazgo", "Creatividad e innovación"]
      },
      {
        question: "¿Qué habilidad crees que es más crucial para tu éxito futuro?",
        options: ["Adaptabilidad", "Pensamiento crítico", "Comunicación efectiva", "Dominio tecnológico"]
      },
      {
        question: "¿Cómo prefieres demostrar tu competencia en una habilidad?",
        options: ["Proyectos prácticos", "Evaluaciones escritas", "Presentaciones orales", "Resolución de problemas en tiempo real"]
      }
    ],
    // Preferencias de Tiempo
    [
      {
        question: "¿Cuál es tu momento preferido del día para aprender?",
        options: ["Temprano en la mañana", "A media mañana", "Por la tarde", "En la noche"]
      },
      {
        question: "¿Qué duración de sesión de aprendizaje prefieres?",
        options: ["Sesiones cortas (5-10 minutos)", "Sesiones medias (15-30 minutos)", "Sesiones largas (1 hora o más)", "Variado, dependiendo del tema"]
      },
      {
        question: "¿Con qué frecuencia prefieres recibir nuevo contenido de aprendizaje?",
        options: ["Diariamente", "Algunas veces por semana", "Semanalmente", "Quincenalmente o mensualmente"]
      }
    ]
  ];

  const handleAnswer = (index) => {
    setAnswers({ 
      ...answers, 
      [`${currentSection}-${currentQuestion}`]: index 
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions[currentSection].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(questions[currentSection - 1].length - 1);
    }
  };

  const totalQuestions = questions.flat().length;
  const answeredQuestions = Object.keys(answers).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const ResultsView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Tu Perfil de Aprendizaje Personalizado</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Book className="mr-2 text-blue-500" />
            Estilo de Aprendizaje Preferido
          </h3>
          <p className="text-gray-700">Visual-Kinestésico</p>
          <p className="text-sm text-gray-600 mt-2">
            Aprendes mejor con contenido visual y actividades prácticas. Te recomendamos videos interactivos y proyectos hands-on.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Target className="mr-2 text-green-500" />
            Principal Motivación
          </h3>
          <p className="text-gray-700">Crecimiento Profesional</p>
          <p className="text-sm text-gray-600 mt-2">
            Te motiva el avance en tu carrera. Enfocaremos tu aprendizaje en habilidades relevantes para tu industria.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Brain className="mr-2 text-purple-500" />
            Áreas de Desarrollo Prioritarias
          </h3>
          <p className="text-gray-700">Liderazgo y Comunicación Efectiva</p>
          <p className="text-sm text-gray-600 mt-2">
            Hemos identificado estas áreas como cruciales para tu crecimiento. Te sugeriremos contenido enfocado en estas habilidades.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <Clock className="mr-2 text-red-500" />
            Patrón de Aprendizaje Óptimo
          </h3>
          <p className="text-gray-700">Sesiones Cortas por la Mañana</p>
          <p className="text-sm text-gray-600 mt-2">
            Rindes mejor con sesiones de 15-30 minutos temprano en el día. Ajustaremos tu plan de aprendizaje a este patrón.
          </p>
        </div>
      </div>
      <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-3 flex items-center">
          <Zap className="mr-2 text-yellow-500" />
          Próximos Pasos
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Hemos personalizado tu dashboard con contenido visual y práctico.</li>
          <li>Te sugeriremos cursos de liderazgo y comunicación adaptados a tu industria.</li>
          <li>Configuramos recordatorios para sesiones de aprendizaje matutinas.</li>
          <li>Te conectaremos con mentores que se alinean con tus metas profesionales.</li>
        </ul>
      </div>
      <button 
        onClick={() => {/* Navegar al dashboard personalizado */}}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Ir a Mi Dashboard Personalizado
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        {!showResults ? (
          <>
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-blue-600 mb-2">Descubre Tu Perfil de Aprendizaje</h1>
              <p className="text-gray-600">Este test nos ayudará a personalizar tu experiencia en MicroSkill.</p>
            </div>
            
            <div className="flex mb-6">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className={`flex-1 text-center ${
                    index === currentSection ? 'text-blue-600' : 'text-gray-400'
                  }`}
                >
                  <section.icon className="mx-auto mb-2" size={24} />
                  <span className="text-sm font-medium">{section.title}</span>
                </div>
              ))}
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Pregunta {answeredQuestions + 1} de {totalQuestions}</span>
                <span>{Math.round(progress)}% completado</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-4">{questions[currentSection][currentQuestion].question}</h2>
            <div className="space-y-3">
              {questions[currentSection][currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    answers[`${currentSection}-${currentQuestion}`] === index 
                      ? 'bg-blue-100 text-blue-800 border-2 border-blue-500' 
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                  onClick={() => handleAnswer(index)}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                      answers[`${currentSection}-${currentQuestion}`] === index 
                        ? 'bg-blue-500 text-white' 
                        : 'border-2 border-gray-300'
                    }`}>
                      {answers[`${currentSection}-${currentQuestion}`] === index && <Check size={16} />}
                    </div>
                    {option}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={prevQuestion}
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                disabled={currentSection === 0 && currentQuestion === 0}
              >
                <ChevronLeft size={20} className="mr-1" />
                Anterior
              </button>
              <button
                onClick={nextQuestion}
                className={`flex items-center px-6 py-2 rounded-lg transition-colors ${
                  answers[`${currentSection}-${currentQuestion}`] !== undefined
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                disabled={answers[`${currentSection}-${currentQuestion}`] === undefined}
              >
                {currentSection === sections.length - 1 && currentQuestion === questions[currentSection].length - 1 ? 'Finalizar' : 'Siguiente'}
                <ChevronRight size={20} className="ml-1" />
              </button>
            </div>
          </>
        ) : (
          <ResultsView />
        )}
      </div>
    </div>
  );
};

export default AdvancedPDATest;