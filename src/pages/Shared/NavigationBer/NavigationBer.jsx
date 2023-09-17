import { Link } from "react-router-dom";
import logo from '../../../assets/logo truck.png';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";


const NavigationBer = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-red-50 h-24 mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/toys'>All Toys</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <img src={logo} alt="" />
                <a className="btn btn-ghost normal-case text-4xl font-bold">Toy Truck</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">

                    <li className="font-bold"><Link to="/">Home</Link></li>
                    <li className="font-bold"><Link to='/toys'>All Toys</Link></li>
                    {
                        user?.email && <>
                            <li className="font-bold"><Link to='/mytoys'>My Toys</Link></li>
                            <li className="font-bold"><Link to='/addtoys'>Add a Toys</Link></li>
                        </>
                    }
                    <li className="font-bold"><Link to='/blog'>Blog</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar mr-4">
                    {/* <div className="w-8 rounded-full">
                        {user?.photoURL}
                    </div> */}
                    <div className={user?.photoURL || 'w-8 rounded-full'}>

                    </div>
                </div>
                {
                    user?.email ? <>
                        <button className="btn btn-secondary" onClick={handleLogout}>Logout</button>

                    </> :
                        <button className="btn btn-secondary" ><Link to='/login'>login</Link></button>
                }
                {/* <Link to='/login'>login</Link> */}
            </div>
        </div>
    );
};

export default NavigationBer;