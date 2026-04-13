import React from 'react';

const AutomationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export default AutomationIcon;
