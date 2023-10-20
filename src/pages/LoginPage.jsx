import React  from "react";
import { Link } from "react-router-dom";
import logo from '../assets/Images/Logo-2.svg'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center my-4">
          <img src={ logo } alt="Logo" className="w-30 h-20" />
        </div>
        <h1 className="font-secondary text-2xl text-center text-gray-500 mt-8 mb-6">Log In</h1>
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" autoComplete="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
            <input type="password" id="password" name="password" autoComplete="current-Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
            <div className="block text-right text-xs text-cyan-600 mt-2">Did you forget your password?</div>
          </div>
          <button type="submit" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Log In</button>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">You do not have an account? <Link to={'/SignUp'} className="text-cyan-600">Register now</Link></p>
        </div>
        <p className="text-xs text-gray-600 text-center mt-10">&copy; 2023 V-TOC</p>
      </div>
    </div>
  );
}

export default LoginPage;
