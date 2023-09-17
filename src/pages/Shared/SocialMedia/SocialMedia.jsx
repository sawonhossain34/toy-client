import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

// import logo from '../../../assets/images/logo.png';
const SocialMedia = () => {
    const {googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
            navigate(from,{replace:true});
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">
                <div>
                <button onClick={handleGoogleSignIn} className="btn btn-circle">
                    <img src="https://i.ibb.co/6P1M6kJ/logo.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;