import { useState } from "react";
import useProfile from "../../hooks/useProfile";
import { Controller, useForm } from "react-hook-form";
import DatePicker from 'react-datepicker';
import { startOfDay } from 'date-fns';
import { PiWarningCircleBold } from 'react-icons/pi';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import MissingText from "../../components/MissingText";

const Profile = () => {
    const { user } = useAuth();
    const [userDetails, refetch] = useProfile();
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [hide, setHide] = useState(true);

    const inputClass = "input border border-slate-300 focus:outline-none focus:border-t-2 focus:border-t-cyan-400 focus:border-b-2 focus:border-b-pink-400 focus:border-e-2 focus:border-e-pink-400 focus:border-s-2 focus:border-s-cyan-400 placeholder-slate-300 text-cyan-900";

    const validatePhotoUrl = value => {
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

        const dateOfBirth = data.date;
        const date = new Date(dateOfBirth);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const formattedDateOfBirth = `${day}/${month}/${year}`;

        const formattedHeight = formatHeight(data.feet, data.inches);

        const updateUser = { name: data.name, email: data.email, mobile: data.countryCode + data.mobile, gender: data.gender, birth: formattedDateOfBirth, height: formattedHeight, weight: parseFloat(data.weight), photo: data.photo };

        fetch(`http://localhost:5000/users?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Profile',
                        text: 'Your profile has been updated',
                    });
                }
            })
    }
    return (
        <div className="p-4 flex gap-4">
            <div className="bg-violet-200 h-72 p-4">
                {
                    userDetails.map(user => <div key={user._id}>
                        <img className="avatar w-20 rounded-full" src={user.photo} />
                        <h3>Name: {user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Mobile: {user.mobile || <MissingText>Mobile number is missing</MissingText>}</p>
                        <p>Birth: {user.birth || <MissingText>Date of birth is missing</MissingText>}</p>
                        <p>Gender: {user.gender || <MissingText>Gender is missing</MissingText>}</p>
                        <p>Height: {user.weight ? user.height + " " + "feet" : <MissingText>Height is missing</MissingText>}</p>
                        <p>Weight: {user.weight ? user.weight + " " + "kg" : <MissingText>Weight is missing</MissingText>}</p>
                        <button onClick={() => setHide(!hide)} className="btn btn-accent btn-xs text-white">Edit</button>
                    </div>)
                }
            </div>
            <div className={`bg-gradient-to-b from-cyan-300 to-pink-300 ${hide && "invisible"}`}>
                {
                    userDetails.map(user => <form
                        key={user._id}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6 p-12 w-full rounded"
                    >
                        <div className="form-control mx-auto">
                            <input
                                type="text"
                                placeholder="Full name"
                                className={inputClass}
                                defaultValue={user.name}
                                {...register("name", { required: true, maxLength: 120 })}
                            />
                            {errors.name && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Name is required</small></p>}
                        </div>

                        <div className="form-control mx-auto">
                            <input
                                type="text"
                                className={`${inputClass} text-slate-400`}
                                defaultValue={user.email}
                                readOnly
                                {...register("email", { required: true, maxLength: 120 })}
                            />
                            {errors.name && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>Name is required</small></p>}
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
                                        defaultValue={user.birth}
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
                                defaultValue={user.countryCode}
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
                                defaultValue={user.mobile}
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
                                defaultValue={user.gender}
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
                                defaultValue={user.photo}
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
                                    defaultValue={user.feet}
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
                                    defaultValue={user.inches}
                                />
                                {errors.inches && <p className="flex items-center space-x-1 mt-1 text-red-400 font-semibold"><PiWarningCircleBold /><small>{errors.inches.message}</small></p>}
                            </div>
                        </div>

                        <div className="form-control mx-auto">
                            <input
                                type="number"
                                placeholder="Weight (kg)"
                                defaultValue={user.weight}
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
                            <button
                                type="submit"
                                className="text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 px-4 py-2 hover:cursor-pointer rounded-full font-bold"
                            >
                                {loading ? <span className="loading loading-spinner text-xs"></span> : "Update"}
                            </button>
                        </div>
                    </form>)
                }
            </div>
        </div>
    );
};

export default Profile;