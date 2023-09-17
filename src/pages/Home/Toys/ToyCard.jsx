import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const ToyCard = ({ toy,index }) => {
    const { user } = useContext(AuthContext);
    const { _id,toy_name, price, available_quantity, sub_category } = toy;
    return (
       
            <tr>
                <th>{index+1}</th>
                <td>{user?.displayName}</td>
                <td>{sub_category}</td>
                <td>{toy_name}</td>
                <td>{price}</td>
                <td>{available_quantity}</td>
                <td><Link to={`/toyDetails/${_id}`}><button className="border-spacing-2 btn btn-secondary">View Details<FaArrowRight></FaArrowRight></button></Link></td>
                
            </tr>
    );
};

export default ToyCard;