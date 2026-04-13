import React from 'react';

const BusinessIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M3 21h18" />
    <path d="M5 21V7l8-4 8 4v14" />
    <path d="M17 21v-8.83a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3V21" />
  </svg>
);

export default BusinessIcon;
