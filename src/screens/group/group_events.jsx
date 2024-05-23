import React from "react";
import { DataConsumer } from "../../utilis/context";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { GoStopwatch } from "react-icons/go";
import { IoTicketOutline } from "react-icons/io5";





import {
Link,
useSearchParams,
useLoaderData,
defer,
Await,
NavLink,
Outlet,
} from "react-router-dom";

import { MdComment } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CgMoreVerticalO } from "react-icons/cg";
import { Text_slicer } from "../../utilis/text_slicer";
import { MdImageNotSupported } from "react-icons/md";
import { base_url } from "../../utilis/apiv1/end_point";


function Group_event() {
return (
<DataConsumer>
    {home_data => (
    <div className="group_posts_page">
        <div className="">
            {home_data && home_data.map((item, index) => (
            <div key={index}>
                {item.group.events && item.group.events.map((event, eventIndex) => (
                // Card content
                <Card key={eventIndex} className="group_posts_card">
                    <Card.Img className="group_post_image" variant="top" src={`${base_url}storage/${event.image}`}
                        alt='..' />
                    <Card.Body>

                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>
                            {Text_slicer(event.description, 100)}
                            <Link to={`/event/${event.id}`}>
                            Read more
                            </Link>
                        </Card.Text>
                    </Card.Body>

                    <Card.Footer className="" >
                        <small className="text-muted event_description">
                            <span>
                                <BsCalendar2DateFill color="grey" size={28} />
                                {event.date}
                            </span>
                            <span>
                                <GoStopwatch size={30} />
                                {event.time}
                            </span>
                            <span>
                                <IoLocationOutline color="red" size={30} />
                                {event.location}
                            </span>
                        </small>
                    </Card.Footer>


                    <Card.Footer>
                        <small className="text-muted event_description">
                            <NavLink to={`e_ticket/${event.id}`}>
                            <IoTicketOutline size={30} /> RSV
                            </NavLink>
                            <Outlet />
                        </small>
                    </Card.Footer>
                </Card>
                ))}
            </div>
            ))}
        </div>
        {home_data && home_data.length === 0 && <div>no data found</div>}
    </div>
    )}
</DataConsumer>
);
}


export default Group_event;
