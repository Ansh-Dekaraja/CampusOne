import React from 'react';
import Card from '../../components/ui/Card';

const About: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">About Campus One</h2>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Institution</h3>
          
          <div className="mb-4">
            <img 
              src="https://iimjammu.ac.in/uploads/slides/slideshow_1713498992.png" 
              alt="IIM Jammu Campus" 
              className="w-full h-64 object-cover rounded-md mb-4"
            />
          </div>
          
          <p className="text-gray-600 mb-4">
            Campus One, located in the beautiful city of Jammu, is committed to providing quality education and comprehensive 
            management of student services. Our Management Information System (MIS) is designed to streamline administrative 
            processes and enhance the student experience.
          </p>
          
          <p className="text-gray-600">
            Established in 2015, our institution has been a pioneer in adopting technology to improve academic and administrative 
            operations. The MIS system represents our commitment to digital transformation and efficient management of resources.
          </p>
        </Card>
        
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">About the MIS System</h3>
          
          <p className="text-gray-600 mb-4">
            The Campus One Management Information System (MIS) is a comprehensive platform designed to automate and streamline 
            academic and administrative processes. Our system offers the following features:
          </p>
          
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Leave Request Management</li>
            <li>Gate Pass System</li>
            <li>Mess Payment Tracking</li>
            <li>Complaint Registration and Resolution</li>
            <li>Notice Board</li>
            <li>Personal Records Management</li>
          </ul>
          
          <p className="text-gray-600 mb-4">
            The system is designed with different access levels for students, administrators, and mess staff, ensuring that users 
            have access to the functions relevant to their roles.
          </p>
          
          <p className="text-gray-600">
            Our goal is to provide a user-friendly platform that enhances communication, reduces paperwork, and improves the 
            overall efficiency of college operations.
          </p>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Team</h3>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-900">Project Lead</h4>
              <p className="text-gray-600">Dr. Ananya Sharma</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-900">Lead Developer</h4>
              <p className="text-gray-600">Rajiv Kumar</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-900">UI/UX Designer</h4>
              <p className="text-gray-600">Priya Malhotra</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-900">Backend Developer</h4>
              <p className="text-gray-600">Arjun Singh</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-900">Database Administrator</h4>
              <p className="text-gray-600">Meera Patel</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-900">QA Engineer</h4>
              <p className="text-gray-600">Sanjay Verma</p>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="mt-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600">
                IIM Jammu<br />
                Old University Campus<br />
                Canal Road, Jammu<br />
                Jammu & Kashmir - 180016
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Contact Details</h4>
              <p className="text-gray-600">
                Email: info@iimj.ac.in<br />
                Phone: +91-191-2456789<br />
                Website: www.iimj.ac.in
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;