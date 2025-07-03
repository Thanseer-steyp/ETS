"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Authentication() {
  const [isLogin, setIsLogin] = useState(false);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[430px] h-max bg-[#0B1C2D] text-white p-6 rounded-xl shadow-lg">
        <div className="flex mb-6 bg-[#142435] rounded-lg p-1">
          
          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 py-2 text-lg font-semibold rounded-lg transition-all duration-300 ${
              isLogin
                ? "bg-[#fab641] text-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 py-2 text-lg font-semibold rounded-lg transition-all duration-300 ${
              !isLogin
                ? "bg-[#fab641] text-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Signup
          </button>
        </div>

        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.form
              key="login"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 rounded bg-[#142435] text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded bg-[#142435] text-white placeholder-gray-400 focus:outline-none"
              />
              <p className="text-sm text-white">
                Don’t have an account?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-[#fab641] hover:underline"
                >
                  Sign up
                </button>
              </p>
              <button
                type="submit"
                className="w-full py-2 bg-[#fab641] text-black font-semibold rounded"
              >
                Log in
              </button>
            </motion.form>
          ) : (
            <motion.form
              key="signup"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded bg-[#142435] text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Gmail"
                className="w-full px-4 py-2 rounded bg-[#142435] text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 rounded bg-[#142435] text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded bg-[#142435] text-white placeholder-gray-400 focus:outline-none"
              />
              <p className="text-sm text-white">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-[#fab641] hover:underline"
                >
                  Log in
                </button>
              </p>
              <button
                type="submit"
                className="w-full py-2 bg-[#fab641] text-black font-semibold rounded"
              >
                Create Account
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Authentication;
