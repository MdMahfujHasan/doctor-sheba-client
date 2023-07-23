import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { PiWarningCircleBold } from 'react-icons/pi';
import bg from '../../assets/signup-bg.svg';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { startOfDay } from 'date-fns';

const Register = () => {
    const inputClass = "input border border-slate-300 focus:outline-none focus:border-t-2 focus:border-t-cyan-400 focus:border-b-2 focus:border-b-pink-400 focus:border-e-2 focus:border-e-pink-400 focus:border-s-2 focus:border-s-cyan-400 placeholder-slate-300 text-cyan-900";
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const validatePhotoUrl = (value) => {
        if (!value.startsWith("https://")) {
            return "Photo URL must start with 'https://'";
        }
        return true;
    };

    const formatHeight = (feet, inches) => {
        return `${feet}'${inches}`;
    };

    const onSubmit = async (data) => {
        setLoading(true);
        const formattedHeight = formatHeight(data.feet, data.inches);
        const dateOfBirth = data.date;
        const date = new Date(dateOfBirth);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedDateOfBirth = `${day}/${month}/${year}`;
        console.log(data);

        createUser(data.email, data.password)
            .then(() => {
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, mobile: data.countryCode + data.mobile, birth: formattedDateOfBirth, height: formattedHeight, weight: parseFloat(data.weight), photo: data.photo }
                        console.log(saveUser);
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    setLoading(false);
                                    Swal.fire(
                                        'Success',
                                        'Your account has been created',
                                        'success'
                                    )
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => {
                        setLoading(false);
                        if (error) {
                            Swal.fire(
                                'Error',
                                error.message,
                                'error',
                            )
                        }
                    })
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
            })
    };
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat' }}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 p-12 w-full sm:w-4/5 md:w-2/3 lg:w-2/5 rounded"
            >
                <div className="form-control mx-auto">
                    <input
                        type="text"
                        placeholder="Full name"
                        className={inputClass}
                        {...register("name", { required: true, maxLength: 120 })}
                    />
                    {errors.name && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Name is required</small></p>}
                </div>

                <div className="form-control mx-auto">
                    <input
                        type="email"
                        placeholder="Email address"
                        className={inputClass}
                        {...register("email", { required: true, maxLength: 60 })}
                    />
                    {errors.email && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Email is required</small></p>}
                </div>

                <div className="form-control mx-auto">
                    <input
                        type="password"
                        placeholder="Password"
                        className={inputClass}
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 60,
                            pattern: /(?=.*[!@#$%^&*])(?=.*[0-9])/
                        })}
                    />
                    {errors.password?.type === "required" && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Password is required</small></p>}
                    {errors.password?.type === "minLength" && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Password must be minimum 6 characters</small></p>}
                    {errors.password?.type === "maxLength" && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Password can not exceed 60 characters</small></p>}
                    {errors.password?.type === "pattern" && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Password must include at least 1 special character and number</small></p>}
                </div>

                <div className="form-control mx-auto">
                    <Controller
                        control={control}
                        name="date"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <DatePicker
                                id="date"
                                selected={selectedDate}
                                onChange={date => {
                                    setSelectedDate(date);
                                    field.onChange(date);
                                }}
                                maxDate={startOfDay(new Date())}
                                dateFormat="dd/MM/yyyy"
                                className="w-full px-3 py-2 rounded placeholder-slate-300 focus:outline-none border border-slate-300"
                                placeholderText="Date of birth, e.g. 17/11/1997"
                            />
                        )}
                    />
                    {errors.date && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Date of birth is required</small></p>}
                </div>

                <div className="form-control mx-auto">
                    <select
                        id="countryCode"
                        {...register('countryCode', { required: true })}
                        className="focus:outline-0 rounded-lg p-3 w-full border border-slate-300"
                    >
                        <option selected value="+880">+880 Bangladesh</option>
                        <option value="+91">+91 India</option>
                        <option value="+92">+92 Pakistan</option>
                        <option value="+93">+93 Afghanistan</option>
                        <option value="+62">+62 Indonesia</option>
                        <option value="+60">+60 Malaysia</option>
                        <option value="+1">+1 United States</option>
                        <option value="+1">+1 Canada</option>
                        <option value="+61">+61 Australia</option>
                        <option value="+86">+86 China</option>
                    </select>
                </div>
                <div className="form-control mx-auto">
                    <input
                        type="number"
                        id="mobile"
                        placeholder="Your mobile number"
                        {...register('mobile', { required: true, minLength: 7, maxLength: 15 })}
                        className={inputClass}
                    />
                    {errors.mobile?.type === 'required' && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Mobile number is required</small></p>}
                    {errors.mobile?.type === 'minLength' && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Mobile number should be at least 7 digits</small></p>}
                    {errors.mobile?.type === 'maxLength' && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Mobile number should be at most 15 digits</small></p>}
                </div>

                <div className="form-control mx-auto">
                    <select
                        id="gender"
                        {...register('gender', { required: true })}
                        className="focus:outline-0 rounded-lg p-3 w-full border border-slate-300"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    {errors.gender && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Gender is required</small></p>}
                </div>

                <div className="form-control mx-auto">
                    <input
                        type="text"
                        placeholder="Photo URL"
                        className={inputClass}
                        {...register("photo", {
                            required: "Photo URL is required",
                            maxLength: { value: 120, message: "Photo URL cannot exceed 120 characters" },
                            validate: validatePhotoUrl,
                        })}
                    />
                    {errors.photo && (
                        <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold">
                            <PiWarningCircleBold />
                            <small>{errors.photo.message}</small>
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-1">
                    <div className="form-control mx-auto">
                        <input
                            type="number"
                            placeholder="Height (Feet)"
                            {...register('feet', {
                                required: 'Feet value is required',
                                min: { value: 1, message: 'Feet value must be at least 1' },
                                max: { value: 9, message: 'Feet value must be at most 9' },
                            })}
                            className={inputClass}
                        />
                        {errors.feet && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>{errors.feet.message}</small></p>}
                    </div>
                    <div className="form-control mx-auto">
                        <input
                            type="number"
                            step="0.5"
                            placeholder="Height (Inches)"
                            {...register('inches', {
                                required: 'Inches value is required',
                                min: { value: 0, message: 'Inches value must be at least 0' },
                                max: { value: 11.5, message: 'Inches value must be at most 11.5' },
                            })}
                            className={inputClass}
                        />
                        {errors.inches && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>{errors.inches.message}</small></p>}
                    </div>
                </div>

                <div className="form-control mx-auto">
                    <input
                        type="number"
                        placeholder="Weight (kg)"
                        {...register('weight', {
                            required: 'Weight value is required',
                            min: { value: 1, message: 'Weight value must be at least 1 kg' },
                            max: { value: 650, message: 'Weight value must be at most 650 kg' },
                        })}
                        className={inputClass}
                    />
                    {errors.weight && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>{errors.weight.message}</small></p>}
                </div>

                <div className="form-control mx-auto">
                    {/* <input
                        type="submit"
                        value="Register"
                        className={`text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 px-4 py-2 hover:cursor-pointer rounded-full font-bold ${loading && "from-cyan-400 via-cyan-300 to-cyan-200"}`}
                    /> */}

                    <button
                        type="submit"
                        className={`text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 px-4 py-2 hover:cursor-pointer rounded-full font-bold ${loading && "from-cyan-400 via-cyan-300 to-cyan-200"}`}
                    >
                        {loading ? <span className="loading loading-spinner text-xs"></span> : "Register"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;