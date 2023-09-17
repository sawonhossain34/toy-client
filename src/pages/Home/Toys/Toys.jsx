import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";


const Toys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])



    return (
        <div className="mb-8">
            <div className="text-center mb-8 mt-8">
                <h2 className="text-5xl font-bold  text-sky-700 mb-6">All Toys categorys Area</h2>
                <p className="text-2xl">Leading online automotive marketplace in Bangladesh</p>
            </div>
            <div className="">

                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead >
                            <tr>
                                <th>No</th>
                                <th>seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub-Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details Page</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map((toy,index) => <ToyCard
                                key={toy._id}
                                    toy={toy}
                                    index={index}
                                >
                                </ToyCard>)
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default Toys;
