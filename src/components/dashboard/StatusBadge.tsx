import React from 'react';
import Badge from '../ui/Badge';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  let variant: 'success' | 'warning' | 'error' | 'primary' | 'secondary' | 'default' = 'default';
  
  // Map status to variant
  switch (status.toLowerCase()) {
    case 'approved':
    case 'resolved':
    case 'paid':
      variant = 'success';
      break;
    case 'pending':
    case 'in-progress':
    case 'open':
      variant = 'warning';
      break;
    case 'rejected':
    case 'closed':
      variant = 'error';
      break;
    default:
      variant = 'default';
  }
  
  // Format status text
  const formatStatus = (status: string) => {
    return status
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return <Badge variant={variant} size={size}>{formatStatus(status)}</Badge>;
};

export default StatusBadge;