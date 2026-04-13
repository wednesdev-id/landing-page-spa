import React from 'react';

const OwnerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 15l-4.24 4.24a2 2 0 0 1-2.83 0l-1.41-1.41a2 2 0 0 1 0-2.83L7.76 10.76" />
    <path d="M16.24 6.76l1.41-1.41a2 2 0 0 1 2.83 0l1.41 1.41a2 2 0 0 1 0 2.83L19.24 12.76" />
    <path d="M12 15l3.24-3.24a2 2 0 0 0 0-2.83L12.76 5.76a2 2 0 0 0-2.83 0L6.76 8.93a2 2 0 0 0 0 2.83L10 15" />
  </svg>
);

export default OwnerIcon;
