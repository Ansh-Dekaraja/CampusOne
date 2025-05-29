import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description?: string;
  color: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  to?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  icon,
  description,
  color,
  to,
}) => {
  const colorClasses = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
  };

  const Card = () => (
    <div className="bg-white rounded-lg shadow-card overflow-hidden">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`flex-shrink-0 rounded-md p-3 ${colorClasses[color]} text-white`}>
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-semibold text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {(description || to) && (
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
          {description && <div className="text-sm text-gray-500">{description}</div>}
          {to && (
            <Link
              to={to}
              className="mt-1 flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              View details
              <ArrowRight size={16} className="ml-1" />
            </Link>
          )}
        </div>
      )}
    </div>
  );

  if (to) {
    return <Card />;
  }

  return <Card />;
};

export default SummaryCard;