import React, { useEffect, useInsertionEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdPostAdd } from "react-icons/md";
import { MdEventRepeat } from "react-icons/md";
import { MdOutlineSignpost } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoMdMore } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";




import {NavLink, Link, Outlet} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { get_cookie } from "../utilis/cookies_manager";
import Group_home from "../services/api_request/group_requests/home_request";
import { DataProvider } from "../utilis/context";


function Grou_lay_out(){
const user_name=get_cookie('user_name');

const[classname, setClassname] = useState('group_side_bar_profile_mor_cont');
const [showSideBar, setShowSideBar] = useState(false);
const [home_data, set_home_data] =useState(null);


useInsertionEffect(()=>{
Group_home()
.then(data =>{
console.log('home data goes here:',data)
set_home_data(data)
})
}, []);

//side bar menu controller
const handleNavBarClick = () => {
setShowSideBar(!showSideBar);
};

//profile menu classname controller
const handle_onclick = () => {
setClassname(classname === 'group_side_bar_profile_mor_cont' ? 'group_side_bar_profile_mor_cont_visible' :
'group_side_bar_profile_mor_cont');
};

return(

<div>

    <div className="group_header">
        <section className="side_bar_menu_controller" onClick={handleNavBarClick}>
            <IoMenuSharp color="white" size={30} />
        </section>
        <NavLink to={"posts"} className="group_header_nav">Posts</NavLink>
        <NavLink to={"events"} className="group_header_nav">Events</NavLink>


    </div>

    <div className="group_side_bar">



        <div className={`group_side_bar_nav ${showSideBar ? 'show' : '' }`}>

            <div className="group_side_bar_profile">
                <div className="group_side_bar_profile_image">
                    <FiUser color="grey" size={20} />
                </div>
                <div className="group_side_bar_profile_infor">
                    <h6>{user_name}</h6>
                    <p>
                        <VscVerifiedFilled color="green" size={20} />
                    </p>
                </div>
                <section onClick={handle_onclick} className="group_side_bar_profile_more">
                    <IoMdMore size={20} />
                </section>

                <div className={classname}>
                    <ul>

                        {/* group_side_bar_profile_mor_cont */}

                        <li>
                            <NavLink to={"profile"} className="side_nav_link">
                                profile
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to={"password"} className="side_nav_link">
                                change password
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"update_profile"} className="side_nav_link">
                                update profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <ul>
                <li>
                    <NavLink to={'/group'} className={({ isActive })=> (isActive ? "side_nav_link link_activeness" :
                        "side_nav_link")}>
                        <FaHome color="grey" size={20} /> Home
                    </NavLink>

                </li>
                {/* <li>
                    <NavLink className="side_nav_link">
                        <FiUser color="grey" size={20} />
                        Profile
                    </NavLink>
                </li> */}
                <li>
                    <NavLink to={"new_post"} className="side_nav_link">
                        <MdPostAdd color="grey" size={20} /> new post
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"events"} className="side_nav_link">
                        <MdEventRepeat color="grey" size={20} />Events
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"posts"} className="side_nav_link">
                        <MdOutlineSignpost color="grey" size={20} /> Posts
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"my_post"} className="side_nav_link">
                        <MdOutlineSignpost color="grey" size={20} /> your posts
                    </NavLink>
                </li>


                <li>
                    <NavLink className="side_nav_link">
                        <CiLogout color="grey" size={20} /> logout
                    </NavLink>
                </li>
            </ul>

        </div>

        {/* data from database */}

        {home_data && home_data.map((item, index) => (
        <div className="group_side_bar_cont_holder" key={index}>
            <div className="group_side_bar_content">
                <h6>{item.group.name}</h6>

            </div>

            <div className="">
                <Row xs={1} md={4} className="g-4">
                    {/* first card */}
                    {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                    <Card className="content_cards">
                        <Card.Body className="second_card">
                            <Card.Title>
                                <FaUsers size={35} color="#FF9966" /> {""}
                                Members
                            </Card.Title>
                            <Card.Text>
                                {item.group.group_members.length}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    ))}


                    {/* second card */}
                    {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                    <Card className="content_cards">
                        <Card.Body className="second_card">
                            <Card.Title className="card-title">
                                <MdOutlineSignpost color="#DA1884" size={35} />
                                Posts
                            </Card.Title>
                            <Card.Text className="card-text">
                                {item.group.posts.length}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    ))}


                    {/* third card */}
                    {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                    <Card className="content_cards">
                        <Card.Body className="second_card">
                            <Card.Title>
                                <MdEventRepeat color="#006B3C" size={35} />
                                Events
                            </Card.Title>
                            <Card.Text>
                                {item.group.events.length}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    ))}
                    {/* data from database end here */}

                    {!home_data || home_data.length === 0 && (
                    <div>loading..</div>
                    )}

                    {/* fourth card */}
                    {Array.from({ length: 1 }).map((_, idx) => (
                    <Col key={idx}>
                    <Card className="content_cards">
                        <Card.Body className="second_card">
                            <Card.Title>
                                <GrUserAdmin color="#FF9966" size={35} />
                                Admin
                            </Card.Title>
                            <Card.Text>
                                Aron Mussa
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    ))}

                    {/* end of car number four */}

                </Row>
            </div>

            {/* passing context data */}
            <DataProvider value={home_data}>


                <div className="dynamic_group_page">
                    <Outlet />
                </div>
            </DataProvider>
        </div>

        ))}







    </div>

</div>

)
}

export default Grou_lay_out;
