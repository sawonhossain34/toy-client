import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";


const ToyDetails = () => {
    const {user} = useContext(AuthContext);
    const toy = useLoaderData();
    const { toy_name, img, description, price, available_quantity, sub_category } = toy;

    return (
        // <div className="card w-96 bg-base-100 shadow-xl">
        //     <figure><img src={img} alt="Shoes" /></figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{toy_name}</h2>
        //         <p>{description}</p>

        //     </div>
        // </div>
        <div className="card lg:card-side bg-orange-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center">{toy_name}</h2>
                <h3><span className="text-yellow-700 font-bold">Name</span>: {user?.displayName}</h3>
                <p><span className="text-yellow-700 font-bold">Email</span> : {user?.email}</p>
                <p><span className="text-yellow-700 font-bold">Sub Category</span> : {sub_category}</p>
                <div className="flex justify-between">
                    <p className="text-yellow-500">price : ${price}</p>
                    <p className="text-yellow-500">Quantity : {available_quantity}</p>
                </div>
                <p><span className="text-yellow-700 font-bold">Description</span> : {description}</p>
            </div>
        </div>
    );
};

export default ToyDetails;