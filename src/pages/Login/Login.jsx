import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiWarningCircleBold } from 'react-icons/pi';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import AuthTitle from '../../components/AuthTitle';
import GoogleSignIn from '../Shared/SocialSignIn/GoogleSignIn';
import { inputClass, errorClass, authBtnClass } from '../../components/SharedClasses';
import LoadingBtn from '../../components/LoadingBtn';
import ShowHide from '../../components/ShowHide';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: registerResetPassword, handleSubmit: handleSubmitResetPassword, formState: { errors: resetPasswordErrors } } = useForm();
    const { signIn, resetPassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setLoading(true);
        signIn(data.email, data.password)
            .then(() => {
                setLoading(false);
                Swal.fire(
                    'Logged In',
                    'You have successfully logged in',
                    'success'
                )
                navigate("/");
            })
            .catch(error => {
                setLoading(false);
                if (error) {
                    Swal.fire(
                        'Error',
                        error.message,
                        'error'
                    )
                }
            });
    };

    const onResetPasswordSubmit = async (data) => {
        setLoading(true);
        resetPassword(data.resetEmail)
            .then(() => {
                setLoading(false);
                Swal.fire(
                    'Password Reset Email Sent',
                    'Check your email for password reset instructions',
                    'success'
                );
                setShowModal(false);
            })
            .catch(error => {
                setLoading(false);
                if (error) {
                    Swal.fire(
                        'Error',
                        error.message,
                        'error'
                    );
                }
            });
    };

    return (
        <div className="mb-12 mx-4">
            <AuthTitle title="Login" />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 px-8 py-12 w-full sm:w-3/4 md:w-2/3 lg:w-2/5 xl:w-1/3 mx-auto rounded border border-slate-300 shadow-lg m-4 bg-slate-50"

            >
                <div className="form-control mx-auto">
                    <input
                        type="email"
                        placeholder="Email address"
                        className={inputClass}
                        {...register("email", { required: true, maxLength: 60 })}
                    />
                    {errors.email && <p className={errorClass}><PiWarningCircleBold /><small>Enter your email</small></p>}
                </div>

                <div className="form-control mx-auto relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className={inputClass}
                        {...register("password", { required: true })}
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-xs font-semibold hover:cursor-pointer absolute right-3"
                    >
                        {showPassword ? <ShowHide title="Hide" /> : <ShowHide title="Show" />}
                    </span>
                    {errors.password?.type === "required" && <p className={errorClass}><PiWarningCircleBold /><small>Enter your password</small></p>}
                </div>

                <p onClick={() => setShowModal(true)} className="flex justify-end text-blue-500 hover:underline underline-offset-1 hover:cursor-pointer"><small>Forgot password?</small></p>

                <div className="form-control mx-auto">
                    <button
                        type="submit"
                        className={authBtnClass}
                    >
                        {loading ? <LoadingBtn /> : "Login"}
                    </button>
                    <GoogleSignIn />
                </div>

                <p className="text-center text-slate-400"><small>Don&apos;t have an account? <Link className='text-blue-400 hover:underline underline-offset-1' to="/register">Register</Link></small></p>
            </form>

            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-8">
                        <h2 className="text-lg font-bold text-slate-500">Reset Password</h2>
                        <p className="text-sm text-slate-400 mt-1 mb-4">Enter your email and we&apos;ll send you a password reset link</p>
                        <form onSubmit={handleSubmitResetPassword(onResetPasswordSubmit)}>
                            <div className="form-control">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className={inputClass}
                                    {...registerResetPassword("resetEmail", { required: true, maxLength: 60 })}
                                />
                                {resetPasswordErrors.resetEmail?.type === "required" && <p className={errorClass}><PiWarningCircleBold /><small>Enter your email</small></p>}
                                {resetPasswordErrors.resetEmail?.type === "maxLength" && <p className={errorClass}><PiWarningCircleBold /><small>Max email length exceeded</small></p>}
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="submit"
                                    className="text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 px-3 py-1 mr-2 rounded"
                                >
                                    Send
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="bg-slate-400 text-white rounded px-2 py-1"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;