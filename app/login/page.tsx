'use client';

import { login, signup } from '../actions/login-actions';

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefcea] to-[#e0f7fa] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome Back</h1>
        <p className="text-sm text-gray-600 mb-6">Please login to your account</p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm mb-1">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm mb-1">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            <button
              formAction={login}
              className="w-full py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow transition"
            >
              Log in
            </button>
            <button
              formAction={signup}
              className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg shadow transition"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="text-sm text-center text-gray-600 mt-6">
          Need help? <a href="#" className="text-teal-500 hover:underline">Contact Support</a>
        </div>
      </div>
    </div>
  );
}
