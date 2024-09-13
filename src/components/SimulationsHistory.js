import React from 'react';
import { BarChart2, Calendar, Award, TrendingUp, Clock, Star, Book } from 'lucide-react';

const SimulationHistory = () => {
  // Datos de ejemplo para el historial de simulaciones
  const simulationHistory = [
    { id: 1, type: 'Ventas', date: '2023-09-15', score: 75 },
    { id: 2, type: 'Atención al Cliente', date: '2023-09-20', score: 82 },
    { id: 3, type: 'Ventas', date: '2023-09-25', score: 79 },
    { id: 4, type: 'Liderazgo', date: '2023-09-30', score: 88 },
    { id: 5, type: 'Ventas', date: '2023-10-05', score: 85 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Historial de Simulaciones</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="mr-2 text-yellow-500" size={20} />
              Mejor Puntuación
            </h2>
            <p className="text-3xl font-bold text-blue-600">88%</p>
            <p className="text-sm text-gray-600">Liderazgo - 30 Sep 2023</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <TrendingUp className="mr-2 text-green-500" size={20} />
              Progreso General
            </h2>
            <p className="text-3xl font-bold text-green-600">+13%</p>
            <p className="text-sm text-gray-600">Últimos 30 días</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-2 flex items-center">
              <Clock className="mr-2 text-purple-500" size={20} />
              Tiempo Total de Práctica
            </h2>
            <p className="text-3xl font-bold text-purple-600">4h 15m</p>
            <p className="text-sm text-gray-600">Este mes</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart2 className="mr-2 text-blue-500" size={24} />
            Progreso de Habilidades
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Ventas</span>
                <span className="text-sm font-medium text-blue-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Atención al Cliente</span>
                <span className="text-sm font-medium text-green-600">82%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{width: '82%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Liderazgo</span>
                <span className="text-sm font-medium text-purple-600">88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{width: '88%'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="mr-2 text-indigo-500" size={24} />
            Historial de Simulaciones
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">Fecha</th>
                  <th scope="col" className="px-6 py-3">Tipo</th>
                  <th scope="col" className="px-6 py-3">Puntuación</th>
                  <th scope="col" className="px-6 py-3">Acción</th>
                </tr>
              </thead>
              <tbody>
                {simulationHistory.map((sim) => (
                  <tr key={sim.id} className="bg-white border-b">
                    <td className="px-6 py-4">{sim.date}</td>
                    <td className="px-6 py-4">{sim.type}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <Star className="text-yellow-400 mr-1" size={16} />
                        <span className="font-medium">{sim.score}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-600 hover:underline flex items-center">
                        <Book className="mr-1" size={16} />
                        Ver Detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulationHistory;