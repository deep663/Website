

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-cyan-500 rounded-lg hover:bg-cyan-600"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <a href="#" className="text-sm text-cyan-500 hover:underline">Forgot Password?</a>
        </div>
        <div className="text-center">
          <span className="text-sm">Don&apos;t have an account? </span>
          <a href="/register" className="text-sm text-cyan-500 hover:underline">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
