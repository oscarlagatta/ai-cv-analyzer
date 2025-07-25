import {twMerge} from 'tailwind-merge';

interface ATSProps {
    score: number;
    suggestions: {
        type: "good" | "improve";
        tip: string;
    }[];
}

const ATS: React.FC<ATSProps> = ({score, suggestions}) => {
    const getGradientClass = () => {
        if (score > 69) return 'from-green-100';
        if (score > 49) return 'from-yellow-100';
        return 'from-red-100';
    };

    const getIcon = () => {
        if (score > 69) return '/icons/ats-good.svg';
        if (score > 49) return '/icons/ats-warning.svg';
        return '/icons/ats-bad.svg';
    };

    return (
        <div className={twMerge('bg-gradient-to-b', getGradientClass(), 'to-white p-6 rounded-lg')}>
            <div className="flex items-center gap-4 mb-6">
                <img src={getIcon()} alt="ATS Score Icon" className="w-12 h-12"/>
                <h2 className="text-xl font-bold">ATS Score - {score}/100</h2>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Resume Analysis</h3>
                <p className="text-gray-600">
                    This score indicates how well your resume matches the job requirements and ATS compatibility.
                </p>
            </div>

            <ul className="space-y-4 mb-6">
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <img
                            src={suggestion.type === 'good' ? '/icons/check.svg' : '/icons/warning.svg'}
                            alt={suggestion.type === 'good' ? 'Success' : 'Warning'}
                            className="w-5 h-5 mt-0.5"
                        />
                        <span>{suggestion.tip}</span>
                    </li>
                ))}
            </ul>

            <p className="text-gray-600 italic">
                Keep improving your resume to increase your chances of getting noticed by employers.
            </p>
        </div>
    );
};

export default ATS;

