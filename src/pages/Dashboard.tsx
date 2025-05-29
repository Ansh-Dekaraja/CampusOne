import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, DollarSign, MessageSquare } from 'lucide-react';
import Card from '../components/ui/Card';
import SummaryCard from '../components/dashboard/SummaryCard';
import RecentNotices from '../components/dashboard/RecentNotices';
import { useAuth } from '../context/AuthContext';
import { leaves, gatePasses, payments, complaints, notices } from '../data/mockData';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Filter data based on user ID
  const userLeaves = leaves.filter(leave => leave.userId === user?.id);
  const userGatePasses = gatePasses.filter(pass => pass.userId === user?.id);
  const userPayments = payments.filter(payment => payment.userId === user?.id);
  const userComplaints = complaints.filter(complaint => complaint.userId === user?.id);
  
  // Filter notices based on user role and read status
  const userNotices = notices.filter(notice => 
    notice.targetRoles.includes(user?.role || 'student') && notice.isRead
  ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  // Get counts for summary cards
  const getPendingCount = (items: any[], statusKey = 'status') => {
    return items.filter(item => item[statusKey] === 'pending').length;
  };

  // Render dashboard content based on user role
  const renderDashboardContent = () => {
    if (user?.role === 'admin') {
      return renderAdminDashboard();
    } else if (user?.role === 'mess-staff') {
      return renderMessDashboard();
    } else {
      return renderStudentDashboard();
    }
  };

  // Student dashboard
  const renderStudentDashboard = () => {
    return (
      <>
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Leave Requests"
            value={getPendingCount(userLeaves)}
            description="Pending approvals"
            icon={<FileText size={20} />}
            color="primary"
            to="/leave"
          />
          <SummaryCard
            title="Gate Passes"
            value={getPendingCount(userGatePasses)}
            description="Pending approvals"
            icon={<Clock size={20} />}
            color="secondary"
            to="/gatepass"
          />
          <SummaryCard
            title="Mess Payments and Fines"
            value={getPendingCount(userPayments)}
            description="Pending payments"
            icon={<DollarSign size={20} />}
            color="warning"
            to="/payments"
          />
          <SummaryCard
            title="Complaints"
            value={userComplaints.length}
            description="Total submitted"
            icon={<MessageSquare size={20} />}
            color="error"
            to="/complaints"
          />
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentNotices notices={userNotices.slice(0, 5)} />
          </div>
          <div>
            <Card title="Quick Actions">
              <div className="space-y-4">
                <Link
                  to="/leave/new"
                  className="block w-full py-2 px-4 rounded-md text-center bg-primary-50 text-primary-700 hover:bg-primary-100"
                >
                  Apply for Leave
                </Link>
                <Link
                  to="/gatepass/new"
                  className="block w-full py-2 px-4 rounded-md text-center bg-secondary-50 text-secondary-700 hover:bg-secondary-100"
                >
                  Request Gate Pass
                </Link>
                <Link
                  to="/complaints/new"
                  className="block w-full py-2 px-4 rounded-md text-center bg-gray-50 text-gray-700 hover:bg-gray-100"
                >
                  Submit Complaint
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </>
    );
  };

  // Admin dashboard
  const renderAdminDashboard = () => {
    const pendingLeaves = leaves.filter(leave => leave.status === 'pending').length;
    const pendingGatePasses = gatePasses.filter(pass => pass.status === 'pending').length;
    const openComplaints = complaints.filter(complaint => ['open', 'in-progress'].includes(complaint.status)).length;
    
    return (
      <>
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Leave Requests"
            value={pendingLeaves}
            description="Pending approvals"
            icon={<FileText size={20} />}
            color="primary"
            to="/admin/approvals"
          />
          <SummaryCard
            title="Gate Passes"
            value={pendingGatePasses}
            description="Pending approvals"
            icon={<Clock size={20} />}
            color="secondary"
            to="/admin/approvals"
          />
          <SummaryCard
            title="Complaints"
            value={openComplaints}
            description="Open complaints"
            icon={<MessageSquare size={20} />}
            color="error"
            to="/admin/complaints"
          />
          <SummaryCard
            title="Total Students"
            value="124"
            description="Registered students"
            icon={<FileText size={20} />}
            color="success"
            to="/admin/reports"
          />
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentNotices notices={notices.slice(0, 5)} />
          </div>
          <div>
            <Card title="Quick Actions">
              <div className="space-y-4">
                <Link
                  to="/admin/notices/new"
                  className="block w-full py-2 px-4 rounded-md text-center bg-primary-50 text-primary-700 hover:bg-primary-100"
                >
                  Create New Notice
                </Link>
                <Link
                  to="/admin/approvals"
                  className="block w-full py-2 px-4 rounded-md text-center bg-secondary-50 text-secondary-700 hover:bg-secondary-100"
                >
                  Review Pending Approvals
                </Link>
                <Link
                  to="/admin/reports"
                  className="block w-full py-2 px-4 rounded-md text-center bg-gray-50 text-gray-700 hover:bg-gray-100"
                >
                  Generate Reports
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </>
    );
  };

  // Mess staff dashboard
  const renderMessDashboard = () => {
    const pendingPayments = payments.filter(payment => payment.status === 'pending').length;
    const messComplaints = complaints.filter(complaint => 
      complaint.category === 'mess' && ['open', 'in-progress'].includes(complaint.status)
    ).length;
    
    return (
      <>
        <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-4">
          <SummaryCard
            title="Pending Payments"
            value={pendingPayments}
            description="Unpaid mess bills"
            icon={<DollarSign size={20} />}
            color="warning"
            to="/mess/payments"
          />
          <SummaryCard
            title="Mess Complaints"
            value={messComplaints}
            description="Open complaints"
            icon={<MessageSquare size={20} />}
            color="error"
            to="/mess/complaints"
          />
        </div>
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentNotices notices={userNotices.slice(0, 5)} />
          </div>
          <div>
            <Card title="Quick Actions">
              <div className="space-y-4">
                <Link
                  to="/mess/payments"
                  className="block w-full py-2 px-4 rounded-md text-center bg-primary-50 text-primary-700 hover:bg-primary-100"
                >
                  Update Payment Status
                </Link>
                <Link
                  to="/mess/complaints"
                  className="block w-full py-2 px-4 rounded-md text-center bg-secondary-50 text-secondary-700 hover:bg-secondary-100"
                >
                  Review Complaints
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Welcome to IIMJ CentralHub, {user?.name}</h2>
        <p className="text-gray-600 mt-1">
          Here's what's happening in your account today.
        </p>
      </div>
      
      {renderDashboardContent()}
    </div>
  );
};

export default Dashboard;