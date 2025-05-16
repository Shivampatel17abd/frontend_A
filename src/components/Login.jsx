import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../assets/Login.jpg';

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='relative hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="Login" />
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right text-white">
          <h2 className='text-6xl font-bold'>Welcome</h2>
          <p className='text-lg mt-2'>Log in to continue...</p>
        </div>
      </div>

      <div className='bg-gray-800 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
          <h2 className='text-4xl text-white font-bold text-center mb-4'>Login</h2>

          <div className='flex flex-col text-gray-400 py-2'>
            <label>Email</label>
            <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email" placeholder="Enter your email" />
          </div>

          <div className='flex flex-col text-gray-400 py-2'>
            <label>Password</label>
            <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" placeholder="Enter your password" />
          </div>

          <div className='flex justify-between text-gray-400 py-2'>
            <label className='flex items-center'>
              <input className='mr-2' type="checkbox" /> Remember Me
            </label>
            <button type="button" className="text-teal-400 hover:text-teal-300 font-medium underline">
              Forgot Password?
            </button>
          </div>

          <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Login</button>

          <p className="text-gray-400 text-sm text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-teal-400 hover:text-teal-300 underline font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}