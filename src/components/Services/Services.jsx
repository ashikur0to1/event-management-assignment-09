import ServicesCard from "./ServicesCard";


const Services = ({services}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                services?.map((service, idx) => <ServicesCard key={idx} service={service}></ServicesCard>)
            }
        </div>
    );
};

export default Services;