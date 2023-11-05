import { Link } from "react-router-dom";


const ServicesCard = ({service}) => {

    const {id, name, image, price, description} = service || {}

    return (
        <div className="w-[490px] mb-10 pb-10">
            <h1 className="text-center text-3xl font-medium mb-8">{name}</h1>
            <img className="h-[700px]" src={image} alt="" />
            <h2 className="text-center text-2xl font-normal mt-8 mb-4">Price : {price}</h2>
            <h3 className="text-center">{description}</h3>
            <Link to={`/service/${id}`}><button className="btn btn-neutral flex mx-auto mt-4">Details</button></Link>
        </div>
    );
};

export default ServicesCard;