import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, FileText, Clock, DollarSign, MessageSquare, User, LogOut } from 'lucide-react';
import NavItem from './NavItem';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobileOpen, setIsMobileOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderNavItems = () => {
    // Common navigation items for all users
    const commonItems = [
      { to: '/dashboard', icon: <Home size={20} />, label: 'Dashboard' },
    ];

    // Role-specific navigation items
    const roleSpecificItems = {
      student: [
        { to: '/leave', icon: <FileText size={20} />, label: 'Leave Requests' },
        { to: '/gatepass', icon: <Clock size={20} />, label: 'Gate Pass' },
        { to: '/payments', icon: <DollarSign size={20} />, label: 'Mess Payments and Fines' },
        { to: '/complaints', icon: <MessageSquare size={20} />, label: 'Complaints' },
        { to: '/records', icon: <User size={20} />, label: 'Personal Records' },
      ],
      admin: [
        { to: '/admin/approvals', icon: <FileText size={20} />, label: 'Approvals' },
        { to: '/admin/complaints', icon: <MessageSquare size={20} />, label: 'Complaints' },
        { to: '/admin/reports', icon: <DollarSign size={20} />, label: 'Reports' },
      ],
      'mess-staff': [
        { to: '/mess/payments', icon: <DollarSign size={20} />, label: 'Manage Payments' },
        { to: '/mess/complaints', icon: <MessageSquare size={20} />, label: 'View Complaints' },
      ],
    };

    // Get role-specific items based on user role
    const userRoleItems = user?.role ? roleSpecificItems[user.role] : [];

    // Combine common and role-specific items
    return [...commonItems, ...userRoleItems];
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Sidebar container */}
      <div
        className={`fixed top-0 left-0 bottom-0 z-30 w-64 bg-white border-r border-gray-200 transition-transform transform ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-0`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary-600">IIMJ CentralHub</span>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sidebar content */}
        <div className="flex flex-col h-full py-4 overflow-y-auto">
          <div className="flex-grow px-3 space-y-1">
            {renderNavItems().map((item) => (
              <NavItem
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                onClick={() => setIsMobileOpen(false)}
              />
            ))}
          </div>

          {/* User info and logout */}
          <div className="px-3 mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center px-4 py-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                  {user?.name?.charAt(0) || 'U'}
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
            <button
              className="flex items-center w-full px-4 py-3 mt-1 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
              onClick={handleLogout}
            >
              <LogOut size={20} className="mr-3 text-gray-500" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;