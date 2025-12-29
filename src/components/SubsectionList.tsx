import React from 'react';
import { Section, Subsection } from '../types';

interface SubsectionListProps {
  section: Section;
  onSelect: (subsection: Subsection) => void;
  onBack: () => void;
}

const SubsectionList: React.FC<SubsectionListProps> = ({ section, onSelect, onBack }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">زیرمجموعه‌های {section.title}</h2>
        <button 
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          بازگشت به خانه‌
        </button>
      </div>
      <div className="space-y-3">
        {section.subsections.map((sub) => (
          <button
            key={sub.id}
            onClick={() => onSelect(sub)}
            className="w-full text-right p-4 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors flex items-center justify-between"
          >
            <span className="text-gray-700 font-medium">{sub.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubsectionList;
