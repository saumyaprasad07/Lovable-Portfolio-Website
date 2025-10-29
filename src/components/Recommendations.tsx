import React, { useState } from 'react';
import { Plus, Edit } from 'lucide-react';

const Recommendations = () => {
  const [activeTab, setActiveTab] = useState('received');

  const receivedRecommendations = [
    {
      id: 1,
      name: 'Shloka Daga',
      title: 'Data Engineer @Rysun Labs',
      credentials: '3x AWS | Python | ETL | ML Model Development | Snowflake | PowerBI | PySpark | RAG LLM | Dashboard Development | Tableau | Statix.ts | Alteryx | GenAI',
      date: 'October 22, 2025',
      relationship: 'Shloka worked with Saumya on the same team',
      image: 'SD',
      recommendation: `I had the privilege to work with Saumya for three consecutive semesters, which clearly shows that she is someone you can confidently collaborate with to achieve desired outcomes. One of her best qualities is her eagerness to learn and her willingness to dive deep into details, she is always ready to adapt and grow. She truly complemented my work on the project, excelling in documentation and assisting in the preparation of presentation decks. I firmly believe that her sincerity and dedication toward her work will undoubtedly lead her to great success in her career.`,
      isNew: true
    },
    {
      id: 2,
      name: 'Prithviraju Venkатaraman',
      title: 'Data Analyst @ WerQ AI',
      credentials: 'SQL | Python | Power BI | 2x AWS | 3x IBM & Alteryx Certified',
      date: 'October 21, 2025',
      relationship: 'Prithviraju worked with Saumya on the same team',
      image: 'PV',
      recommendation: `I had the opportunity to work with Saumya on a Database Management System project, where she showed strong skills in database design, query optimization, and maintaining data integrity.

We also collaborated on our AI Trip Planner in the final semester, where her creative design sense and structured approach helped make the project both intuitive and impactful.

Saumya is a reliable teammate with great problem-solving skills, attention to detail, and clear communication. I highly recommend her for roles that value teamwork, analytical thinking, and technical excellence.`,
      isNew: true
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-gray-900">Recommendations</h1>
        <div className="flex gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Edit className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab('received')}
          className={`pb-3 px-1 font-medium transition-colors relative ${
            activeTab === 'received'
              ? 'text-green-700'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Received
          {activeTab === 'received' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-700"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('given')}
          className={`pb-3 px-1 font-medium transition-colors relative ${
            activeTab === 'given'
              ? 'text-green-700'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Given
          {activeTab === 'given' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-700"></div>
          )}
        </button>
      </div>

      {/* Recommendations List */}
      <div className="space-y-6">
        {activeTab === 'received' ? (
          receivedRecommendations.map((rec) => (
            <div key={rec.id} className="pb-6 border-b border-gray-200 last:border-0">
              <div className="flex gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                    {rec.image}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Name and Badge */}
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900">{rec.name}</h3>
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-yellow-500 text-white text-xs font-bold rounded-sm">
                      in
                    </span>
                    <span className="text-gray-500 text-sm">• 1st</span>
                  </div>

                  {/* Title */}
                  <p className="text-sm text-gray-700 mb-1">{rec.title}</p>

                  {/* Credentials */}
                  <p className="text-sm text-gray-600 mb-2">{rec.credentials}</p>

                  {/* Date and Relationship */}
                  <p className="text-sm text-gray-600 mb-4">
                    {rec.date}, {rec.relationship}
                  </p>

                  {/* Recommendation Text */}
                  <div className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {rec.recommendation}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            No recommendations given yet
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommendations;