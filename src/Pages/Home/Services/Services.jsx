import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div className="my-16">
            <div className="space-y-2 text-center ">
                <h5 className="text-custom-500 font-bold">Service</h5>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <p className="text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-3">
                {
                    services.map(service => <ServiceCard 
                        service={service}
                        key={service._id}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center items-center my-6">
            <button className="btn bg-transparent border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] duration-700 hover:text-white ">More Services</button>
            </div>
        </div>
    );
};

export default Services;