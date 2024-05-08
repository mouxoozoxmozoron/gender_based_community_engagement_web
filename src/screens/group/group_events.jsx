import React from "react";
import { DataConsumer } from "../../utilis/context";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


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
import { MdPlace } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { BsAlarm } from "react-icons/bs";
import { HiTicket } from "react-icons/hi2";





function Group_events(){
return (
<DataConsumer>
    {home_data => (
    <div className="group_posts_page">
        <div className="">
            {home_data && home_data.map((item, index) => (
            <div key={index}>
                {item.group.events && item.group.events.map((event, postIndex) => (
                // Card content
                <Card key={postIndex} className="group_posts_card">
                    <Card.Img className="group_post_image" variant="top"
                        src={`http://127.0.0.1:8000/storage/${event.image}`} alt='..' />
                    <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>
                            {Text_slicer(event.description, 100)}
                            <Link to={`/posts/${event.id}`}>
                            Read more
                            </Link>
                        </Card.Text>
                    </Card.Body>



                    <Card.Footer>
                        <small className="event_description">
                            <p>
                                <MdPlace color="red" size={40} /> -
                                {event.location}
                            </p>

                            <p>
                                <BsCalendar2Date size={28} color="#318CE7	" />

                                {event.date}
                            </p>

                            <p>
                                <BsAlarm size={28} color="#CB4154	" />


                                {event.time}
                            </p>
                        </small>
                    </Card.Footer>



                    <Card.Footer className="event_description">


                        <small className="text-muted">
                            {/* to={`/posts/${post.id}`} */}
                            <Link to={`e_ticket/${event.id}`} className="link-muted">
                            <HiTicket color="#CB4154" size={30} /> RSVP
                            </Link>

                        </small>
                        <Outlet />

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
export default Group_events;
