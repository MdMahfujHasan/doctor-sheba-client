import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, setHours, setMinutes, setSeconds } from 'date-fns';
import { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm();
    const [selectedDate, setSelectedDate] = useState(null);

    const doctorNames = [
        "Dr. John Doe",
        "Dr. Jane Smith",
        "Dr. Michael Johnson",
        "Dr. Sarah Williams",
        "Dr. David Brown",
        "Dr. Emily Davis"
    ];

    const today = new Date();
    const minDate = setHours(setMinutes(setSeconds(addDays(today, 0), 0), 0), 0);

    const onSubmit = (data) => {
        const { countryCode, mobile } = data;
        const phoneNumber = `${countryCode}${mobile}`;
        data.mobile = phoneNumber;
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg">
            <div className="mb-4">
                <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', { required: true, maxLength: 120 })}
                    className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.name?.type === 'required' && <span className="text-red-500">Name is required</span>}
                {errors.name?.type === 'maxLength' && <span className="text-red-500">Name should be at most 120 characters</span>}
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', { required: true, maxLength: 60 })}
                    className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.email?.type === 'required' && <span className="text-red-500">Email is required</span>}
                {errors.email?.type === 'maxLength' && <span className="text-red-500">Email should be at most 60 characters</span>}
            </div>
            <div className="flex mb-4">
                <div className="w-1/3 mr-2">
                    <label htmlFor="countryCode" className="block mb-1 text-gray-700">Country Code</label>
                    <select
                        id="countryCode"
                        {...register('countryCode', { required: true })}
                        className={`w-full px-3 py-2 border rounded ${errors.countryCode ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="">Select Country Code</option>
                        <option value="+880">+880 Bangladesh</option>
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
                    {errors.countryCode && <span className="text-red-500">Country Code is required</span>}
                </div>
                <div className="w-2/3 ml-2">
                    <label htmlFor="mobile" className="block mb-1 text-gray-700">Mobile</label>
                    <input
                        type="text"
                        id="mobile"
                        {...register('mobile', { required: true, minLength: 7, maxLength: 15 })}
                        className={`w-full px-3 py-2 border rounded ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.mobile?.type === 'required' && <span className="text-red-500">Mobile is required</span>}
                    {errors.mobile?.type === 'minLength' && <span className="text-red-500">Mobile number should be at least 7 digits</span>}
                    {errors.mobile?.type === 'maxLength' && <span className="text-red-500">Mobile number should be at most 15 digits</span>}
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="doctorName" className="block mb-1 text-gray-700">Doctor Name</label>
                <select
                    id="doctorName"
                    {...register('doctorName', { required: true })}
                    className={`w-full px-3 py-2 border rounded ${errors.doctorName ? 'border-red-500' : 'border-gray-300'}`}
                >
                    <option value="">Select Doctor Name</option>
                    {doctorNames.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>
                {errors.doctorName && <span className="text-red-500">Doctor Name is required</span>}
            </div>
            <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                    <label htmlFor="date" className="block mb-1 text-gray-700">Date</label>
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
                                minDate={minDate}
                                dateFormat="dd/MM/yyyy"
                                className={`w-full px-3 py-2 border rounded ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
                            />
                        )}
                    />
                    {errors.date && <span className="text-red-500">Date is required</span>}
                </div>
                <div className="w-1/2 ml-2">
                    <label htmlFor="time" className="block mb-1 text-gray-700">Time</label>
                    <select
                        id="time"
                        {...register('time', { required: true })}
                        className={`w-full px-3 py-2 border rounded ${errors.time ? 'border-red-500' : 'border-gray-300'}`}
                    >
                        <option value="">Select Time</option>
                        <option value="9am-10am">9am-10am</option>
                        <option value="10am-11am">10am-11am</option>
                        <option value="11am-12pm">11am-12pm</option>
                        <option value="12pm-1pm">12pm-1pm</option>
                        <option value="2pm-3pm">2pm-3pm</option>
                        <option value="3pm-4pm">3pm-4pm</option>
                    </select>
                    {errors.time && <span className="text-red-500">Time is required</span>}
                </div>
            </div>
            <button type="submit" className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600">
                Submit
            </button>
        </form>
    );
};

export default ContactUs;
