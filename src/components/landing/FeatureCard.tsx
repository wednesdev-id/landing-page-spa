import React from 'react';

interface FeatureCardProps {
    title: string;
    description: string;
    visualContent: React.ReactNode;
    className?: string;
    visualClassName?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    description,
    visualContent,
    className = '',
    visualClassName = ''
}) => {
    return (
        <div className={`showcase-card ${className}`}>
            <div className={`card-visual ${visualClassName}`}>
                {visualContent}
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
