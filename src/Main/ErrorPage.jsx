
import { Link } from 'react-router-dom';
import error from '../assets/images/error-img/error.jpg';
const ErrorPage = () => {
    return (
        <div>
            <img className='w-full' src={error} alt="Error" />
            <button className='btn btn-secondary'><Link to='/'>Back to Home Page</Link></button>
        </div>
    );
};

export default ErrorPage;