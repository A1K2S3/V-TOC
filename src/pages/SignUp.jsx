import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

// const SignUp = () => {

//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()

//   return (
//     <div className="bg-white dark:bg-gray-900">
//       <div className="flex justify-center h-screen">
//         <div className="hidden bg-cover md:block md:w-3/5 bg-[url('https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
//           <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
//             <div>
//               <h2 className="text-4xl font-bold text-white">Brand</h2>

//               <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
//             </div>
//           </div>
//         </div>

//         <div className="flex items-center w-full max-w-md px-6 mx-auto md:w-2/5">
//           <div className="flex-1">
//             <div className="text-center">
//               <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

//               <p className="mt-3 text-gray-500 dark:text-gray-300">Sign Up to create an account</p>
//             </div>

//             <div className="mt-8">
//               <form>
//                 <div>
//                   <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
//                   <input type="email" ref={emailRef} required placeholder="example@example.com" id='email' autoComplete='off' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                 </div>

//                 <div className="mt-6">
//                   <div className="flex justify-between mb-2">
//                     <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
//                   </div>

//                   <input type="password" ref={passwordRef} required placeholder="Your Password" id='password' autoComplete='off' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                 </div>

//                 <div className="mt-6">
//                   <div className="flex justify-between mb-2">
//                     <label htmlFor="passwordConfirm" className="text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
//                   </div>

//                   <input type="password" ref={passwordConfirmRef} required id='passwordConfirm' placeholder="Confirm Password" autoComplete='off' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
//                 </div>

//                 <div className="mt-6">
//                   <button type='submit'
//                     className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
//                     Sign Up
//                   </button>
//                 </div>

//               </form>

//               <p className="mt-6 text-sm text-center text-gray-400">Already have an account? Log in.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp
function SignUp() {
  // const [state, setState] = useState({
  //   name: "",
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

  //   const { name, email, password } = state;
  //   alert(
  //     `You are sign up with name: ${name} email: ${email} and password: ${password}`
  //   );

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
      <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Sign Up</h1>
      <form>
        <div class="mb-4">
          <label htmlFor="Name" class="block mb-2 text-sm text-gray-600">Full Name</label>
          <input type="text" id="Name" name="Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div class="mb-4">
          <label htmlFor="email" class="block mb-2 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div class="mb-4">
          <label htmlFor="password" class="block mb-2 text-sm text-gray-600">Password</label>
          <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <div class="mb-6">
          <label htmlFor="confirmPassword" class="block mb-2 text-sm text-gray-600">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
        </div>
        <button type="submit" class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2">Sign Up</button>
      </form>
      <div class="text-center">
        <p class="text-sm text-gray-600">Do you already have an account? <Link to={'/LogIn'} className='text-cyan-600'>Log in</Link></p>
      </div>
      <p class="text-xs text-gray-600 text-center mt-8">&copy; 2023 WCS LAT</p>
    </div>
  </div>
  );
}

export default SignUp;
