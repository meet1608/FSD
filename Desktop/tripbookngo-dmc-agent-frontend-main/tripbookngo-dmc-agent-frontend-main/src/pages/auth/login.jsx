import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const staticUser = {
    email: "user@gmail.com",
    password: "123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === staticUser.email && password === staticUser.password) {
      alert("Login successful!");
      localStorage.setItem("user", JSON.stringify(staticUser)); // Save user data
      navigate("/dashboard");
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="flex max-w-5xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left Section with Image */}
        <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-gray-200">
          <img
            src="/flight.jpg"
            alt="Illustration"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Section with Login Form */}
        <div className="w-full lg:w-1/2 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">Log in to your account</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-800"
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full mt-2 border-b-2 border-gray-300 focus:outline-none focus:border-gray-800"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-gray-600">Remember for 30 days</label>
              </div>
              <Link to="/forgot-password" className="text-blue-500 text-sm">
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full py-3 bg-gray-800 text-white rounded-lg">
              Log In
            </Button>

            <Button className="w-full py-3 bg-white text-gray-800 border border-gray-300 rounded-lg flex items-center justify-center space-x-2">
              <img src="/path-to-google-icon.png" alt="Google" className="w-5 h-5" />
              <span>Log in with Google</span>
            </Button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
