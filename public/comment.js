// import { addDays, setHours, setMinutes, setSeconds } from 'date-fns';

// const doctorNames = [
//     "Dr. John Doe",
//     "Dr. Jane Smith",
//     "Dr. Michael Johnson",
//     "Dr. Sarah Williams",
//     "Dr. David Brown",
//     "Dr. Emily Davis"
// ];

//     const today = new Date();
// const minDate = setHours(setMinutes(setSeconds(addDays(today, 0), 0), 0), 0);
//  minDate={minDate}

// ------------------------------------------------
// =-----------------------------------------------

{/* <div className="mb-4">
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
*/}