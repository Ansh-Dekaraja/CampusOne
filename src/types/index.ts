export type UserRole = 'student' | 'admin' | 'mess-staff';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface Leave {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface GatePass {
  id: string;
  userId: string;
  date: string;
  timeOut: string;
  timeIn: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  description: string;
  status: 'pending' | 'paid';
  dueDate: string;
  paidDate?: string;
}

export interface Complaint {
  id: string;
  userId: string;
  category: 'hostel' | 'mess' | 'infrastructure' | 'other';
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  createdBy: string;
  targetRoles: UserRole[];
  important: boolean;
  createdAt: string;
}

export interface Record {
  id: string;
  userId: string;
  title: string;
  category: 'academic' | 'disciplinary' | 'achievement' | 'document';
  content: string;
  fileUrl?: string;
  createdAt: string;
}