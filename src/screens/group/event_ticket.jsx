import React, { useEffect, useState } from "react";
// import Ticket from "../../services/api_request/group_requests/event_ticket"
import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { get_cookie } from "../../utilis/cookies_manager";
import fetchData from "../../services/api_request/group_requests/event_ticket";
import { OrbitProgress } from "react-loading-indicators";
import { FaFaceSadTear } from "react-icons/fa6";



function Event_ticket({}) {
const { event_id } = useParams();
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const [Ticket, setTicket]=useState(null);


useEffect(() => {
const fetchDataAndSetData = async () => {
try {
setLoading(true);
setError(null);

const data = await fetchData(event_id);

setTicket(data);
setLoading(false);
} 
catch (error) {
setError(error);
setLoading(false);
}
};

fetchDataAndSetData();
}, [event_id]); 

// const handleRetry = () => {
// // Call fetchDataAndSetData again when retry button is clicked
// fetchDataAndSetData();
// };



return (
<div>

    {loading &&

    <div>
        <OrbitProgress color="grey" size="small" textColor="#d0a3a3" />

    </div>}


    {error && (
    <div>
        <p>Error: {error.message}</p>
        <FaFaceSadTear color="red" size={20} />

        {/* <button onClick={handleRetry}>Retry</button> */}
    </div>
    )}

    {/* Display ticket content if available */}
    {/* {Ticket && (
    <div>

        <p>Downloading</p>

    </div>
    )} */}
</div>
);

}

export default Event_ticket;
