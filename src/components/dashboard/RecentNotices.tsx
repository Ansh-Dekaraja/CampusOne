import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell } from 'lucide-react';
import Card from '../ui/Card';
import { Notice } from '../../types';

interface RecentNoticesProps {
  notices: Notice[];
}

const RecentNotices: React.FC<RecentNoticesProps> = ({ notices }) => {
  return (
    <Card
      title="Recent Notices"
      footer={
        <Link
          to="/notices"
          className="flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
        >
          View all notices
          <ArrowRight size={16} className="ml-1" />
        </Link>
      }
    >
      {notices.length === 0 ? (
        <div className="py-6 text-center text-gray-500">
          <Bell className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No notices</h3>
          <p className="mt-1 text-sm text-gray-500">
            There are no recent notices available.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-gray-200">
          {notices.map((notice) => (
            <div key={notice.id} className="py-3 first:pt-0 last:pb-0">
              <Link to={`/notices/${notice.id}`} className="block">
                <div className="flex items-start">
                  {notice.important && (
                    <span className="flex-shrink-0 inline-block mt-0.5 mr-2 h-2 w-2 rounded-full bg-primary-500"></span>
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{notice.title}</h4>
                    <p className="mt-1 text-xs text-gray-500">
                      {new Date(notice.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default RecentNotices;