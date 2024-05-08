import React from "react";
import { get_cookie } from "../../../utilis/cookies_manager";
import { base_url, data_url } from "../../../utilis/apiv1/end_point";


const fetchData = async (event_id) => {
console.log('ticket provider api has been called', event_id);

const event_booking_url = base_url + data_url.event_tiket;
const token = get_cookie("auth_token");
try {
    const response = await fetch(event_booking_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/pdf', // Specify PDF as the accepted content type
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
            event_id: event_id
        })
    });

    // Check if the response is successful (status code 200)
    if (response.ok) {
        // Convert the response body to Blob
        const pdfBlob = await response.blob();
        // Create a URL for the Blob object
        const pdfUrl = URL.createObjectURL(pdfBlob);
        // Open the PDF URL in a new tab
        window.open(pdfUrl, '_blank');
    } else {
        throw new Error('Failed to fetch PDF');
    }
} catch (error) {
    console.error('Error fetching data:', error.message);
}
};



export default fetchData;
