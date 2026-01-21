import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const ForgetPassword = () => {

  const {resetPassword}=useContext(AuthContext);
  const [error,setError]=useState('');
   const [loading, setLoading] = useState(false);

   const handleReset = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value;

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent. Check your inbox.");
        e.target.reset();
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

    };

  return (
     <div className="flex  items-center justify-center bg-base-100 px-4">
      <div className="card bg-base-200 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">
            Reset Password
          </h2>

          <form onSubmit={handleReset}>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              required
            />

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <button
              type="submit"
              className="btn btn-secondary w-full mt-4"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <p className="text-center mt-4">
            Remember your password?{" "}
            <Link to="/auth/login" className="text-secondary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;