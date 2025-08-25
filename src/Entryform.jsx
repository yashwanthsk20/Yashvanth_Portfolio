import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import './PortfolioGatekeeper.css'; // Import CSS

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_w4vb97g',
  TEMPLATE_ID: 'template_x314zjr',
  USER_ID: '0Yj2MKF10WJkLI58Y'
};

const PortfolioGatekeeper = ({ onVisitorEntry }) => {
  const [currentVisitor, setCurrentVisitor] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    visitorName: '',
    visitorType: '',
    purpose: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const existingVisitor = sessionStorage.getItem('portfolioVisitor');
      if (existingVisitor) {
        const visitor = JSON.parse(existingVisitor);
        setCurrentVisitor(visitor);
        if (onVisitorEntry) onVisitorEntry();
        navigate('/'); // Skip gatekeeper if already visited
      }
    } catch (error) {
      console.error('Error reading sessionStorage:', error);
      sessionStorage.removeItem('portfolioVisitor');
    }
  }, [navigate, onVisitorEntry]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmailNotification = async (visitorData) => {
    try {
      const templateParams = {
        to_email: 'yashwanthsk20@gmail.com',
        visitor_name: visitorData.name,
        visitor_type: visitorData.type,
        visitor_purpose: visitorData.purpose || 'Not specified',
        visit_timestamp: visitorData.timestamp,
        visitor_session: visitorData.sessionId,
        from_name: 'Portfolio Visitor Notification',
        subject: `New Portfolio Visitor: ${visitorData.name}`,
        message: `
New visitor details:
- Name: ${visitorData.name}
- Type: ${visitorData.type}
- Purpose: ${visitorData.purpose || 'Not specified'}
- Visit Time: ${visitorData.timestamp}
- Session ID: ${visitorData.sessionId}
        `
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.USER_ID
      );

      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!formData.visitorName.trim() || !formData.visitorType) {
      toast.error('Please fill in required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const visitor = {
        name: formData.visitorName.trim(),
        type: formData.visitorType,
        purpose: formData.purpose.trim(),
        timestamp: new Date().toLocaleString(),
        sessionId: Date.now().toString()
      };

      setCurrentVisitor(visitor);
      sessionStorage.setItem('portfolioVisitor', JSON.stringify(visitor));

      const emailSent = await sendEmailNotification(visitor);

      if (emailSent) {
        toast.success('Welcome! Notification sent successfully.');
      } else {
        toast.success('Welcome to my portfolio!');
        toast.error('Email notification failed to send.');
      }

      if (onVisitorEntry) onVisitorEntry();

      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="gatekeeper-container">
      <Toaster 
        position="top-right" 
        toastOptions={{
          duration: 4000,
          style: { background: '#363636', color: '#fff' },
        }}
      />

      {/* Tech-style animated background */}
      <div className="tech-background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>

      <div className="gatekeeper-card">
        <div className="gatekeeper-header">
          <h1>Welcome to My Portfolio!</h1>
          <p>Please introduce yourself before exploring</p>
        </div>

        <div className="gatekeeper-form">
          <div>
            <label>Your Name *</label>
            <input
              type="text"
              name="visitorName"
              value={formData.visitorName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label>Who are you? *</label>
            <select
              name="visitorType"
              value={formData.visitorType}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            >
              <option value="">Select your role</option>
              <option value="potential-employer">Potential Employer</option>
              <option value="recruiter">Recruiter</option>
              <option value="client">Potential Client</option>
              <option value="colleague">Colleague/Professional</option>
              <option value="student">Student/Learner</option>
              <option value="friend">Friend/Personal</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label>Purpose of visit (optional)</label>
            <input
              type="text"
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              disabled={isSubmitting}
              placeholder="Brief reason for your visit"
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Entering Portfolio...' : 'Enter Portfolio'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGatekeeper;
