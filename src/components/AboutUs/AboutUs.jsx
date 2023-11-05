import aboutUsPhoto from "../../assets/about-us.png"


const AboutUs = () => {
    return (
        <div className="gap-[60px] flex flex-col md:flex-row">
            <img className="w-full md:w-[738px]" src={aboutUsPhoto} alt="" />
            <div className="w-full md:w-[738px]">
                <p>
                    With a perfect blend of experience and passion, Event Planner is an event management company in Bangladesh. We have emerged as a company with ideas to turn your corporate or personal event into something worth remembering. With the help of our creative team, we provide our services to most types of corporate events including, but not limited to, seminars, conferences, trade shows, cultural events, company or organization milestones, exhibitions, product launches, concerts, company annual meetings, corporate picnics, fashion shows and appreciation events. We will also strive to make your wedding events, birthday events and other personal events unforgettable.<br></br><br></br>

                    Bangladesh, with Dhaka at the heart of it, is a country that has become a wonder for quite a few people with its rapid economic growth in the last 10 years or so. Companies, organizations and various businesses have become the driving force for the economic development of this country. Both corporate and personal event management services in Dhaka, Chittagong, Cox's Bazar and in the whole Bangladesh is becoming more and more common. We at Event Planner believe that it's our responsibility as an event management company to deliver our services to our clients with reliability, dependability and creativity. We want you to remember the events that we get to manage for you. We thrive to mix and match the best styles and themes for your events. With so many events happening in Dhaka and all over Bangladesh, we believe that it's very important that you stand out with your events as our client.<br></br><br></br>

                    An event itself is an opportunity to display your creation positively and inspire people to take positive actions. Event Planner helps you achieve your event's desired objectives and a little bit extra to make it an immersive experience for all the attendees. We start by learning who you are and what your objectives are for the event. This enables us to tailor your event for the best experience of all parties involved.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;