import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Service = () => {

    const [Service, setService] = useState({})

    const {id} = useParams();

    const Services = useLoaderData();

    useEffect(() => {

        const findService = Services?.find(Service => Service.id == id);

        setService(findService);

    },[id, Services])

    return (
        <div>
            <ServiceCard Service={Service}></ServiceCard>
        </div>
    );
};

export default Service;