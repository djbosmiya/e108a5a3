import React from 'react';
import CallItem from '../CallItem/CallItem.jsx';
import './ArchievedFeed.css';

//retrieving call object and unarchieved functions
const ArchievedFeed = ({ calls, unarchiveCall, unarchiveAllCalls }) => {
    //filtering call objects on the basis of archived is true
    const unactiveCalls = calls.filter(call => call.is_archived);
    
    //iterating through all archieved call objects and displaying details
    //call to unarchived function
    return (
      <div class="call-lists-section">
        <div class="call-lists-wrap">
        {unactiveCalls.length > 0 ? (
          <ul class="call-lists-inner-wrap">
              {unactiveCalls.map((call,i) => (
                  <CallItem 
                    key={i} 
                    call={call}
                    onArchive={() => unarchiveCall(call.id)}/>
              ))}
          </ul>
        ) : (
          <p className='no-active-calls'>No archived calls available.</p>
        )}
        </div>
        <button className='unarchive-button' onClick={unarchiveAllCalls}>Unarchive All Calls</button>
      </div>
  )
}

export default ArchievedFeed