import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Images/Logo-2.svg'

const SignUp = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center my-4">
        <img src={ logo } alt="Logo" className=""  />
      </div>
      <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Sign Up</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="Name" className="block mb-2 text-sm text-gray-600">Full Name</label>
          <input type="text" id="Name" name="Name" autoComplete='name' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" autoComplete='email' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
          <input type="password" id="password" name="password" autoComplete='new-password' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block mb-2 text-sm text-gray-600">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" autoComplete='new-password' className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <button type="submit" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">Sign Up</button>
      </form>
      <div className="text-center">
        <p className="text-sm text-gray-600">Do you already have an account? <Link to={'/LogIn'} className='text-cyan-600'>Log in</Link></p>
      </div>
      <p className="text-xs text-gray-600 text-center mt-8">&copy; 2023 V-TOC</p>
    </div>
  </div>
  );
}

export default SignUp;
