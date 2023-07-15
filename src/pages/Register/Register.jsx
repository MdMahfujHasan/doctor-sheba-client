import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiWarningCircleBold } from 'react-icons/pi';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        setIsLoading(true);
        // await new Promise((resolve) => setTimeout(resolve, 2000));

        // TODO:
        // setIsLoading(false);
        // history.push('/success');
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-screen-md mx-auto space-y-4 bg-cyan-700 p-20">

            <div className="form-control w-1/2 mx-auto">
                <input
                    type="text"
                    placeholder="Full name"
                    className="input focus:outline-0  placeholder-cyan-300 bg-cyan-50 text-cyan-400"
                    {...register("name", { required: true, maxLength: 120 })}
                />
                {errors.name && <p className="flex items-center space-x-1 text-pink-400 font-semibold"><PiWarningCircleBold /><small>Name is required</small></p>}
            </div>

            <div className="form-control w-1/2 mx-auto">
                <input
                    type="email"
                    placeholder="Email address"
                    className="input focus:outline-0  placeholder-cyan-300 bg-cyan-50 text-cyan-400"
                    {...register("email", { required: true, maxLength: 60 })}
                />
                {errors.email && <p className="flex items-center space-x-1 text-pink-400 font-semibold"><PiWarningCircleBold /><small>Email is required</small></p>}
            </div>

            <div className="form-control w-1/2 mx-auto">
                <input
                    type="password"
                    placeholder="Password"
                    className="input focus:outline-0  placeholder-cyan-300 bg-cyan-50 text-cyan-400"
                    {...register("password", {
                        required: true,
                        minLength: 8,
                        maxLength: 60,
                        pattern: /(?=.*[!@#$%^&*])(?=.*[0-9])/
                    })}
                />
                {errors.password?.type === "required" && <p className="flex items-center space-x-1 text-pink-400 font-semibold"><PiWarningCircleBold /><small>Password is required</small></p>}
                {errors.password?.type === "minLength" && <p className="flex items-center space-x-1 text-pink-400 font-semibold"><PiWarningCircleBold /><small>Password must be minimum 6 characters</small></p>}
                {errors.password?.type === "maxLength" && <p className="flex items-center space-x-1 text-pink-400 font-semibold"><PiWarningCircleBold /><small>Password can not exceed 60 characters</small></p>}
                {errors.password?.type === "pattern" && <p className="flex items-center space-x-1 text-pink-400 font-semibold"><PiWarningCircleBold /><small>Password must include at least 1 special character and number</small></p>}
            </div>

            <div className="form-control w-1/2 mx-auto">
                <input
                    type="submit"
                    className="text-white bg-pink-400 px-4 py-2 hover:cursor-pointer rounded-full font-extrabold"
                    value={isLoading ? <span className="loading loading-spinner text-secondary"></span> : "Register"}
                />
            </div>
        </form>
    );
};

export default Register;