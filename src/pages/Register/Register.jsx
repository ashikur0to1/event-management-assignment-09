import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import toast from "react-hot-toast";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo")
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photo, email, password);

        const passwordPattern = /^(?=.*[!@#$%^&*()_+\[\]:;<>,.?~\\-])\S+$/;


        if(password.length < 6){
            toast.error("Password should be at least 6 characters or longer.");
            return;
        }

        else if(!/[A-Z]/.test(password)){
            toast.error("Password should have at least a capital letter.");
            return;
        }

        else if(!passwordPattern.test(password)){
            toast.error("Password should have at least a special character.");
            return;
        }

        


        // Create User
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            toast.success("User Created Successfully")
            navigate("/");
        })
        .catch(error => {
            console.error(error);
        })
    }


    return (
        <div>
            <h1 className="text-4xl text-center mb-8">Please Register</h1>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account? Please <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;