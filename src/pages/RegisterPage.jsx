import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-transparent">
      <video
        src="video1.webm"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="w-full max-w-md p-8 space-y-6 text-white bg-black/80 shadow-lg rounded-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-cyan-400">Register</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-cyan-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              aria-label="Username"
              className="w-full px-3 py-2 mt-1 border rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-cyan-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              aria-label="Email"
              className="w-full px-3 py-2 mt-1 border rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-cyan-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              aria-label="Password"
              className="w-full px-3 py-2 mt-1 border rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-cyan-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              aria-label="Confirm Password"
              className="w-full px-3 py-2 mt-1 border rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
          >
            Register
          </button>
        </form>
        <div className="text-center">
          <span className="text-sm">Already have an account? </span>
          <Link to="/login" className="text-sm text-cyan-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
