import React, { useState } from 'react';

const LoginForm: React.FC = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [isFocused, setIsFocused] = useState({ username: false, password: false });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-300 to-purple-200 opacity-40 blur-3xl"></div>
      </div>

      <div className="relative w-96 h-[450px] bg-white rounded-xl overflow-hidden shadow-2xl">
        {/* Animated Borders */}
        <div className="absolute inset-0 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-96 before:h-[450px] before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-purple-400 before:origin-bottom-right before:animate-rotate-slow before:z-10 after:absolute after:content-[''] after:top-[-50%] after:left-[-50%] after:w-96 after:h-[450px] after:bg-gradient-to-b after:from-transparent after:via-transparent after:to-purple-500 after:origin-bottom-right after:animate-rotate-slow after:animation-delay-3000 after:z-10">
          <div className="absolute inset-0">
            <div className="absolute inset-0 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-96 before:h-[450px] before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-purple-600 before:origin-bottom-right before:animate-rotate-slow before:animation-delay-1500 before:z-10"></div>
          </div>
        </div>

        {/* Form */}
        <form className="absolute inset-1 bg-white rounded-xl z-20 p-8 flex flex-col">
          <h2 className="text-purple-800 text-2xl font-medium text-center tracking-wide">
            {isNewUser ? 'Create Account' : 'Welcome Back'}
          </h2>

          {/* Username Input */}
          <div className="relative w-full mt-8">
            <input
              id="username"
              type="text"
              required
              className={`w-full bg-transparent border-b-2 border-purple-300 outline-none text-purple-900 text-base p-2 transition-all duration-300 ${
                isFocused.username ? 'border-purple-600' : ''
              }`}
              onFocus={() => setIsFocused(prev => ({ ...prev, username: true }))}
              onBlur={() => setIsFocused(prev => ({ ...prev, username: false }))}
            />
            <label 
              htmlFor="username" 
              className={`absolute left-0 text-purple-600 transition-all duration-300 ${
                isFocused.username ? 'text-xs -top-4' : 'text-base top-2'
              }`}
            >
              Username
            </label>
          </div>

          {/* Password Input */}
          <div className="relative w-full mt-8">
            <input
              id="password"
              type="password"
              required
              className={`w-full bg-transparent border-b-2 border-purple-300 outline-none text-purple-900 text-base p-2 transition-all duration-300 ${
                isFocused.password ? 'border-purple-600' : ''
              }`}
              onFocus={() => setIsFocused(prev => ({ ...prev, password: true }))}
              onBlur={() => setIsFocused(prev => ({ ...prev, password: false }))}
            />
            <label 
              htmlFor="password" 
              className={`absolute left-0 text-purple-600 transition-all duration-300 ${
                isFocused.password ? 'text-xs -top-4' : 'text-base top-2'
              }`}
            >
              Password
            </label>
          </div>

          {/* Important Links */}
          <div className="flex justify-between text-sm text-purple-600 mt-6">
            <a href="#" className="hover:text-purple-800 transition-colors">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white mt-6 py-3 rounded-lg cursor-pointer font-semibold text-base hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {isNewUser ? 'Sign Up' : 'Login'}
          </button>

          {/* Toggle Account State */}
          <p className="text-center mt-4 text-sm text-purple-600">
            {isNewUser ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsNewUser(!isNewUser)}
              className="text-purple-800 font-semibold hover:text-purple-900 transition-colors"
            >
              {isNewUser ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
