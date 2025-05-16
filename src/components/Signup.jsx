import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-800'>
      <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8'>
        <h2 className='text-4xl text-white font-bold text-center mb-4'>Sign Up</h2>

        <div className='flex flex-col text-gray-400 py-2'>
          <label>Username</label>
          <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' id='username' type="text" placeholder="Enter username" />
        </div>

        <div className='flex flex-col text-gray-400 py-2'>
          <label>Email</label>
          <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' id='email' type="email" placeholder="Enter email" />
        </div>

        <div className='flex flex-col text-gray-400 py-2'>
          <label>Password</label>
          <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' id='password' type="password" placeholder="Create password" />
        </div>

        <div className='flex flex-col text-gray-400 py-2'>
          <label>Confirm Password</label>
          <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'  type="password" placeholder="Confirm password" />
        </div>

        <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign Up</button>

        <p className="text-gray-400 text-sm text-center">
          Already have an account?{" "}
          <Link to="/" className="text-teal-400 hover:text-teal-300 underline font-medium">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}