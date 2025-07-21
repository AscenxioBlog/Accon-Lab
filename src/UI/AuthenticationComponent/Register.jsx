import React, { useState } from 'react';
import API_URL from '../../Config';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Debugging - log the full request details
        console.log('Making request to:', `${API_URL}/auth`);
        console.log('Request payload:', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: '******' // Don't log actual password
        });
  
        const response = await fetch(`${API_URL}/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json' // Explicitly ask for JSON
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
          }),
        });
  
        // Check if response is successful (2xx status)
        if (!response.ok) {
          // Try to get error message from response
          const errorData = await response.text();
          console.error('Server response:', errorData);
          
          // Handle common error cases
          if (response.status === 404) {
            throw new Error('Registration endpoint not found (404)');
          } else if (response.status === 500) {
            throw new Error('Server error occurred. Please try again later.');
          } else {
            throw new Error(errorData || `Registration failed with status ${response.status}`);
          }
        }
  
        // Try to parse JSON only if response is OK
        const data = await response.json();
        
        // Registration successful
        alert('Registration successful!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        
      } catch (error) {
        console.error('Registration error:', error);
        
        // Special handling for HTML responses
        if (error.message.includes('<!DOCTYPE html>')) {
          setApiError('Server error occurred. Please try again later.');
        } 
        // Handle network errors
        else if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
          setApiError('Network error. Please check your connection.');
        }
        else {
          setApiError(error.message || 'Registration failed. Please try again.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full min-h-screen flex justify-center items-center"
      >
        <div className="bg-[#fff5] p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Sign Up
          </h2>
          
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm text-gray-600 font-semibold"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              className={`w-full px-4 py-2 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm text-gray-600 font-semibold"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              value={formData.lastName}
              className={`w-full px-4 py-2 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-gray-600 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              className={`w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-600 font-semibold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              className={`w-full px-4 py-2 border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {apiError && (
            <div className="mb-4 p-2 text-red-500 text-center bg-red-50 rounded">
              {apiError.startsWith('<!DOCTYPE html>') 
                ? 'Server error occurred. Please try again later.' 
                : apiError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 bg-blue-500 mb-3 mt-4 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Processing...' : 'Sign Up'}
          </button>
          
          <div className="flex justify-center items-center">
            <span className="text-[0.7rem] text-black">
              Already have an account? 
              <a href="#" className="text-blue-600 underline">sign-in here</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;