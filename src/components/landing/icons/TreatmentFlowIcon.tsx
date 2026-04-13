import React from 'react';

const TreatmentFlowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default TreatmentFlowIcon;
