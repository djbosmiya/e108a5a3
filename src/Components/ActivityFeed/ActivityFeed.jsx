import React from 'react';
import CallItem from '../CallItem/CallItem.jsx';
import './ActivityFeed.css';

//retrieving call object and archieved functions
const ActivityFeed = ({ calls, archiveCall, archiveAllCalls }) => {
  //filtering call objects on the basis of archived is false
  const activeCalls = calls.filter(call => !call.is_archived);

  //iterating through all unarchieved call objects and displaying details
  //call to archived function
  return (
      <div class="call-lists-section">
        <div class="call-lists-wrap">
        {activeCalls.length > 0 ? (
            <ul class="call-lists-inner-wrap">
                {activeCalls.map((call,i) => (
                    <CallItem 
                      key={i} 
                      call={call}
                      onArchive={() => archiveCall(call.id)}/>
                ))}             
            </ul>
          ) : (
            <p className='no-active-calls'>No active calls available.</p>
          )}
        </div>
        <button className='archive-button' onClick={archiveAllCalls}>Archive All Calls</button>
      </div>
  );
};

export default ActivityFeed;
