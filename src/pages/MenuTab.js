import React from 'react';

const menuTabs = [
  { key: 'products', label: 'Products' },
  { key: 'coe', label: 'COE' },
  { key: 'projects', label: 'Projects' },
  { key: 'training', label: 'AI-Driven Talent Selection Platform' },

];

function MenuTabs({ activeTab, onTabChange }) {
  return (
    <div className="tab-menu">
      {menuTabs.map(({ key, label }) => (
        <button
          key={key}
          className={`tab ${activeTab === key ? 'active' : ''}`}
          onClick={() => onTabChange(key)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default MenuTabs;
