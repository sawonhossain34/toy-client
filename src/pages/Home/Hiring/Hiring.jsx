import hiring from '../../../assets/images/quality/hiring.jpg';

const Hiring = () => {
    return (
        <div className="card md:card-side bg-slate-200 p-5 shadow-xl my-12">
            <figure><img src={hiring} alt="Album" /></figure>
            <div className="card-body  pl-12">
            <p className='text-2xl'>Enjoy</p>
                <h2 className="card-title text-6xl">Discount !!</h2>
                <p className='text-4xl'>1500 <span className='text-2xl'>%</span> </p>
                <div className="card-actions justify-end">
                    <button className="btn bg-slate-600 text-slate-950">Shop Now</button>
                </div>
            </div>
        </div>
        
    );
};

export default Hiring;