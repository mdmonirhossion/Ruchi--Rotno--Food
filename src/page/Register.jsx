import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router'; 
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserProfile, setUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError(""); 

        createUser(email, password)
            .then(() => {
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser((prev) => ({ ...prev, displayName: name, photoURL: photo }));
                        toast.success("Registration Successful!");
                        navigate('/'); 
                    })
                    .catch((err) => toast.error("Profile update failed: " + err.message));
            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                toast.error("Registration Failed");
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                toast.success("Google Registration Successful!");
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                toast.error("Google Registration Failed");
            })
    }

    return (
        <div className="hero min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 font-sans">
            <title>Register | Food Delivery App</title>
            <meta name="description" content="Register and buy amazing foods from our exclusive collection." />
            
            <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 w-full max-w-7xl px-4">
                
                {/* Text Side - Consistent with Login styling */}
                <div className="text-center lg:text-left lg:w-1/2 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight">
                        Join Us Today!
                    </h1>
                    <p className="py-6 text-slate-600 text-lg md:text-xl leading-relaxed">
                        Create an account to start ordering delicious meals, track your deliveries in real-time, and unlock exclusive member-only discounts.
                    </p>
                </div>

                {/* Card Side */}
                <div className="card shrink-0 w-full max-w-sm md:max-w-md shadow-2xl bg-white border border-slate-100 transition-all duration-300 hover:shadow-slate-300/50">
                    <form onSubmit={handleRegister} className="card-body pb-4">
                        
                        {/* Mobile Header */}
                        <div className="lg:hidden text-center mb-4">
                            <h2 className="text-2xl font-bold text-slate-700">Create Account</h2>
                        </div>

                        <div className="form-control space-y-1">
                            <label className="label">
                                <span className="label-text font-medium text-slate-600">Full Name</span>
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your full name" 
                                className="input input-bordered w-full bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
                                required 
                            />
                        </div>

                        <div className="form-control space-y-1 mt-2">
                            <label className="label">
                                <span className="label-text font-medium text-slate-600">Photo URL</span>
                            </label>
                            <input 
                                type="text" 
                                name="photo" 
                                placeholder="https://example.com/photo.jpg" 
                                className="input input-bordered w-full bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
                                required 
                            />
                        </div>

                        <div className="form-control space-y-1 mt-2">
                            <label className="label">
                                <span className="label-text font-medium text-slate-600">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="name@example.com" 
                                className="input input-bordered w-full bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
                                required 
                            />
                        </div>

                        <div className="form-control space-y-1 mt-2">
                            <label className="label">
                                <span className="label-text font-medium text-slate-600">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Create a strong password" 
                                className="input input-bordered w-full bg-slate-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
                                required 
                            />
                        </div>
                        
                        {error && (
                            <div className="alert alert-error text-sm py-2 mt-4 rounded-lg shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{error}</span>
                            </div>
                        )}

                        <div className="form-control mt-8">
                            <button className="btn btn-primary text-white text-lg font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-200">
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="px-8 pb-8 pt-0">
                        <div className="divider text-slate-400 text-sm font-medium my-6">OR JOIN WITH</div>
                        
                        <button 
                            onClick={handleGoogleSignIn} 
                            className="btn btn-outline w-full gap-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>
                        
                        <div className="mt-6 text-center text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
                            Already have an account? 
                            <Link 
                                className="ml-1 text-primary font-bold hover:underline hover:text-primary-focus transition-colors" 
                                to="/authentication/login"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;