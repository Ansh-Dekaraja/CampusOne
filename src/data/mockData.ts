import { User, Leave, GatePass, Payment, Complaint, Notice, Record } from '../types';

// Mock users
export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'student@anam.ac.in',
    role: 'student',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Admin User',
    email: 'admin@anam.ac.in',
    role: 'admin',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Mess Manager',
    email: 'mess@anam.ac.in',
    role: 'mess-staff',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

// Mock leaves
export const leaves: Leave[] = [
  {
    id: '1',
    userId: '1',
    startDate: '2023-05-10',
    endDate: '2023-05-15',
    reason: 'Family function',
    status: 'approved',
    createdAt: '2023-05-01T10:30:00Z',
    updatedAt: '2023-05-02T14:20:00Z',
  },
  {
    id: '2',
    userId: '1',
    startDate: '2023-06-20',
    endDate: '2023-06-25',
    reason: 'Medical emergency',
    status: 'pending',
    createdAt: '2023-06-15T08:45:00Z',
    updatedAt: '2023-06-15T08:45:00Z',
  },
];

// Mock gate passes
export const gatePasses: GatePass[] = [
  {
    id: '1',
    userId: '1',
    date: '2023-05-12',
    timeOut: '10:00',
    timeIn: '18:00',
    reason: 'Shopping for essentials',
    status: 'approved',
    createdAt: '2023-05-11T14:30:00Z',
  },
  {
    id: '2',
    userId: '1',
    date: '2023-06-05',
    timeOut: '14:00',
    timeIn: '20:00',
    reason: 'Medical appointment',
    status: 'pending',
    createdAt: '2023-06-04T09:15:00Z',
  },
];

// Mock payments
export const payments: Payment[] = [
  {
    id: '1',
    userId: '1',
    amount: 5000,
    description: 'Mess fee for May 2023',
    status: 'paid',
    dueDate: '2023-05-10',
    paidDate: '2023-05-08',
  },
  {
    id: '2',
    userId: '1',
    amount: 5000,
    description: 'Mess fee for June 2023',
    status: 'pending',
    dueDate: '2023-06-10',
  },
];

// Mock complaints
export const complaints: Complaint[] = [
  {
    id: '1',
    userId: '1',
    category: 'hostel',
    title: 'Water leakage in room 203',
    description: 'There is water leaking from the ceiling in room 203. Please fix it as soon as possible.',
    status: 'in-progress',
    assignedTo: '2',
    createdAt: '2023-05-05T11:30:00Z',
    updatedAt: '2023-05-06T09:15:00Z',
  },
  {
    id: '2',
    userId: '1',
    category: 'mess',
    title: 'Poor food quality',
    description: 'The food quality has deteriorated in the last week. Please look into it.',
    status: 'open',
    createdAt: '2023-06-02T18:45:00Z',
    updatedAt: '2023-06-02T18:45:00Z',
  },
];

// Mock notices
export const notices: Notice[] = [
  {
    id: '1',
    title: 'Mid-semester examination schedule',
    content: 'The mid-semester examinations will be held from 15th June to 25th June 2023. The detailed schedule has been posted on the notice board.',
    createdBy: '2',
    targetRoles: ['student', 'admin', 'mess-staff'],
    important: true,
    createdAt: '2023-05-20T10:00:00Z',
  },
  {
    id: '2',
    title: 'Hostel maintenance work',
    content: 'The hostel maintenance work will be carried out from 10th June to 12th June 2023. Please cooperate with the maintenance staff.',
    createdBy: '2',
    targetRoles: ['student'],
    important: false,
    createdAt: '2023-06-01T14:30:00Z',
  },
  {
    id: '3',
    title: 'Mess menu changes',
    content: 'The mess menu has been revised for the month of June. The new menu is available on the mess notice board.',
    createdBy: '3',
    targetRoles: ['student', 'mess-staff'],
    important: false,
    createdAt: '2023-06-02T11:15:00Z',
  },
];

// Mock records
export const records: Record[] = [
  {
    id: '1',
    userId: '1',
    title: 'Semester 1 Results',
    category: 'academic',
    content: 'CGPA: 8.5',
    createdAt: '2023-01-15T09:30:00Z',
  },
  {
    id: '2',
    userId: '1',
    title: 'Cricket Tournament Winner',
    category: 'achievement',
    content: 'Won the inter-college cricket tournament held in March 2023.',
    createdAt: '2023-03-25T16:45:00Z',
  },
];