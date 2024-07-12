import React from 'react';
import './CallItem.css';
import { Link } from 'react-router-dom';

//retrieving call object and function 
const CallItem = ({ call, onArchive }) => {
  
  let date = new Date(call.created_at);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formatHours = hours < 10 ? `0${hours}` : hours;

  //setting AM/PM for the time
  let am_pm = 'AM';

  if(hours==0){ 
    hours=12;
  }
  else if(hours>12)
  {
    hours=hours%12;
    am_pm='PM';
  }

  //displaying all details of the call object and
  //calling archive/unarchive function on button click
  return (
      <li className='call-list-item d-flex'>
        <Link to={`/call-detail/${call.id}`}>
        <p>Call from: {call.from}</p>
        <p>Call Id: {call.id}</p>
        <p>Tried to call on {call.to}</p>
        <p>{formatHours}:{formatMinutes} {am_pm}</p>
        </Link>
        <button className='call-list-button' onClick={onArchive}>{call.is_archived ? 'Unarchive' : 'Archive'}</button>
      </li>
  );
};

export default CallItem;
