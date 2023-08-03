import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const saveUser = { name: result.user.displayName, email: result.user.email, mobile: "", birth: "", height: "", weight: null, gender: "", photo: result.user.photoURL }
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
                            Swal.fire(
                                'Registered',
                                'Your account has been created',
                                'success'
                            )
                            navigate("/");
                        }
                    })
            })
            .catch(error => {
                if (error) {
                    Swal.fire(
                        'Error',
                        error.message,
                        'error'
                    );
                }
            });
    }
    return (
        <p
            onClick={handleGoogleSignIn}
            className="flex justify-center items-center gap-1 border border-slate-400 hover:border-sky-400 rounded-full px-6 py-2 hover:bg-blue-900 font-semibold hover:text-white hover:cursor-pointer mt-4"
        >
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
        </p>
    );
};

export default GoogleSignIn;