import React from 'react';
import { Briefcase, Award, BarChart2, Clock, User } from 'lucide-react';

const MicrolearningDashboard = () => {
  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <header className="bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">MicroSkill</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Iniciar aprendizaje</button>
          <User className="text-gray-600" />
        </div>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Clock className="mr-2" /> Hoy
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Marketing Digital: Email Campaigns (5 min)
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
              Data Analysis: Pivot Tables (10 min)
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Award className="mr-2" /> Progreso
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Marketing Digital</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">Data Analysis</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-2" /> Habilidades Recomendadas
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Project Management</span>
              <button className="text-blue-500">Iniciar</button>
            </li>
            <li className="flex items-center justify-between">
              <span>Public Speaking</span>
              <button className="text-blue-500">Iniciar</button>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart2 className="mr-2" /> Tu actividad
        </h2>
        <div className="h-64 flex items-end justify-between">
          <div className="w-8 bg-blue-400" style={{height: '40%'}}></div>
          <div className="w-8 bg-blue-500" style={{height: '60%'}}></div>
          <div className="w-8 bg-blue-600" style={{height: '80%'}}></div>
          <div className="w-8 bg-blue-700" style={{height: '50%'}}></div>
          <div className="w-8 bg-blue-800" style={{height: '70%'}}></div>
          <div className="w-8 bg-blue-900" style={{height: '90%'}}></div>
          <div className="w-8 bg-blue-500" style={{height: '30%'}}></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Lun</span>
          <span>Mar</span>
          <span>Mié</span>
          <span>Jue</span>
          <span>Vie</span>
          <span>Sáb</span>
          <span>Dom</span>
        </div>
      </div>
    </div>
  );
};

export default MicrolearningDashboard;