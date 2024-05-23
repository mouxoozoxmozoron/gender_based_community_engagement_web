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
} from "react-router-dom";

import { MdComment } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CgMoreVerticalO } from "react-icons/cg";
import { Text_slicer } from "../../utilis/text_slicer";
import { MdImageNotSupported } from "react-icons/md";
import { base_url } from "../../utilis/apiv1/end_point";



function Group_post() {
return (
<DataConsumer>
    {home_data => (
    <div className="group_posts_page">
        <div className="">
            {home_data && home_data.map((item, index) => (
            <div key={index}>
                {item.group.posts && item.group.posts.map((post, postIndex) => (
                // Card content
                <Card key={postIndex} className="group_posts_card">
                    <Card.Img className="group_post_image" variant="top" src={`${base_url}storage/${post.post_image}`}
                        alt='..' />

                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {Text_slicer(post.description, 100)}
                            <Link to={`/posts/${post.id}`}>
                            Read more
                            </Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <a href="#!" className="link-muted me-2">
                                <AiOutlineLike size={20} color="grey" />
                                {post.likes.length} You
                            </a>
                            <a href="#!" className="link-muted">
                                <MdComment size={20} color="grey" />
                                {post.comments.length}
                            </a>
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


export default Group_post;
