import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router'; 
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const from = location.state || "/"; 

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                toast.success("Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(() => {
                setError("Invalid email or password");
                toast.error("Login Failed");
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success("Google Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => toast.error("Google Login Failed"))
            console.error(error);
    }


    return (
        <div className="hero min-h-screen bg-base-200">
              <title>Login | Food Delivery App</title>
            <meta name="Login" content={`Login and buy amazing foods.`} />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="px-8 pb-8">
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">Continue with Google</button>
                        <p className="text-center mt-4">
                            New here? <Link className="text-blue-600 font-bold" to="/authentication">Register</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;