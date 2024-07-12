import React from 'react'
import {useParams} from 'react-router-dom';
import ActivityFeedDetail from '../Components/ActivityFeedDetail/ActivityFeedDetail.jsx';
import '../Components/ActivityFeedDetail/ActivityFeedDetail.css';

const CallDetail = ({calls}) => {
    //comparing the id's of the object and 
    //passing the object to Detail Page to display call details
    const {callId} = useParams();
    const call_details = calls.find((e) => e.id === callId);
  
    return (
      <section className="product-detail-section">
        <div className="product-detail-wrapper mt-4">
            <ActivityFeedDetail call_details={call_details}/>
        </div>
      </section>
    )
}

export default CallDetail