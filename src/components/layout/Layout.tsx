import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the page title based on the current location
  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path.startsWith('/dashboard')) return 'Dashboard';
    if (path.startsWith('/leave')) return 'Leave Requests';
    if (path.startsWith('/gatepass')) return 'Gate Pass';
    if (path.startsWith('/payments')) return 'Mess Payments';
    if (path.startsWith('/complaints')) return 'Complaints';
    if (path.startsWith('/notices')) return 'Notices';
    if (path.startsWith('/records')) return 'Personal Records';
    if (path.startsWith('/admin/approvals')) return 'Approvals Management';
    if (path.startsWith('/admin/complaints')) return 'Complaints Management';
    if (path.startsWith('/admin/notices')) return 'Notices Management';
    if (path.startsWith('/admin/reports')) return 'Reports';
    if (path.startsWith('/mess/payments')) return 'Mess Payments Management';
    if (path.startsWith('/mess/complaints')) return 'Mess Complaints';
    if (path.startsWith('/about')) return 'About';
    
    return 'Anam College MIS';
  };

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isLoading && !isAuthenticated && !location.pathname.startsWith('/login') && !location.pathname.startsWith('/register')) {
      navigate('/login');
    }
  }, [isAuthenticated, isLoading, navigate, location]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  // For auth pages, don't show the layout
  if (location.pathname.startsWith('/login') || location.pathname.startsWith('/register')) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={getPageTitle()} setIsMobileOpen={setIsMobileOpen} />
        
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;