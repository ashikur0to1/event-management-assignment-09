import { useContext } from "react";
import googleLogo from "../../assets/google-logo.png"
import { AuthContext } from "../../providers/AuthProvider";


const SocialLogin = () => {

    const {googleLogin} = useContext(AuthContext);

    const handleSocialLogin = (socialMediaLogin) =>{
        socialMediaLogin()
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <div className="divider">or</div>
            <div className="flex justify-center">
                <button onClick={() => handleSocialLogin(googleLogin)} className="flex justify-center items-center border px-12 py-2 rounded-full"><img className="w-8 h-8 mr-2" src={googleLogo} alt="" />Continue With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;