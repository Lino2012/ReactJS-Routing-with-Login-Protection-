import React from 'react';

const QuickActions = () => {
  const actions = [
    { label: 'Add Your Recipe', href: '#add-recipe' },
    { label: 'View Favorites', href: '#favorites' },
    { label: 'Shopping List', href: '#shopping-list' }
  ];

  return (
    <div className="quick-actions">
      {actions.map((action, index) => (
        <a key={index} href={action.href} className="quick-action-link">
          {action.label}
        </a>
      ))}
    </div>
  );
};

export default QuickActions;