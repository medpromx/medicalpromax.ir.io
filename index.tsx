import React from 'react';
import { createRoot } from 'react-dom/client';
import SubsectionList from './src/components/SubsectionList.tsx';
import type { Section } from './src/types';

const demoSection: Section = {
  id: 'heart',
  title: 'قلب',
  subsections: [
    { id: 'ihd', title: 'ایسکمیک (IHD/CAD)', path: 'data/heart/ihd.json' },
    { id: 'valvular', title: 'دریچه‌ای', path: 'data/heart/valvular.json' }
  ]
};

function App() {
  function handleSelect(sub: any) {
    alert(`زیرمجموعه انتخاب شد: ${sub.title}`);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <SubsectionList section={demoSection} onSelect={handleSelect} onBack={() => { window.location.reload(); }} />
      </div>
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<React.StrictMode><App /></React.StrictMode>);
}

export {};
