import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login-img.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import SocialMedia from '../Shared/SocialMedia/SocialMedia';

const Login = () => {
const {signIn} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from,{replace:true});
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className=" w-1/2 mr-10">
                    <img className='h-[400px]' src={login} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-center">Login !</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-secondary' type="submit" value="Login" />
                            </div>
                        </form>
                        <p>Do not have an account? <Link className='text-pink-600 font-bold' to='/signup'>sign up</Link> </p>
                        <SocialMedia></SocialMedia>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;