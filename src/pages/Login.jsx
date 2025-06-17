import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => { 
    e.preventDefault();
    const credentials = btoa(`${email}:${password}`);
    try {

      console.log("Hello");
      const res = await axios.post(
        "http://localhost:3000/auth/login",
        {},
        {
          headers: {
            Authorization: `Basic ${credentials}`,
          },
        }
      );

      console.log("res.data from backend:", res.data)

      const token = res.data.token;
      console.log("Token received from backend", token);
      localStorage.setItem("token", token);
      setToken(token);
      navigate('/'); 

    } catch (err) {
      setError("Invalid email or password.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-40 min-h-screen w-full flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-500 mt-1">Login to your account</p>
          </div>

         <form onSubmit={handleLogin}>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
              />
            </div>

            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-indigo-600 hover:underline font-medium">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>

          {error && (
            <p className="text-red-600 mt-2 text-center font-medium">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
