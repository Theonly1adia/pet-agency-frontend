import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignup = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/users/signup', data);
      console.log('Signup successful:', response.data);

      setSuccessMessage('Thanks for signing up! Redirecting to login...');
      setErrorMessage('');

      setTimeout(() => {
        navigate('/login');
      }, 3000); // 3 second delay before navigating
    } catch (error) {
      console.error('Signup error', error);
      setSuccessMessage('');
      setErrorMessage('Signup failed. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup(formData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('signup.jpg')`,
      }}
    >
      <div className="bg-white bg-opacity-50 p-10 rounded-xl shadow-2xl max-w-3xl w-full mx-4 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Join the Furr-Ever Friend Finder Family!</h2>
        <p className="text-center text-gray-700 mb-8">
          Sign up to explore adorable pets, connect with other pet lovers, and start your journey to finding your perfect furry friend.
        </p>

        {successMessage && (
          <p className="text-green-600 text-center font-semibold mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 text-center font-semibold mb-4">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {['fullName', 'username', 'email', 'phone', 'address', 'password'].map((field, idx) => (
            <div key={idx} className={field === 'address' || field === 'password' ? 'md:col-span-2' : ''}>
              <label className="block text-gray-700 font-medium mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                name={field}
                required
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
          ))}

          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition"
            >
              Create My Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
