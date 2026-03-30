import { useState } from 'react';
import api from '../services/api';

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await api.post('/consultations', formData);
      console.log('✅ Consultation submitted successfully:', response.data);
      
      const consultationId = response.data.data?.consultationId || 'PENDING';
      
      setSuccess(true);
      
      // WhatsApp redirect after short delay
      setTimeout(() => {
        const whatsappMessage = `Hi, I would like to book an Online Consultation from New10Lab.

My Details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Health Concern:
${formData.message}

Consultation ID: ${consultationId}

Please contact me to schedule a consultation.`;
        
        window.open(`https://wa.me/919360264347?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      }, 1500);
      
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (error) {
      console.error('❌ Consultation submission error:', error);
      
      if (error.response) {
        // Server responded with error
        console.error('Server error response:', error.response.data);
        console.error('Status code:', error.response.status);
        alert(`Failed to submit: ${error.response.data?.message || 'Server error'}`);
      } else if (error.request) {
        // Request made but no response
        console.error('No response from server:', error.request);
        alert('Cannot connect to server. Please check your connection.');
      } else {
        // Error in request setup
        console.error('Request error:', error.message);
        alert(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Online Consultation</h1>
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Consultation request submitted! Redirecting to WhatsApp...
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            required
            className="w-full p-3 border rounded dark:bg-gray-700"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            required
            className="w-full p-3 border rounded dark:bg-gray-700"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Phone</label>
          <input
            type="tel"
            required
            className="w-full p-3 border rounded dark:bg-gray-700"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Health Concern</label>
          <textarea
            required
            rows="4"
            className="w-full p-3 border rounded dark:bg-gray-700"
            placeholder="Describe your health concern..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Submitting...' : 'Submit Consultation'}
        </button>
      </form>
    </div>
  );
}
