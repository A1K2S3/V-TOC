import React,{ useState }  from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  // const [state, setState] = useState({
  //   email: "",
  //   password: ""
  // });
  // const handleChange = evt => {
  //   const value = evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value
  //   });
  // };

  // const handleOnSubmit = evt => {
  //   evt.preventDefault();

  //   const { email, password } = state;
  //   alert(`You are login with email: ${email} and password: ${password}`);

  //   for (const key in state) {
  //     setState({
  //       ...state,
  //       [key]: ""
  //     });
  //   }
  // };

  return (
    <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <div class="flex justify-center mb-8">
        <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" class="w-30 h-20" />
      </div>
      <h1 class="font-secondary text-2xl text-center text-gray-500 mt-8 mb-6">Log In</h1>
      <form>
        <div class="mb-6">
          <label htmlFor="email" class="block mb-2 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div class="mb-6">
          <label htmlFor="password" class="block mb-2 text-sm text-gray-600">Password</label>
          <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
          <div class="block text-right text-xs text-cyan-600 mt-2">Did you forget your password?</div>
        </div>
        <button type="submit" class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Log In</button>
      </form>
      <div class="text-center">
        <p class="text-sm text-gray-600">You do not have an account? <Link to={'/SignUp'} className="text-cyan-600">Register now</Link></p>
      </div>
      <p class="text-xs text-gray-600 text-center mt-10">&copy; 2023 WCS LAT</p>
    </div>
  </div>
  );
}

export default LoginPage;
