

const ServiceCard = ({Service}) => {

    const {id, name, image, price, description} = Service || {}

    return (
        <div>
            <img className="w-[700px] h-[700px] mx-auto" src={image} alt="" />
        </div>
    );
};

export default ServiceCard;