import fleet from '../../../assets/images/quality/feet.jpg';
import fual from '../../../assets/images/quality/fual.jpg';
import feet from '../../../assets/images/quality/drive.jpg';
import project from '../../../assets/images/quality/Project.jpg';

const Quality = () => {
    return (
       <div className='text-center space-y-8 my-12'>
        <h2 className=' text-5xl text-cyan-500'>JIM PATTISON LEASE IS YOUR SINGLE SOURCE FOR ALL YOUR FLEET VEHICLE NEEDS</h2>
        <p className=''>With a national presence all across Canada and the United States, our dedicated team of lease and fleet management professionals provide flexible and innovative lease solutions and fleet services to small, medium, and large organizations.</p>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
         <div className="card  bg-base-100 shadow-xl">
            <figure className="">
                <img src={fleet} alt="feet" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fleet Leasing</h2>
                <p>Flexible lease structures that meet your unique fleet requirements.</p>
                
            </div>
        </div>
         <div className="card  bg-base-100 shadow-xl">
            <figure className="">
                <img src={fual} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fuel & Maintenance</h2>
                <p>Innovative tools and programs to manage your fuel and maintenance costs.</p>
                
            </div>
        </div>
         <div className="card  bg-base-100 shadow-xl">
            <figure className="">
                <img src={feet} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Fleet Services</h2>
                <p>Consolidated and easy to access online reporting to analyze your fleet data.</p>
                
            </div>
        </div>
         <div className="card  bg-base-100 shadow-xl">
            <figure className="">
                <img src={project} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Project Rentals</h2>
                <p>Turn key vehicles to support your business rental needs.</p>
                
            </div>
        </div>

       </div>
       </div>
    );
};

export default Quality;