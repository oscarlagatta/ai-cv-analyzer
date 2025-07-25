import React from 'react';

interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({score}) => {
    const getBadgeStyles = () => {
        if (score > 70) {
            return "bg-green-100 text-green-600";
        } else if (score > 49) {
            return "bg-yellow-100 text-yellow-600";
        }
        return "bg-red-100 text-red-600";
    };

    const getBadgeText = () => {
        if (score > 70) {
            return "Strong";
        } else if (score > 49) {
            return "Good Start";
        }
        return "Needs Rework";
    };

    return (
        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getBadgeStyles()}`}>
            <p>{getBadgeText()}</p>
        </div>
    );
};

export default ScoreBadge;