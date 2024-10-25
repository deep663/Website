import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen relative flex items-center justify-center bg-transparent">
      <video
        src="video1.webm"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
      />
      <div className="w-full max-w-md p-8 space-y-6 text-white bg-black/80 shadow-lg rounded-lg backdrop-blur-md">
        <h2 className="text-2xl font-bold text-center text-cyan-400">Login</h2>
        <form className="space-y-4">
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
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <a href="#" className="text-sm text-cyan-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <div className="text-center">
          <span className="text-sm">Don&apos;t have an account? </span>
          <Link to="/register" className="text-sm text-cyan-500 hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
