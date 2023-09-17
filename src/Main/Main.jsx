
import { Outlet } from 'react-router-dom';
import NavigationBer from '../pages/Shared/NavigationBer/NavigationBer';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;