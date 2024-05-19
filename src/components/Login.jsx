import React from 'react'
import login from '../assets/login.png'

function Login() {
  return (
    <div> <div className='lg:px-24'>
    <div className='flex lg:items-center lg:justify-center'>
        <div className='hidden lg:block'>
            <img src={login} className='w-[25rem] py-7 opacity-90'/>
        </div>
    <section className="">
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
    <div className="w-full bg-white rounded-lg  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
               Welcome Back
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label for="email" className="block mb-2 text-md font-medium text-gray-900 ">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                </div>
                <div>
                    <label for="password" className="block mb-2 text-md font-medium text-gray-900 ">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                </div>
              
               
                   
            
                <button type="submit" className="w-full text-white bg-[#1376F8] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Didn't have account? <a href="#" className="font-medium text-primary-600 hover:underline ">Create Account</a>
                </p>
            </form>
        </div>
    </div>
</div>
</section></div></div></div>
  )
}

export default Login