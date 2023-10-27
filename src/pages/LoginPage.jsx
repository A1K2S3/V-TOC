import React  from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-end gap-3 mb-4">
        <div className='w-5'>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" ><path d="M 6 0 L 6 12 M 0 6 L 12 6 M 1.757 1.758 L 10.243 10.242 M 1.758 10.243 L 10.242 1.757" fill="transparent" strokeWidth="1.45" stroke="#111827" strokeMiterlimit="10"></path></svg>
        </div>
        <p className='text-accent-900 font-secondary text-xl'>V-TOC</p>
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
